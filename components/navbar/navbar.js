"use strict";
var app = getApp();
/*待初始化的缓存和草稿 */
let topicCache
let draft
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
           topicCache=wx.getStorageSync('topic');
           draft=wx.getStorageSync('draft');
           //回退时，如果缓存有话题和草稿，则清除
           if(topicCache) wx.removeStorageSync('topic')
           if(draft) wx.removeStorageSync('draft')
            wx.navigateBack({
                delta: 1
            });
        },
        backGear: function () {
            wx.showActionSheet({
                itemList: ['我的空间', '联系客服', '分享给朋友'],
                success: function (res) {
                    switch (res.tapIndex) {
                        case 0:
                        let token = wx.getStorageSync('token');
                        if(token){
                            //获取用户Id
                            let userId=wx.getStorageSync('userId');
                            wx.showToast({
                                title: '前往空间'
                            });
                            setTimeout(()=>{
                                wx.navigateTo({
                                    url: '../my/my?userId='+userId,
                                    success: function () {
                                       
                                    }
                                });
                            },2000)
                            
                        }else{
                            wx.showToast({title:'请先登录！'});
                            setTimeout(()=>{
                                wx.navigateTo({
                                    url:'../login/login'
                                });
                            },2000)
                        }
                            break;
                        case 1:break;
                        case 2:break;
                    }
                },
                fail: function (res) {
                    console.log(res.errMsg);
                }
            });
        }
    }
});
