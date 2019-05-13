//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';
import { smartGotoPage } from '../../common/helper';

const app = getApp<IMyApp>()

Page({
  data: {
    userData: null,
    recommendList: []
  },

  onLoad(options: any) {
    const userId = options.userId;
    console.log('传进来的userId-----------',options.userId);
    const that = this;
    api.request({
      url: '/v1/user/detail',
      data: {
        id: userId
      },
      method: 'GET',
      success(res) {
        const data=res.data as any;
        that.setData!({
          userData: data.user,
          recommendList:data.posts
        });
      }
    });
  },

  onShareAppMessage() {
    const that = this;
    const userName = that.data.userData!.user.nickname
    return {
      title: `邀你进入-${userName}的空间`,
      success(e: any) {
        wx.showShareMenu({
          withShareTicket: true
        })
      }
    }
  },

  bindViewIndex(){
    smartGotoPage({
      url:'../index'
    });
  },
  test(){
    console.log('冒泡触发---------');
  }
})
