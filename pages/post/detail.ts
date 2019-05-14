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
    isCreateAnserPage: false
  },
  isCreateAnserPage(event: any) {
    this.setData!({
      isCreateAnserPage: event.detail.value
    })
  },
  commentEditor(event: any) {
    this.setData!({

    });
  },
  commentValue(event: any) {
    this.setData!({
      commentValue: event.detail.value
    })

  },
  inputValue (event: any) {
    console.log('===inputValue event===', event.detail.value)
    this.setData!({
      commentValue: event.detail.value
    })
  },
  bindComment(event: any) {
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
      if (!instance.properties.isLike) {
        const res = await api.giveLike({
          id: instance.properties.post.id
        });
        instance.setData!({
          isLike: true
        });
      } else {
        const res = await api.disLike({
          id: instance.properties.post.id
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

    api.request({
      url: '/v1/post/detail',

      method: 'GET',
      data: {
        id
      },
      success(res) {
        that.setData!({
          data: res.data
        });
        console.log('接收到的话题详情---',that.data.data);
      }
    });

    postId = id
    const data = await api.getCommentList({ postId, cursor, limit: 10 })

    console.log('评论列表', data)
    that.setData!({
      comments: data.comments
    })

  },

  /*转发分享监听事件 */
  onShareAppMessage(res: any) {
    let text = this.data.data!.post.text;
    if (this.data.data!.post.text.length > 10) {
      text = this.data.data!.post.text.substring(0, 10) + '...'
    }
    return {
      title: `#${this.data.topic.post.title}#${text}`,
      success(e: any) {
        wx.showShareMenu({
          withShareTicket: true
        })
      }
    }
  }
})
