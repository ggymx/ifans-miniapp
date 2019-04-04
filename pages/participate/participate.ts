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
    toplic: {},
    comment: {},
    pushText:''
  },
  /*textarea输入时触发该函数-微信框架无双向绑定 */
  setPushText(event:any){
    wx.showToast({title:'触发输入'});
    this.setData!({
      pushText:event.detail.value
    });
  },
  test(){
    console.log("激活聚焦事件！");
  },
  titleParti(event:any){
    console.log("测试："+this.data.pushText);
      if(this.data.pushText!=''){
      wx.showToast({title:'发表成功！'});
      wx.navigateTo({
        url:'../index/index',
        success:function(){

        }
      });
    }else{
      wx.showToast({title:'未发表任何内容！'});
    }
  },

  onLoad() {
    console.log(this.data.toplicList);
    this.setData!({
      toplicList: TestApi.getTopList(),
      toplic: TestApi.getTopic(3)
    });
    // getTopic({id:1}).then((data)=>{

    //  let creatAt=data.topic.createAt.toLocaleString()

    //  this.setData!({data:data,creatAt:creatAt})
    //  console.log(data)
    // }).catch();

    

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
