//index.js
//获取应用实例
import { IMyApp } from '../../app'
import { smartGotoPage } from '../../common/helper';
import api from '../../common/api';

const app = getApp<IMyApp>()
let id: number;
let cursor: number = 0;
let postId: number;

Page({
  data: {
    postId: 0,
    topic: null,
    comment: null,
    comments: [],
    commentValue: '',
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
  inputValue: function (event: any) {
    console.log('===inputValue event===', event.detail.value)
    this.setData!({
      commentValue: event.detail.value
    })
  },
  bindComment(event: any) {
    const that = this;
    console.log('=====评论的postID=====', postId)
    console.log('=======评论的text=======', that.data.commentValue)
    const token = wx.getStorageSync("token");
    if (!token) {
      const pages = getCurrentPages();
      const curPage = pages[pages.length - 1];
      wx.showToast({ title: "请先登录！" });
      setTimeout(() => {
        if (curPage.route === "pages/index") {
          smartGotoPage({
            url: "./login"
          });
        } else {
          smartGotoPage({
            url: "../login"
          });
        }
      }, 100);
    } else {
      if (that.data.commentValue) {
        api.request({
          url: '/v1/comment/create',
          method: 'POST',
          data: {
            postId: postId,
            text: that.data.commentValue
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
  // bindViewTopic(event: any) {
  //   const tid = event.currentTarget.dataset.tid;
  //   this.setData!({
  //     postId: tid
  //   })
  //   smartGotoPage({
  //     url: `./topic-detail?tid=${tid}`
  //   });
  // },
  /*options:获取url参数 */
  async onLoad(options: any) {

    // const tId = options.tid;
    console.log('进入detail.ts中的onLoad事件')
    // const cId = options.refPostId;
    console.log('options', options)
    const id = options.id || { postId }
    console.log('=====id====', id)
    const that = this;

    api.request({
      url: '/v1/post/detail',

      method: 'GET',
      data: {
        id
      },
      success(res) {
        //设置数据
        console.table('获取到数据', res.data)
        that.setData!({
          comment: res.data
        });
      }
    });

    postId = id
    const data = await api.getCommentList({ postId, cursor, limit: 10 })

    console.log('评论列表', data)
    that.setData!({
      comments: data.comments
    })
    // api.request({
    //   url: '/v1/comment/list',
    //   method: 'GET',
    //   data: {
    //     postId: id
    //   },
    //   success(res) {
    //     const data = res.data.comments
    //     console.table({ data })
    //   }
    // })

    // const res = await api.getPost({ id })
    // console.table('详情', res)
    // this.setData!({
    //   topic: res.post
    // })



  },

  /*转发分享监听事件 */
  onShareAppMessage(res: any) {
    let text = this.data.comment!.post.text;
    if (this.data.comment!.post.text.length > 10) {
      text = this.data.comment!.post.text.substring(0, 10) + '...'
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
