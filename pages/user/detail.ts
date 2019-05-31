//index.js
//获取应用实例
import { IMyApp } from '../../app'
import base from '../base';

const app = getApp<IMyApp>()

Page({
  data: {
    user: null,
    topList: [],
    notErr: true,  //页面正常时
    userId: null,  //传入的userId
    curUserId: null,  //当前用户
    postList:null
  },
  async onLoad(options: any) {
    const userId = options.userId;
    this.setData({
      userId
    })
    //获取当前用户的userId
    this.setData({
      curUserId: wx.getStorageSync('userId')
    });
    const res=await base.pagingLoad('user',0,userId as number) as any;
       //加载前三条话题
       const resPost=await base.pagingLoad('post',0) as any;
       const postList=resPost.posts.filter((item)=>{
          return item.type===1
       }).slice(0,3);

    this.setData!({
      user: res.user,
      topList: res.posts,
     postList
    });
  },
  onPostRemove(e: any) {
    const { postId } = e.detail
    const topList = this.data.topList
    for (let i = 0; i < topList.length; i++) {
      if (topList[i].id === postId) {
        topList.splice(i, 1)
        this.setData({
          topList,
        })
        break
      }
    }
  },
  async onPullDownRefresh(){
    const res=await base.pagingLoad('user',0,this.data.userId as number) as any;
    this.setData!({
      user: res.user,
      topList: res.posts
    });
    setTimeout(() => {
      wx.stopPullDownRefresh({});
    }, 200);
  },
  onShareAppMessage() {
    const that = this;
    const userName = that.data.user!.nickname
    return {
      title: `邀你进入-${userName}的空间`,
      success(e: any) {
        wx.showShareMenu({
          withShareTicket: true
        })
      }
    }
  },
  /*跳转到话题社区 */
  findOldIndex() {
    base.link('oldIndex');
  },
  findTopic(e: any){
    base.link('topic',e.currentTarget.dataset.tid);
  },
  //删除post
  rPostCard(e: any){
    const removePost=e.detail;
    const res =this.data.topList.filter((item)=>{
      return item.id!==removePost.id;
    });
    this.setData({
      topList:res
    })
  }
})
