import { IMyApp } from '../app'
import api from '../common/api';
import { smartGotoPage } from '../common/helper';
const app = getApp<IMyApp>()
let cursor: number = 0;

Page({
  data: {
    isLoginStatus: false,
    data: null,
  },

  async onShow() {
    console.log('----index onload----')
    const token = wx.getStorageSync('token');
    if (token) {
      console.log(this.data.isLoginStatus)
      const userId = wx.getStorageSync('userId');
      const data = await api.getUser({ id: userId })
      console.log({ data })
      this.setData!({
        isLoginStatus: true,
        data: data
      })

    }
  },
  //点击'我的足迹'按钮，执行跳转，传递当前的userId
  userFootPrint(options: any) {
    const token = wx.getStorageSync('token');
    if (token) {
       //获取用户Id
       this.setData!({
        isLoginStatus: true
      })
      const userId = wx.getStorageSync('userId')
      console.log({ userId })

      wx.navigateTo({
        url: `./user/footPrint?userId=${userId}`
      })
    } else {
      wx.showToast({ title: '请先登录！' });
      setTimeout(() => {
        smartGotoPage({
          url: './login'
        });
      }, 100)
    }

  },
  Login() {
    const token = wx.getStorageSync('token');
    if (token) {
      //获取用户Id
      this.setData!({
        isLoginStatus: true
      })
      const userId = wx.getStorageSync('userId');
      setTimeout(() => {
        smartGotoPage({
          url: './user/detail?userId=' + userId
        });
      }, 100)
    }
    else {
      wx.showToast({ title: '请先登录！' });
      setTimeout(() => {
        smartGotoPage({
          url: './login'
        });
      }, 100)
    }
  },
  manyTopic(event: any) {
    wx.navigateTo({
      url: './oldindex'
    })
  },
  createTopic(event: any) {
    console.log('你好？')
    wx.navigateTo({
      url: './post/create'
    })
  }
})
