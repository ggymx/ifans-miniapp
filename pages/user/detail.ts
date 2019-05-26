//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';
import { smartGotoPage } from '../../common/helper';
import base from '../base';

const app = getApp<IMyApp>()

Page({
  data: {
    user: null,
    recommendList: [],
    notErr: true,  //页面正常时
    userId: null,  //传入的userId
    curUserId: null  //当前用户
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
    this.setData!({
      user: res.user,
      recommendList: res.posts
    });
    console.log('测试接收的recommendList----',this.data.recommendList);
    console.log('res------------------',res);
  },
  onPostRemove(e: any) {
    const { postId } = e.detail
    const recommendList = this.data.recommendList
    for (let i = 0; i < recommendList.length; i++) {
      if (recommendList[i].id === postId) {
        recommendList.splice(i, 1)
        this.setData({
          recommendList,
        })
        break
      }
    }
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
  //删除post
  rPostCard(e:any){
    console.log('测试自定义事件',e);
    const removePost=e.detail;
    let res=this.data.recommendList.filter((item)=>{
      if(item.id===removePost.id){
        console.log('找到了删除对象-----',item.id);
      }
      return item.id!==removePost.id;
    });
    this.setData({
      recommendList:res
    })
  }
})
