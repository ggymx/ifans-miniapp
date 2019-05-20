//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';
import { smartGotoPage } from '../../common/helper';

const app = getApp<IMyApp>()

Page({
  data: {
    user: null,
    recommendList: [],
    //页面正常时
    notErr: true,
    //传入的userId
    userId: null,
    //当前用户
    curUserId: null
  },

  onLoad(options: any) {
    const userId = options.userId;
    console.log('传进来的userId-----------', options.userId);
    this.setData({
      userId
    })
    //获取当前用户的userId
    console.log('当前登录用户的userId--------------------', wx.getStorageSync('userId'));
    this.setData({
      curUserId: wx.getStorageSync('userId')
    })
    const that = this;
    api.request({
      url: '/v1/user/detail',
      data: {
        id: userId
      },
      method: 'GET',
      success(res) {
        const data = res.data as any;

        if (data.post === null) {
        console.log('40404040404040404040404040404')

          wx.redirectTo({ url: '/pages/notfound/notfound' })
        }
        that.setData!({
          user: data.user,
          recommendList: data.posts
        });
      }
    });
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
    smartGotoPage({
      url: '../oldindex'
    });
  }
})
