//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';
import { smartGotoPage } from '../../common/helper';
import { EUserStatus } from '../../common/types/comment';

const app = getApp<IMyApp>()
let id: number;
const cursor: number = 0;
let postId: number;

Page({
  data: {
    postId: 0,
    topic: null,
    data: null,
    comments: [],
    commentValue: '',
    isCreateAnserPage: false,
    showMask: false,
    isPublished: false,
    isLike:null
  },
  isCreateAnserPage(event: any) {
    this.setData!({
      isCreateAnserPage: event.detail.value
    })
  },
  //编辑评论
  startEdit(event: any) {
    // console.log('编辑评论-----------',event);
    this.setData!({
      commentValue: event.detail.value
    })
  },
  //聚焦
  inputFocus(event: any) {
    console.log('开始编辑-----------');
      this.setData!({
        showMask:true
      });
      //如果是按钮点击，怎么触发input获取焦点？？
  },
  //失焦
  inputBlur(){
    console.log('结束编辑------------');
    this.setData!({
      showMask:false
    })
  },

  sendComment(event: any) {
    console.log('点击发送评论--------------');
    const that = this;
    const token = wx.getStorageSync('token');
    if (!token) {
      const pages = getCurrentPages();
      const curPage = pages[pages.length - 1];
      wx.showToast({ title: '请先登录！' });
      setTimeout(() => {
        if (curPage.route === 'pages/index') {
          smartGotoPage({
            url: './login'
          });
        } else {
          smartGotoPage({
            url: '../login'
          });
        }
      }, 100);
    } else {
      if (that.data.commentValue) {
        api.request({
          url: '/v1/comment/create',
          method: 'POST',
          data: {
            postId,
            text: that.data.commentValue,
            status: EUserStatus.Normal
          },
          success(res) {
            that.setData({
              commentValue: ''
            })
            wx.redirectTo({ url: './detail?id=' + postId })
          }
        });
      }
    }

  },
   //图片预览
   imgPre(event: any) {
    const instance = this as any;
    const thumbnails=instance.data.data.post.thumbnails;
    const imgs=thumbnails.map((item: any)=>item=item.url);
    wx.previewImage({
      current: event.target.dataset.src, // 当前显示图片的http链接
      urls: imgs // 需要预览的图片http链接列表
    })
  },

  /*跳转到空间页 */
  findUserDetail(){
     console.log('用户信息--------------',this.data.data.post.user.id);
     const uId=this.data.data.post.user.id
     smartGotoPage({
       url:`/pages/user/detail?userId=${uId}`
     })
  },
  //跳转到话题详情
  findTopicDetail(){
    const instance=this as any;
    const tid=instance.data.data.post.refPost.id;
    console.log('关联的话题id-----------',instance.data.data.post);
    smartGotoPage({
      url:`/pages/post/topic-detail?id=${tid}`
    })
  },

  /*点赞 */
  async giveLike(event: any) {
    //获取token
    const token = wx.getStorageSync('token');
    if (!token) {
      const pages = getCurrentPages();
      const curPage = pages[pages.length - 1];
      wx.showToast({ title: '请先登录！' });
      setTimeout(() => {
        if (curPage.route === 'pages/index') {
          smartGotoPage({
            url: './login'
          });
        } else {
          smartGotoPage({
            url: '../login'
          });
        }
      }, 100);
    } else {
      const instance = this as any;
      if (!instance.data.isLike) {
        const res = await api.giveLike({
          id: instance.data.data.post.id
        });
        instance.setData!({
          isLike: true
        });
      } else {
        const res = await api.disLike({
          id: instance.data.data.post.id
        });
        instance.setData!({
          isLike: false
        });
      }
    }
  },

  async onLoad(options: any) {
    const that = this;
    const id = options.id || { postId }
    this.setData({
      isPublished: options.isPublished === '1',
    })
    api.request({
      url: '/v1/post/detail',

      method: 'GET',
      data: {
        id
      },
      success(res) {
        const data =res.data as any;
        that.setData!({
          data,
          isLike:data.post.isLike
        });
        console.log('接收到的文章详情---',that.data.data);
      }
    });

    postId = id
    const data = await api.getCommentList({ postId, cursor, limit: 10 })

    console.log('评论列表', data)
    that.setData!({
      comments: data.comments
    })

  },

  /* 监听后退事件 */
  onUnload() {
    if (this.data.isPublished) {
      wx.navigateBack({
        delta: 2
      })
    }
  },

   /*举报等操作弹出框 */
   popBox() {
    const instance = this as any;
    const token = wx.getStorageSync('token');
    if (token) {
      const ownId = wx.getStorageSync('userId');
      const userId = instance.data.data.post.user.id;
      const cId = instance.data.data.post.id;
      if (ownId === userId) {
        wx.showActionSheet({
          itemList: ['删除'],
          success(res) {
            switch (res.tapIndex) {
              case 0:
                wx.showModal({
                  title: '删除投稿',
                  content: '确定删除这则投稿吗？',
                  success(res) {
                    if (res.confirm) {
                      api.request({
                        url: '/v1/post/remove',
                        data: {
                          postId: cId
                        },
                        method: 'POST',
                        success(res) {
                          wx.showToast({
                            title: '删除成功',
                            success() {
                              wx.navigateBack({
                                delta: 1
                              })
                            }
                          });
                        },
                        fail(res) {
                          wx.showToast({ title: '删除成功' });
                        }
                      });
                    }
                  }
                });
                break;
            }
          }
        });
      } else {
        wx.showActionSheet({
          itemList: ['举报'],
          success(res) {
            switch (res.tapIndex) {
              case 0:
                wx.showModal({
                  title: '举报',
                  content: '确定举报这则投稿吗？',
                  success(res) {
                    if (res.confirm) {
                      api.request({
                        url: '/v1/post/abuse-report',
                        data: {
                          postId: cId
                        },
                        method: 'POST',
                        success(res) {
                          const data = res.data as any;
                          data.msg === 'ok'
                            ? wx.showToast({ title: '举报成功' })
                            : '';
                        }
                      });
                    }
                  }
                });
                break;
            }
          }
        });
      }
    } else {
      wx.showToast({ title: '请先登录！' });
      setTimeout(() => {
        smartGotoPage({
          url: '/pages/login'
        });
      }, 100);
    }
  }

  /*转发分享监听事件 */
  // onShareAppMessage(res: any) {
  //   let text = this.data.data!.post.refPost.text;
  //   if (this.data.data!.post.refPost.text.length > 10) {
  //     text = this.data.data!.post.text.substring(0, 10) + '...'
  //   }
  //   return {
  //     title: `#${this.data.topic.post.title}#${text}`,
  //     success(e: any) {
  //       wx.showShareMenu({
  //         withShareTicket: true
  //       })
  //     }
  //   }
  // }
})
