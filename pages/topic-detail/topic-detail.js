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
    bindViewParti: function () {
        wx.navigateTo({
            url: '../participate/participate',
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
            url: 'http://api-test.ifans.pub/v1/post/detail',
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
                    url: 'http://api-test.ifans.pub/v1/post/list',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWMtZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9waWMtZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBZUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFFNUIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sRUFBQyxFQUFFO0tBQ1g7SUFDRCxhQUFhO1FBQ1gsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBQyw0QkFBNEI7WUFDaEMsT0FBTyxFQUFDO2dCQUNOLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFDLE1BQU07aUJBQ2IsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxNQUFNLFlBQUMsT0FBVztRQUFsQixpQkEyRUM7UUExRUMsSUFBSSxFQUFFLEdBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNuQixJQUFJLElBQUksR0FBQyxJQUFJLENBQUM7UUFDZCxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFDLDBDQUEwQztZQUM5QyxNQUFNLEVBQUMsS0FBSztZQUNaLElBQUksRUFBQztnQkFDSCxFQUFFLEVBQUMsRUFBRTthQUNOO1lBQ0QsT0FBTyxZQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO2dCQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFdEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixLQUFLLEVBQUMsR0FBRyxDQUFDLElBQUk7aUJBQ2YsQ0FBQyxDQUFDO2dCQUVILEVBQUUsQ0FBQyxPQUFPLENBQ1I7b0JBQ0UsR0FBRyxFQUFDLHdDQUF3QztvQkFFNUMsTUFBTSxFQUFDLEtBQUs7b0JBRVosSUFBSSxFQUFDO3dCQUNILEVBQUUsRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO3FCQUMzQjtvQkFDRCxPQUFPLFlBQUMsR0FBRzt3QkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUE7d0JBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUV0QixJQUFJLENBQUMsT0FBUSxDQUFDOzRCQUVaLE9BQU8sRUFBQyxHQUFHLENBQUMsSUFBSTt5QkFDakIsQ0FBQyxDQUFDO29CQUNMLENBQUM7b0JBQ0QsSUFBSSxZQUFDLEdBQUc7d0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzFCLENBQUM7aUJBQ0YsQ0FDRixDQUFBO1lBRUgsQ0FBQztZQUNELElBQUk7WUFFSixDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBR0gsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUMzQixJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVE7Z0JBQ2pDLFdBQVcsRUFBRSxJQUFJO2FBQ2xCLENBQUMsQ0FBQTtTQUNIO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUc1QixHQUFHLENBQUMscUJBQXFCLEdBQUcsVUFBQyxHQUFHO2dCQUM5QixLQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLFFBQVEsRUFBRSxHQUFHO29CQUNiLFdBQVcsRUFBRSxJQUFJO2lCQUNsQixDQUFDLENBQUE7WUFDSixDQUFDLENBQUE7U0FDRjthQUFNO1lBRUwsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDYixPQUFPLEVBQUUsVUFBQSxHQUFHO29CQUNWLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7b0JBQ3RDLEtBQUksQ0FBQyxPQUFRLENBQUM7d0JBQ1osUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO3dCQUN0QixXQUFXLEVBQUUsSUFBSTtxQkFDbEIsQ0FBQyxDQUFBO2dCQUNKLENBQUM7YUFDRixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFFRCxXQUFXLFlBQUMsQ0FBTTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDM0MsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcclxuLy/ojrflj5blupTnlKjlrp7kvotcclxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xyXG5cclxuLy/osIPnlKjlkI7lj7BhcGlcclxuLyrlr7zlhaVpbmRleD8/PyAqL1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL2NvbW1vbi9hcGknXHJcbmltcG9ydCB7IElUb3BpY0RldGFpbFBhcmFtcywgSVRvcGljRGV0YWlsUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9jb21tb24vdHlwZXMvaHR0cF9tc2cnO1xyXG5cclxuLy8gbGV0IGdldFRvcGljPWFzeW5jIChvYmo6SVRvcGljRGV0YWlsUGFyYW1zKTpQcm9taXNlPElUb3BpY0RldGFpbFJlc3BvbnNlPj0+e1xyXG4vLyAgICAgcmV0dXJuIGF3YWl0IGFwaS5nZXRUb3BpYyhvYmopO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxyXG4gICAgdXNlckluZm86IHt9LFxyXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxyXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxyXG4gICAgdG9waWM6IHt9LFxyXG4gICAgY29tbWVudDp7fVxyXG4gIH0sXHJcbiAgYmluZFZpZXdQYXJ0aSgpe1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDonLi4vcGFydGljaXBhdGUvcGFydGljaXBhdGUnLFxyXG4gICAgICBzdWNjZXNzOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiflj5HluIPor53popgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8qb3B0aW9uczrojrflj5Z1cmzlj4LmlbAgKi9cclxuICBvbkxvYWQob3B0aW9uczphbnkpIHtcclxuICAgIGxldCBpZD1vcHRpb25zLnRpZDtcclxuICAgIHZhciB0aGF0PXRoaXM7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOidodHRwOi8vYXBpLXRlc3QuaWZhbnMucHViL3YxL3Bvc3QvZGV0YWlsJyxcclxuICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICBkYXRhOntcclxuICAgICAgICBpZDppZFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmjqXlj5fliLDnmoTor53popjor6bmg4UtLS0tLS0tLS0tLS0tLS0tLS0t77yaXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIC8v6K6+572u5pWw5o2uXHJcbiAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICB0b3BpYzpyZXMuZGF0YVxyXG4gICAgICAgIH0pOyBcclxuXHJcbiAgICAgICAgd3gucmVxdWVzdChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOidodHRwOi8vYXBpLXRlc3QuaWZhbnMucHViL3YxL3Bvc3QvbGlzdCcsXHJcbiAgICBcclxuICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgIGlkOnJlcy5kYXRhLnBvc3QucmVmUG9zdElkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaOpeWPl+WIsOeahOWPguS4juWIl+ihqC0tLS0tLS0tLS0tLS0tLS0tLS3vvJpcIilcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgLy/orr7nva7mlbDmja5cclxuICAgICAgICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgIC8vIHRvcGljOnJlcy5kYXRhXHJcbiAgICAgICAgICAgICAgICBjb21tZW50OnJlcy5kYXRhXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sICBcclxuICAgICAgICAgICAgZmFpbChlcnIpe1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5omT5Y2w6ZSZ6K+v5L+h5oGvXCIpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKSAgIFxyXG5cclxuICAgICAgfSwgIFxyXG4gICAgICBmYWlsKCl7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgXHJcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxyXG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xyXG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxyXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XHJcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSAocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICB1c2VySW5mbzogcmVzLFxyXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxyXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcclxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXHJcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuIl19