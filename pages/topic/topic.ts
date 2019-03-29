//index.js
//获取应用实例
import { IMyApp } from '../../app'

//调用后台api
/*导入index??? */
import api from '../../common/api'
import { ITopicDetailParams,ITopicDetailResponse} from '../../common/types/http_msg';


let getTopic=async (obj:ITopicDetailParams):Promise<ITopicDetailResponse>=>{
    return await api.getTopic(obj);
}






const app = getApp<IMyApp>()

Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
 
  //跳转到话题详情页面
  bindViewTopicDetail(){
     wx.navigateTo({
       url:'../topic-detail/topic-detail',
       success:function(){
         wx.showToast({title:'正在跳转到详情页！'});
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
  bindViewParticipate(){
      wx.navigateTo({
        url:'../participate/participate',
        success:function(){
          wx.showToast({title:'跳转到参与话题页！'});
        }
      });
  },
  onLoad() {
    getTopic({id:1}).then((data)=>{
    //  / user=data;
    //  console.log(user);
     /*data.topic.creatAt=data.topic.creatAt.toLocaleDateString();*/
     //日期处理
     let creatAt=data.topic.createAt.toLocaleString()
     //投稿人处理
     this.setData!({data:data,creatAt:creatAt})
     console.log(data)
    }).catch();
    
    

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
