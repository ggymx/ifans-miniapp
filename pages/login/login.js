"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        returnInfo: null,
        statusText: '授权登录'
    },
    onGotUserInfo: function (e) {
        console.log("点击了确认按钮");
        if (e.detail.userInfo) {
            var that = this;
            wx.login({
                success: function (res) {
                    console.log(res.code);
                    wx.request({
                        url: 'https://api-test.ifans.pub/v1/auth/login',
                        data: {
                            code: res.code
                        },
                        header: {
                            'content-type': 'application/json'
                        },
                        method: 'POST',
                        success: function (res) {
                            console.log("login获取的数据res:");
                            console.log(res.data.token);
                            that.setData({
                                returnInfo: res.data,
                                statusText: '已登录'
                            });
                            wx.setStorage({
                                key: 'token',
                                data: res.data.token,
                                success: function () {
                                    console.log("存入token成功");
                                },
                                fail: function () {
                                    console.log("缓存失败！");
                                }
                            });
                        },
                        fail: function (res) {
                            console.log("login获取的数据err:");
                            console.log(res.errMsg);
                        }
                    });
                }
            });
            wx.showLoading({
                title: '加载中'
            });
            setTimeout(function () {
                wx.hideLoading({
                    success: function () {
                        wx.navigateTo({
                            url: '../index/index'
                        });
                    }
                });
            }, 3000);
        }
        else {
            wx.showModal({
                title: '警告',
                content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
                showCancel: false,
                confirmText: '返回授权',
                success: function (res) {
                    if (res.confirm) {
                        console.log('用户点击了“返回授权”');
                    }
                }
            });
        }
    },
    onLoad: function () {
        var _this = this;
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true,
            });
        }
        else if (this.data.canIUse) {
            app.userInfoReadyCallback = function (res) {
                _this.setData({
                    userInfo: res,
                    hasUserInfo: true
                });
            };
        }
        else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsVUFBVSxFQUFDLElBQUk7UUFDZixVQUFVLEVBQUMsTUFBTTtLQUNsQjtJQUVELGFBQWEsWUFBQyxDQUFNO1FBRWxCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN0QixJQUFJLElBQUksR0FBQyxJQUFJLENBQUM7WUFDZCxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUNQLE9BQU8sWUFBQyxHQUFHO29CQUVULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNyQixFQUFFLENBQUMsT0FBTyxDQUFDO3dCQUVULEdBQUcsRUFBQywwQ0FBMEM7d0JBRTlDLElBQUksRUFBQzs0QkFDSCxJQUFJLEVBQUMsR0FBRyxDQUFDLElBQUk7eUJBQ2Q7d0JBRUQsTUFBTSxFQUFFOzRCQUNOLGNBQWMsRUFBRSxrQkFBa0I7eUJBQ25DO3dCQUVELE1BQU0sRUFBQyxNQUFNO3dCQUViLE9BQU8sWUFBQyxHQUFHOzRCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTs0QkFFN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUM1QixJQUFJLENBQUMsT0FBUSxDQUFDO2dDQUNaLFVBQVUsRUFBQyxHQUFHLENBQUMsSUFB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Q0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcclxuLy/ojrflj5blupTnlKjlrp7kvotcclxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xyXG5cclxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgbW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXHJcbiAgICB1c2VySW5mbzoge30sXHJcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXHJcbiAgICByZXR1cm5JbmZvOm51bGwsXHJcbiAgICBzdGF0dXNUZXh0OifmjojmnYPnmbvlvZUnXHJcbiAgfSxcclxuICAvKuaOiOadg+eZu+W9lSAqL1xyXG4gIG9uR290VXNlckluZm8oZTogYW55KSB7XHJcbiAgICAvKueCueWHu+ehruiupOaMiemSriAqL1xyXG4gICAgY29uc29sZS5sb2coXCLngrnlh7vkuobnoa7orqTmjInpkq5cIik7XHJcbiAgICBpZiAoZS5kZXRhaWwudXNlckluZm8pIHtcclxuICAgICB2YXIgdGhhdD10aGlzO1xyXG4gICAgIHd4LmxvZ2luKHtcclxuICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgIC8qd3gubG9naW7ojrflj5Zjb2RlLeW+ruS/oeeZu+W9leeahOagh+ivhiAqL1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhyZXMuY29kZSk7XHJcbiAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuXHJcbiAgICAgICAgICAgIHVybDonaHR0cHM6Ly9hcGktdGVzdC5pZmFucy5wdWIvdjEvYXV0aC9sb2dpbicsXHJcblxyXG4gICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICBjb2RlOnJlcy5jb2RlXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG5cclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW7ojrflj5bnmoTmlbDmja5yZXM6XCIpXHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgIHJldHVybkluZm86cmVzLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0Oiflt7LnmbvlvZUnXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgLy/lvoDnvJPlrZjkuK3mt7vliqB0b2tlbu+8iOW8guatpe+8iVxyXG4gICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5Oid0b2tlbicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOnJlcy5kYXRhLnRva2VuLFxyXG4gICAgICAgICAgICAgICAgc3VjY2Vzcygpe1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWtmOWFpXRva2Vu5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwoKXtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnvJPlrZjlpLHotKXvvIFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWwocmVzKXtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2lu6I635Y+W55qE5pWw5o2uZXJyOlwiKVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICB9XHJcbiAgICAgfSlcclxuICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOifliqDovb3kuK0nXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoe1xyXG4gICAgICAgICBzdWNjZXNzKCl7XHJcbiAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICB1cmw6Jy4uL2luZGV4L2luZGV4J1xyXG4gICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sMzAwMCk7XHJcbiAgICAgIC8q5Y+R6LW3aHR0cOivt+axgi3mj5LlhaXmlbDmja4gKi9cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgIHRpdGxlOiAn6K2m5ZGKJyxcclxuICAgICAgICBjb250ZW50OiAn5oKo54K55Ye75LqG5ouS57ud5o6I5p2D77yM5bCG5peg5rOV6L+b5YWl5bCP56iL5bqP77yM6K+35o6I5p2D5LmL5ZCO5YaN6L+b5YWlISEhJyxcclxuICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICBjb25maXJtVGV4dDogJ+i/lOWbnuaOiOadgycsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vkuobigJzov5Tlm57mjojmnYPigJ0nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIG9uTG9hZCgpIHtcclxuXHJcblxyXG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcclxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcclxuICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cclxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxyXG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgdXNlckluZm86IHJlcyxcclxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcclxuICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXHJcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxyXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcbiJdfQ==