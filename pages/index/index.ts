//index.js
//获取应用实例
import { IMyApp } from '../../app'


const app = getApp<IMyApp>()
let cursor:number=0;

Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    returnInfo:null,
    isSubscribe:false,
    isErr:false
  },
  
  bindSubscribe(){
    let status=this.data.isSubscribe;
    // console.log("当前订阅状态："+this.data.isSubscribe);
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
    // if(res.detail.errMsg="subscribeMessage:ok"){
     
    // }
    // console.log("订阅res：",res)
  },

  onLoad() {
   
    var that=this;
    console.log("当前的cursor："+cursor);
    wx.showLoading({
      title:'请稍候'
    });

    wx.request({
      url:'https://api-test.ifans.pub/v1/home/list',

      data:{
        cursor:cursor,
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
        //指针后移
        cursor=res.data.cursor;
        wx.hideLoading({});

      },
      fail(err){
        console.log("index获取的数据err：");
        console.log(err);
        wx.hideLoading({});
        setTimeout(()=>{
          that.setData!({
            isErr:true
          });
        },1000)
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
  },
  onPullDownRefresh(){
    console.log("下拉刷新。。。");
    var that=this;
    wx.request({
      url:'https://api-test.ifans.pub/v1/home/list',
      data:{
        cursor:0,
        limit:5
      },
      method:'GET',
      success(res){
        console.log("上拉刷新成功:",res.data);
        that.setData!({
          returnInfo:res.data
        });
        setTimeout(()=>{
          wx.stopPullDownRefresh({});
        },500);
        cursor=res.data.cursor;
        console.log("当前的cursor：",cursor);
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
      that.onLoad();
    },1000)
   
  }
})
