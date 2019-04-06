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
        comment: null
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
        var tId = options.tid;
        var cId = options.cid;
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
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFFNUIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxLQUFLLEVBQUMsSUFBSTtRQUNWLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxhQUFhLFlBQUMsS0FBUztRQUNyQixJQUFJLEdBQUcsR0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDeEMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBQyxpQ0FBaUMsR0FBQyxHQUFHO1lBQ3pDLE9BQU8sRUFBQztnQkFDTixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBQyxNQUFNO2lCQUNiLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxZQUFDLE9BQVc7UUFBbEIsaUJBa0ZDO1FBakZDLElBQUksR0FBRyxHQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDcEIsSUFBSSxHQUFHLEdBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUVwQixJQUFJLElBQUksR0FBQyxJQUFJLENBQUM7UUFFZCxFQUFFLENBQUMsT0FBTyxDQUFDO1lBRVQsR0FBRyxFQUFDLDJDQUEyQztZQUUvQyxNQUFNLEVBQUMsS0FBSztZQUVaLElBQUksRUFBQztnQkFDSCxFQUFFLEVBQUMsR0FBRzthQUNQO1lBRUQsT0FBTyxZQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO2dCQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFdEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixLQUFLLEVBQUMsR0FBRyxDQUFDLElBQUk7aUJBQ2YsQ0FBQyxDQUFDO1lBRUwsQ0FBQztZQUNELElBQUk7WUFFSixDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBR0gsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUVULEdBQUcsRUFBQywyQ0FBMkM7WUFFL0MsTUFBTSxFQUFDLEtBQUs7WUFFWixJQUFJLEVBQUM7Z0JBQ0gsRUFBRSxFQUFDLEdBQUc7YUFDUDtZQUVELE9BQU8sWUFBQyxHQUFHO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQTtnQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRXRCLElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osT0FBTyxFQUFDLEdBQUcsQ0FBQyxJQUFJO2lCQUNqQixDQUFDLENBQUM7WUFFTCxDQUFDO1lBQ0QsSUFBSTtZQUVKLENBQUM7U0FDRixDQUFDLENBQUM7UUFHSCxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDakMsV0FBVyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFBO1NBQ0g7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRzVCLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxVQUFDLEdBQUc7Z0JBQzlCLEtBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osUUFBUSxFQUFFLEdBQUc7b0JBQ2IsV0FBVyxFQUFFLElBQUk7aUJBQ2xCLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQTtTQUNGO2FBQU07WUFFTCxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0JBQ1YsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtvQkFDdEMsS0FBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLFdBQVcsRUFBRSxJQUFJO3FCQUNsQixDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUNGLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUVELFdBQVcsWUFBQyxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xyXG4vL+iOt+WPluW6lOeUqOWunuS+i1xyXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXHJcblxyXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6JyxcclxuICAgIHVzZXJJbmZvOiB7fSxcclxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcclxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcclxuICAgIHRvcGljOm51bGwsXHJcbiAgICBjb21tZW50OiBudWxsXHJcbiAgfSxcclxuICBiaW5kVmlld1BhcnRpKGV2ZW50OmFueSl7XHJcbiAgICB2YXIgdGlkPWV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50aWQ7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOicuLi9wYXJ0aWNpcGF0ZS9wYXJ0aWNpcGF0ZT90aWQ9Jyt0aWQsXHJcbiAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24oKXtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6J+WPkeW4g+ivnemimCdcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICAvKm9wdGlvbnM66I635Y+WdXJs5Y+C5pWwICovXHJcbiAgb25Mb2FkKG9wdGlvbnM6YW55KSB7XHJcbiAgICBsZXQgdElkPW9wdGlvbnMudGlkO1xyXG4gICAgbGV0IGNJZD1vcHRpb25zLmNpZDtcclxuICAgICBcclxuICAgIHZhciB0aGF0PXRoaXM7XHJcbiAgICAvL+iOt+WPluivnemimOivpuaDhVxyXG4gICAgd3gucmVxdWVzdCh7XHJcblxyXG4gICAgICB1cmw6J2h0dHBzOi8vYXBpLXRlc3QuaWZhbnMucHViL3YxL3Bvc3QvZGV0YWlsJyxcclxuXHJcbiAgICAgIG1ldGhvZDonR0VUJyxcclxuXHJcbiAgICAgIGRhdGE6e1xyXG4gICAgICAgIGlkOnRJZFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5o6l5Y+X5Yiw55qE6K+d6aKY6K+m5oOFLS0tLS0tLS0tLS0tLS0tLS0tLe+8mlwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAvL+iuvue9ruaVsOaNrlxyXG4gICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgdG9waWM6cmVzLmRhdGFcclxuICAgICAgICB9KTsgXHJcblxyXG4gICAgICB9LCAgXHJcbiAgICAgIGZhaWwoKXtcclxuXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8v6I635Y+W5oqV56i/6K+m5oOFXHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuXHJcbiAgICAgIHVybDonaHR0cHM6Ly9hcGktdGVzdC5pZmFucy5wdWIvdjEvcG9zdC9kZXRhaWwnLFxyXG5cclxuICAgICAgbWV0aG9kOidHRVQnLFxyXG5cclxuICAgICAgZGF0YTp7XHJcbiAgICAgICAgaWQ6Y0lkXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmjqXlj5fliLDnmoTmipXnqL/or6bmg4UtLS0tLS0tLS0tLS0tLS0tLS0t77yaXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIC8v6K6+572u5pWw5o2uXHJcbiAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICBjb21tZW50OnJlcy5kYXRhXHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgICAgfSwgIFxyXG4gICAgICBmYWlsKCl7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcclxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcclxuICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cclxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxyXG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgdXNlckluZm86IHJlcyxcclxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcclxuICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXHJcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxyXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcbiJdfQ==