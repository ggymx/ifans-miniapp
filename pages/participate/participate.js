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
                    title: '内容不能为空！'
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
            var draft = wx.getStorageSync('draft');
            this.setData({
                pushText: draft
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGljaXBhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXJ0aWNpcGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsS0FBSyxFQUFFLElBQUk7UUFDWCxRQUFRLEVBQUMsRUFBRTtRQUNYLFNBQVMsRUFBRSxJQUFJO0tBQ2hCO0lBRUQsYUFBYSxZQUFDLEtBQVU7UUFDdEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDN0IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFVBQVUsWUFBQyxLQUFVO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFHRCxVQUFVLFlBQUMsS0FBVTtRQUNuQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBRVYsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBRWpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDekMsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBRSxF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b250ZW50IjpbIi8vaW5kZXguanNcclxuLy/ojrflj5blupTnlKjlrp7kvotcclxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xyXG5cclxuXHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxyXG4gICAgdXNlckluZm86IHt9LFxyXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxyXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxyXG4gICAgdG9waWM6IG51bGwsXHJcbiAgICBwdXNoVGV4dDonJyxcclxuICAgIHJlZlBvc3RJZDogbnVsbFxyXG4gIH0sXHJcbiAgLyp0ZXh0YXJlYei+k+WFpeaXtuinpuWPkeivpeWHveaVsC3lvq7kv6HmoYbmnrbml6Dlj4zlkJHnu5HlrpogKi9cclxuICB0ZXh0QXJlYUlucHV0KGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICBwdXNoVGV4dDogZXZlbnQuZGV0YWlsLnZhbHVlXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIHRhcENvbmZpcm0oZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coJ+eCueWHu+WujOaIkOiiq+inpuWPkScpO1xyXG4gICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6ICfngrnlh7vlrozmiJDooqvop6blj5EnIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8q5Y+R5biD6K+d6aKYICovXHJcbiAgdGl0bGVQYXJ0aShldmVudDogYW55KSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAvL+iOt+WPlue8k+WtmOS4reeahHRva2Vu77yM5ZCM5q2l5pa55byPXHJcbiAgICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgLy/nlKjmiLfmnKrnmbvlvZXmiJbogIV0b2tlbui/h+acn1xyXG4gICAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+ivt+WFiOeZu+W9le+8gScgfSk7XHJcbiAgICAgIC8v57yT5a2Y5pyq5Y+R5biD55qE6I2J56i/XHJcbiAgICAgIGNvbnNvbGUubG9nKFwi5pyq5Y+R5biD55qE6I2J56i/77yaXCIsdGhpcy5kYXRhLnB1c2hUZXh0KVxyXG4gICAgICBpZih0aGlzLmRhdGEucHVzaFRleHQhPScnKXtcclxuICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAga2V5OidkcmFmdCcsXHJcbiAgICAgICAgZGF0YTp0aGlzLmRhdGEucHVzaFRleHQsXHJcbiAgICAgICAgc3VjY2Vzcygpe1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnLi4vbG9naW4vbG9naW4nLFxyXG4gICAgICAgICAgc3VjY2VzcygpIHtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy5kYXRhLnB1c2hUZXh0KSB7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn5YaF5a655LiN6IO95Li656m677yBJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgIHRpdGxlOiAn5oqV56i/5LitLi4uJyxcclxuICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHVzZXJJZCA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VySWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W5Yiw55qEdXNlcklkOicsIHVzZXJJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPluWIsOeahOivnemimOeahGlkOicsIHRoaXMuZGF0YS5yZWZQb3N0SWQpO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGktdGVzdC5pZmFucy5wdWIvdjEvcG9zdC9jcmVhdGUnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0ZXh0OiB0aGF0LmRhdGEucHVzaFRleHQsXHJcbiAgICAgICAgICAgIHR5cGU6IDIsXHJcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxyXG4gICAgICAgICAgICByZWZQb3N0SWQ6IHRoaXMuZGF0YS5yZWZQb3N0SWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmipXnqL/miJDlip/vvIEnXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAvL+aKleeov+aIkOWKn+WImea4hemZpOe8k+WtmOS4reeahOivnemimOWSjOiNieeov1xyXG4gICAgICAgICAgICAgICAgICB3eC5yZW1vdmVTdG9yYWdlU3luYygndG9waWMnKTtcclxuICAgICAgICAgICAgICAgICAgd3gucmVtb3ZlU3RvcmFnZVN5bmMoJ2RyYWZ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vaW5kZXgvaW5kZXgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWwocmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZChvcHRpb25zOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKCfop6blj5Fsb2Fk5LqL5Lu2Jyk7XHJcbiAgICBsZXQgdG9waWM9d3guZ2V0U3RvcmFnZVN5bmMoJ3RvcGljJylcclxuICAgIGNvbnNvbGUubG9nKCfojrflvpfnvJPlrZjkuK3nmoR0b3BpY++8micsdG9waWMpO1xyXG4gICAgLy/msqHmnInor53popjnvJPlrZjor7TmmI7mmK/pppbmrKHmnaXor6XpobXpnaJcclxuICAgIGlmKCF0b3BpYyl7XHJcbiAgICBsZXQgdGlkID0gb3B0aW9ucy50aWQ7XHJcbiAgICB0aGlzLmRhdGEucmVmUG9zdElkID0gb3B0aW9ucy50aWQ7XHJcbiAgICBjb25zb2xlLmxvZyhg5Lyg6L+H5p2l55qEdGlk77yaJHt0aWR977yM5a2Y5YKo55qEaWQke3RoaXMuZGF0YS5yZWZQb3N0SWR9YCk7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9hcGktdGVzdC5pZmFucy5wdWIvdjEvcG9zdC9kZXRhaWwnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWQ6IHRpZFxyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Y+C5LiO6K+d6aKY6aG1LS0tLS0tLS0tLeiOt+WPlnJlc1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICB0b3BpYzogcmVzLmRhdGFcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy/nvJPlrZjor53pophcclxuICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgIGtleTondG9waWMnLFxyXG4gICAgICAgICAgZGF0YTpyZXMuZGF0YSxcclxuICAgICAgICAgIHN1Y2Nlc3MoKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLnvJPlrZjlj5bliLDnmoTor53popjvvJpcIixyZXMuZGF0YSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmiZPljbDplJnor6/kv6Hmga86XCIgKyBlcnIuZXJyTXNnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfWVsc2V7XHJcbiAgICAvL+acieivnemimOe8k+WtmOivtOaYjuaYr+S7jueZu+W9lemhtei3s+i9rOi/h+adpeeahO+8jOWwseebtOaOpeWPlue8k+WtmFxyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHRvcGljOnRvcGljXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICByZWZQb3N0SWQ6dG9waWMucG9zdC5pZFxyXG4gICAgfSk7XHJcbiAgICAvL+WPluWHuue8k+WtmOeahOiNieeov++8jOW6lOivpeaYr+W8guatpe+8jOi/memHjOaYr+WQjOatpeW+heS/ruaUuVxyXG4gICAgbGV0IGRyYWZ0ID13eC5nZXRTdG9yYWdlU3luYygnZHJhZnQnKTtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICBwdXNoVGV4dDpkcmFmdFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICB1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXHJcbiAgICAgICAgaGFzVXNlckluZm86IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XHJcbiAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXHJcbiAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcclxuICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgIHVzZXJJbmZvOiByZXMsXHJcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXHJcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxyXG4gICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcclxuICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG59KVxyXG4iXX0=