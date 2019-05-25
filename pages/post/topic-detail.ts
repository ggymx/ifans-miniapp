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
    base.link('cPost',0,encodeURIComponent(JSON.stringify(topic)));
  },
  userInfo(event: any) {
   base.link('user');
  },
  topicArea(event: any) {
    base.link('oldIndex');
  },
  //图片预览
  imgPre(event: any) {
    base.imgPre(event,this);
  },
  /*点赞 */
  async giveLike(event: any) {
    base.giveLike(this);
  },
  /*举报等操作弹出框 */
  popBox() {
    const res=(this as any).data.post;
    if(wx.getStorageSync('token')){
      if(wx.getStorageSync('userId')===res.userId){
       base.messageBox(res.id,'/v1/post/remove','post','delete');
      }else{
        base.messageBox(res.id,'/v1/post/abuse-report','post');
      }
    }
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
    api.getUserInfo()
  },
  /*跳转到空间页 */
  findUser() {
    const uId = this.data.post.user.id
    base.link('user',uId);
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
  onSharePicReady(e: any) {
    this.sharePic = e.detail.picPath
    this.setData({
      sharePic: e.detail.picPath
    })
  },
  /*转发分享监听事件 */
  onShareAppMessage(res: any) {
    const post = this.data.post
    let title = `${post.user.nickname} 发布了一个话题，快来一起讨论吧`
    if(api.user){
      title = `[${api.user.nickname}@了你] 邀请你一起参与讨论`
    }
    return {
      title,
      imageUrl: this.data.sharePic,
      path: `/pages/post/topic-detail?id=${this.data.post.id}`,
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
