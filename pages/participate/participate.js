"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
var tId;
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
            }, 300);
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
                        console.log("投稿成功的id：" + res.data.id);
                        var cId = res.data.id;
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
                                            url: "../publisher/publisher?tid=" + tId + "&cid=" + cId
                                        });
                                    }, 200);
                                }
                            });
                        }, 200);
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
            tId = options.tid;
            this.data.refPostId = options.tid;
            var that = this;
            wx.request({
                url: 'https://api-test.ifans.pub/v1/post/detail',
                data: {
                    id: tId
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGljaXBhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXJ0aWNpcGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBQzVCLElBQUksR0FBVSxDQUFDO0FBQ2YsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxLQUFLLEVBQUUsSUFBSTtRQUNYLFFBQVEsRUFBQyxFQUFFO1FBQ1gsU0FBUyxFQUFFLElBQUk7UUFDZixTQUFTLEVBQUMsUUFBUTtLQUNuQjtJQUVELGFBQWEsWUFBQyxLQUFVO1FBQ3RCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzdCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxVQUFVLFlBQUMsS0FBVTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBR0QsVUFBVSxZQUFDLEtBQVU7UUFDbkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUVWLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUVqQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3pDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUUsRUFBRSxFQUFDO2dCQUMxQixFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNaLEdBQUcsRUFBQyxPQUFPO29CQUNYLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7b0JBQ3ZCLE9BQU87b0JBQ1AsQ0FBQztpQkFDRixDQUFDLENBQUM7YUFDSjtZQUNDLFVBQVUsQ0FBQztnQkFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNaLEdBQUcsRUFBRSxnQkFBZ0I7b0JBQ3JCLE9BQU87b0JBRVAsQ0FBQztpQkFDRixDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FFVDthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN2QixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLElBQUksRUFBQyxNQUFNO29CQUNYLEtBQUssRUFBRSxTQUFTO2lCQUNqQixDQUFDLENBQUM7YUFDSjtpQkFBSyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUM7Z0JBQ25DLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsSUFBSSxFQUFDLE1BQU07b0JBQ1gsS0FBSyxFQUFDLG1CQUFtQjtpQkFDMUIsQ0FBQyxDQUFDO2FBQ0o7aUJBQUs7Z0JBQ0osRUFBRSxDQUFDLFdBQVcsQ0FBQztvQkFDYixLQUFLLEVBQUUsUUFBUTtvQkFDZixPQUFPO29CQUNQLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO2dCQUNILElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM3QyxFQUFFLENBQUMsT0FBTyxDQUFDO29CQUNULEdBQUcsRUFBRSwyQ0FBMkM7b0JBQ2hELElBQUksRUFBRTt3QkFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO3dCQUN4QixJQUFJLEVBQUUsQ0FBQzt3QkFDUCxNQUFNLEVBQUUsTUFBTTt3QkFDZCxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO3FCQUMvQjtvQkFDRCxNQUFNLEVBQUU7d0JBQ04sYUFBYSxFQUFFLEtBQUs7cUJBQ3JCO29CQUNELE1BQU0sRUFBRSxNQUFNO29CQUNkLE9BQU8sWUFBQyxHQUFHO3dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3BDLElBQUksR0FBRyxHQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO3dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDeEMsVUFBVSxDQUFDOzRCQUNULEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0NBQ2IsT0FBTztvQ0FDTCxFQUFFLENBQUMsU0FBUyxDQUFDO3dDQUNYLEtBQUssRUFBRSxPQUFPO3FDQUNmLENBQUMsQ0FBQztvQ0FFSCxFQUFFLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7b0NBQzlCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQ0FDOUIsVUFBVSxDQUFDO3dDQUNULEVBQUUsQ0FBQyxVQUFVLENBQUM7NENBQ1osR0FBRyxFQUFFLGdDQUE4QixHQUFHLGFBQVEsR0FBSzt5Q0FDcEQsQ0FBQyxDQUFDO29DQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQ0FDVixDQUFDOzZCQUNGLENBQUMsQ0FBQzt3QkFFTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBRVYsQ0FBQztvQkFDRCxJQUFJLFlBQUMsR0FBRzt3QkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDMUIsQ0FBQztpQkFDRixDQUFDLENBQUM7YUFFSjtTQUNGO0lBQ0gsQ0FBQztJQUVILFVBQVUsWUFBQyxLQUFTO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFNBQVMsRUFBQyxRQUFRO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxXQUFXLFlBQUMsS0FBUztRQUluQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osU0FBUyxFQUFDLFFBQVE7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVDLE1BQU0sWUFBQyxPQUFZO1FBQW5CLGlCQTZFQztRQTVFQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLElBQUksS0FBSyxHQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEMsSUFBRyxDQUFDLEtBQUssRUFBQztZQUNWLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFFbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsR0FBRyxFQUFFLDJDQUEyQztnQkFDaEQsSUFBSSxFQUFFO29CQUNKLEVBQUUsRUFBRSxHQUFHO2lCQUNSO2dCQUNELE1BQU0sRUFBRSxLQUFLO2dCQUNiLE9BQU8sWUFBQyxHQUFHO29CQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztvQkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxPQUFRLENBQUM7d0JBQ1osS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJO3FCQUNoQixDQUFDLENBQUM7b0JBR0gsRUFBRSxDQUFDLFVBQVUsQ0FBQzt3QkFDWixHQUFHLEVBQUMsT0FBTzt3QkFDWCxJQUFJLEVBQUMsR0FBRyxDQUFDLElBQUk7d0JBQ2IsT0FBTzs0QkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ25DLENBQUM7cUJBQ0YsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsSUFBSSxZQUFDLEdBQUc7b0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7YUFBSTtZQUVILElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osS0FBSyxFQUFDLEtBQUs7YUFDWixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFNBQVMsRUFBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDeEIsQ0FBQyxDQUFDO1lBRUgsSUFBSSxPQUFLLEdBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFFBQVEsRUFBQyxPQUFLO2FBQ2YsQ0FBQyxDQUFDO1NBQ0o7UUFFQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDakMsV0FBVyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFBO1NBQ0g7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRzVCLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxVQUFDLEdBQUc7Z0JBQzlCLEtBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osUUFBUSxFQUFFLEdBQUc7b0JBQ2IsV0FBVyxFQUFFLElBQUk7aUJBQ2xCLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQTtTQUNGO2FBQU07WUFFTCxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0JBQ1YsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtvQkFDdEMsS0FBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLFdBQVcsRUFBRSxJQUFJO3FCQUNsQixDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUNGLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUVELFdBQVcsWUFBQyxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xyXG4vL+iOt+WPluW6lOeUqOWunuS+i1xyXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXHJcblxyXG5cclxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxyXG5sZXQgdElkOm51bWJlcjtcclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgbW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXHJcbiAgICB1c2VySW5mbzoge30sXHJcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXHJcbiAgICB0b3BpYzogbnVsbCxcclxuICAgIHB1c2hUZXh0OicnLFxyXG4gICAgcmVmUG9zdElkOiBudWxsLFxyXG4gICAgaW5wdXRUZXh0OiczOTBycHgnXHJcbiAgfSxcclxuICAvKnRleHRhcmVh6L6T5YWl5pe26Kem5Y+R6K+l5Ye95pWwLeW+ruS/oeahhuaetuaXoOWPjOWQkee7keWumiAqL1xyXG4gIHRleHRBcmVhSW5wdXQoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHB1c2hUZXh0OiBldmVudC5kZXRhaWwudmFsdWVcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgdGFwQ29uZmlybShldmVudDogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZygn54K55Ye75a6M5oiQ6KKr6Kem5Y+RJyk7XHJcbiAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+eCueWHu+WujOaIkOiiq+inpuWPkScgfSk7XHJcbiAgfSxcclxuXHJcbiAgLyrlj5HluIPor53popggKi9cclxuICB0aXRsZVBhcnRpKGV2ZW50OiBhbnkpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgIC8v6I635Y+W57yT5a2Y5Lit55qEdG9rZW7vvIzlkIzmraXmlrnlvI9cclxuICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAvL+eUqOaIt+acqueZu+W9leaIluiAhXRva2Vu6L+H5pyfXHJcbiAgICAgIHd4LnNob3dUb2FzdCh7IHRpdGxlOiAn6K+35YWI55m75b2V77yBJyB9KTtcclxuICAgICAgLy/nvJPlrZjmnKrlj5HluIPnmoTojYnnqL9cclxuICAgICAgY29uc29sZS5sb2coXCLmnKrlj5HluIPnmoTojYnnqL/vvJpcIix0aGlzLmRhdGEucHVzaFRleHQpXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5wdXNoVGV4dCE9Jycpe1xyXG4gICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6J2RyYWZ0JyxcclxuICAgICAgICBkYXRhOnRoaXMuZGF0YS5wdXNoVGV4dCxcclxuICAgICAgICBzdWNjZXNzKCl7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcuLi9sb2dpbi9sb2dpbicsXHJcbiAgICAgICAgICBzdWNjZXNzKCkge1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSwgMzAwKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMuZGF0YS5wdXNoVGV4dCkge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICBpY29uOidub25lJyxcclxuICAgICAgICAgIHRpdGxlOiAn5YaF5a655LiN6IO95Li656m677yBJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZSBpZih0aGlzLmRhdGEucHVzaFRleHQubGVuZ3RoPDUpe1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICBpY29uOidub25lJyxcclxuICAgICAgICAgIHRpdGxlOifmirHmrYnlrqLlrpjvvIzlj4LkuI7mipXnqL/kuI3lvpfkvY7kuo7kupTkuKrlrZflkaYnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTogJ+aKleeov+S4rS4uLicsXHJcbiAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCB1c2VySWQgPSB3eC5nZXRTdG9yYWdlU3luYygndXNlcklkJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPluWIsOeahHVzZXJJZDonLCB1c2VySWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bliLDnmoTor53popjnmoRpZDonLCB0aGlzLmRhdGEucmVmUG9zdElkKTtcclxuICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W5Yiw55qE5oqV56i/55qE5YaF5a6577yaJyx0aGlzLmRhdGEucHVzaFRleHQpO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGktdGVzdC5pZmFucy5wdWIvdjEvcG9zdC9jcmVhdGUnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0ZXh0OiB0aGF0LmRhdGEucHVzaFRleHQsXHJcbiAgICAgICAgICAgIHR5cGU6IDIsXHJcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxyXG4gICAgICAgICAgICByZWZQb3N0SWQ6IHRoaXMuZGF0YS5yZWZQb3N0SWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5oqV56i/5oiQ5Yqf55qEaWTvvJpcIityZXMuZGF0YS5pZCk7XHJcbiAgICAgICAgICAgIGxldCBjSWQ9cmVzLmRhdGEuaWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Y+R5biD5oqV56i/5oiQ5Yqf77yB77yB77yB77yB77yB77yB77yB77yB77yBXCIscmVzLmRhdGEpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5oqV56i/5oiQ5Yqf77yBJ1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgLy/mipXnqL/miJDlip/liJnmuIXpmaTnvJPlrZjkuK3nmoTor53popjlkozojYnnqL9cclxuICAgICAgICAgICAgICAgICAgd3gucmVtb3ZlU3RvcmFnZVN5bmMoJ3RvcGljJyk7XHJcbiAgICAgICAgICAgICAgICAgIHd4LnJlbW92ZVN0b3JhZ2VTeW5jKCdkcmFmdCcpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgIHVybDogYC4uL3B1Ymxpc2hlci9wdWJsaXNoZXI/dGlkPSR7dElkfSZjaWQ9JHtjSWR9YFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSwgMjAwKTtcclxuXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmVyck1zZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBcclxub25FZGl0VGV4dChldmVudDphbnkpe1xyXG4gIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICB0aGlzLnNldERhdGEhKHtcclxuICAgIGlucHV0VGV4dDonMzkwcnB4J1xyXG4gIH0pO1xyXG59LFxyXG5vbkVuZEVkaXRvcihldmVudDphbnkpe1xyXG4gIC8vIHd4LnNob3dUb2FzdCh7XHJcbiAgLy8gICB0aXRsZTon57uT5p2f57yW6L6RJ1xyXG4gIC8vIH0pXHJcbiAgdGhpcy5zZXREYXRhISh7XHJcbiAgICBpbnB1dFRleHQ6JzkwMHJweCdcclxuICB9KTtcclxufVxyXG4sXHJcbiAgb25Mb2FkKG9wdGlvbnM6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coJ+inpuWPkWxvYWTkuovku7YnKTtcclxuICAgIGxldCB0b3BpYz13eC5nZXRTdG9yYWdlU3luYygndG9waWMnKVxyXG4gICAgY29uc29sZS5sb2coJ+iOt+W+l+e8k+WtmOS4reeahHRvcGlj77yaJyx0b3BpYyk7XHJcbiAgICAvL+ayoeacieivnemimOe8k+WtmOivtOaYjuaYr+mmluasoeadpeivpemhtemdolxyXG4gICAgaWYoIXRvcGljKXtcclxuICAgIHRJZCA9IG9wdGlvbnMudGlkO1xyXG4gICAgdGhpcy5kYXRhLnJlZlBvc3RJZCA9IG9wdGlvbnMudGlkO1xyXG4gICAgLy8gY29uc29sZS5sb2coYOS8oOi/h+adpeeahHRpZO+8miR7dGlkfe+8jOWtmOWCqOeahGlkJHt0aGlzLmRhdGEucmVmUG9zdElkfWApO1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBpLXRlc3QuaWZhbnMucHViL3YxL3Bvc3QvZGV0YWlsJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkOiB0SWRcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWPguS4juivnemimOmhtS0tLS0tLS0tLS3ojrflj5ZyZXNcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgdG9waWM6IHJlcy5kYXRhXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8v57yT5a2Y6K+d6aKYXHJcbiAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICBrZXk6J3RvcGljJyxcclxuICAgICAgICAgIGRhdGE6cmVzLmRhdGEsXHJcbiAgICAgICAgICBzdWNjZXNzKCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi57yT5a2Y5Y+W5Yiw55qE6K+d6aKY77yaXCIscmVzLmRhdGEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5omT5Y2w6ZSZ6K+v5L+h5oGvOlwiICsgZXJyLmVyck1zZyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1lbHNle1xyXG4gICAgLy/mnInor53popjnvJPlrZjor7TmmI7mmK/ku47nmbvlvZXpobXot7Povazov4fmnaXnmoTvvIzlsLHnm7TmjqXlj5bnvJPlrZhcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICB0b3BpYzp0b3BpY1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgcmVmUG9zdElkOnRvcGljLnBvc3QuaWRcclxuICAgIH0pO1xyXG4gICAgLy/lj5blh7rnvJPlrZjnmoTojYnnqL/vvIzlupTor6XmmK/lvILmraXvvIzov5nph4zmmK/lkIzmraXlvoXkv67mlLlcclxuICAgIGxldCBkcmFmdCA9d3guZ2V0U3RvcmFnZVN5bmMoJ2RyYWZ0Jyk7XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgcHVzaFRleHQ6ZHJhZnRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxyXG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xyXG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxyXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XHJcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSAocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICB1c2VySW5mbzogcmVzLFxyXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxyXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcclxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXHJcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuIl19