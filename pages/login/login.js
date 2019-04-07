"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
var loginCode;
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
        console.log("点击了确认按钮", e);
        if (e.detail.userInfo) {
            var that = this;
            wx.request({
                url: 'https://api-test.ifans.pub/v1/auth/login',
                data: {
                    code: loginCode,
                    encryptedData: e.detail.encryptedData,
                    iv: e.detail.iv,
                    rawData: e.detail.rawData,
                    signature: e.detail.signature,
                },
                header: {
                    'content-type': 'application/json'
                },
                method: 'POST',
                success: function (res) {
                    console.log("后端成功拿到用户信息后的返回的数据", res.data);
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
                    wx.setStorage({
                        key: 'userId',
                        data: res.data.user.id,
                        success: function () {
                            console.log("存入用户id成功：", res.data.user.id);
                        }
                    });
                },
                fail: function (res) {
                    console.log("login获取的数据err:");
                    console.log(res.errMsg);
                }
            });
            wx.showLoading({
                title: '加载中'
            });
            setTimeout(function () {
                wx.hideLoading({
                    success: function () {
                        var topic = wx.getStorageSync('topic');
                        if (!topic) {
                            wx.navigateTo({
                                url: '../index/index'
                            });
                        }
                        else {
                            wx.navigateTo({
                                url: '../participate/participate',
                            });
                        }
                    }
                });
            }, 2000);
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
        wx.login({
            success: function (res) {
                console.log('on load: wx.login res', res);
                loginCode = res.code;
            }
        });
        if (app.globalData.userInfo) {
            console.log('has app.globalData.userInfo', app.globalData.userInfo);
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true,
            });
        }
        else if (this.data.canIUse) {
            console.log('this.data.canIUse', this.data.canIUse);
            app.userInfoReadyCallback = function (res) {
                _this.setData({
                    userInfo: res,
                    hasUserInfo: true
                });
            };
        }
        else {
            console.log('no open-type=getUserInfo');
            wx.getUserInfo({
                success: function (res) {
                    console.log('getUserInfo res', res);
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
        console.log('====this.getUserInfo', e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBQzVCLElBQUksU0FBaUIsQ0FBQTtBQUNyQixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBQ25ELFVBQVUsRUFBQyxJQUFJO1FBQ2YsVUFBVSxFQUFDLE1BQU07S0FDbEI7SUFFRCxhQUFhLFlBQUMsQ0FBTTtRQUVsQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3RCLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQztZQUVULEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBRVQsR0FBRyxFQUFDLDBDQUEwQztnQkFFOUMsSUFBSSxFQUFDO29CQUNILElBQUksRUFBQyxTQUFTO29CQUNkLGFBQWEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWE7b0JBQ3JDLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ2YsT0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTztvQkFDekIsU0FBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUztpQkFDOUI7Z0JBRUQsTUFBTSxFQUFFO29CQUNOLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ25DO2dCQUVELE1BQU0sRUFBQyxNQUFNO2dCQUViLE9BQU8sWUFBQyxHQUFHO29CQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMxQyxP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QUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXHJcbi8v6I635Y+W5bqU55So5a6e5L6LXHJcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcclxubGV0IGxvZ2luQ29kZTogc3RyaW5nXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxyXG4gICAgdXNlckluZm86IHt9LFxyXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxyXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxyXG4gICAgcmV0dXJuSW5mbzpudWxsLFxyXG4gICAgc3RhdHVzVGV4dDon5o6I5p2D55m75b2VJ1xyXG4gIH0sXHJcbiAgLyrmjojmnYPnmbvlvZUgKi9cclxuICBvbkdvdFVzZXJJbmZvKGU6IGFueSkge1xyXG4gICAgLyrngrnlh7vnoa7orqTmjInpkq4gKi9cclxuICAgIGNvbnNvbGUubG9nKFwi54K55Ye75LqG56Gu6K6k5oyJ6ZKuXCIsIGUpO1xyXG4gICAgLyrlvZPmi7/liLDnlKjmiLfkv6Hmga/ml7YqL1xyXG4gICAgaWYgKGUuZGV0YWlsLnVzZXJJbmZvKSB7XHJcbiAgICAgdmFyIHRoYXQ9dGhpcztcclxuICAgIC8q6L+Z6YeM5LiN6ZyA6KaB55SodG9rZW7liKTmlq0gKi9cclxuICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG5cclxuICAgICAgICAgICAgdXJsOidodHRwczovL2FwaS10ZXN0LmlmYW5zLnB1Yi92MS9hdXRoL2xvZ2luJyxcclxuXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgIGNvZGU6bG9naW5Db2RlLFxyXG4gICAgICAgICAgICAgIGVuY3J5cHRlZERhdGE6IGUuZGV0YWlsLmVuY3J5cHRlZERhdGEsXHJcbiAgICAgICAgICAgICAgaXY6IGUuZGV0YWlsLml2LFxyXG4gICAgICAgICAgICAgIHJhd0RhdGE6IGUuZGV0YWlsLnJhd0RhdGEsXHJcbiAgICAgICAgICAgICAgc2lnbmF0dXJlOiBlLmRldGFpbC5zaWduYXR1cmUsXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG5cclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ZCO56uv5oiQ5Yqf5ou/5Yiw55So5oi35L+h5oGv5ZCO55qE6L+U5Zue55qE5pWw5o2uXCIscmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgIHJldHVybkluZm86cmVzLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0Oiflt7LnmbvlvZUnXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgLy/lvoDnvJPlrZjkuK3mt7vliqB0b2tlbu+8iOW8guatpe+8iVxyXG4gICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5Oid0b2tlbicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOnJlcy5kYXRhLnRva2VuLFxyXG4gICAgICAgICAgICAgICAgc3VjY2Vzcygpe1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWtmOWFpXRva2Vu5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwoKXtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnvJPlrZjlpLHotKXvvIFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgLy/lvoDnvJPlrZjkuK3mt7vliqDlvZPliY3nlKjmiLfnmoRpZFxyXG4gICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5Oid1c2VySWQnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTpyZXMuZGF0YS51c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgc3VjY2Vzcygpe1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWtmOWFpeeUqOaIt2lk5oiQ5Yqf77yaXCIscmVzLmRhdGEudXNlci5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWwocmVzKXtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2lu6I635Y+W55qE5pWw5o2uZXJyOlwiKVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICB0aXRsZTon5Yqg6L295LitJ1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKHtcclxuICAgICAgICAgc3VjY2Vzcygpe1xyXG4gICAgICAgICAgIC8v5aaC5p6c57yT5a2Y55qE5pyJ6K+d6aKY77yM5YiZ5bqU55u05o6l6Lez6L2s5Yiw5Y+C5LiO6K+d6aKY6aG16Z2iXHJcbiAgICAgICAgICAgbGV0IHRvcGljPXd4LmdldFN0b3JhZ2VTeW5jKCd0b3BpYycpO1xyXG4gICAgICAgICAgIGlmKCF0b3BpYyl7XHJcbiAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICB1cmw6Jy4uL2luZGV4L2luZGV4J1xyXG4gICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgIHVybDonLi4vcGFydGljaXBhdGUvcGFydGljaXBhdGUnLFxyXG4gICAgICAgICAgIH0pXHJcbiAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sMjAwMCk7XHJcbiAgICAgIC8q5Y+R6LW3aHR0cOivt+axgi3mj5LlhaXmlbDmja4gKi9cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgIHRpdGxlOiAn6K2m5ZGKJyxcclxuICAgICAgICBjb250ZW50OiAn5oKo54K55Ye75LqG5ouS57ud5o6I5p2D77yM5bCG5peg5rOV6L+b5YWl5bCP56iL5bqP77yM6K+35o6I5p2D5LmL5ZCO5YaN6L+b5YWlISEhJyxcclxuICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICBjb25maXJtVGV4dDogJ+i/lOWbnuaOiOadgycsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vkuobigJzov5Tlm57mjojmnYPigJ0nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIG9uTG9hZCgpIHtcclxuICAgIC8q6I635Y+W55m75b2V5Yet6K+BKi9cclxuICAgIHd4LmxvZ2luKHtcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAvKnd4LmxvZ2lu6I635Y+WY29kZS3lvq7kv6HnmbvlvZXnmoTmoIfor4YgKi9cclxuICAgICAgICBjb25zb2xlLmxvZygnb24gbG9hZDogd3gubG9naW4gcmVzJywgcmVzKVxyXG4gICAgICAgIGxvZ2luQ29kZSA9IHJlcy5jb2RlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdoYXMgYXBwLmdsb2JhbERhdGEudXNlckluZm8nLCBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbylcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxyXG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygndGhpcy5kYXRhLmNhbklVc2UnLCB0aGlzLmRhdGEuY2FuSVVzZSlcclxuICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cclxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxyXG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgdXNlckluZm86IHJlcyxcclxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ25vIG9wZW4tdHlwZT1nZXRVc2VySW5mbycpXHJcbiAgICAgIC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXHJcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2dldFVzZXJJbmZvIHJlcycsIHJlcylcclxuICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcclxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coJz09PT10aGlzLmdldFVzZXJJbmZvJywgZSlcclxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXHJcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuIl19