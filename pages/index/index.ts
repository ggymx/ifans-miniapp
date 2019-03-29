//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api'

import { IHomeTopicListParams,IHomeTopicListResponse} from '../../common/types/http_msg';
import { smartDate } from '../../common/helper';

let getHomeTopicList=async (obj:IHomeTopicListParams):Promise<IHomeTopicListResponse>=>{
  return await api.getHomeTopicList({cursor:0,limit:10});
}


const app = getApp<IMyApp>();

//const navigationBarHeight = (getApp().statusBarHeight + 44) + 'px'

Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    listStatus:"none"
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //跳转到话题页
  bindViewTopic(){
    wx.navigateTo({
        url:'../topic/topic',
        success:function(){
          wx.showToast({title:'正在跳转话题页面！'});
      }
    });
  },
  //跳转到空间页
  bindViewMy(){
    wx.navigateTo({
      url:'../my/my',
      success:function(){
        wx.showToast({title:'正在跳转空间页！'});
      }
     });
  },
  //发布页面
  bindViewIssue(){
    wx.navigateTo({
      url:'../issue/issue',
      success:function(){
        wx.showToast({title:'跳转到发布页！'});
      }
    });
  },
  // bindLinkList(){
  //     console.log("List弹出")
  //     this.data.listStatus=="none"?"flex":"none";
  // },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData!({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse){
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

    getHomeTopicList({cursor:0,limit:10}).then((data)=>{
      // data.posts.forEach((post) => post.createAtStr = smartDate(post.createAt))
    // let creatAt=data.posts.createAt.toLocaleString()
      this.setData!({ data: data,})
     console.log(data)
    }).catch();

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
