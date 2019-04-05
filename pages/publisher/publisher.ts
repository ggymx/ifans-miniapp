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
    topic:null,
    comment: null
  },
  bindViewParti(){
    wx.navigateTo({
      url:'../participate/participate',
      success:function(){
        wx.showToast({
          title:'发布话题'
        });
      }
    });
  },
  /*options:获取url参数 */
  onLoad(options:any) {
    let tId=options.tid;
    let cId=options.cid;
     
    var that=this;
    //获取话题详情
    wx.request({

      url:'https://api-test.ifans.pub/v1/post/detail',

      method:'GET',

      data:{
        id:tId
      },

      success(res){
        console.log("接受到的话题详情-------------------：")
        console.log(res.data);
        //设置数据
        that.setData!({
          topic:res.data
        }); 

      },  
      fail(){

      }
    });

    //获取投稿详情
    wx.request({

      url:'https://api-test.ifans.pub/v1/post/detail',

      method:'GET',

      data:{
        id:cId
      },

      success(res){
        console.log("接受到的投稿详情-------------------：")
        console.log(res.data);
        //设置数据
        that.setData!({
          comment:res.data
        }); 

      },  
      fail(){

      }
    });


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
