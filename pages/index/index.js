"use strict";
exports.__esModule = true;
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        });
    },
    //跳转到话题页
    bindViewTopic: function () {
        wx.navigateTo({
            url: '../topic/topic',
            success: function () {
                wx.showToast({ title: '正在跳转话题页面！' });
            }
        });
    },
    //跳转到空间页
    bindViewMy: function () {
        wx.navigateTo({
            url: '../my/my',
            success: function () {
                wx.showToast({ title: '正在跳转空间页！' });
            }
        });
    },
    //发布页面
    bindViewIssue: function () {
        wx.navigateTo({
            url: '../issue/issue',
            success: function () {
                wx.showToast({ title: '跳转到发布页！' });
            }
        });
    },
    onLoad: function () {
        var _this = this;
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            });
        }
        else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = function (res) {
                _this.setData({
                    userInfo: res,
                    hasUserInfo: true
                });
            };
        }
        else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: function (res) {
                    app.globalData.userInfo = res.userInfo;
                    _this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    });
                }
            });
        }
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    }
});