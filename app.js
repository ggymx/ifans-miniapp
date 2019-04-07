"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tracker_es_min_1 = require("./utils/tracker_es.min");
tracker_es_min_1.default({ token: 'c9e8c81c6aefc93c107fd2c43d094726', behaviour: 9, optimisedForSPA: true, useHistory: true });
App({
    onLaunch: function () {
        var _this = this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseURBQTRDO0FBQzVDLHdCQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsa0NBQWtDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFBO0FBVTNHLEdBQUcsQ0FBUztJQUNWLFFBQVE7UUFBUixpQkFnQ0M7UUE5QkMsSUFBTSxJQUFJLEdBQWEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUN4QixFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUcvQixFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxZQUFDLElBQUk7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFFeEIsQ0FBQztTQUNGLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUVyQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7NEJBRVYsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTs0QkFHdkMsSUFBSSxLQUFJLENBQUMscUJBQXFCLEVBQUU7Z0NBQzlCLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7NkJBQ3pDO3dCQUNILENBQUM7cUJBQ0YsQ0FBQyxDQUFBO2lCQUNIO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxVQUFVLEVBQUUsRUFDWDtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0cmFja2VyIGZyb20gJy4vdXRpbHMvdHJhY2tlcl9lcy5taW4nXHJcbnRyYWNrZXIoe3Rva2VuOiAnYzllOGM4MWM2YWVmYzkzYzEwN2ZkMmM0M2QwOTQ3MjYnLCBiZWhhdmlvdXI6IDksIG9wdGltaXNlZEZvclNQQTogdHJ1ZSwgdXNlSGlzdG9yeTogdHJ1ZX0pXHJcblxyXG4vLyBhcHAudHNcclxuZXhwb3J0IGludGVyZmFjZSBJTXlBcHAge1xyXG4gIGdsb2JhbERhdGE6IHtcclxuICAgIHVzZXJJbmZvPzogd3guVXNlckluZm8sXHJcbiAgfVxyXG4gIHVzZXJJbmZvUmVhZHlDYWxsYmFjaz8ocmVzOiB3eC5Vc2VySW5mbyk6IHZvaWRcclxufVxyXG5cclxuQXBwPElNeUFwcD4oe1xyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgLy8g5bGV56S65pys5Zyw5a2Y5YKo6IO95YqbXHJcbiAgICBjb25zdCBsb2dzOiBudW1iZXJbXSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW11cclxuICAgIGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxyXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoJ2xvZ3MnLCBsb2dzKVxyXG5cclxuICAgIC8vIOeZu+W9lVxyXG4gICAgd3gubG9naW4oe1xyXG4gICAgICBzdWNjZXNzKF9yZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhfcmVzLmNvZGUpXHJcbiAgICAgICAgLy8g5Y+R6YCBIF9yZXMuY29kZSDliLDlkI7lj7DmjaLlj5Ygb3BlbklkLCBzZXNzaW9uS2V5LCB1bmlvbklkXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgLy8g6I635Y+W55So5oi35L+h5oGvXHJcbiAgICB3eC5nZXRTZXR0aW5nKHtcclxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7DvvIzkuI3kvJrlvLnmoYZcclxuICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgICAvLyDlj6/ku6XlsIYgcmVzIOWPkemAgee7meWQjuWPsOino+eggeWHuiB1bmlvbklkXHJcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cclxuICAgICAgICAgICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjayhyZXMudXNlckluZm8pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZ2xvYmFsRGF0YToge1xyXG4gIH0sXHJcbn0pXHJcbiJdfQ==