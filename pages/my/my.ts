//index.js
//获取应用实例
import { IMyApp } from '../../app'


const app = getApp<IMyApp>()

Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    partiList:[],
    userData:null
  },

  onLoad(options:any) {
    let userId=options.userId;
    console.log("接收到的userId："+userId);

    var that=this;
    wx.request({
      url:'https://api-test.ifans.pub/v1/user/detail',
      data:{
        id:userId
      },
      method:'GET',
      success(res){
      console.log("获取用户对象-----------------------");
        console.log(res.data);
        that.setData!({
          userData:res.data
        });
      },
      fail(err){
        console.log("获取用户对象失败------------------------");
        console.log(err.errMsg);
      }
    });

    console.log(this.data.partiList);
  

    if (app.globalData.userInfo) {
      this.setData!({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = (res) => {
        this.setData!({
          userInfo: res,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData!({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo(e: any) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData!({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
