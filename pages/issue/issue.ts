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
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    topicText:"快点发布话题讨论吧",
    richOldLocal:"0px",
    richNewLocal:"100px",
    temp:"0px"
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindViewTopicDetail(){
    wx.navigateTo({
      url:'../topic-detail/topic-detail',
      success:function(){
        wx.showToast({title:'跳转到话题详情页！'});
      }
    });
  },
  bindViewIndex(){
    wx.navigateTo({
      url:'../index/index',
      success:function(){
        wx.showToast({title:'跳转到首页！'});
      }
    });
  },
  /*input和文本显示绑定 */
  bindKeyInput(e:any){
    if(e.detail.value){
      this.setData!({
        topicText:e.detail.value
      });
    }else{
      this.setData!({
        topicText:"快点发布话题讨论吧"
      })
    }
  },
  /*设置下方表情框上移动画 */
  setMoveUp(e:any){
    console.log(e.detail);
    this.setData!({
      temp:this.data.richNewLocal
    });
  },
  setMoveDown(){
    this.setData!({
       temp:this.data.richOldLocal
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
     
    /*初始化富文本的位置*/
    let richLocation=0;
    wx.getSystemInfo({
      success(res){
        //screenHeight获取手机屏幕的高度，screenHeight-64-200-41-30
        richLocation=res.screenHeight-335;
      }
    })
    console.log(richLocation);
    this.setData!({
      richOldLocal:richLocation+"px",
      temp:richLocation+"px"
    })
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
