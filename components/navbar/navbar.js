const app = getApp()

Component({

  properties: {
    text: {
      type: String,
      value: 'Wechat'
    },
    back: {
      type: Boolean,
      value: false
    },
    home: {
      type: Boolean,
      value: false
    },
    gear:{
      type: Boolean,
      value: false
    }
  },

  data: {
    statusBarHeight: app.statusBarHeight + 'px',
    navigationBarHeight: (app.statusBarHeight + 44) + 'px'
  },

  methods: {
    backHome: function () {
      wx.reLaunch({
        url: '../index/index',
      })
    },
    back: function () {
      console.log("测试");
      wx.navigateBack({
        delta: 1
      })
    }
  }
})
