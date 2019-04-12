//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';


const app = getApp<IMyApp>()

Page({
  data: {
    userData: null
  },

  onLoad(options: any) {

    let userId = options.userId;
    var that = this;
    api.request({
      url: '/v1/user/detail',
      data: {
        id: userId
      },
      method: 'GET',
      success(res) {
        console.log("。。。。。。", res.data)
        that.setData!({
          userData: res.data
        });
      },
      fail(err) {

      }
    });
  },

  onShareAppMessage() {
    var that = this;
    let userName = that.data.userData!.user.nickname
    return {
      title: `邀你进入-${userName}的空间`,
      imageUrl: '../../imgs/topicShare.png',
      success(e: any) {
        wx.showShareMenu({
          withShareTicket: true
        })
      },
      fail() {

      }
    }
  },

})
