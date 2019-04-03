"use strict";
var app = getApp();
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
            wx.navigateTo({
                url: '../index/index',
            });
        },
        back: function () {
            console.log("测试");
            wx.navigateBack({
                delta: 1
            });
        },
        backGear: function () {
            wx.showActionSheet({
                itemList: ['我的首页', '联系客服', '分享给朋友'],
                success: function (res) {
                    switch (res.tapIndex) {
                        case 0:
                            wx.navigateTo({
                                url: '../my/my?name='+'葛干',
                                success: function () {
                                    wx.showToast({
                                        title: '跳转首页！'
                                    });
                                }
                            });
                            break;
                        case 1:
                            // wx.navigateTo({
                            //     url: '../news/news',
                            //     success: function () {
                            //         wx.showToast({
                            //             title: '跳转消息页！'
                            //         });
                            //     }
                            // });
                            break;
                        case 2:
                            // wx.navigateTo({
                            //     url: '../track/track',
                            //     success: function () {
                            //         wx.showToast({
                            //             title: '跳转足迹页！'
                            //         });
                            //     }
                            // });
                            break;
                    }
                },
                fail: function (res) {
                    console.log(res.errMsg);
                }
            });
        }
    }
});
