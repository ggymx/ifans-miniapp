"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
var cursor = 0;
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        returnInfo: null,
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
        wx.request({
            url: 'https://api-test.ifans.pub/v1/home/list',
            data: {
                cursor: cursor,
                limit: 10
            },
            method: "GET",
            success: function (res) {
                console.log("index获取的数据res：");
                console.log(res.data);
                that.setData({
                    returnInfo: res.data
                });
                cursor = res.data.cursor;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBQzVCLElBQUksTUFBTSxHQUFRLENBQUMsQ0FBQztBQUVwQixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBQ25ELFVBQVUsRUFBQyxJQUFJO1FBQ2YsV0FBVyxFQUFDLEtBQUs7UUFDakIsS0FBSyxFQUFDLEtBQUs7S0FDWjtJQUVELGFBQWE7UUFDWCxJQUFJLE1BQU0sR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUVqQyxJQUFHLENBQUMsTUFBTSxFQUFDO1lBQ1QsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixXQUFXLEVBQUMsSUFBSTthQUNqQixDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBQyxZQUFZO2dCQUNsQixJQUFJLEVBQUUsTUFBTTthQUNiLENBQUMsQ0FBQTtTQUNIO2FBQUk7WUFDSCxJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFdBQVcsRUFBQyxLQUFLO2FBQ2xCLENBQUMsQ0FBQTtZQUNGLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1NBQzFDO0lBRUgsQ0FBQztJQUVELFdBQVcsWUFBQyxHQUFPO0lBS25CLENBQUM7SUFFRCxNQUFNO1FBQU4saUJBb0VDO1FBbEVDLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDYixLQUFLLEVBQUMsS0FBSztTQUNaLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUMseUNBQXlDO1lBRTdDLElBQUksRUFBQztnQkFDSCxNQUFNLEVBQUMsTUFBTTtnQkFDYixLQUFLLEVBQUMsRUFBRTthQUNUO1lBRUQsTUFBTSxFQUFDLEtBQUs7WUFFWixPQUFPLFlBQUMsR0FBRztnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLFVBQVUsRUFBQyxHQUFHLENBQUMsSUFBSTtpQkFDcEIsQ0FBQyxDQUFDO2dCQUdILE1BQU0sR0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDdkIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVyQixDQUFDO1lBQ0QsSUFBSSxZQUFDLEdBQUc7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQixVQUFVLENBQUM7b0JBQ1QsSUFBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDWixLQUFLLEVBQUMsSUFBSTtxQkFDWCxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ1IsQ0FBQztTQUNGLENBQUMsQ0FBQztRQUVILElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUE7U0FDSDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHNUIsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDOUIsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRLEVBQUUsR0FBRztvQkFDYixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFBO1NBQ0Y7YUFBTTtZQUVMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsV0FBVyxFQUFFLElBQUk7cUJBQ2xCLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUQsV0FBVyxZQUFDLENBQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNkLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxpQkFBaUI7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQztRQUNkLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUMseUNBQXlDO1lBQzdDLElBQUksRUFBQztnQkFDSCxNQUFNLEVBQUMsQ0FBQztnQkFDUixLQUFLLEVBQUMsRUFBRTthQUNUO1lBQ0QsTUFBTSxFQUFDLEtBQUs7WUFDWixPQUFPLFlBQUMsR0FBRztnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osVUFBVSxFQUFDLEdBQUcsQ0FBQyxJQUFJO2lCQUNwQixDQUFDLENBQUM7Z0JBQ0gsVUFBVSxDQUFDO29CQUNULEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNQLE1BQU0sR0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxhQUFhO1FBQ1gsSUFBSSxJQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNiLEtBQUssRUFBQyxPQUFPO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDO1lBRVQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQTtJQUNSLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXHJcbi8v6I635Y+W5bqU55So5a6e5L6LXHJcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcclxuXHJcblxyXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXHJcbmxldCBjdXJzb3I6bnVtYmVyPTA7XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6JyxcclxuICAgIHVzZXJJbmZvOiB7fSxcclxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcclxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcclxuICAgIHJldHVybkluZm86bnVsbCxcclxuICAgIGlzU3Vic2NyaWJlOmZhbHNlLFxyXG4gICAgaXNFcnI6ZmFsc2VcclxuICB9LFxyXG4gIFxyXG4gIGJpbmRTdWJzY3JpYmUoKXtcclxuICAgIGxldCBzdGF0dXM9dGhpcy5kYXRhLmlzU3Vic2NyaWJlO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCLlvZPliY3orqLpmIXnirbmgIHvvJpcIit0aGlzLmRhdGEuaXNTdWJzY3JpYmUpO1xyXG4gICAgaWYoIXN0YXR1cyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIGlzU3Vic2NyaWJlOnRydWVcclxuICAgICAgfSk7XHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6J+W3suiuoumYhe+8jOWwhuS6juaYjuaXqeWPkemAgScsXHJcbiAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgaXNTdWJzY3JpYmU6ZmFsc2VcclxuICAgICAgfSlcclxuICAgICAgd3guc2hvd1RvYXN0KHt0aXRsZTon5Y+W5raI6K6i6ZiFJyxpY29uOidub25lJ30pO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0sXHJcbiAgLy/mtYvor5XorqLpmIXlip/og71cclxuICBvbnN1YnNjcmliZShyZXM6YW55KXtcclxuICAgIC8vIGlmKHJlcy5kZXRhaWwuZXJyTXNnPVwic3Vic2NyaWJlTWVzc2FnZTpva1wiKXtcclxuICAgICBcclxuICAgIC8vIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKFwi6K6i6ZiFcmVz77yaXCIscmVzKVxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgXHJcbiAgICB2YXIgdGhhdD10aGlzO1xyXG4gICAgY29uc29sZS5sb2coXCLlvZPliY3nmoRjdXJzb3LvvJpcIitjdXJzb3IpO1xyXG4gICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICB0aXRsZTon6K+356iN5YCZJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDonaHR0cHM6Ly9hcGktdGVzdC5pZmFucy5wdWIvdjEvaG9tZS9saXN0JyxcclxuXHJcbiAgICAgIGRhdGE6e1xyXG4gICAgICAgIGN1cnNvcjpjdXJzb3IsXHJcbiAgICAgICAgbGltaXQ6MTBcclxuICAgICAgfSxcclxuXHJcbiAgICAgIG1ldGhvZDpcIkdFVFwiLFxyXG5cclxuICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXjojrflj5bnmoTmlbDmja5yZXPvvJpcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgcmV0dXJuSW5mbzpyZXMuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8q6YCa6L+H6L+U5Zue55qE6K+d6aKY5YiX6KGo5p+l6K+i55u45bqU55qE5Y+C5LiO6K+d6aKY55qE5a+56LGhICovXHJcbiAgICAgICAgLy/mjIfpkojlkI7np7tcclxuICAgICAgICBjdXJzb3I9cmVzLmRhdGEuY3Vyc29yO1xyXG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKHt9KTtcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoZXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluZGV46I635Y+W55qE5pWw5o2uZXJy77yaXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICBpc0Vycjp0cnVlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LDgwMClcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcclxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcclxuICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cclxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxyXG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgdXNlckluZm86IHJlcyxcclxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcclxuICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXHJcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxyXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uUHVsbERvd25SZWZyZXNoKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIuS4i+aLieWIt+aWsOOAguOAguOAglwiKTtcclxuICAgIHZhciB0aGF0PXRoaXM7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOidodHRwczovL2FwaS10ZXN0LmlmYW5zLnB1Yi92MS9ob21lL2xpc3QnLFxyXG4gICAgICBkYXRhOntcclxuICAgICAgICBjdXJzb3I6MCxcclxuICAgICAgICBsaW1pdDoxMFxyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuS4iuaLieWIt+aWsOaIkOWKnzpcIixyZXMuZGF0YSk7XHJcbiAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICByZXR1cm5JbmZvOnJlcy5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCh7fSk7XHJcbiAgICAgICAgfSw1MDApO1xyXG4gICAgICAgIGN1cnNvcj1yZXMuZGF0YS5jdXJzb3I7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlvZPliY3nmoRjdXJzb3LvvJpcIixjdXJzb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG9uUmVhY2hCb3R0b20oKXtcclxuICAgIHZhciB0aGF0PXRoaXM7XHJcbiAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgIHRpdGxlOifliqDovb3mm7TlpJouJ1xyXG4gICAgfSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgIC8v6YeN5paw5Yqg6L29XHJcbiAgICAgIHRoYXQub25Mb2FkKCk7XHJcbiAgICB9LDUwMClcclxuICB9XHJcbn0pXHJcbiJdfQ==