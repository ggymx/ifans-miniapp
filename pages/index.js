"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../common/api");
var app = getApp();
Page({
    data: {
        topList: [],
        isSubscribe: false,
        isErr: false,
        hasMore: true,
        cursor: 0
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
    test: function (e) {
        console.log(e.detail);
        wx.showToast({
            title: '测试监听'
        });
    },
    onLoad: function () {
        var that = this;
        console.log('cursor+++++--------', that.data.cursor);
        wx.showLoading({
            title: '请稍候'
        });
        api_1.default.request({
            url: '/v1/post/home-list',
            data: {
                cursor: that.data.cursor,
                limit: 10
            },
            method: 'GET',
            success: function (res) {
                var data = res.data;
                if (data.posts.length === 0) {
                    setTimeout(function () {
                        wx.showToast({
                            icon: 'none',
                            title: '已经到底了。。。'
                        });
                    }, 200);
                    that.setData({
                        hasMore: false
                    });
                }
                else {
                    that.setData({
                        topList: that.data.topList.concat(data.posts),
                        cursor: data.cursor
                    });
                }
                console.log('打印----', that.data.topList);
            },
            fail: function (err) {
                setTimeout(function () {
                    that.setData({
                        isErr: true
                    });
                }, 300);
            }
        });
        wx.hideLoading({});
    },
    onPullDownRefresh: function () {
        var that = this;
        api_1.default.request({
            url: '/v1/post/home-list',
            data: {
                cursor: 0,
                limit: 10
            },
            method: 'GET',
            success: function (res) {
                var data = res.data;
                that.setData({
                    topList: data.posts
                });
                setTimeout(function () {
                    wx.stopPullDownRefresh({});
                }, 300);
                that.setData({
                    hasMore: true,
                    cursor: data.cursor
                });
            }
        });
    },
    onReachBottom: function () {
        var that = this;
        if (!that.data.hasMore) {
            wx.showToast({
                icon: 'none',
                title: '已经到底了。。。'
            });
            return;
        }
        wx.showLoading({
            title: '加载更多.'
        });
        setTimeout(function () {
            wx.hideLoading({});
            that.onLoad();
        }, 500);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHFDQUFnQztBQUNoQyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUM1QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsRUFBRTtRQUNYLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLEtBQUssRUFBRSxLQUFLO1FBQ1osT0FBTyxFQUFDLElBQUk7UUFDWixNQUFNLEVBQUMsQ0FBQztLQUNUO0lBQ0QsYUFBYTtRQUNYLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFdBQVcsRUFBRSxJQUFJO2FBQ2xCLENBQUMsQ0FBQztZQUNILEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLElBQUksRUFBRSxNQUFNO2FBQ2IsQ0FBQyxDQUFBO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osV0FBVyxFQUFFLEtBQUs7YUFDbkIsQ0FBQyxDQUFBO1lBQ0YsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDO0lBRUQsSUFBSSxZQUFDLENBQU07UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLE1BQU07U0FDZCxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFDLElB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O1lBRVQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ1QsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcclxuLy/ojrflj5blupTnlKjlrp7kvotcclxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vYXBwJ1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uL2NvbW1vbi9hcGknO1xyXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIHRvcExpc3Q6IFtdLFxyXG4gICAgaXNTdWJzY3JpYmU6IGZhbHNlLFxyXG4gICAgaXNFcnI6IGZhbHNlLFxyXG4gICAgaGFzTW9yZTp0cnVlLFxyXG4gICAgY3Vyc29yOjBcclxuICB9LFxyXG4gIGJpbmRTdWJzY3JpYmUoKSB7XHJcbiAgICBjb25zdCBzdGF0dXMgPSB0aGlzLmRhdGEuaXNTdWJzY3JpYmU7XHJcbiAgICBpZiAoIXN0YXR1cykge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICBpc1N1YnNjcmliZTogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogJ+W3suiuoumYhe+8jOWwhuS6juaYjuaXqeWPkemAgScsXHJcbiAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICBpc1N1YnNjcmliZTogZmFsc2VcclxuICAgICAgfSlcclxuICAgICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6ICflj5bmtojorqLpmIUnLCBpY29uOiAnbm9uZScgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdGVzdChlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsKTtcclxuICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgIHRpdGxlOiAn5rWL6K+V55uR5ZCsJ1xyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgIGNvbnNvbGUubG9nKCdjdXJzb3IrKysrKy0tLS0tLS0tJyx0aGF0LmRhdGEuY3Vyc29yKTtcclxuICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6ICfor7fnqI3lgJknXHJcbiAgICB9KTtcclxuICAgIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnL3YxL3Bvc3QvaG9tZS1saXN0JyxcclxuXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjdXJzb3I6dGhhdC5kYXRhLmN1cnNvcixcclxuICAgICAgICBsaW1pdDogMTBcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGEgYXMgYW55XHJcbiAgICAgICAgaWYgKGRhdGEucG9zdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICflt7Lnu4/liLDlupXkuobjgILjgILjgIInXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAgIHRoYXQuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIGhhc01vcmU6ZmFsc2VcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgICAgdG9wTGlzdDogdGhhdC5kYXRhLnRvcExpc3QuY29uY2F0KGRhdGEucG9zdHMpLFxyXG4gICAgICAgICAgICBjdXJzb3I6ZGF0YS5jdXJzb3JcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygn5omT5Y2wLS0tLScsdGhhdC5kYXRhLnRvcExpc3QpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKGVycikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIGlzRXJyOiB0cnVlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAzMDApXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gIH0sXHJcblxyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICBhcGkucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJy92MS9wb3N0L2hvbWUtbGlzdCcsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjdXJzb3I6IDAsXHJcbiAgICAgICAgbGltaXQ6IDEwXHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhIGFzIGFueVxyXG4gICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgdG9wTGlzdDogZGF0YS5wb3N0c1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCh7fSk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICB0aGF0LnNldERhdGEoe1xyXG4gICAgICAgICAgaGFzTW9yZTp0cnVlLFxyXG4gICAgICAgICAgY3Vyc29yOmRhdGEuY3Vyc29yXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICBpZighdGhhdC5kYXRhLmhhc01vcmUpe1xyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICB0aXRsZTogJ+W3sue7j+WIsOW6leS6huOAguOAguOAgidcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6ICfliqDovb3mm7TlpJouJ1xyXG4gICAgfSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgLy/ph43mlrDliqDovb1cclxuICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICB0aGF0Lm9uTG9hZCgpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxufSlcclxuIl19