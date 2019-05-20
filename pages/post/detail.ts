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
    isLike: null,
    focus: false,
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
      showMask: true
    });
    //如果是按钮点击，怎么触发input获取焦点？？
  },
  //失焦
  inputBlur() {
    console.log('结束编辑------------');
    this.setData!({
      showMask: false
    })
  },
  bindImageInput() {
    this.setData!({
      focus: true
    })
  },
  async sendComment(event: any) {
    if (!this.data.commentValue) { return }
    const { user } = await api.getUserProfile()
    if (!user) {
      smartGotoPage({
        url: '/pages/login',
      });
    } else {
      const comment: any = {
        postId,
        text: this.data.commentValue,
        status: EUserStatus.Normal
      }
      const { id } = await api.createComment(comment)
      comment.user = user
      comment.createAt = comment.creatAt = new Date().toISOString()
      console.log(comment.createAt)
      comment.id = id
      const comments = this.data.comments || []
      comments.push(comment)
      console.log('All comments', comments)
      this.setData({
        comments,
        commentValue: '',
      })
      // 移动到评论区
      const query = wx.createSelectorQuery()
      const element = query.select('#comment-' + id)
      console.log('Selected eleemnt', element)
      element.boundingClientRect((rect) => {
        console.log('PageScroll:0', rect.top)
        wx.pageScrollTo({
          // TODO: 找到更好的办法。这个问题搞了2个小时不浪费时间了。
          scrollTop: 1000000,
        })
      })
      query.exec((rects: any) => {
        console.log('Page.ScrollTop', rects[0].top)
        wx.pageScrollTo({
          // TODO: 找到更好的办法
          scrollTop: 1000000,
        })
      })
    }
  },
  //图片预览
  imgPre(event: any) {
    const instance = this as any;
    const thumbnails = instance.data.data.post.thumbnails;
    const imgs = thumbnails.map((item: any) => item = item.url);
    wx.previewImage({
      current: event.target.dataset.src, // 当前显示图片的http链接
      urls: imgs // 需要预览的图片http链接列表
    })
  },

  /*跳转到空间页 */
  findUserDetail() {
    console.log('用户信息--------------', this.data.data.post.user.id);
    const uId = this.data.data.post.user.id
    smartGotoPage({
      url: `/pages/user/detail?userId=${uId}`
    })
  },
  //跳转到话题详情
  findTopicDetail() {
    const instance = this as any;
    const tid = instance.data.data.post.refPost.id;
    console.log('关联的话题id-----------', instance.data.data.post);
    smartGotoPage({
      url: `/pages/post/topic-detail?id=${tid}`
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
        const data = res.data as any;
        console.log('---------detail--data--------', data)
        if (data.post === null) {
          console.log('40404040404040404040404040404')

          wx.redirectTo({ url: '/pages/notfound/notfound' })
          return
        }
        that.setData!({
          data,
          isLike: data.post.isLike
        });
        console.log('接收到的文章详情---', that.data.data);
      }
    });

    postId = id
    const data = await api.getCommentList({ postId, cursor, limit: 10 })

    console.log('评论列表-----------', data.comments)
    that.setData!({
      comments: data.comments
    })

  },

  /* 监听后退事件 */
  onUnload() {
    if (this.data.isPublished) {
      wx.navigateBack({
        delta: 1
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
