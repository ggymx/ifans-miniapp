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
        pushText: '',
        refPostId: null,
        inputText: '390rpx'
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
        var token = wx.getStorageSync('token');
        if (!token) {
            wx.showToast({ title: '请先登录！' });
            console.log("未发布的草稿：", this.data.pushText);
            if (this.data.pushText != '') {
                wx.setStorage({
                    key: 'draft',
                    data: this.data.pushText,
                    success: function () {
                    }
                });
            }
            setTimeout(function () {
                wx.navigateTo({
                    url: '../login/login',
                    success: function () {
                    }
                });
            }, 2000);
        }
        else {
            if (!this.data.pushText) {
                wx.showToast({
                    icon: 'none',
                    title: '内容不能为空！'
                });
            }
            else if (this.data.pushText.length < 5) {
                wx.showToast({
                    icon: 'none',
                    title: '抱歉客官，参与投稿不得低于五个字呦'
                });
            }
            else {
                wx.showLoading({
                    title: '投稿中...',
                    success: function () {
                    }
                });
                var userId = wx.getStorageSync('userId');
                console.log('获取到的userId:', userId);
                console.log('获取到的话题的id:', this.data.refPostId);
                console.log('获取到的投稿的内容：', this.data.pushText);
                wx.request({
                    url: 'https://api-test.ifans.pub/v1/post/create',
                    data: {
                        text: that.data.pushText,
                        type: 2,
                        userid: userId,
                        refPostId: this.data.refPostId
                    },
                    header: {
                        Authorization: token
                    },
                    method: 'POST',
                    success: function (res) {
                        console.log("发布投稿成功！！！！！！！！！", res.data);
                        setTimeout(function () {
                            wx.hideLoading({
                                success: function () {
                                    wx.showToast({
                                        title: '投稿成功！'
                                    });
                                    wx.removeStorageSync('topic');
                                    wx.removeStorageSync('draft');
                                    setTimeout(function () {
                                        wx.navigateTo({
                                            url: '../index/index'
                                        });
                                    }, 1000);
                                }
                            });
                        }, 1000);
                    },
                    fail: function (res) {
                        console.log(res.errMsg);
                    }
                });
            }
        }
    },
    onEditText: function (event) {
        console.log(event);
        this.setData({
            inputText: '390rpx'
        });
    },
    onEndEditor: function (event) {
        this.setData({
            inputText: '900rpx'
        });
    },
    onLoad: function (options) {
        var _this = this;
        console.log('触发load事件');
        var topic = wx.getStorageSync('topic');
        console.log('获得缓存中的topic：', topic);
        if (!topic) {
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
                    wx.setStorage({
                        key: 'topic',
                        data: res.data,
                        success: function () {
                            console.log("缓存取到的话题：", res.data);
                        }
                    });
                },
                fail: function (err) {
                    console.log("打印错误信息:" + err.errMsg);
                }
            });
        }
        else {
            this.setData({
                topic: topic
            });
            this.setData({
                refPostId: topic.post.id
            });
            var draft_1 = wx.getStorageSync('draft');
            this.setData({
                pushText: draft_1
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGljaXBhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXJ0aWNpcGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsS0FBSyxFQUFFLElBQUk7UUFDWCxRQUFRLEVBQUMsRUFBRTtRQUNYLFNBQVMsRUFBRSxJQUFJO1FBQ2YsU0FBUyxFQUFDLFFBQVE7S0FDbkI7SUFFRCxhQUFhLFlBQUMsS0FBVTtRQUN0QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSztTQUM3QixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsVUFBVSxZQUFDLEtBQVU7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUdELFVBQVUsWUFBQyxLQUFVO1FBQ25CLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFFVixFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFFakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUN6QyxJQUFHLElBQUksQ0FBQyxJ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SUFBSTtpQkFDbEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFBO1NBQ0Y7YUFBTTtZQUVMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsV0FBVyxFQUFFLElBQUk7cUJBQ2xCLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUQsV0FBVyxZQUFDLENBQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNkLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXHJcbi8v6I635Y+W5bqU55So5a6e5L6LXHJcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcclxuXHJcblxyXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6JyxcclxuICAgIHVzZXJJbmZvOiB7fSxcclxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcclxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcclxuICAgIHRvcGljOiBudWxsLFxyXG4gICAgcHVzaFRleHQ6JycsXHJcbiAgICByZWZQb3N0SWQ6IG51bGwsXHJcbiAgICBpbnB1dFRleHQ6JzM5MHJweCdcclxuICB9LFxyXG4gIC8qdGV4dGFyZWHovpPlhaXml7bop6blj5Hor6Xlh73mlbAt5b6u5L+h5qGG5p625peg5Y+M5ZCR57uR5a6aICovXHJcbiAgdGV4dEFyZWFJbnB1dChldmVudDogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgcHVzaFRleHQ6IGV2ZW50LmRldGFpbC52YWx1ZVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICB0YXBDb25maXJtKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKCfngrnlh7vlrozmiJDooqvop6blj5EnKTtcclxuICAgIHd4LnNob3dUb2FzdCh7IHRpdGxlOiAn54K55Ye75a6M5oiQ6KKr6Kem5Y+RJyB9KTtcclxuICB9LFxyXG5cclxuICAvKuWPkeW4g+ivnemimCAqL1xyXG4gIHRpdGxlUGFydGkoZXZlbnQ6IGFueSkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgLy/ojrflj5bnvJPlrZjkuK3nmoR0b2tlbu+8jOWQjOatpeaWueW8j1xyXG4gICAgbGV0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIC8v55So5oi35pyq55m75b2V5oiW6ICFdG9rZW7ov4fmnJ9cclxuICAgICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6ICfor7flhYjnmbvlvZXvvIEnIH0pO1xyXG4gICAgICAvL+e8k+WtmOacquWPkeW4g+eahOiNieeov1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuacquWPkeW4g+eahOiNieeov++8mlwiLHRoaXMuZGF0YS5wdXNoVGV4dClcclxuICAgICAgaWYodGhpcy5kYXRhLnB1c2hUZXh0IT0nJyl7XHJcbiAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgIGtleTonZHJhZnQnLFxyXG4gICAgICAgIGRhdGE6dGhpcy5kYXRhLnB1c2hUZXh0LFxyXG4gICAgICAgIHN1Y2Nlc3MoKXtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy4uL2xvZ2luL2xvZ2luJyxcclxuICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCAyMDAwKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMuZGF0YS5wdXNoVGV4dCkge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICBpY29uOidub25lJyxcclxuICAgICAgICAgIHRpdGxlOiAn5YaF5a655LiN6IO95Li656m677yBJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZSBpZih0aGlzLmRhdGEucHVzaFRleHQubGVuZ3RoPDUpe1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICBpY29uOidub25lJyxcclxuICAgICAgICAgIHRpdGxlOifmirHmrYnlrqLlrpjvvIzlj4LkuI7mipXnqL/kuI3lvpfkvY7kuo7kupTkuKrlrZflkaYnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTogJ+aKleeov+S4rS4uLicsXHJcbiAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCB1c2VySWQgPSB3eC5nZXRTdG9yYWdlU3luYygndXNlcklkJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPluWIsOeahHVzZXJJZDonLCB1c2VySWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bliLDnmoTor53popjnmoRpZDonLCB0aGlzLmRhdGEucmVmUG9zdElkKTtcclxuICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W5Yiw55qE5oqV56i/55qE5YaF5a6577yaJyx0aGlzLmRhdGEucHVzaFRleHQpO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGktdGVzdC5pZmFucy5wdWIvdjEvcG9zdC9jcmVhdGUnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0ZXh0OiB0aGF0LmRhdGEucHVzaFRleHQsXHJcbiAgICAgICAgICAgIHR5cGU6IDIsXHJcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxyXG4gICAgICAgICAgICByZWZQb3N0SWQ6IHRoaXMuZGF0YS5yZWZQb3N0SWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Y+R5biD5oqV56i/5oiQ5Yqf77yB77yB77yB77yB77yB77yB77yB77yB77yBXCIscmVzLmRhdGEpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5oqV56i/5oiQ5Yqf77yBJ1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgLy/mipXnqL/miJDlip/liJnmuIXpmaTnvJPlrZjkuK3nmoTor53popjlkozojYnnqL9cclxuICAgICAgICAgICAgICAgICAgd3gucmVtb3ZlU3RvcmFnZVN5bmMoJ3RvcGljJyk7XHJcbiAgICAgICAgICAgICAgICAgIHd4LnJlbW92ZVN0b3JhZ2VTeW5jKCdkcmFmdCcpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgIHVybDogJy4uL2luZGV4L2luZGV4J1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIFxyXG5vbkVkaXRUZXh0KGV2ZW50OmFueSl7XHJcbiAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgaW5wdXRUZXh0OiczOTBycHgnXHJcbiAgfSk7XHJcbn0sXHJcbm9uRW5kRWRpdG9yKGV2ZW50OmFueSl7XHJcbiAgLy8gd3guc2hvd1RvYXN0KHtcclxuICAvLyAgIHRpdGxlOifnu5PmnZ/nvJbovpEnXHJcbiAgLy8gfSlcclxuICB0aGlzLnNldERhdGEhKHtcclxuICAgIGlucHV0VGV4dDonOTAwcnB4J1xyXG4gIH0pO1xyXG59XHJcbixcclxuICBvbkxvYWQob3B0aW9uczogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZygn6Kem5Y+RbG9hZOS6i+S7ticpO1xyXG4gICAgbGV0IHRvcGljPXd4LmdldFN0b3JhZ2VTeW5jKCd0b3BpYycpXHJcbiAgICBjb25zb2xlLmxvZygn6I635b6X57yT5a2Y5Lit55qEdG9waWPvvJonLHRvcGljKTtcclxuICAgIC8v5rKh5pyJ6K+d6aKY57yT5a2Y6K+05piO5piv6aaW5qyh5p2l6K+l6aG16Z2iXHJcbiAgICBpZighdG9waWMpe1xyXG4gICAgbGV0IHRpZCA9IG9wdGlvbnMudGlkO1xyXG4gICAgdGhpcy5kYXRhLnJlZlBvc3RJZCA9IG9wdGlvbnMudGlkO1xyXG4gICAgY29uc29sZS5sb2coYOS8oOi/h+adpeeahHRpZO+8miR7dGlkfe+8jOWtmOWCqOeahGlkJHt0aGlzLmRhdGEucmVmUG9zdElkfWApO1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBpLXRlc3QuaWZhbnMucHViL3YxL3Bvc3QvZGV0YWlsJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkOiB0aWRcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWPguS4juivnemimOmhtS0tLS0tLS0tLS3ojrflj5ZyZXNcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgdG9waWM6IHJlcy5kYXRhXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8v57yT5a2Y6K+d6aKYXHJcbiAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICBrZXk6J3RvcGljJyxcclxuICAgICAgICAgIGRhdGE6cmVzLmRhdGEsXHJcbiAgICAgICAgICBzdWNjZXNzKCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi57yT5a2Y5Y+W5Yiw55qE6K+d6aKY77yaXCIscmVzLmRhdGEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5omT5Y2w6ZSZ6K+v5L+h5oGvOlwiICsgZXJyLmVyck1zZyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1lbHNle1xyXG4gICAgLy/mnInor53popjnvJPlrZjor7TmmI7mmK/ku47nmbvlvZXpobXot7Povazov4fmnaXnmoTvvIzlsLHnm7TmjqXlj5bnvJPlrZhcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICB0b3BpYzp0b3BpY1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgcmVmUG9zdElkOnRvcGljLnBvc3QuaWRcclxuICAgIH0pO1xyXG4gICAgLy/lj5blh7rnvJPlrZjnmoTojYnnqL/vvIzlupTor6XmmK/lvILmraXvvIzov5nph4zmmK/lkIzmraXlvoXkv67mlLlcclxuICAgIGxldCBkcmFmdCA9d3guZ2V0U3RvcmFnZVN5bmMoJ2RyYWZ0Jyk7XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgcHVzaFRleHQ6ZHJhZnRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxyXG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xyXG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxyXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XHJcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSAocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICB1c2VySW5mbzogcmVzLFxyXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxyXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcclxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXHJcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuIl19