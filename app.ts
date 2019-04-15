import api from './common/api'
import tracker from './utils/tracker_es.min'
tracker({token: 'c9e8c81c6aefc93c107fd2c43d094726', behaviour: 9, optimisedForSPA: true, useHistory: true})

// app.ts
export interface IMyApp {
  globalData: {
    userInfo?: wx.UserInfo,
    height: number,
  }
  userInfoReadyCallback?(res: wx.UserInfo): void
}

App<IMyApp>({
  onLaunch(options) {
    api.init('https://api-test.ifans.pub')
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.height = res.statusBarHeight
        console.log(' res.statusBarHeight', res.statusBarHeight);
        console.log('打印height：',this.globalData.height);
      }
    })
    // 展示本地存储能力
    const logs: number[] = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success(_res) {
        console.log(_res.code)
        // 发送 _res.code 到后台换取 openId, sessionKey, unionId
      },
    })
    // 获取用户信息
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res.userInfo)
              }
            },
          })
        }
      },
    })
  },
  globalData: {
    height: 0,
  },
})
