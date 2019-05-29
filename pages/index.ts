import api from '../common/api';
import { smartGotoPage } from '../common/helper';
import base from './base';
import store from './store';
let startTime,endTime;
Page({
  data: {
    user: null,
    isBrowserNew:null
  },
  async getFormId(e: any) {
    const res = await api.reportUserFormId({ formId: e.detail.formId })
  },
  onLoad(){
    //
  },
  async onShow() {
    const token = wx.getStorageSync('token');
    if (token) {
      const { user } = await api.getUserProfile()
      if (user) {
        this.setData!({
          user
        })
      }
      this.setData({
        isBrowserNew:store.getBrowserNew()
      })
      console.log('全局存储的store的状态',this.data.isBrowserNew);
    }
  },
  onShareAppMessage(opts: Page.IShareAppMessageOption) {
    return {
      title: '轻话题',
      // path:'',
      // imageUrl:'',
    }
  },
  onPullDownRefresh() {
    setTimeout(() => {
      wx.stopPullDownRefresh({
      });
    }, 500);
  },
  //点击'我的足迹'按钮，执行跳转，传递当前的userId
  userFootPrint(options: any) {
    if (this.data.user) {
      //获取用户Id
      const userId = wx.getStorageSync('userId')
      base.link('footPrint', userId);
    } else {
      base.link('login');
    }
  },
  //消息通知
  userNews() {
    if (wx.getStorageSync('token') && this.data.user) {
      base.link('news');
    } else {
      base.link('login');
    }
  },
  Login() {
    if(this.endTime-this.startTime<3000){
    if (this.data.user) {
      const userId = wx.getStorageSync('userId');
      base.link('user', userId);
    }
    else {
      base.link('login');
    }
  }
  },
  manyTopic(event: any) {
      base.link('oldIndex');
  },
  createTopic(event: any) {
      base.link('cTopic');
  },
  touchStart(e:any){
    console.log('触摸开始--------',e.timeStamp);
    this.startTime=e.timeStamp;
  },
  touchEnd(e:any){
    console.log('触摸结束--------',e.timeStamp);
    this.endTime=e.timeStamp;
  },
  //切换小号
  changeAccount(){
    wx.showActionSheet({
      itemList: ['账号列表', '清除数据', '退出登录'],
      success (res) {
        console.log(res.tapIndex)
        if(res.tapIndex===0){
          if(wx.getStorageSync('token')){
            smartGotoPage({
              url:'/pages/list'
            })
          }else{
            smartGotoPage({
              url:'/pages/login'
            });
          }
        }else if(res.tapIndex===1){
          wx.clearStorageSync();
        }else{
          console.log('用户退出登录');
        }
      }
    })
    console.log('切换小号-----------------');
  }
})
