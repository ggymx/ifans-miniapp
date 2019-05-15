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
     //暂时定义的投稿配图字段
     thumbnails: null
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
  inputValue(event: any) {
    console.log('===inputValue event===', event.detail.value)
    this.setData!({
      showMask: !this.data.showMask,
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
   //图片预览
   imgPre(event: any) {
    const instance = this as any;
    const imgs = instance.data.thumbnails.map((item: any) => item = item);
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
        const data =res.data as any;
        that.setData!({
          data,
          thumbnails: data.post.gallery.split(',')
        });
        console.log('接收的thumbnails--------------++++：',that.data.thumbnails);
        if (that.data.thumbnails[0].trim().length === 0) {
          that.setData!({
            thumbnails: null
          })
        }
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
