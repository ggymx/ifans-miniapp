//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';
import { isPostPage, smartGotoPage } from '../../common/helper';
const app = getApp<IMyApp>()
let id: number;
Page({
  data: {
    cursor: 0,
    options: {
      id: ''
    },
    isPreview: true, // 预览状态
    isPublished: false, // 发布成功
    post: null,
    postArr: [],
    title: '',
    isLike: null,//是否显示红心
    likeCount: null  //记录当前点赞数
  },

  createAnswer(event: any) {
    const topic = this.data.post
    smartGotoPage({
      url: '/pages/post/create-answer?topic=' + encodeURIComponent(JSON.stringify(topic))
    });
  },
  userInfo(event: any) {
    smartGotoPage({
      url: '/pages/user/detail'
    });
  },
  topicArea(event: any) {
    smartGotoPage({
      url: '/pages/oldindex'
    });
  },
  //图片预览
  imgPre(event: any) {
    const instance = this as any;
    const thumbnails = instance.data.post.thumbnails;
    const imgs = thumbnails.map((item: any) => item = item.url);
    wx.previewImage({
      current: event.target.dataset.src, // 当前显示图片的http链接
      urls: imgs // 需要预览的图片http链接列表
    })
  },

  /*点赞 */
  async giveLike(event: any) {
    console.log('点赞事件触发------------');
    //获取token
    const token = wx.getStorageSync('token');
    if (!token) {
      const pages = getCurrentPages();
      const curPage = pages[pages.length - 1];
      wx.showToast({ title: '请先登录！' });
      setTimeout(() => {
        smartGotoPage({
          url: '/pages/login'
        });
      }, 100);
    } else {
      const instance = this as any;
      if (!instance.data.isLike) {
        const res = await api.giveLike({
          id: instance.properties.post.id
        });
        instance.setData!({
          isLike: true,
          likeCount: instance.data.likeCount++
        });
        console.log('此时的点赞数-----------加', instance.data.likeCount);
      } else {
        const res = await api.disLike({
          id: instance.data.post.id
        });
        instance.setData!({
          isLike: false,
          likeCount: instance.data.likeCount--
        });
        console.log('此时的点赞数-----------减', instance.data.likeCount);
      }
    }
  },
  /*举报等操作弹出框 */
  popBox() {
    const instance = this as any;
    const token = wx.getStorageSync('token');
    if (token) {
      const ownId = wx.getStorageSync('userId');
      const userId = instance.data.post.user.id;
      const cId = instance.data.post.id;
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
  },

  async loadData(options: any, title: string, icon: any) {
    const that = this as any;
    this.setData({
      isPublished: options.isPublished === '1',
      options: options
    })
    if (!that.data.post) {

      id = options.id;
      const data: any = await api.getPost({ id })
      console.log('----topic-detail--data-----', data)
      if (data.post === null) {
        console.log('40404040404040404040404040404')
        wx.redirectTo({ url: '/pages/notfound/notfound' })
        return
      }
      this.setData!({
        post: data.post,
        isLike: data.post.isLike,
        likeCount: data.post.likeCount
      })
      console.log('接收到的post--------------++++：', that.data.post);
      // console.log('关联的话题详情的gallery-----------', that.data.thumbnails);
      // console.log('关联的话题详情的gallery-----------', that.data.post);
    }
    //根据参与id获取参与的列表
    let cursor = that.data.cursor
    const data = await api.getRefPostList({ id, cursor, limit: 10 })
    if (data.posts.length !== 0) {
      that.setData!({
        postArr: that.data.postArr.concat(data.posts),
        cursor: cursor + 1
      });
      cursor = data.cursor
      wx.hideLoading({});
    } else {
      if (title !== '') {
        wx.hideLoading({});
        wx.showToast({
          icon,
          title,
        })
      }
    }

  },
  //options:获取url参数
  async onLoad(options: any) {
    this.loadData(options, '已经到底了！', 'none')
  },
  /*跳转到空间页 */
  findUserDetail() {
    console.log('话题详请跳转用户页面--------------', this.data.post.user.id);
    const uId = this.data.post.user.id
    smartGotoPage({
      url: `/pages/user/detail?userId=${uId}`
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
  onPostRemove(e: any) {
    const { postId } = e.detail
    const postArr = this.data.postArr
    for (let i = 0; i < postArr.length; i++) {
      if (postArr[i].id === postId) {
        postArr.splice(i, 1)
        this.setData({
          postArr,
        })
        break
      }
    }
  },
  /*转发分享监听事件 */
  onShareAppMessage(res: any) {
    const that = this as any;

    return {
      title: `#${this.data.post.title}#`,
      success(e: any) {

        wx.showShareMenu({
          withShareTicket: true
        })
      }
    }
  },
  //下拉刷新
  onPullDownRefresh() {
    const that = this
    this.loadData(that.data.options, '已刷新', 'success')
  },
  //底部刷新
  onReachBottom() {
    const that = this
    this.loadingAnimation()
    this.loadData(that.data.options, '', 'none')

  },
  //loading动画封装
  loadingAnimation() {
    wx.showLoading({
      title: 'loading...',
    })

    setTimeout(function () {
      wx.hideLoading({

      })
    }, 500)
  }
})
