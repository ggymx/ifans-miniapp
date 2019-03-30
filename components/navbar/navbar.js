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
    gear: {
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
    },
    backGear: function () {
      // console.log("测试List");
      wx.showActionSheet({
        itemList: ['我的空间', '消息通知', '我的足迹', '我的关注', '联系客服'],
        success(res) {
          switch (res.tapIndex) {
            case 0:
              wx.navigateTo({
                url: '../my/my',
                success: function () {
                  wx.showToast({
                    title: '跳转空间页！'
                  });
                }
              });
              break;
            case 1:
              wx.navigateTo({
                url: '../news/news',
                success: function () {
                  wx.showToast({
                    title: '跳转消息页！'
                  });
                }
              });
              break;

            case 2:
              wx.navigateTo({
                url: '../track/track',
                success: function () {
                  wx.showToast({
                    title: '跳转足迹页！'
                  });
                }
              });
              break;

            case 3:
              wx.navigateTo({
                url: '../news-concern/news-concern',
                success: function () {
                  wx.showToast({
                    title: '跳转关注页！'
                  });
                }
              });
              break;
          }
        },
        fail(res) {
          console.log(res.errMsg)
        }
      })
    }
  }
})