"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        topic: null,
        pushText: null,
        refPostId: null
    },
    textAreaInput: function (event) {
        this.setData({
            pushText: event.detail.value
        });
    },
    tapConfirm: function (event) {
        console.log('点击完成被触发');
        wx.showToast({ title: '点击完成被触发' });
    },
    titleParti: function (event) {
        var that = this;
        if (!this.data.pushText) {
            wx.showToast({
                title: '内容不能为空！'
            });
        }
        else {
            wx.showLoading({
                title: '发布中...',
                success: function () {
                }
            });
            wx.request({
                url: 'https://api-test.ifans.pub/v1/post/create',
                data: {
                    text: that.data.pushText,
                    type: 2,
                    userid: 1,
                    refPostId: 12
                },
                method: 'POST',
                success: function (res) {
                    console.log("参与话题成功！");
                    wx.hideLoading({
                        success: function () {
                            wx.navigateTo({
                                url: '../topic-detail/topic-detail'
                            });
                        }
                    });
                },
                fail: function () {
                }
            });
        }
    },
    onLoad: function (options) {
        var _this = this;
        console.log('触发load事件');
        var tid = options.tid;
        this.data.refPostId = options.tid;
        console.log("\u4F20\u8FC7\u6765\u7684tid\uFF1A" + tid + "\uFF0C\u5B58\u50A8\u7684id" + this.data.refPostId);
        var that = this;
        wx.request({
            url: 'https://api-test.ifans.pub/v1/post/detail',
            data: {
                id: tid
            },
            method: 'GET',
            success: function (res) {
                console.log("参与话题页----------获取res");
                console.log(res.data);
                that.setData({
                    topic: res.data
                });
            },
            fail: function (err) {
                console.log("打印错误信息:" + err.errMsg);
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
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGljaXBhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXJ0aWNpcGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsS0FBSyxFQUFDLElBQUk7UUFDVixRQUFRLEVBQUMsSUFBSTtRQUNiLFNBQVMsRUFBQyxJQUFJO0tBQ2Y7SUFFRCxhQUFhLFlBQUMsS0FBUztRQUNyQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSztTQUM1QixDQUFDLENBQUE7SUFHSixDQUFDO0lBRUQsVUFBVSxZQUFDLEtBQVM7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUdELFVBQVUsWUFBQyxLQUFTO1FBQ2xCLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQztRQUNaLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQztZQUNyQixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBQyxTQUFTO2FBQ2hCLENBQUMsQ0FBQztTQUNKO2FBQUk7WUFJSCxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNiLEtBQUssRUFBQyxRQUFRO2dCQUNkLE9BQU87Z0JBRVAsQ0FBQzthQUNGLENBQUMsQ0FBQztZQUNILEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsR0FBRyxFQUFDLDJDQUEyQztnQkFDL0Ms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QUE7UUFDM0MsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcclxuLy/ojrflj5blupTnlKjlrp7kvotcclxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xyXG5cclxuXHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxyXG4gICAgdXNlckluZm86IHt9LFxyXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxyXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxyXG4gICAgdG9waWM6bnVsbCxcclxuICAgIHB1c2hUZXh0Om51bGwsXHJcbiAgICByZWZQb3N0SWQ6bnVsbFxyXG4gIH0sXHJcbiAgLyp0ZXh0YXJlYei+k+WFpeaXtuinpuWPkeivpeWHveaVsC3lvq7kv6HmoYbmnrbml6Dlj4zlkJHnu5HlrpogKi9cclxuICB0ZXh0QXJlYUlucHV0KGV2ZW50OmFueSl7XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgcHVzaFRleHQ6ZXZlbnQuZGV0YWlsLnZhbHVlXHJcbiAgICB9KVxyXG4gICAgLy8gY29uc29sZS5sb2coJ2lucHV05LqL5Lu26KKr6Kem5Y+R77yaJyt0aGlzLmRhdGEucHVzaFRleHQpO1xyXG4gICAgLy8gd3guc2hvd1RvYXN0KHt0aXRsZTonaW5wdXTkuovku7booqvop6blj5EnfSlcclxuICB9LFxyXG4gIFxyXG4gIHRhcENvbmZpcm0oZXZlbnQ6YW55KXtcclxuICAgIGNvbnNvbGUubG9nKCfngrnlh7vlrozmiJDooqvop6blj5EnKTtcclxuICAgIHd4LnNob3dUb2FzdCh7dGl0bGU6J+eCueWHu+WujOaIkOiiq+inpuWPkSd9KTtcclxuICB9LFxyXG5cclxuICAvKuWPkeW4g+ivnemimCAqL1xyXG4gIHRpdGxlUGFydGkoZXZlbnQ6YW55KXtcclxuICAgIHZhciB0aGF0PXRoaXM7XHJcbiAgICAgIGlmKCF0aGlzLmRhdGEucHVzaFRleHQpe1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTon5YaF5a655LiN6IO95Li656m677yBJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAvLyB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIC8vICAgdGl0bGU6J+WPkeihqOaIkOWKn++8gSdcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTon5Y+R5biD5LitLi4uJyxcclxuICAgICAgICAgIHN1Y2Nlc3MoKXtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6J2h0dHBzOi8vYXBpLXRlc3QuaWZhbnMucHViL3YxL3Bvc3QvY3JlYXRlJyxcclxuICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICB0ZXh0OnRoYXQuZGF0YS5wdXNoVGV4dCxcclxuICAgICAgICAgICAgdHlwZToyLFxyXG4gICAgICAgICAgICB1c2VyaWQ6MSxcclxuICAgICAgICAgICAgcmVmUG9zdElkOjEyXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlj4LkuI7or53popjmiJDlip/vvIFcIik7XHJcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKHtcclxuICAgICAgICAgICAgICBzdWNjZXNzKCl7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgdXJsOicuLi90b3BpYy1kZXRhaWwvdG9waWMtZGV0YWlsJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsKCl7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkKG9wdGlvbnM6YW55KSB7XHJcbiAgICBjb25zb2xlLmxvZygn6Kem5Y+RbG9hZOS6i+S7ticpO1xyXG4gICAgICBsZXQgdGlkPW9wdGlvbnMudGlkO1xyXG4gICAgICB0aGlzLmRhdGEucmVmUG9zdElkPW9wdGlvbnMudGlkO1xyXG4gICAgICBjb25zb2xlLmxvZyhg5Lyg6L+H5p2l55qEdGlk77yaJHt0aWR977yM5a2Y5YKo55qEaWQke3RoaXMuZGF0YS5yZWZQb3N0SWR9YCk7XHJcbiAgICAgIHZhciB0aGF0PXRoaXM7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDonaHR0cHM6Ly9hcGktdGVzdC5pZmFucy5wdWIvdjEvcG9zdC9kZXRhaWwnLFxyXG4gICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgaWQ6dGlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCLlj4LkuI7or53popjpobUtLS0tLS0tLS0t6I635Y+WcmVzXCIpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIHRvcGljOnJlcy5kYXRhXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwoZXJyKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwi5omT5Y2w6ZSZ6K+v5L+h5oGvOlwiK2Vyci5lcnJNc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcclxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcclxuICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cclxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxyXG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgdXNlckluZm86IHJlcyxcclxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcclxuICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXHJcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxyXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcbiJdfQ==