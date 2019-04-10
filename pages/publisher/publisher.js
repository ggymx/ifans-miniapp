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
        comment: null,
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
    bindViewTopic: function (event) {
        var tid = event.currentTarget.dataset.tid;
        wx.navigateTo({
            url: "../topic-detail/topic-detail?tid=" + tid,
            success: function () {
            }
        });
    },
    onLoad: function (options) {
        var _this = this;
        var launchPara = wx.getLaunchOptionsSync();
        if (launchPara.scene == 1007) {
            this.setData({
                sharCard: true
            });
        }
        var tId = options.tid;
        var cId = options.cid;
        console.log("接收到的话题id：" + tId);
        console.log("接受到的投稿id：" + cId);
        var that = this;
        wx.request({
            url: 'https://api-test.ifans.pub/v1/post/detail',
            method: 'GET',
            data: {
                id: tId
            },
            success: function (res) {
                console.log("接受到的话题详情-------------------：");
                console.log(res.data);
                that.setData({
                    topic: res.data
                });
            },
            fail: function () {
            }
        });
        wx.request({
            url: 'https://api-test.ifans.pub/v1/post/detail',
            method: 'GET',
            data: {
                id: cId
            },
            success: function (res) {
                console.log("接受到的投稿详情-------------------：");
                console.log(res.data);
                that.setData({
                    comment: res.data
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
        var text = this.data.comment.post.text;
        console.log("激活转发事件：", res);
        if (this.data.comment.post.text.length > 10) {
            text = this.data.comment.post.text.substring(0, 10) + "...";
        }
        return {
            title: "#" + this.data.topic.post.title + "#" + text,
            imageUrl: '../../imgs/topicShare.png',
            success: function (e) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFFNUIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxLQUFLLEVBQUMsSUFBSTtRQUNWLE9BQU8sRUFBRSxJQUFJO1FBQ2IsUUFBUSxFQUFDLEtBQUs7S0FDZjtJQUNELGFBQWEsWUFBQyxLQUFTO1FBQ3JCLElBQUksR0FBRyxHQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUN4QyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFDLGlDQUFpQyxHQUFDLEdBQUc7WUFDekMsT0FBTyxFQUFDO2dCQUNOLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFDLE1BQU07aUJBQ2IsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxhQUFhLFlBQUMsS0FBUztRQUNyQixJQUFJLEdBQUcsR0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDeEMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBQyxzQ0FBb0MsR0FBSztZQUM3QyxPQUFPO1lBRVAsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLFlBQUMsT0FBVztRQUFsQixpQkE0RkM7UUF6RkcsSUFBSSxVQUFVLEdBQUMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDekMsSUFBRyxVQUFVLENBQUMsS0FBSyxJQUFFLElBQUksRUFBQztZ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QyxJQUFJLENBQUMsT0FBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsR0FBQyxLQUFLLENBQUE7U0FDdkQ7UUFDQSxPQUFNO1lBQ0osS0FBSyxFQUFDLE1BQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBSSxJQUFNO1lBQzlDLFFBQVEsRUFBQywyQkFBMkI7WUFDcEMsT0FBTyxZQUFDLENBQUs7Z0JBQ2IsRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDZixlQUFlLEVBQUMsSUFBSTtpQkFDckIsQ0FBQyxDQUFBO1lBQ0YsQ0FBQztZQUNELElBQUk7WUFFSixDQUFDO1NBQ0YsQ0FBQTtJQUNMLENBQUM7SUFFRCxXQUFXLFlBQUMsQ0FBTTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDM0MsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcclxuLy/ojrflj5blupTnlKjlrp7kvotcclxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xyXG5cclxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgbW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXHJcbiAgICB1c2VySW5mbzoge30sXHJcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXHJcbiAgICB0b3BpYzpudWxsLFxyXG4gICAgY29tbWVudDogbnVsbCxcclxuICAgIHNoYXJDYXJkOmZhbHNlXHJcbiAgfSxcclxuICBiaW5kVmlld1BhcnRpKGV2ZW50OmFueSl7XHJcbiAgICB2YXIgdGlkPWV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50aWQ7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOicuLi9wYXJ0aWNpcGF0ZS9wYXJ0aWNpcGF0ZT90aWQ9Jyt0aWQsXHJcbiAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24oKXtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6J+WPkeW4g+ivnemimCdcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBiaW5kVmlld1RvcGljKGV2ZW50OmFueSl7XHJcbiAgICB2YXIgdGlkPWV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50aWQ7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOmAuLi90b3BpYy1kZXRhaWwvdG9waWMtZGV0YWlsP3RpZD0ke3RpZH1gLFxyXG4gICAgICBzdWNjZXNzKCl7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIC8qb3B0aW9uczrojrflj5Z1cmzlj4LmlbAgKi9cclxuICBvbkxvYWQob3B0aW9uczphbnkpIHtcclxuXHJcbiAgICAgIC8v6I635Y+W5Zy65pmv5YC877yM5qC55o2u5Zy65pmv5YC85YiH5o2i5a+86Iiq5qCP55qE54q25oCBXHJcbiAgICAgIGxldCBsYXVuY2hQYXJhPXd4LmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICAgIGlmKGxhdW5jaFBhcmEuc2NlbmU9PTEwMDcpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgc2hhckNhcmQ6dHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgbGV0IHRJZD1vcHRpb25zLnRpZDtcclxuICAgIGxldCBjSWQ9b3B0aW9ucy5jaWQ7XHJcbiAgICBjb25zb2xlLmxvZyhcIuaOpeaUtuWIsOeahOivnemimGlk77yaXCIrdElkKTtcclxuICAgIGNvbnNvbGUubG9nKFwi5o6l5Y+X5Yiw55qE5oqV56i/aWTvvJpcIitjSWQpO1xyXG4gICAgdmFyIHRoYXQ9dGhpcztcclxuICAgIC8v6I635Y+W6K+d6aKY6K+m5oOFXHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuXHJcbiAgICAgIHVybDonaHR0cHM6Ly9hcGktdGVzdC5pZmFucy5wdWIvdjEvcG9zdC9kZXRhaWwnLFxyXG5cclxuICAgICAgbWV0aG9kOidHRVQnLFxyXG5cclxuICAgICAgZGF0YTp7XHJcbiAgICAgICAgaWQ6dElkXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmjqXlj5fliLDnmoTor53popjor6bmg4UtLS0tLS0tLS0tLS0tLS0tLS0t77yaXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIC8v6K6+572u5pWw5o2uXHJcbiAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICB0b3BpYzpyZXMuZGF0YVxyXG4gICAgICAgIH0pOyBcclxuXHJcbiAgICAgIH0sICBcclxuICAgICAgZmFpbCgpe1xyXG5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy/ojrflj5bmipXnqL/or6bmg4VcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG5cclxuICAgICAgdXJsOidodHRwczovL2FwaS10ZXN0LmlmYW5zLnB1Yi92MS9wb3N0L2RldGFpbCcsXHJcblxyXG4gICAgICBtZXRob2Q6J0dFVCcsXHJcblxyXG4gICAgICBkYXRhOntcclxuICAgICAgICBpZDpjSWRcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuaOpeWPl+WIsOeahOaKleeov+ivpuaDhS0tLS0tLS0tLS0tLS0tLS0tLS3vvJpcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgLy/orr7nva7mlbDmja5cclxuICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgIGNvbW1lbnQ6cmVzLmRhdGFcclxuICAgICAgICB9KTsgXHJcblxyXG4gICAgICB9LCAgXHJcbiAgICAgIGZhaWwoKXtcclxuXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxyXG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xyXG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxyXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XHJcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSAocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICB1c2VySW5mbzogcmVzLFxyXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxyXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcclxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8q6L2s5Y+R5YiG5Lqr55uR5ZCs5LqL5Lu2ICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzOmFueSl7XHJcbiAgICAvLyB2YXIgdGhhdD10aGlzO1xyXG4gICAgbGV0IHRleHQ9dGhpcy5kYXRhLmNvbW1lbnQhLnBvc3QudGV4dDtcclxuICAgIGNvbnNvbGUubG9nKFwi5r+A5rS76L2s5Y+R5LqL5Lu277yaXCIscmVzKVxyXG4gICAgIGlmKHRoaXMuZGF0YS5jb21tZW50IS5wb3N0LnRleHQubGVuZ3RoPjEwKXtcclxuICAgICAgdGV4dD10aGlzLmRhdGEuY29tbWVudCEucG9zdC50ZXh0LnN1YnN0cmluZygwLDEwKStcIi4uLlwiXHJcbiAgICAgfVxyXG4gICAgICByZXR1cm57XHJcbiAgICAgICAgdGl0bGU6YCMke3RoaXMuZGF0YS50b3BpYy5wb3N0LnRpdGxlfSMke3RleHR9YCxcclxuICAgICAgICBpbWFnZVVybDonLi4vLi4vaW1ncy90b3BpY1NoYXJlLnBuZycsXHJcbiAgICAgICAgc3VjY2VzcyhlOmFueSl7XHJcbiAgICAgICAgd3guc2hvd1NoYXJlTWVudSh7XHJcbiAgICAgICAgICB3aXRoU2hhcmVUaWNrZXQ6dHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsKCl7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH0sXHJcblxyXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXHJcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuIl19