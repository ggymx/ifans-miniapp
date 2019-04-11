"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tracker_es_min_1 = require("./utils/tracker_es.min");
var api_1 = require("./common/api");
tracker_es_min_1.default({ token: 'c9e8c81c6aefc93c107fd2c43d094726', behaviour: 9, optimisedForSPA: true, useHistory: true });
App({
    onLaunch: function () {
        var _this = this;
        api_1.default.init('https://api-test.ifans.pub');
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.login({
            success: function (_res) {
                console.log(_res.code);
            },
        });
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            _this.globalData.userInfo = res.userInfo;
                            if (_this.userInfoReadyCallback) {
                                _this.userInfoReadyCallback(res.userInfo);
                            }
                        },
                    });
                }
            },
        });
    },
    globalData: {},
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseURBQTRDO0FBQzVDLG9DQUErQjtBQUMvQix3QkFBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLGtDQUFrQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTtBQVUzRyxHQUFHLENBQVM7SUFDVixRQUFRO1FBQVIsaUJBaUNDO1FBaENDLGFBQUcsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtRQUV0QyxJQUFNLElBQUksR0FBYSxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQ3hCLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRy9CLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUCxPQUFPLFlBQUMsSUFBSTtnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUV4QixDQUFDO1NBQ0YsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1gsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7b0JBRXJDLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRzs0QkFFVixLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBOzRCQUd2QyxJQUFJLEtBQUksQ0FBQyxxQkFBcUIsRUFBRTtnQ0FDOUIsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTs2QkFDekM7d0JBQ0gsQ0FBQztxQkFDRixDQUFDLENBQUE7aUJBQ0g7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFVBQVUsRUFBRSxFQUNYO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRyYWNrZXIgZnJvbSAnLi91dGlscy90cmFja2VyX2VzLm1pbidcclxuaW1wb3J0IGFwaSBmcm9tICcuL2NvbW1vbi9hcGknO1xyXG50cmFja2VyKHt0b2tlbjogJ2M5ZThjODFjNmFlZmM5M2MxMDdmZDJjNDNkMDk0NzI2JywgYmVoYXZpb3VyOiA5LCBvcHRpbWlzZWRGb3JTUEE6IHRydWUsIHVzZUhpc3Rvcnk6IHRydWV9KVxyXG5cclxuLy8gYXBwLnRzXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU15QXBwIHtcclxuICBnbG9iYWxEYXRhOiB7XHJcbiAgICB1c2VySW5mbz86IHd4LlVzZXJJbmZvLFxyXG4gIH1cclxuICB1c2VySW5mb1JlYWR5Q2FsbGJhY2s/KHJlczogd3guVXNlckluZm8pOiB2b2lkXHJcbn1cclxuXHJcbkFwcDxJTXlBcHA+KHtcclxuICBvbkxhdW5jaCgpIHtcclxuICAgIGFwaS5pbml0KCdodHRwczovL2FwaS10ZXN0LmlmYW5zLnB1YicpXHJcbiAgICAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcclxuICAgIGNvbnN0IGxvZ3M6IG51bWJlcltdID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXVxyXG4gICAgbG9ncy51bnNoaWZ0KERhdGUubm93KCkpXHJcbiAgICB3eC5zZXRTdG9yYWdlU3luYygnbG9ncycsIGxvZ3MpXHJcblxyXG4gICAgLy8g55m75b2VXHJcbiAgICB3eC5sb2dpbih7XHJcbiAgICAgIHN1Y2Nlc3MoX3Jlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKF9yZXMuY29kZSlcclxuICAgICAgICAvLyDlj5HpgIEgX3Jlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cclxuICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG4gICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensO+8jOS4jeS8muW8ueahhlxyXG4gICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIOWPr+S7peWwhiByZXMg5Y+R6YCB57uZ5ZCO5Y+w6Kej56CB5Ye6IHVuaW9uSWRcclxuICAgICAgICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICAgICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxyXG4gICAgICAgICAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcclxuICAgICAgICAgICAgICBpZiAodGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKHJlcy51c2VySW5mbylcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgfSxcclxuICBnbG9iYWxEYXRhOiB7XHJcbiAgfSxcclxufSlcclxuIl19