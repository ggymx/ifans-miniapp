"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        topic: {},
        comment: {}
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
        var id = options.tid;
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
                        id: res.data.post.refPostId
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
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWMtZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9waWMtZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFFNUIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sRUFBQyxFQUFFO0tBQ1g7SUFDRCxhQUFhLFlBQUMsS0FBUztRQUNyQixJQUFJLEdBQUcsR0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDeEMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBQyxpQ0FBaUMsR0FBQyxHQUFHO1lBQ3pDLE9BQU8sRUFBQztnQkFDTixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBQyxNQUFNO2lCQUNiLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsTUFBTSxZQUFDLE9BQVc7UUFBbEIsaUJBMkVDO1FBMUVDLElBQUksRUFBRSxHQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDbkIsSUFBSSxJQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ2QsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBQywyQ0FBMkM7WUFDL0MsTUFBTSxFQUFDLEtBQUs7WUFDWixJQUFJLEVBQUM7Z0JBQ0gsRUFBRSxFQUFDLEVBQUU7YUFDTjtZQUNELE9BQU8sWUFBQyxHQUFHO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQTtnQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRXRCLElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osS0FBSyxFQUFDLEdBQUcsQ0FBQyxJQUFJO2lCQUNmLENBQUMsQ0FBQztnQkFFSCxFQUFFLENBQUMsT0FBTyxDQUNSO29CQUNFLEdBQUcsRUFBQyx5Q0FBeUM7b0JBRTdDLE1BQU0sRUFBQyxLQUFLO29CQUVaLElBQUksRUFBQzt3QkFDSCxFQUFFLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztxQkFDM0I7b0JBQ0QsT0FBTyxZQUFDLEdBQUc7d0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO3dCQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFFdEIsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFFWixPQUFPLEVBQUMsR0FBRyxDQUFDLElBQUk7eUJBQ2pCLENBQUMsQ0FBQztvQkFDTCxDQUFDO29CQUNELElBQUksWUFBQyxHQUFHO3dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMxQixDQUFDO2lCQUNGLENBQ0YsQ0FBQTtZQUVILENBQUM7WUFDRCxJQUFJO1lBRUosQ0FBQztTQUNGLENBQUMsQ0FBQztRQUdILElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUE7U0FDSDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHNUIsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDOUIsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRLEVBQUUsR0FBRztvQkFDYixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFBO1NBQ0Y7YUFBTTtZQUVMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsV0FBVyxFQUFFLElBQUk7cUJBQ2xCLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUQsV0FBVyxZQUFDLENBQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNkLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXHJcbi8v6I635Y+W5bqU55So5a6e5L6LXHJcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcclxuXHJcblxyXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6JyxcclxuICAgIHVzZXJJbmZvOiB7fSxcclxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcclxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcclxuICAgIHRvcGljOiB7fSxcclxuICAgIGNvbW1lbnQ6e31cclxuICB9LFxyXG4gIGJpbmRWaWV3UGFydGkoZXZlbnQ6YW55KXtcclxuICAgIHZhciB0aWQ9ZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnRpZDtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6Jy4uL3BhcnRpY2lwYXRlL3BhcnRpY2lwYXRlP3RpZD0nK3RpZCxcclxuICAgICAgc3VjY2VzczpmdW5jdGlvbigpe1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTon5Y+R5biD6K+d6aKYJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvKm9wdGlvbnM66I635Y+WdXJs5Y+C5pWwICovXHJcbiAgb25Mb2FkKG9wdGlvbnM6YW55KSB7XHJcbiAgICBsZXQgaWQ9b3B0aW9ucy50aWQ7XHJcbiAgICB2YXIgdGhhdD10aGlzO1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDonaHR0cHM6Ly9hcGktdGVzdC5pZmFucy5wdWIvdjEvcG9zdC9kZXRhaWwnLFxyXG4gICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgIGRhdGE6e1xyXG4gICAgICAgIGlkOmlkXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuaOpeWPl+WIsOeahOivnemimOivpuaDhS0tLS0tLS0tLS0tLS0tLS0tLS3vvJpcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgLy/orr7nva7mlbDmja5cclxuICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgIHRvcGljOnJlcy5kYXRhXHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgICAgICB3eC5yZXF1ZXN0KFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6J2h0dHBzOi8vYXBpLXRlc3QuaWZhbnMucHViL3YxL3Bvc3QvbGlzdCcsXHJcbiAgICBcclxuICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgIGlkOnJlcy5kYXRhLnBvc3QucmVmUG9zdElkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaOpeWPl+WIsOeahOWPguS4juWIl+ihqC0tLS0tLS0tLS0tLS0tLS0tLS3vvJpcIilcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgLy/orr7nva7mlbDmja5cclxuICAgICAgICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgIC8vIHRvcGljOnJlcy5kYXRhXHJcbiAgICAgICAgICAgICAgICBjb21tZW50OnJlcy5kYXRhXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sICBcclxuICAgICAgICAgICAgZmFpbChlcnIpe1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5omT5Y2w6ZSZ6K+v5L+h5oGvXCIpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKSAgIFxyXG5cclxuICAgICAgfSwgIFxyXG4gICAgICBmYWlsKCl7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgXHJcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxyXG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xyXG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxyXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XHJcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSAocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICB1c2VySW5mbzogcmVzLFxyXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxyXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcclxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXHJcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuIl19