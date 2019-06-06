//index.js
//获取应用实例
import { IMyApp } from '../app'
import api from '../common/api';
const app = getApp<IMyApp>()
let loginCode: string
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    returnInfo: null,
    statusText: '授权登录'
  },
  onLoad() {
    /*获取登录凭证*/
    wx.login({
      success(res) {
        /*wx.login获取code-微信登录的标识 */
        loginCode = res.code
      }
    })
  },
  /*授权登录-点击确认按钮 */
  onGotUserInfo(e: any) {
    /*授权成功*/
    if (e.detail.userInfo) {
      const that = this;
      /*这里不需要用token判断 */
      api.request({
        url: '/v1/auth/login',
        data: {
          code: loginCode,
          encryptedData: e.detail.encryptedData,
          iv: e.detail.iv,
          rawData: e.detail.rawData,
          signature: e.detail.signature,
        },
        method: 'POST',
        success(res) {
          console.log(res)
          const data = res.data as any
          that.setData!({
            returnInfo: res.data,
            statusText: '已登录'
          });
          //往缓存中添加token（异步）
          api.setToken(data.token);


          //往缓存中添加当前用户的id
          wx.setStorage({
            key: 'userId',
            data: data.user.id,
          });
          //添加rootuid
          wx.setStorage({
            key: 'rootuid',
            data: data.user.rootuid,
          });

          wx.showLoading({title: '加载中'});
          setTimeout(() => {
            wx.hideLoading({
              success() { wx.navigateBack({ delta: 1 }) }
            });
          }, 500);
        }
      });
    } else {
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!',
        showCancel: false,
        confirmText: '返回授权'
      })
    }
  }
})
