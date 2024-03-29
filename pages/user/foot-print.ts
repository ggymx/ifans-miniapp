//index.js
//获取应用实例
import { IMyApp } from '../../app';
import api from '../../common/api';
import { smartGotoPage } from '../../common/helper';
import base from '../base';
const app = getApp<IMyApp>()
let cursor: number = 0;
Page({
  data: {
    pages:'foot',
    topic: null,
    footPrintList: [],
    title: '',
    userId: null,
    //当页面正常时
    notErr: true,
  },

  async onLoad(options: any) {
    const res=await base.pagingLoad('footPrint',0) as any;
    this.setData({
      footPrintList:res.posts
    })
    cursor=res.cursor;
  },
    // 加载
    async loadMore() {
      const res=await base.pagingLoad('footPrint',cursor) as any;
      if(this.data.footPrintList!==[]&&res.posts.length!==0){
       this.setData({
        footPrintList:this.data.footPrintList.concat(res.posts)
       })
       cursor=res.cursor;
      }
    },
  findOldIndex(){
    base.link('oldIndex');
  },
  onPullDownRefresh(){
    this.onLoad();
    setTimeout(() => {
      wx.stopPullDownRefresh({});
    }, 200);
  },
  onReachBottom(){
    this.loadMore();
  },
  onClick(e: any) {
    const item = e.currentTarget.dataset.item;
    item.type===1?base.link('topic',item.id):base.link('post',item.id);
  }
})
