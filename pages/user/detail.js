"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../common/api");
var helper_1 = require("../../common/helper");
var app = getApp();
Page({
    data: {
        userData: null
    },
    onLoad: function (options) {
        console.log('options--------------', options);
        var userId = options.userId;
        var that = this;
        api_1.default.request({
            url: '/v1/user/detail',
            data: {
                id: userId
            },
            method: 'GET',
            success: function (res) {
                that.setData({
                    userData: res.data
                });
                console.log('userData------------------', that.data.userData);
            }
        });
    },
    onShareAppMessage: function () {
        var that = this;
        var userName = that.data.userData.user.nickname;
        return {
            title: "\u9080\u4F60\u8FDB\u5165-" + userName + "\u7684\u7A7A\u95F4",
            success: function (e) {
                wx.showShareMenu({
                    withShareTicket: true
                });
            }
        };
    },
    bindViewIndex: function () {
        helper_1.smartGotoPage({
            url: '../index'
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esd0NBQW1DO0FBQ25DLDhDQUFvRDtBQUVwRCxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBRUQsTUFBTSxZQUFDLE9BQVk7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixhQUFHLENBQUMsT0FBTyxDQUFDO1lBQ1YsR0FBRyxFQUFFLGlCQUFpQjtZQUN0QixJQUFJLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLE1BQU07YUFDWDtZQUNELE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxZQUFDLEdBQUc7Z0JBQ1QsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ25CLENBQUMsQ0FBQztnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0QsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQTtRQUNsRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLDhCQUFRLFFBQVEsdUJBQUs7WUFDNUIsT0FBTyxZQUFDLENBQU07Z0JBQ1osRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDZixlQUFlLEVBQUUsSUFBSTtpQkFDdEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUE7SUFDSCxDQUFDO0lBRUQsYUFBYTtRQUNYLHNCQUFhLENBQUM7WUFDWixHQUFHLEVBQUMsVUFBVTtTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXHJcbi8v6I635Y+W5bqU55So5a6e5L6LXHJcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9jb21tb24vYXBpJztcclxuaW1wb3J0IHsgc21hcnRHb3RvUGFnZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXInO1xyXG5cclxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgdXNlckRhdGE6IG51bGxcclxuICB9LFxyXG5cclxuICBvbkxvYWQob3B0aW9uczogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZygnb3B0aW9ucy0tLS0tLS0tLS0tLS0tJyxvcHRpb25zKTtcclxuICAgIGNvbnN0IHVzZXJJZCA9IG9wdGlvbnMudXNlcklkO1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICBhcGkucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJy92MS91c2VyL2RldGFpbCcsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBpZDogdXNlcklkXHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICB1c2VyRGF0YTogcmVzLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygndXNlckRhdGEtLS0tLS0tLS0tLS0tLS0tLS0nLHRoYXQuZGF0YS51c2VyRGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICBjb25zdCB1c2VyTmFtZSA9IHRoYXQuZGF0YS51c2VyRGF0YSEudXNlci5uaWNrbmFtZVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6IGDpgoDkvaDov5vlhaUtJHt1c2VyTmFtZX3nmoTnqbrpl7RgLFxyXG4gICAgICBzdWNjZXNzKGU6IGFueSkge1xyXG4gICAgICAgIHd4LnNob3dTaGFyZU1lbnUoe1xyXG4gICAgICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGJpbmRWaWV3SW5kZXgoKXtcclxuICAgIHNtYXJ0R290b1BhZ2Uoe1xyXG4gICAgICB1cmw6Jy4uL2luZGV4J1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KVxyXG4iXX0=