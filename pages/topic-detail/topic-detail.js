"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
var id;
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        topic: {},
        comment: {},
        sharCard: false
    },
    bindViewParti: function (event) {
        var tid = event.currentTarget.dataset.tid;
        wx.navigateTo({
            url: '../participate/participate?tid=' + tid,
            success: function () {
                wx.showToast({
                    title: '发布话题'
                });
            }
        });
    },
    onLoad: function (options) {
        var _this = this;
        id = options.tid;
        wx.showToast({
            title: "\u83B7\u5F97\u7684id\uFF1A" + id
        });
        var launchPara = wx.getLaunchOptionsSync();
        if (launchPara.scene == 1007 && id == 0) {
            this.setData({
                sharCard: true
            });
        }
        console.log("话题的id：" + id);
        var that = this;
        wx.request({
            url: 'https://api-test.ifans.pub/v1/post/detail',
            method: 'GET',
            data: {
                id: id
            },
            success: function (res) {
                console.log("接受到的话题详情-------------------：");
                console.log(res.data);
                that.setData({
                    topic: res.data
                });
                wx.request({
                    url: 'https://api-test.ifans.pub/v1/post/list',
                    method: 'GET',
                    data: {
                        id: id
                    },
                    success: function (res) {
                        console.log("接受到的参与列表-------------------：");
                        console.log(res.data);
                        that.setData({
                            comment: res.data
                        });
                    },
                    fail: function (err) {
                        console.log("打印错误信息");
                        console.log(err.errMsg);
                    }
                });
            },
            fail: function () {
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
    onShareAppMessage: function (res) {
        var that = this;
        console.log("激活转发事件：", res);
        return {
            title: "#" + this.data.topic.post.title + "#",
            imageUrl: '../../imgs/topicShare.png',
            success: function (e) {
                id = 0;
                wx.showShareMenu({
                    withShareTicket: true
                });
            },
            fail: function () {
            }
        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWMtZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9waWMtZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFDNUIsSUFBSSxFQUFTLENBQUE7QUFDYixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBQ25ELEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFDLEVBQUU7UUFDVixRQUFRLEVBQUMsS0FBSztLQUNmO0lBQ0QsYUFBYSxZQUFDLEtBQVM7UUFDckIsSUFBSSxHQUFHLEdBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUMsaUNBQWlDLEdBQUMsR0FBRztZQUN6QyxPQUFPLEVBQUM7Z0JBQ04sRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxLQUFLLEVBQUMsTUFBTTtpQkFDYixDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELE1BQU0sWUFBQyxPQUFXO1FBQWxCLGlCQTJGQztRQXZGQyxFQUFFLEdBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUVmLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxLQUFLLEVBQUMsK0JBQVMsRUFBSTtTQUNwQixDQUFDLENBQUM7UUFDQyxJQUFJLFVBQVUsR0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUl6QyxJQUFHLFVBQVUsQ0FBQyxLQUFLLElBQUUsSUFBSSxJQUFFLEVBQUUsSUFBRSxDQUFDLEVBQUM7WUFDL0IsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixR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O2lCQUNyQixDQUFDLENBQUE7WUFDRixDQUFDO1lBQ0QsSUFBSTtZQUVKLENBQUM7U0FDRixDQUFBO0lBQ0wsQ0FBQztJQUVELFdBQVcsWUFBQyxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xyXG4vL+iOt+WPluW6lOeUqOWunuS+i1xyXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXHJcblxyXG5cclxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxyXG5sZXQgaWQ6bnVtYmVyXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxyXG4gICAgdXNlckluZm86IHt9LFxyXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxyXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxyXG4gICAgdG9waWM6IHt9LFxyXG4gICAgY29tbWVudDp7fSxcclxuICAgIHNoYXJDYXJkOmZhbHNlXHJcbiAgfSxcclxuICBiaW5kVmlld1BhcnRpKGV2ZW50OmFueSl7XHJcbiAgICB2YXIgdGlkPWV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50aWQ7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOicuLi9wYXJ0aWNpcGF0ZS9wYXJ0aWNpcGF0ZT90aWQ9Jyt0aWQsXHJcbiAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24oKXtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6J+WPkeW4g+ivnemimCdcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLypvcHRpb25zOuiOt+WPlnVybOWPguaVsCAqL1xyXG4gIG9uTG9hZChvcHRpb25zOmFueSkge1xyXG4gIFxyXG5cclxuICAgIC8vIGxldCBpZD1vcHRpb25zLnRpZDtcclxuICAgIGlkPW9wdGlvbnMudGlkO1xyXG4gICAgICAgIC8v6I635Y+W5Zy65pmv5YC877yM5qC55o2u5Zy65pmv5YC85YiH5o2i5a+86Iiq5qCP55qE54q25oCBXHJcbiAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICB0aXRsZTpg6I635b6X55qEaWTvvJoke2lkfWBcclxuICAgIH0pO1xyXG4gICAgICAgIGxldCBsYXVuY2hQYXJhPXd4LmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICAgICAgLy8gd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAvLyAgIHRpdGxlOlwi5Zy65pmv5YC877yaXCIrbGF1bmNoUGFyYS5zY2VuZVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgaWYobGF1bmNoUGFyYS5zY2VuZT09MTAwNyYmaWQ9PTApe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIHNoYXJDYXJkOnRydWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIuivnemimOeahGlk77yaXCIraWQpO1xyXG4gICAgdmFyIHRoYXQ9dGhpcztcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6J2h0dHBzOi8vYXBpLXRlc3QuaWZhbnMucHViL3YxL3Bvc3QvZGV0YWlsJyxcclxuICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICBkYXRhOntcclxuICAgICAgICBpZDppZFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmjqXlj5fliLDnmoTor53popjor6bmg4UtLS0tLS0tLS0tLS0tLS0tLS0t77yaXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIC8v6K6+572u5pWw5o2uXHJcbiAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICB0b3BpYzpyZXMuZGF0YVxyXG4gICAgICAgIH0pOyBcclxuICAgICAgICB3eC5yZXF1ZXN0KFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6J2h0dHBzOi8vYXBpLXRlc3QuaWZhbnMucHViL3YxL3Bvc3QvbGlzdCcsXHJcbiAgICBcclxuICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgIGlkOmlkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaOpeWPl+WIsOeahOWPguS4juWIl+ihqC0tLS0tLS0tLS0tLS0tLS0tLS3vvJpcIilcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgLy/orr7nva7mlbDmja5cclxuICAgICAgICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgIC8vIHRvcGljOnJlcy5kYXRhXHJcbiAgICAgICAgICAgICAgICBjb21tZW50OnJlcy5kYXRhXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sICBcclxuICAgICAgICAgICAgZmFpbChlcnIpe1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5omT5Y2w6ZSZ6K+v5L+h5oGvXCIpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKSAgIFxyXG5cclxuICAgICAgfSwgIFxyXG4gICAgICBmYWlsKCl7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxyXG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xyXG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxyXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XHJcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSAocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICB1c2VySW5mbzogcmVzLFxyXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxyXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcclxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8q6L2s5Y+R5YiG5Lqr55uR5ZCs5LqL5Lu2ICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzOmFueSl7XHJcbiAgICB2YXIgdGhhdD10aGlzXHJcbiAgICBjb25zb2xlLmxvZyhcIua/gOa0u+i9rOWPkeS6i+S7tu+8mlwiLHJlcylcclxuICAgICAgcmV0dXJue1xyXG4gICAgICAgIHRpdGxlOmAjJHt0aGlzLmRhdGEudG9waWMucG9zdC50aXRsZX0jYCxcclxuICAgICAgICBpbWFnZVVybDonLi4vLi4vaW1ncy90b3BpY1NoYXJlLnBuZycsXHJcbiAgICAgICAgc3VjY2VzcyhlOmFueSl7XHJcbiAgICAgICAgICBpZD0wO1xyXG4gICAgICAgIHd4LnNob3dTaGFyZU1lbnUoe1xyXG4gICAgICAgICAgd2l0aFNoYXJlVGlja2V0OnRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbCgpe1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9LFxyXG5cclxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxyXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcbiJdfQ==