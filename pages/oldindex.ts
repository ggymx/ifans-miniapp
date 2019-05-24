//index.js
//获取应用实例
import { IMyApp } from '../app'
import api from '../common/api';
import base from './base';
const app = getApp<IMyApp>()
let cursor: number = 0;
Page({
  data: {
    topList: [],
    isSubscribe: false,
    notErr: true
  },
  // 订阅功能
  bindSubscribe() {
    const status = this.data.isSubscribe;
    if (!status) {
      this.setData!({
        isSubscribe: true
      });
      wx.showToast({
        title: '已订阅，将于明早发送',
        icon: 'none'
      })
    } else {
      this.setData!({
        isSubscribe: false
      })
      wx.showToast({ title: '取消订阅', icon: 'none' });
    }
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
        break;
      }
    }
  },
  async onLoad() {
     const res=await base.pagingLoad('post',0) as any;
     this.setData({
       topList:res.posts
     })
     cursor=res.cursor;
  },
  // 加载
  async loadMore() {
    const res=await base.pagingLoad('post',cursor) as any;
    if(this.data.topList!==[]&&res.posts.length!==0){
     this.setData({
       topList:this.data.topList.concat(res.posts)
     })
     console.log('打印topicList',this.data.topList);
     cursor=res.cursor;
    }
  },
  // 下拉刷新功能
  onPullDownRefresh() {
    this.onLoad()
    setTimeout(() => {
      wx.stopPullDownRefresh({});
    }, 200);
  },
  // 浏览到底端功能
  onReachBottom() {
    this.loadMore();
  },
   //删除post
   rPostCard(e:any){
    console.log('测试自定义事件',e);
    const removePost=e.detail;
    let res=this.data.topList.filter((item)=>{
      if(item.id===removePost.id){
        console.log('找到了删除对象-----',item.id);
      }
      return item.id!==removePost.id;
    });
    this.setData({
      topList:res
    })
  }
})
