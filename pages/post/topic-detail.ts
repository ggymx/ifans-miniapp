//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';
import { isPostPage, smartGotoPage } from '../../common/helper';
import base from '../base'
const app = getApp<IMyApp>()
let id: number;
Page({
  data: {
    cursor: 0,
    options: {id: ''},
    isPreview: true, // 预览状态
    isPublished: false, // 发布成功
    post: null,
    postArr: [],
    title: '',
    isLike: null,//是否显示红心
    likeCount: 0  //记录当前点赞数
  },
  createAnswer(event: any) {
    const topic = this.data.post
    smartGotoPage({
      url: '/pages/post/create?topic=' + encodeURIComponent(JSON.stringify(topic))
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
    base.imgPre(event,this);
  },
  /*点赞 */
  async giveLike(event: any) {
    base.giveLike('pages',this);
  },
  /*举报等操作弹出框 */
  popBox() {
    base.popBox(this);
  },

  async loadData(options: any, title: string, icon: any) {
    const that = this as any;
    this.setData({
      isPublished: options.isPublished === '1',
      options
    })
    if (!that.data.post) {
      id = options.id;
      const data: any = await api.getPost({ id })
      if (data.post === null) {
        wx.redirectTo({ url: '/pages/notfound/notfound' })
        return;
      }
      this.setData!({
        post: data.post,
        isLike: data.post.isLike,
        likeCount: data.post.likeCount
      });
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
    this.loadData(options, '已经到底了！', 'none');
  },
  /*跳转到空间页 */
  findUser() {
    const uId = this.data.post.user.id
    base.findUser(uId);
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
    setTimeout(() => {
      const that = this
      this.loadData(that.data.options, '已刷新', 'success');
      wx.stopPullDownRefresh({});
    }, 500);
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
    setTimeout(function() {
      wx.hideLoading({})}, 500)
  }
})
