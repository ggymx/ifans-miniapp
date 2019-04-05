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
            var token = wx.getStorageSync('token');
            console.log("获取缓存中的token：" + token);
            if (token) {
                wx.request({
                    url: 'https://api-test.ifans.pub/v1/post/create',
                    data: {
                        text: that.data.pushText,
                        type: 2,
                        userid: 1,
                        refPostId: 12
                    },
                    header: {
                        Authorization: token
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
                    fail: function (res) {
                        console.log(res.errMsg);
                    }
                });
            }
            else {
                wx.showToast({
                    title: '暂未登录！',
                    duration: 6000,
                    success: function () {
                        wx.navigateTo({
                            url: '../login/login',
                            success: function () {
                                wx.showToast({ title: '前往登录页' });
                            }
                        });
                    }
                });
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGljaXBhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXJ0aWNpcGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsS0FBSyxFQUFFLElBQUk7UUFDWCxRQUFRLEVBQUUsSUFBSTtRQUNkLFNBQVMsRUFBRSxJQUFJO0tBQ2hCO0lBRUQsYUFBYSxZQUFDLEtBQVU7UUFDdEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDN0IsQ0FBQyxDQUFBO0lBR0osQ0FBQztJQUVELFVBQVUsWUFBQyxLQUFVO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFHRCxVQUFVLFlBQUMsS0FBVTtRQUNuQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3ZCLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLFNBQVM7YUFDakIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUlMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsT0FBTztnQkFDUCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1lBRUgsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FB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R0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDOUIsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRLEVBQUUsR0FBRztvQkFDYixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFBO1NBQ0Y7YUFBTTtZQUVMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsV0FBVyxFQUFFLElBQUk7cUJBQ2xCLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUQsV0FBVyxZQUFDLENBQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNkLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXHJcbi8v6I635Y+W5bqU55So5a6e5L6LXHJcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcclxuXHJcblxyXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6JyxcclxuICAgIHVzZXJJbmZvOiB7fSxcclxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcclxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcclxuICAgIHRvcGljOiBudWxsLFxyXG4gICAgcHVzaFRleHQ6IG51bGwsXHJcbiAgICByZWZQb3N0SWQ6IG51bGxcclxuICB9LFxyXG4gIC8qdGV4dGFyZWHovpPlhaXml7bop6blj5Hor6Xlh73mlbAt5b6u5L+h5qGG5p625peg5Y+M5ZCR57uR5a6aICovXHJcbiAgdGV4dEFyZWFJbnB1dChldmVudDogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgcHVzaFRleHQ6IGV2ZW50LmRldGFpbC52YWx1ZVxyXG4gICAgfSlcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpbnB1dOS6i+S7tuiiq+inpuWPke+8micrdGhpcy5kYXRhLnB1c2hUZXh0KTtcclxuICAgIC8vIHd4LnNob3dUb2FzdCh7dGl0bGU6J2lucHV05LqL5Lu26KKr6Kem5Y+RJ30pXHJcbiAgfSxcclxuXHJcbiAgdGFwQ29uZmlybShldmVudDogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZygn54K55Ye75a6M5oiQ6KKr6Kem5Y+RJyk7XHJcbiAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+eCueWHu+WujOaIkOiiq+inpuWPkScgfSk7XHJcbiAgfSxcclxuXHJcbiAgLyrlj5HluIPor53popggKi9cclxuICB0aXRsZVBhcnRpKGV2ZW50OiBhbnkpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgIGlmICghdGhpcy5kYXRhLnB1c2hUZXh0KSB7XHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6ICflhoXlrrnkuI3og73kuLrnqbrvvIEnXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gd3guc2hvd1RvYXN0KHtcclxuICAgICAgLy8gICB0aXRsZTon5Y+R6KGo5oiQ5Yqf77yBJ1xyXG4gICAgICAvLyB9KTtcclxuICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn5Y+R5biD5LitLi4uJyxcclxuICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIC8v6I635Y+W57yT5a2Y5Lit55qEdG9rZW7vvIzlkIzmraXmlrnlvI9cclxuICAgICAgdmFyIHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwi6I635Y+W57yT5a2Y5Lit55qEdG9rZW7vvJpcIiArIHRva2VuKTtcclxuICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS10ZXN0LmlmYW5zLnB1Yi92MS9wb3N0L2NyZWF0ZScsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IHRoYXQuZGF0YS5wdXNoVGV4dCxcclxuICAgICAgICAgICAgdHlwZTogMixcclxuICAgICAgICAgICAgdXNlcmlkOiAxLFxyXG4gICAgICAgICAgICByZWZQb3N0SWQ6IDEyXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWPguS4juivnemimOaIkOWKn++8gVwiKTtcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoe1xyXG4gICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vdG9waWMtZGV0YWlsL3RvcGljLWRldGFpbCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWwocmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAvL+eUqOaIt+acqueZu+W9leaIluiAhXRva2Vu6L+H5pyfXHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOifmmoLmnKrnmbvlvZXvvIEnLFxyXG4gICAgICAgICAgZHVyYXRpb246NjAwMCxcclxuICAgICAgICAgIHN1Y2Nlc3MoKXtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgdXJsOicuLi9sb2dpbi9sb2dpbicsXHJcbiAgICAgICAgICAgICAgc3VjY2Vzcygpe1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHt0aXRsZTon5YmN5b6A55m75b2V6aG1J30pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvbkxvYWQob3B0aW9uczogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZygn6Kem5Y+RbG9hZOS6i+S7ticpO1xyXG4gICAgbGV0IHRpZCA9IG9wdGlvbnMudGlkO1xyXG4gICAgdGhpcy5kYXRhLnJlZlBvc3RJZCA9IG9wdGlvbnMudGlkO1xyXG4gICAgY29uc29sZS5sb2coYOS8oOi/h+adpeeahHRpZO+8miR7dGlkfe+8jOWtmOWCqOeahGlkJHt0aGlzLmRhdGEucmVmUG9zdElkfWApO1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBpLXRlc3QuaWZhbnMucHViL3YxL3Bvc3QvZGV0YWlsJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkOiB0aWRcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWPguS4juivnemimOmhtS0tLS0tLS0tLS3ojrflj5ZyZXNcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgdG9waWM6IHJlcy5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmiZPljbDplJnor6/kv6Hmga86XCIgKyBlcnIuZXJyTXNnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcclxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcclxuICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cclxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxyXG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgdXNlckluZm86IHJlcyxcclxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcclxuICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXHJcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxyXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcbiJdfQ==