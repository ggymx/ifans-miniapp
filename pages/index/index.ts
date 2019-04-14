//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';


const app = getApp<IMyApp>()
let cursor:number=0;

Page({
  data: {
    topList:[],
    isSubscribe:false,
    isErr:false
  },
  
  bindSubscribe(){
    let status=this.data.isSubscribe;
    if(!status){
      this.setData!({
        isSubscribe:true
      });
      wx.showToast({
        title:'已订阅，将于明早发送',
        icon: 'none'
      })
    }else{
      this.setData!({
        isSubscribe:false
      })
      wx.showToast({title:'取消订阅',icon:'none'});
    }
  
  },
  //测试订阅功能
  onsubscribe(res:any){
  
  },

  onLoad() {
    var that=this;
    wx.showLoading({
      title:'请稍候'
    });
    
    api.request({
      url:'/v1/post/home-list',

      data:{
        cursor:cursor,
        limit:10
      },

      method:"GET",

      success(res){
        if(res.data.posts.length==0){
          setTimeout(()=>{
            wx.showToast({
              icon:'none',
              title:'已经到底了。。。'
            });
          },200)
         
        }else{
          that.setData!({
            topList:that.data.topList.concat(res.data.posts)
          });
            //指针后移
         cursor=res.data.cursor;
        }

      },
      fail(err){
        wx.hideLoading({});
        setTimeout(()=>{
          that.setData!({
            isErr:true
          });
        },300)
      }
    });
  wx.hideLoading({});
  },

  onPullDownRefresh(){
    var that=this;
    api.request({
      url:'/v1/post/home-list',
      data:{
        cursor:0,
        limit:10
      },
      method:'GET',
      success(res){
      
        that.setData!({
          topList:res.data.posts
        });
        setTimeout(()=>{
          wx.stopPullDownRefresh({});
        },500);
        cursor=res.data.cursor;
      
      }
    });
  },
  onReachBottom(){
    var that=this;
    wx.showLoading({
      title:'加载更多.'
    });
    
    setTimeout(()=>{
      //重新加载
      wx.hideLoading({});
      that.onLoad();
    },500)
  }
})
