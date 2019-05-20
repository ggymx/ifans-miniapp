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
  onShareAppMessage(opts: Page.IShareAppMessageOption) {
    return {
      title: '轻话题',
      // path:'',
      // imageUrl:'',
    }
  },
  onPullDownRefresh(){
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
      wx.navigateTo({
        url: `./user/foot-print?userId=${userId}`
      })
    } else {
      smartGotoPage({
        url: './login'
      });
    }
  },

  //消息通知
  userNews(){
    if (wx.getStorageSync('token')&&this.data.user) {
      const userId = wx.getStorageSync('userId');
      smartGotoPage({
        url: '/pages/user/news'
      });
    }else{
      setTimeout(() => {
        wx.showToast({
          title:'请先登录',
          icon:'none'
        });
      }, 300);
      smartGotoPage({
        url:'/pages/login'
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
