//index.js
//获取应用实例
import { IMyApp } from '../../app'

const app = getApp<IMyApp>()
let loginCode: string
Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    returnInfo:null,
    statusText:'授权登录'
  },
  /*授权登录 */
  onGotUserInfo(e: any) {
    /*点击确认按钮 */
    console.log("点击了确认按钮", e);
    /*当拿到用户信息时*/
    if (e.detail.userInfo) {
     var that=this;
    /*这里不需要用token判断 */
          wx.request({

            url:'https://api-test.ifans.pub/v1/auth/login',

            data:{
              code:loginCode,
              encryptedData: e.detail.encryptedData,
              iv: e.detail.iv,
              rawData: e.detail.rawData,
              signature: e.detail.signature,
            },

            header: {
              'content-type': 'application/json'
            },

            method:'POST',

            success(res){
              console.log("后端成功拿到用户信息后的返回的数据",res.data);
              console.log(res.data.token);
              that.setData!({
                returnInfo:res.data,
                statusText:'已登录'
              });
              //往缓存中添加token（异步）
              wx.setStorage({
                key:'token',
                data:res.data.token,
                success(){
                  console.log("存入token成功");
                },
                fail(){
                  console.log("缓存失败！");
                }
              });
              //往缓存中添加当前用户的id
              wx.setStorage({
                key:'userId',
                data:res.data.user.id,
                success(){
                  console.log("存入用户id成功：",res.data.user.id);
                }
              });
            },
            fail(res){
              console.log("login获取的数据err:")
              console.log(res.errMsg);
            }

          });
      wx.showLoading({
        title:'加载中'
      });
      setTimeout(()=>{
        wx.hideLoading({
         success(){
           //如果缓存的有话题，则应直接跳转到参与话题页面
           let topic=wx.getStorageSync('topic');
           if(!topic){
           wx.navigateTo({
             url:'../index/index'
           });
         }else{
           wx.navigateTo({
             url:'../participate/participate',
           })
         }
        }
        });
      },2000);
      /*发起http请求-插入数据 */

    } else {
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  },
  onLoad() {
    /*获取登录凭证*/
    wx.login({
      success(res) {
        /*wx.login获取code-微信登录的标识 */
        console.log('on load: wx.login res', res)
        loginCode = res.code
      }
    })

    if (app.globalData.userInfo) {
      console.log('has app.globalData.userInfo', app.globalData.userInfo)
      this.setData!({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      console.log('this.data.canIUse', this.data.canIUse)
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = (res) => {
        this.setData!({
          userInfo: res,
          hasUserInfo: true
        })
      }
    } else {
      console.log('no open-type=getUserInfo')
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          console.log('getUserInfo res', res)
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
    console.log('====this.getUserInfo', e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData!({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
