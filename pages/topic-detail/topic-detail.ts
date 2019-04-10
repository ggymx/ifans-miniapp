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
    topic: {},
    comment:{}
  },
  bindViewParti(event:any){
    var tid=event.currentTarget.dataset.tid;
    wx.navigateTo({
      url:'../participate/participate?tid='+tid,
      success:function(){
        wx.showToast({
          title:'发布话题'
        });
      }
    });
  },

  /*options:获取url参数 */
  onLoad(options:any) {
    let id=options.tid;
    console.log("话题的id："+id);
    var that=this;
    wx.request({
      url:'https://api-test.ifans.pub/v1/post/detail',
      method:'GET',
      data:{
        id:id
      },
      success(res){
        console.log("接受到的话题详情-------------------：")
        console.log(res.data);
        //设置数据
        that.setData!({
          topic:res.data
        }); 
        wx.request(
          {
            url:'https://api-test.ifans.pub/v1/post/list',
    
            method:'GET',
    
            data:{
              id:id
            },
            success(res){
              console.log("接受到的参与列表-------------------：")
              console.log(res.data);
              //设置数据
              that.setData!({
                // topic:res.data
                comment:res.data
              });
            },  
            fail(err){
              console.log("打印错误信息");
              console.log(err.errMsg);
            }
          }
        )   

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

  /*转发分享监听事件 */
  onShareAppMessage(res:any){
    var that=this
    console.log("激活转发事件：",res)
      return{
        title:`#${this.data.topic.post.title}#`,
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

  getUserInfo(e: any) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData!({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
