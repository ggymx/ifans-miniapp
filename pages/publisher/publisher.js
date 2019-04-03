"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestApi_1 = require("../../testApi/TestApi");
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        topic: null,
        comment: {}
    },
    onLoad: function (options) {
        var _this = this;
        var tId = options.tid;
        var cId = options.cid;
        if (tId != 0) {
            console.log("tId存在！");
            this.setData({
                topic: TestApi_1.TestApi.getTopic(tId),
                comment: TestApi_1.TestApi.getComment(cId)
            });
        }
        else {
            console.log("tId不存在！");
            this.setData({
                comment: TestApi_1.TestApi.getComment(cId)
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsaURBQWdEO0FBUWhELElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsS0FBSyxFQUFDLElBQUk7UUFDVixPQUFPLEVBQUUsRUFBRTtLQUNaO0lBR0QsTUFBTSxZQUFDLE9BQVc7UUFBbEIsaUJBbURDO1FBbERDLElBQUksR0FBRyxHQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDcEIsSUFBSSxHQUFHLEdBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNwQixJQUFHLEdBQUcsSUFBRSxDQUFDLEVBQUM7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3ZCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osS0FBSyxFQUFDLGlCQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztnQkFDM0IsT0FBTyxFQUFFLGlCQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQzthQUNqQyxDQUFDLENBQUM7U0FDSDthQUFJO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLE9BQU8sRUFBQyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7YUFDaEMsQ0FBQyxDQUFBO1NBQ0g7UUFXQSxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDakMsV0FBVyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFBO1NBQ0g7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRzVCLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxVQUFDLEdBQUc7Z0JBQzlCLEtBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osUUFBUSxFQUFFLEdBQUc7b0JBQ2IsV0FBVyxFQUFFLElBQUk7aUJBQ2xCLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQTtTQUNGO2FBQU07WUFFTCxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0JBQ1YsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtvQkFDdEMsS0FBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLFdBQVcsRUFBRSxJQUFJO3FCQUNsQixDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUNGLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUVELFdBQVcsWUFBQyxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xyXG4vL+iOt+WPluW6lOeUqOWunuS+i1xyXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXHJcblxyXG4vL+iwg+eUqOWQjuWPsGFwaVxyXG4vKuWvvOWFpWluZGV4Pz8/ICovXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vY29tbW9uL2FwaSdcclxuaW1wb3J0IHsgSVRvcGljRGV0YWlsUGFyYW1zLCBJVG9waWNEZXRhaWxSZXNwb25zZSB9IGZyb20gJy4uLy4uL2NvbW1vbi90eXBlcy9odHRwX21zZyc7XHJcbmltcG9ydCB7IFRlc3RBcGkgfSBmcm9tICcuLi8uLi90ZXN0QXBpL1Rlc3RBcGknO1xyXG5cclxuLy8gbGV0IGdldFRvcGljPWFzeW5jIChvYmo6SVRvcGljRGV0YWlsUGFyYW1zKTpQcm9taXNlPElUb3BpY0RldGFpbFJlc3BvbnNlPj0+e1xyXG4vLyAgICAgcmV0dXJuIGF3YWl0IGFwaS5nZXRUb3BpYyhvYmopO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxyXG4gICAgdXNlckluZm86IHt9LFxyXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxyXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxyXG4gICAgdG9waWM6bnVsbCxcclxuICAgIGNvbW1lbnQ6IHt9XHJcbiAgfSxcclxuXHJcbiAgLypvcHRpb25zOuiOt+WPlnVybOWPguaVsCAqL1xyXG4gIG9uTG9hZChvcHRpb25zOmFueSkge1xyXG4gICAgbGV0IHRJZD1vcHRpb25zLnRpZDtcclxuICAgIGxldCBjSWQ9b3B0aW9ucy5jaWQ7XHJcbiAgICBpZih0SWQhPTApe1xyXG4gICAgICBjb25zb2xlLmxvZyhcInRJZOWtmOWcqO+8gVwiKVxyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHRvcGljOlRlc3RBcGkuZ2V0VG9waWModElkKSxcclxuICAgICAgY29tbWVudDogVGVzdEFwaS5nZXRDb21tZW50KGNJZClcclxuICAgIH0pO1xyXG4gICB9ZWxzZXtcclxuICAgICBjb25zb2xlLmxvZyhcInRJZOS4jeWtmOWcqO+8gVwiKTtcclxuICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgIGNvbW1lbnQ6VGVzdEFwaS5nZXRDb21tZW50KGNJZClcclxuICAgICB9KVxyXG4gICB9XHJcbiAgICAvLyBnZXRUb3BpYyh7aWQ6MX0pLnRoZW4oKGRhdGEpPT57XHJcblxyXG4gICAgLy8gIGxldCBjcmVhdEF0PWRhdGEudG9waWMuY3JlYXRlQXQudG9Mb2NhbGVTdHJpbmcoKVxyXG5cclxuICAgIC8vICB0aGlzLnNldERhdGEhKHtkYXRhOmRhdGEsY3JlYXRBdDpjcmVhdEF0fSlcclxuICAgIC8vICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgLy8gfSkuY2F0Y2goKTtcclxuXHJcblxyXG5cclxuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICB1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXHJcbiAgICAgICAgaGFzVXNlckluZm86IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XHJcbiAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXHJcbiAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcclxuICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgIHVzZXJJbmZvOiByZXMsXHJcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXHJcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxyXG4gICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcclxuICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG59KVxyXG4iXX0=