//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';


const app = getApp<IMyApp>()

Page({
  data: {
    partiList:[],
    userData:null,
    sharCard:false
  },

  onLoad(options:any) {

  //获取场景值，根据场景值切换导航栏的状态
  let launchPara=wx.getLaunchOptionsSync();
  if(launchPara.scene==1007){
    this.setData!({
      sharCard:true
    });
  }
    let userId=options.userId;
    var that=this;
    api.request({
      url:'/v1/user/detail',
      data:{
        id:userId
      },
      method:'GET',
      success(res){
  
        that.setData!({
          userData:res.data
        });
      },
      fail(err){
       
      }
    });

  },

onShareAppMessage(){
  var that=this;
  let userName=that.data.userData!.user.nickname
  return{
        title:`邀你进入-${userName}的空间`,
        imageUrl:'../../imgs/topicShare.png',
        success(e:any){
        wx.showShareMenu({
          withShareTicket:true
        })
        },
        fail(){

        }
  }
},

})
