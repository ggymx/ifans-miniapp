"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../common/api");
var app = getApp();
var cursor = 0;
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        topList: [],
        isSubscribe: false,
        isErr: false
    },
    bindSubscribe: function () {
        var status = this.data.isSubscribe;
        if (!status) {
            this.setData({
                isSubscribe: true
            });
            wx.showToast({
                title: '已订阅，将于明早发送',
                icon: 'none'
            });
        }
        else {
            this.setData({
                isSubscribe: false
            });
            wx.showToast({ title: '取消订阅', icon: 'none' });
        }
    },
    onsubscribe: function (res) {
    },
    onLoad: function () {
        var _this = this;
        var that = this;
        console.log("当前的cursor：" + cursor);
        wx.showLoading({
            title: '请稍候'
        });
        api_1.default.request({
            url: '/v1/post/home-list',
            data: {
                cursor: cursor,
                limit: 10
            },
            method: "GET",
            success: function (res) {
                console.log("more的数值：" + that.data.more);
                console.log("index获取的数据res：");
                console.log(res.data);
                if (res.data.posts.length == 0) {
                    that.data.more = false;
                    wx.showToast({
                        icon: 'none',
                        title: '没有更多信息了！'
                    });
                }
                else {
                    that.setData({
                        topList: that.data.topList.concat(res.data.posts)
                    });
                    cursor = res.data.cursor;
                }
                wx.hideLoading({});
            },
            fail: function (err) {
                console.log("index获取的数据err：");
                console.log(err);
                wx.hideLoading({});
                setTimeout(function () {
                    that.setData({
                        isErr: true
                    });
                }, 800);
            }
        });
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
    },
    onPullDownRefresh: function () {
        console.log("下拉刷新。。。");
        var that = this;
        wx.request({
            url: 'https://api-test.ifans.pub/v1/home/list',
            data: {
                cursor: 0,
                limit: 10
            },
            method: 'GET',
            success: function (res) {
                console.log("上拉刷新成功:", res.data);
                that.setData({
                    returnInfo: res.data
                });
                setTimeout(function () {
                    wx.stopPullDownRefresh({});
                }, 500);
                cursor = res.data.cursor;
                console.log("当前的cursor：", cursor);
            }
        });
    },
    onReachBottom: function () {
        var that = this;
        wx.showLoading({
            title: '加载更多.'
        });
        setTimeout(function () {
            that.onLoad();
        }, 500);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHdDQUFtQztBQUduQyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUM1QixJQUFJLE1BQU0sR0FBUSxDQUFDLENBQUM7QUFFcEIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxPQUFPLEVBQUMsRUFBRTtRQUNWLFdBQVcsRUFBQyxLQUFLO1FBQ2pCLEtBQUssRUFBQyxLQUFLO0tBQ1o7SUFFRCxhQUFhO1FBQ1gsSUFBSSxNQUFNLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFakMsSUFBRyxDQUFDLE1BQU0sRUFBQztZQUNULElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osV0FBVyxFQUFDLElBQUk7YUFDakIsQ0FBQyxDQUFDO1lBQ0gsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUMsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLE1BQU07YUFDYixDQUFDLENBQUE7U0FDSDthQUFJO1lBQ0gsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixXQUFXLEVBQUMsS0FBSzthQUNsQixDQUFDLENBQUE7WUFDRixFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUMxQztJQUVILENBQUM7SUFFRCxXQUFXLFlBQUMsR0FBTztJQUtuQixDQUFDO0lBRUQsTUFBTTtRQUFOLGlCQTRFQztRQTFFQyxJQUFJLElBQUksR0FBQyxJQUFJLENBQUM7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBQyxN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QUFDLENBQUE7SUFDUixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xyXG4vL+iOt+WPluW6lOeUqOWunuS+i1xyXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vY29tbW9uL2FwaSc7XHJcblxyXG5cclxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxyXG5sZXQgY3Vyc29yOm51bWJlcj0wO1xyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgbW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXHJcbiAgICB1c2VySW5mbzoge30sXHJcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXHJcbiAgICB0b3BMaXN0OltdLFxyXG4gICAgaXNTdWJzY3JpYmU6ZmFsc2UsXHJcbiAgICBpc0VycjpmYWxzZVxyXG4gIH0sXHJcbiAgXHJcbiAgYmluZFN1YnNjcmliZSgpe1xyXG4gICAgbGV0IHN0YXR1cz10aGlzLmRhdGEuaXNTdWJzY3JpYmU7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIuW9k+WJjeiuoumYheeKtuaAge+8mlwiK3RoaXMuZGF0YS5pc1N1YnNjcmliZSk7XHJcbiAgICBpZighc3RhdHVzKXtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgaXNTdWJzY3JpYmU6dHJ1ZVxyXG4gICAgICB9KTtcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTon5bey6K6i6ZiF77yM5bCG5LqO5piO5pep5Y+R6YCBJyxcclxuICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgfSlcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICBpc1N1YnNjcmliZTpmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgICB3eC5zaG93VG9hc3Qoe3RpdGxlOiflj5bmtojorqLpmIUnLGljb246J25vbmUnfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgfSxcclxuICAvL+a1i+ivleiuoumYheWKn+iDvVxyXG4gIG9uc3Vic2NyaWJlKHJlczphbnkpe1xyXG4gICAgLy8gaWYocmVzLmRldGFpbC5lcnJNc2c9XCJzdWJzY3JpYmVNZXNzYWdlOm9rXCIpe1xyXG4gICAgIFxyXG4gICAgLy8gfVxyXG4gICAgLy8gY29uc29sZS5sb2coXCLorqLpmIVyZXPvvJpcIixyZXMpXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICBcclxuICAgIHZhciB0aGF0PXRoaXM7XHJcbiAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeeahGN1cnNvcu+8mlwiK2N1cnNvcik7XHJcbiAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgIHRpdGxlOifor7fnqI3lgJknXHJcbiAgICB9KTtcclxuXHJcbiAgICBhcGkucmVxdWVzdCh7XHJcbiAgICAgIHVybDonL3YxL3Bvc3QvaG9tZS1saXN0JyxcclxuXHJcbiAgICAgIGRhdGE6e1xyXG4gICAgICAgIGN1cnNvcjpjdXJzb3IsXHJcbiAgICAgICAgbGltaXQ6MTBcclxuICAgICAgfSxcclxuXHJcbiAgICAgIG1ldGhvZDpcIkdFVFwiLFxyXG5cclxuICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibW9yZeeahOaVsOWAvO+8mlwiK3RoYXQuZGF0YS5tb3JlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluZGV46I635Y+W55qE5pWw5o2ucmVz77yaXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICBpZihyZXMuZGF0YS5wb3N0cy5sZW5ndGg9PTApe1xyXG4gICAgICAgICAgdGhhdC5kYXRhLm1vcmU9ZmFsc2U7XHJcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICBpY29uOidub25lJyxcclxuICAgICAgICAgICAgdGl0bGU6J+ayoeacieabtOWkmuS/oeaBr+S6hu+8gSdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIHRvcExpc3Q6dGhhdC5kYXRhLnRvcExpc3QuY29uY2F0KHJlcy5kYXRhLnBvc3RzKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8v5oyH6ZKI5ZCO56e7XHJcbiAgICAgICAgIGN1cnNvcj1yZXMuZGF0YS5jdXJzb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKHt9KTtcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoZXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluZGV46I635Y+W55qE5pWw5o2uZXJy77yaXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICBpc0Vycjp0cnVlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LDgwMClcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcclxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcclxuICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cclxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxyXG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgdXNlckluZm86IHJlcyxcclxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcclxuICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXHJcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxyXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uUHVsbERvd25SZWZyZXNoKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIuS4i+aLieWIt+aWsOOAguOAguOAglwiKTtcclxuICAgIHZhciB0aGF0PXRoaXM7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOidodHRwczovL2FwaS10ZXN0LmlmYW5zLnB1Yi92MS9ob21lL2xpc3QnLFxyXG4gICAgICBkYXRhOntcclxuICAgICAgICBjdXJzb3I6MCxcclxuICAgICAgICBsaW1pdDoxMFxyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuS4iuaLieWIt+aWsOaIkOWKnzpcIixyZXMuZGF0YSk7XHJcbiAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICByZXR1cm5JbmZvOnJlcy5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCh7fSk7XHJcbiAgICAgICAgfSw1MDApO1xyXG4gICAgICAgIGN1cnNvcj1yZXMuZGF0YS5jdXJzb3I7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlvZPliY3nmoRjdXJzb3LvvJpcIixjdXJzb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG9uUmVhY2hCb3R0b20oKXtcclxuICAgIHZhciB0aGF0PXRoaXM7XHJcbiAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgIHRpdGxlOifliqDovb3mm7TlpJouJ1xyXG4gICAgfSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgIC8v6YeN5paw5Yqg6L29XHJcbiAgICAgIHRoYXQub25Mb2FkKCk7XHJcbiAgICB9LDUwMClcclxuICB9XHJcbn0pXHJcbiJdfQ==