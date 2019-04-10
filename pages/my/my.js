"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        partiList: [],
        userData: null,
        sharCard: false
    },
    onLoad: function (options) {
        var _this = this;
        var launchPara = wx.getLaunchOptionsSync();
        if (launchPara.scene == 1007) {
            this.setData({
                sharCard: true
            });
        }
        var userId = options.userId;
        console.log("接收到的userId：" + userId);
        var that = this;
        wx.request({
            url: 'https://api-test.ifans.pub/v1/user/detail',
            data: {
                id: userId
            },
            method: 'GET',
            success: function (res) {
                console.log("获取用户对象-----------------------");
                console.log(res.data);
                that.setData({
                    userData: res.data
                });
            },
            fail: function (err) {
                console.log("获取用户对象失败------------------------");
                console.log(err.errMsg);
            }
        });
        console.log(this.data.partiList);
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
    onShareAppMessage: function () {
        var that = this;
        var userName = that.data.userData.user.nickname;
        return {
            title: "\u9080\u4F60\u8FDB\u5165-" + userName + "\u7684\u7A7A\u95F4",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsU0FBUyxFQUFDLEVBQUU7UUFDWixRQUFRLEVBQUMsSUFBSTtRQUNiLFFBQVEsRUFBQyxLQUFLO0tBQ2Y7SUFFRCxNQUFNLFlBQUMsT0FBVztRQUFsQixpQkE4REM7UUEzREQsSUFBSSxVQUFVLEdBQUMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDekMsSUFBRyxVQUFVLENBQUMsS0FBSyxJQUFFLElBQUksRUFBQztZQUN4QixJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFFBQVEsRUFBQyxJQUFJO2FBQ2QsQ0FBQyxDQUFDO1NBQ0o7UUFFQyxJQUFJLE1BQU0sR0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxDLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQztRQUNkLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUMsMkNBQTJDO1lBQy9DLElBQUksRUFBQztnQkFDSCxFQUFFLEVBQUMsTUFBTTthQUNWO1lBQ0QsTUFBTSxFQUFDLEtBQUs7WUFDWixPQUFPLFlBQUMsR0FBRztnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7Z0JBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLFFBQVEsRUFBQyxHQUFHLENBQUMsSUFBSTtpQkFDbEIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUNELElBQUksWUFBQyxHQUFHO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztnQkFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUIsQ0FBQztTQUNGLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUdqQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDakMsV0FBVyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFBO1NBQ0g7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRzVCLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxVQUFDLEdBQUc7Z0JBQzlCLEtBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osUUFBUSxFQUFFLEdBQUc7b0JBQ2IsV0FBVyxFQUFFLElBQUk7aUJBQ2xCLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQTtTQUNGO2FBQU07WUFFTCxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0JBQ1YsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtvQkFDdEMsS0FBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLFdBQVcsRUFBRSxJQUFJO3FCQUNsQixDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUNGLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUVILGlCQUFpQjtRQUNmLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQztRQUNkLElBQUksUUFBUSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDOUMsT0FBTTtZQUNBLEtBQUssRUFBQyw4QkFBUSxRQUFRLHVCQUFLO1lBQzNCLFFBQVEsRUFBQywyQkFBMkI7WUFDcEMsT0FBTyxZQUFDLENBQUs7Z0JBQ2IsRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDZixlQUFlLEVBQUMsSUFBSTtpQkFDckIsQ0FBQyxDQUFBO1lBQ0YsQ0FBQztZQUNELElBQUk7WUFFSixDQUFDO1NBQ04sQ0FBQTtJQUNILENBQUM7SUFFQyxXQUFXLFlBQUMsQ0FBTTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDM0MsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcclxuLy/ojrflj5blupTnlKjlrp7kvotcclxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xyXG5cclxuXHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxyXG4gICAgdXNlckluZm86IHt9LFxyXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxyXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxyXG4gICAgcGFydGlMaXN0OltdLFxyXG4gICAgdXNlckRhdGE6bnVsbCxcclxuICAgIHNoYXJDYXJkOmZhbHNlXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkKG9wdGlvbnM6YW55KSB7XHJcblxyXG4gIC8v6I635Y+W5Zy65pmv5YC877yM5qC55o2u5Zy65pmv5YC85YiH5o2i5a+86Iiq5qCP55qE54q25oCBXHJcbiAgbGV0IGxhdW5jaFBhcmE9d3guZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcclxuICBpZihsYXVuY2hQYXJhLnNjZW5lPT0xMDA3KXtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICBzaGFyQ2FyZDp0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcbiBcclxuICAgIGxldCB1c2VySWQ9b3B0aW9ucy51c2VySWQ7XHJcbiAgICBjb25zb2xlLmxvZyhcIuaOpeaUtuWIsOeahHVzZXJJZO+8mlwiK3VzZXJJZCk7XHJcblxyXG4gICAgdmFyIHRoYXQ9dGhpcztcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6J2h0dHBzOi8vYXBpLXRlc3QuaWZhbnMucHViL3YxL3VzZXIvZGV0YWlsJyxcclxuICAgICAgZGF0YTp7XHJcbiAgICAgICAgaWQ6dXNlcklkXHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuiOt+WPlueUqOaIt+WvueixoS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgIHVzZXJEYXRhOnJlcy5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoZXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuiOt+WPlueUqOaIt+WvueixoeWksei0pS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIuZXJyTXNnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhLnBhcnRpTGlzdCk7XHJcbiAgXHJcblxyXG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcclxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcclxuICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cclxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxyXG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgdXNlckluZm86IHJlcyxcclxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcclxuICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXHJcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxub25TaGFyZUFwcE1lc3NhZ2UoKXtcclxuICB2YXIgdGhhdD10aGlzO1xyXG4gIGxldCB1c2VyTmFtZT10aGF0LmRhdGEudXNlckRhdGEhLnVzZXIubmlja25hbWVcclxuICByZXR1cm57XHJcbiAgICAgICAgdGl0bGU6YOmCgOS9oOi/m+WFpS0ke3VzZXJOYW1lfeeahOepuumXtGAsXHJcbiAgICAgICAgaW1hZ2VVcmw6Jy4uLy4uL2ltZ3MvdG9waWNTaGFyZS5wbmcnLFxyXG4gICAgICAgIHN1Y2Nlc3MoZTphbnkpe1xyXG4gICAgICAgIHd4LnNob3dTaGFyZU1lbnUoe1xyXG4gICAgICAgICAgd2l0aFNoYXJlVGlja2V0OnRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbCgpe1xyXG5cclxuICAgICAgICB9XHJcbiAgfVxyXG59LFxyXG5cclxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxyXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcbiJdfQ==