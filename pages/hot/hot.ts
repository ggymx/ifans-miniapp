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
    subText:'搜索订阅号',
    subImg:'../../imgs/jia.png'
  },
 /*订阅 */
 subscribe(){
  console.log("测试");
  this.setData!({
    subText: '已订阅',
    subImg:'../../imgs/gou.png'
  });
   wx.showModal({
     title:'订阅方法',
     content:'搜索并关注轻话题公众号，通过\n【点击订阅轻话题每日热点】完成订阅\n\n明日起将收到公众号提醒',
     showCancel:false,
     confirmText:'确认复制',
     confirmColor:'#4D7193',
     success(){
      //成功时的回调函数
     
     },
     fail(){
      //失败时的回调函数
     }
   })
},
shareCard(){
  console.log("测试");
  wx.showToast({title:"测试"}) 
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
  /**转发分享监听事件 */
  onShareAppMessage(res:any) {
    if (res.from === 'button') {
      wx.showShareMenu({
        withShareTicket:true,
        success(shareTickets){
        console.log(shareTickets);
        //  var test=JSON.stringify(shareTickets);
        //  wx.showToast({title:test});
        }
      })
    }
    return {
      // title: '自定义转发标题',
      // path: '/page/user?id=123'
      // imageUrl:'../../imgs/topic.png'
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
