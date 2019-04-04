//index.js
//获取应用实例
import { IMyApp } from '../../app'

//调用后台api
/*导入index??? */
import api from '../../common/api'
import { ITopicDetailParams, ITopicDetailResponse } from '../../common/types/http_msg';
import { TestApi } from '../../testApi/TestApi';

// let getTopic=async (obj:ITopicDetailParams):Promise<ITopicDetailResponse>=>{
//     return await api.getTopic(obj);
// }



const app = getApp<IMyApp>()

Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    toplicList: [],
    returnInfo:{}
  },
  bindViewHot(){
    wx.navigateTo({
      url:'../hot/hot',
      success(){
        wx.showToast({
          title:'跳转热点页'
        });
      }
    });
  },
  onLoad() {
   
    console.log(this.data.toplicList);

    this.setData!({
      toplicList: TestApi.getTopList(),
    });
    var that=this;
    wx.request({
      url:'https://api-test.ifans.pub/v1/home/list',

      data:{
        cursor:0,
        limit:5
      },

      method:"GET",

      success(res){
        console.log("index获取的数据res：");
        console.log(res.data);
        that.setData!({
          returnInfo:res.data
        });
        /*通过返回的话题列表查询相应的参与话题的对象 */
       
      },
      fail(err){
        console.log("index获取的数据err：");
        console.log(err);
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
