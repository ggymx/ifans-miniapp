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
        userData: null
    },
    onLoad: function (options) {
        var _this = this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsU0FBUyxFQUFDLEVBQUU7UUFDWixRQUFRLEVBQUMsSUFBSTtLQUNkO0lBRUQsTUFBTSxZQUFDLE9BQVc7UUFBbEIsaUJBcURDO1FBcERDLElBQUksTUFBTSxHQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUMsTUFBTSxDQUFDLENBQUM7UUFFbEMsSUFBSSxJQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ2QsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBQywyQ0FBMkM7WUFDL0MsSUFBSSxFQUFDO2dCQUNILEVBQUUsRUFBQyxNQUFNO2FBQ1Y7WUFDRCxNQUFNLEVBQUMsS0FBSztZQUNaLE9BQU8sWUFBQyxHQUFHO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztnQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osUUFBUSxFQUFDLEdBQUcsQ0FBQyxJQUFJO2lCQUNsQixDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0QsSUFBSSxZQUFDLEdBQUc7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO2dCQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQixDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBR2pDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUE7U0FDSDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHNUIsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDOUIsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRLEVBQUUsR0FBRztvQkFDYixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFBO1NBQ0Y7YUFBTTtZQUVMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsV0FBVyxFQUFFLElBQUk7cUJBQ2xCLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUgsaUJBQWlCO1FBQ2YsSUFBSSxJQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ2QsSUFBSSxRQUFRLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQTtRQUM5QyxPQUFNO1lBQ0EsS0FBSyxFQUFDLDhCQUFRLFFBQVEsdUJBQUs7WUFDM0IsUUFBUSxFQUFDLDJCQUEyQjtZQUNwQyxPQUFPLFlBQUMsQ0FBSztnQkFDYixFQUFFLENBQUMsYUFBYSxDQUFDO29CQUNmLGVBQWUsRUFBQyxJQUFJO2lCQUNyQixDQUFDLENBQUE7WUFDRixDQUFDO1lBQ0QsSUFBSTtZQUVKLENBQUM7U0FDTixDQUFBO0lBQ0gsQ0FBQztJQUVDLFdBQVcsWUFBQyxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xyXG4vL+iOt+WPluW6lOeUqOWunuS+i1xyXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXHJcblxyXG5cclxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgbW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXHJcbiAgICB1c2VySW5mbzoge30sXHJcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXHJcbiAgICBwYXJ0aUxpc3Q6W10sXHJcbiAgICB1c2VyRGF0YTpudWxsXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkKG9wdGlvbnM6YW55KSB7XHJcbiAgICBsZXQgdXNlcklkPW9wdGlvbnMudXNlcklkO1xyXG4gICAgY29uc29sZS5sb2coXCLmjqXmlLbliLDnmoR1c2VySWTvvJpcIit1c2VySWQpO1xyXG5cclxuICAgIHZhciB0aGF0PXRoaXM7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOidodHRwczovL2FwaS10ZXN0LmlmYW5zLnB1Yi92MS91c2VyL2RldGFpbCcsXHJcbiAgICAgIGRhdGE6e1xyXG4gICAgICAgIGlkOnVzZXJJZFxyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgY29uc29sZS5sb2coXCLojrflj5bnlKjmiLflr7nosaEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICB1c2VyRGF0YTpyZXMuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKGVycil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLojrflj5bnlKjmiLflr7nosaHlpLHotKUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLmVyck1zZyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5wYXJ0aUxpc3QpO1xyXG4gIFxyXG5cclxuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICB1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXHJcbiAgICAgICAgaGFzVXNlckluZm86IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XHJcbiAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXHJcbiAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcclxuICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgIHVzZXJJbmZvOiByZXMsXHJcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXHJcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxyXG4gICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbm9uU2hhcmVBcHBNZXNzYWdlKCl7XHJcbiAgdmFyIHRoYXQ9dGhpcztcclxuICBsZXQgdXNlck5hbWU9dGhhdC5kYXRhLnVzZXJEYXRhIS51c2VyLm5pY2tuYW1lXHJcbiAgcmV0dXJue1xyXG4gICAgICAgIHRpdGxlOmDpgoDkvaDov5vlhaUtJHt1c2VyTmFtZX3nmoTnqbrpl7RgLFxyXG4gICAgICAgIGltYWdlVXJsOicuLi8uLi9pbWdzL3RvcGljU2hhcmUucG5nJyxcclxuICAgICAgICBzdWNjZXNzKGU6YW55KXtcclxuICAgICAgICB3eC5zaG93U2hhcmVNZW51KHtcclxuICAgICAgICAgIHdpdGhTaGFyZVRpY2tldDp0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwoKXtcclxuXHJcbiAgICAgICAgfVxyXG4gIH1cclxufSxcclxuXHJcbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcclxuICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG59KVxyXG4iXX0=