import api from '../common/api';
import { smartGotoPage } from '../common/helper';

Page({
  data: {
    user: null
  },

  async onShow() {
    const token = wx.getStorageSync('token');
    if (token) {
      const {user} = await api.getUserProfile()
      if(user) {
        this.setData!({
          user
        })
      }
    }
  },
  //点击'我的足迹'按钮，执行跳转，传递当前的userId
  userFootPrint(options: any) {
    if (this.data.user) {
      //获取用户Id
      const userId = wx.getStorageSync('userId')
      wx.navigateTo({
        url: `./user/footPrint?userId=${userId}`
      })
    } else {
      smartGotoPage({
        url: './login'
      });
    }
  },

  //消息通知
  userNews(){
    if (this.data.user) {
      const userId = wx.getStorageSync('userId');
      smartGotoPage({
        url: './user/detail?userId=' + userId
      });
    } else {
      wx.navigateTo({
        url: `./user/news`
      })
    }
  },
  Login() {
    if (this.data.user) {
      const userId = wx.getStorageSync('userId');
      smartGotoPage({
        url: './user/detail?userId=' + userId
      });
    }
    else {
      smartGotoPage({
        url: './login'
      });
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
