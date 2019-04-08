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
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFFNUIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxLQUFLLEVBQUMsSUFBSTtRQUNWLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxhQUFhLFlBQUMsS0FBUztRQUNyQixJQUFJLEdBQUcsR0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDeEMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBQyxpQ0FBaUMsR0FBQyxHQUFHO1lBQ3pDLE9BQU8sRUFBQztnQkFDTixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBQyxNQUFNO2lCQUNiLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxZQUFDLE9BQVc7UUFBbEIsaUJBbUZDO1FBbEZDLElBQUksR0FBRyxHQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDcEIsSUFBSSxHQUFHLEdBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLElBQUksR0FBQyxJQUFJLENBQUM7UUFFZCxFQUFFLENBQUMsT0FBTyxDQUFDO1lBRVQsR0FBRyxFQUFDLDJDQUEyQztZQUUvQyxNQUFNLEVBQUMsS0FBSztZQUVaLElBQUksRUFBQztnQkFDSCxFQUFFLEVBQUMsR0FBRzthQUNQO1lBRUQsT0FBTyxZQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO2dCQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFdEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixLQUFLLEVBQUMsR0FBRyxDQUFDLElBQUk7aUJBQ2YsQ0FBQyxDQUFDO1lBRUwsQ0FBQztZQUNELElBQUk7WUFFSixDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBR0gsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUVULEdBQUcsRUFBQywyQ0FBMkM7WUFFL0MsTUFBTSxFQUFDLEtBQUs7WUFFWixJQUFJLEVBQUM7Z0JBQ0gsRUFBRSxFQUFDLEdBQUc7YUFDUDtZQUVELE9BQU8sWUFBQyxHQUFHO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQTtnQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRXRCLElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osT0FBTyxFQUFDLEdBQUcsQ0FBQyxJQUFJO2lCQUNqQixDQUFDLENBQUM7WUFFTCxDQUFDO1lBQ0QsSUFBSTtZQUVKLENBQUM7U0FDRixDQUFDLENBQUM7UUFHSCxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDakMsV0FBVyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFBO1NBQ0g7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRzVCLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxVQUFDLEdBQUc7Z0JBQzlCLEtBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osUUFBUSxFQUFFLEdBQUc7b0JBQ2IsV0FBVyxFQUFFLElBQUk7aUJBQ2xCLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQTtTQUNGO2FBQU07WUFFTCxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0JBQ1YsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtvQkFDdEMsS0FBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLFdBQVcsRUFBRSxJQUFJO3FCQUNsQixDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUNGLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUVELFdBQVcsWUFBQyxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xyXG4vL+iOt+WPluW6lOeUqOWunuS+i1xyXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXHJcblxyXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6JyxcclxuICAgIHVzZXJJbmZvOiB7fSxcclxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcclxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcclxuICAgIHRvcGljOm51bGwsXHJcbiAgICBjb21tZW50OiBudWxsXHJcbiAgfSxcclxuICBiaW5kVmlld1BhcnRpKGV2ZW50OmFueSl7XHJcbiAgICB2YXIgdGlkPWV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50aWQ7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOicuLi9wYXJ0aWNpcGF0ZS9wYXJ0aWNpcGF0ZT90aWQ9Jyt0aWQsXHJcbiAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24oKXtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6J+WPkeW4g+ivnemimCdcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICAvKm9wdGlvbnM66I635Y+WdXJs5Y+C5pWwICovXHJcbiAgb25Mb2FkKG9wdGlvbnM6YW55KSB7XHJcbiAgICBsZXQgdElkPW9wdGlvbnMudGlkO1xyXG4gICAgbGV0IGNJZD1vcHRpb25zLmNpZDtcclxuICAgIGNvbnNvbGUubG9nKFwi5o6l5pS25Yiw55qE6K+d6aKYaWTvvJpcIit0SWQpO1xyXG4gICAgY29uc29sZS5sb2coXCLmjqXlj5fliLDnmoTmipXnqL9pZO+8mlwiK2NJZCk7XHJcbiAgICB2YXIgdGhhdD10aGlzO1xyXG4gICAgLy/ojrflj5bor53popjor6bmg4VcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG5cclxuICAgICAgdXJsOidodHRwczovL2FwaS10ZXN0LmlmYW5zLnB1Yi92MS9wb3N0L2RldGFpbCcsXHJcblxyXG4gICAgICBtZXRob2Q6J0dFVCcsXHJcblxyXG4gICAgICBkYXRhOntcclxuICAgICAgICBpZDp0SWRcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuaOpeWPl+WIsOeahOivnemimOivpuaDhS0tLS0tLS0tLS0tLS0tLS0tLS3vvJpcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgLy/orr7nva7mlbDmja5cclxuICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgIHRvcGljOnJlcy5kYXRhXHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgICAgfSwgIFxyXG4gICAgICBmYWlsKCl7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL+iOt+WPluaKleeov+ivpuaDhVxyXG4gICAgd3gucmVxdWVzdCh7XHJcblxyXG4gICAgICB1cmw6J2h0dHBzOi8vYXBpLXRlc3QuaWZhbnMucHViL3YxL3Bvc3QvZGV0YWlsJyxcclxuXHJcbiAgICAgIG1ldGhvZDonR0VUJyxcclxuXHJcbiAgICAgIGRhdGE6e1xyXG4gICAgICAgIGlkOmNJZFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5o6l5Y+X5Yiw55qE5oqV56i/6K+m5oOFLS0tLS0tLS0tLS0tLS0tLS0tLe+8mlwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAvL+iuvue9ruaVsOaNrlxyXG4gICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgY29tbWVudDpyZXMuZGF0YVxyXG4gICAgICAgIH0pOyBcclxuXHJcbiAgICAgIH0sICBcclxuICAgICAgZmFpbCgpe1xyXG5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICB1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXHJcbiAgICAgICAgaGFzVXNlckluZm86IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XHJcbiAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXHJcbiAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcclxuICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgIHVzZXJJbmZvOiByZXMsXHJcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXHJcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxyXG4gICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcclxuICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG59KVxyXG4iXX0=