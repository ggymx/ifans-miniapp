//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';

const app = getApp<IMyApp>()
let loginCode: string
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    returnInfo:null,
    statusText:'授权登录'
  },
  /*授权登录 */
  onGotUserInfo(e: any) {
    /*点击确认按钮 */
    /*当拿到用户信息时*/
    if (e.detail.userInfo) {
     var that=this;
    /*这里不需要用token判断 */
          api.request({

            url:'/v1/auth/login',

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
            
              that.setData!({
                returnInfo:res.data,
                statusText:'已登录'
              });
              //往缓存中添加token（异步）
              wx.setStorage({
                key:'token',
                data:res.data.token,
                success(){
                 
                },
                fail(){
                
                }
              });
              //往缓存中添加当前用户的id
              wx.setStorage({
                key:'userId',
                data:res.data.user.id,
                success(){
                
                }
              });
            },
            fail(res){
           
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
           wx.redirectTo({
             url:'../index/index'
           });
           //当从登录页面跳转到首页时，重新刷新数据
           wx.setStorage({
             key:'login',
             data:'1',
             success(){}
           });
          //  let pages=getCurrentPages();
          //  let prePage=pages[pages.length-2];
          //  console.log("上一页的数据：",prePage.data);
          //缓存上一页的数据
          // wx.setStorageSync('currentData',prePage.data);
          // if(prePage.route=="pages/index/index"){
          //   wx.redirectTo({
          //     url:'../index/index'
          //   })
          //   wx.setStorage({
          //        key:'login',
          //        data:'1',
          //        success(){}
          //     });
          // }
          // if(prePage.route=="pages/topic-detail/topic-detail"){
          //   wx.redirectTo({
          //     url:'../topic-detail/topic-detail'
          //   })
          // }
          // if(prePage.route=="pages/publisher/publisher"){
          //   wx.redirectTo({
          //     url:'../publisher/publisher'
          //   })
          // }
          // if(prePage.route=="pages/my/my"){
          //   wx.redirectTo({
          //     url:'../my/my'
          //   })
          // }
         }else{
           wx.redirectTo({
             url:'../participate/participate',
           })
         }
        }
        });
      },500);
      /*发起http请求-插入数据 */

    } else {
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
          
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
        loginCode = res.code
      }
    })

  }
})
