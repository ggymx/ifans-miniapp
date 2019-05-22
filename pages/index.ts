import api from '../common/api';
import { smartGotoPage } from '../common/helper';
import base from './base';
Page({
  data: {
    user: null
  },
  getFormId(e: any) {
    // log out formId
    console.log(e.detail.formId);
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
      base.link('footPrint',userId);
    } else {
      base.link('login');
    }
  },
  //消息通知
  userNews() {
    if (wx.getStorageSync('token') && this.data.user) {
     base.link('news');
    } else {
      setTimeout(() => {
        wx.showToast({
          title: '请先登录',
          icon: 'none'
        });
      }, 300);
     base.link('login');
    }
  },
  Login() {
    if (this.data.user) {
      const userId = wx.getStorageSync('userId');
      base.link('user',userId);
    }
    else {
      base.link('login');
    }
  },
  manyTopic(event: any) {
    wx.navigateTo({
      url: './oldindex'
    })
  },
  createTopic(event: any) {
    wx.navigateTo({
      url: './post/create'
    })
  }
})
