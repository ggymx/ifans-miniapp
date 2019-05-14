//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';
import { isPostPage, smartGotoPage } from '../../common/helper';
const app = getApp<IMyApp>()
let id: number;
let cursor: number = 0;
Page({
  data: {
    isPreview: false, // 预览状态
    isPublished: false, // 发布成功
    post: null,
    postArr: [],
    title: '',
    //暂时定义的投稿配图字段
    thumbnails: null
  },
  createAnswer(event: any) {
    const topic = this.data.post
    smartGotoPage({
      url: './createAnswer?topic=' + encodeURIComponent(JSON.stringify(topic))
    });
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
  //options:获取url参数
  async onLoad(options: any) {
    const that = this;
    if (!that.data.post) {
      id = options.id;
      const data: any = await api.getPost({ id })

      this.setData!({
        post: data.post,
        thumbnails: data.post.gallery.split(',')
      })

      if (that.data.thumbnails[0].trim().length === 0) {
        this.setData!({
          thumbnails: null
        })
      }
      console.log('关联的话题详情的gallery-----------', that.data.thumbnails);
      console.log('关联的话题详情的gallery-----------', that.data.post);
      cursor = 0;
    }
    //根据参与id获取参与的列表

    const data = await api.getRefPostList({ id, cursor, limit: 10 })
    console.log('获取post列表---topic-detail', data)
    if (data.posts.length !== 0) {
      that.setData!({
        postArr: that.data.postArr.concat(data.posts)
      });
      cursor = data.cursor
      wx.hideLoading({});
    } else {
      wx.hideLoading({});
      wx.showToast({
        icon: 'none',
        title: '已经到底了！'
      })
    }

  },

  /*转发分享监听事件 */
  onShareAppMessage(res: any) {
    const that = this

    return {
      title: `#${this.data.post.post.title}#`,
      success(e: any) {

        wx.showShareMenu({
          withShareTicket: true
        })
      }
    }
  },
  //下拉刷新
  onPullDownRefresh() {
    console.log('触发下拉刷新事件');
    const that = this;
    api.request(
      {
        url: '/v1/post/answer-list',
        // url: '/v1/post/list',
        method: 'GET',
        data: {
          id,
          cursor: 0,
          limit: 5
        },
        success(res) {
          //设置数据
          const data = res.data as any
          that.setData!({
            postArr: data.posts
          });
          setTimeout(() => {
            wx.stopPullDownRefresh({});
          }, 200);
          cursor = data.cursor
        }
      }
    )
  },
  //触底加载
  onReachBottom() {
    wx.showLoading({
      title: '加载更多...'
    })
    setTimeout(() => {
      this.onLoad()
    }, 200);
  }
})
