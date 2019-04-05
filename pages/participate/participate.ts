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
    topic:null,
    pushText:null,
    refPostId:null
  },
  /*textarea输入时触发该函数-微信框架无双向绑定 */
  textAreaInput(event:any){
    this.setData!({
      pushText:event.detail.value
    })
    // console.log('input事件被触发：'+this.data.pushText);
    // wx.showToast({title:'input事件被触发'})
  },
  
  tapConfirm(event:any){
    console.log('点击完成被触发');
    wx.showToast({title:'点击完成被触发'});
  },

  /*发布话题 */
  titleParti(event:any){
    var that=this;
      if(!this.data.pushText){
        wx.showToast({
          title:'内容不能为空！'
        });
      }else{
        // wx.showToast({
        //   title:'发表成功！'
        // });
        wx.showLoading({
          title:'发布中...',
          success(){

          }
        });
        wx.request({
          url:'https://api-test.ifans.pub/v1/post/create',
          data:{
            text:that.data.pushText,
            type:2,
            userid:1,
            refPostId:12
          },
          method:'POST',
          success(res){
            console.log("参与话题成功！");
            wx.hideLoading({
              success(){
                wx.navigateTo({
                  url:'../topic-detail/topic-detail'
                });
              }
            });
  
          },
          fail(){

          }
        });
      }
  },

  onLoad(options:any) {
    console.log('触发load事件');
      let tid=options.tid;
      this.data.refPostId=options.tid;
      console.log(`传过来的tid：${tid}，存储的id${this.data.refPostId}`);
      var that=this;
      wx.request({
        url:'https://api-test.ifans.pub/v1/post/detail',
        data:{
          id:tid
        },
        method:'GET',
        success(res){
          console.log("参与话题页----------获取res");
          console.log(res.data);
          that.setData!({
            topic:res.data
          });
        },
        fail(err){
          console.log("打印错误信息:"+err.errMsg);
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
