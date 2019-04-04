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
        toplicList: [],
        returnInfo: {}
    },
    bindViewHot: function () {
        wx.navigateTo({
            url: '../hot/hot',
            success: function () {
                wx.showToast({
                    title: '跳转热点页'
                });
            }
        });
    },
    onLoad: function () {
        var _this = this;
        console.log(this.data.toplicList);
        this.setData({
            toplicList: TestApi_1.TestApi.getTopList(),
        });
        var that = this;
        wx.request({
            url: 'https://api-test.ifans.pub/v1/home/list',
            data: {
                cursor: 0,
                limit: 5
            },
            method: "GET",
            success: function (res) {
                console.log("index获取的数据res：");
                console.log(res.data);
                that.setData({
                    returnInfo: res.data
                });
            },
            fail: function (err) {
                console.log("index获取的数据err：");
                console.log(err);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVFBLGlEQUFnRDtBQVFoRCxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBQ25ELFVBQVUsRUFBRSxFQUFFO1FBQ2QsVUFBVSxFQUFDLEVBQUU7S0FDZDtJQUNELFdBQVc7UUFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFDLFlBQVk7WUFDaEIsT0FBTztnQkFDTCxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBQyxPQUFPO2lCQUNkLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTTtRQUFOLGlCQTJEQztRQXpEQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFVBQVUsRUFBRSxpQkFBTyxDQUFDLFVBQVUsRUFBRTtTQUNqQyxDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksR0FBQyxJQUFJLENBQUM7UUFDZCxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFDLHlDQUF5QztZQUU3QyxJQUFJLEVBQUM7Z0JBQ0gsTUFBTSxFQUFDLENBQUM7Z0JBQ1IsS0FBSyxFQUFDLENBQUM7YUFDUjtZQUVELE1BQU0sRUFBQyxLQUFLO1lBRVosT0FBTyxZQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixVQUFVLEVBQUMsR0FBRyxDQUFDLElBQUk7aUJBQ3BCLENBQUMsQ0FBQztZQUdMLENBQUM7WUFDRCxJQUFJLFlBQUMsR0FBRztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsQ0FBQztTQUNGLENBQUMsQ0FBQztRQUVILElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUE7U0FDSDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHNUIsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDOUIsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRLEVBQUUsR0FBRztvQkFDYixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFBO1NBQ0Y7YUFBTTtZQUVMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsV0FBVyxFQUFFLElBQUk7cUJBQ2xCLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUQsV0FBVyxZQUFDLENBQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNkLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXHJcbi8v6I635Y+W5bqU55So5a6e5L6LXHJcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcclxuXHJcbi8v6LCD55So5ZCO5Y+wYXBpXHJcbi8q5a+85YWlaW5kZXg/Pz8gKi9cclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9jb21tb24vYXBpJ1xyXG5pbXBvcnQgeyBJVG9waWNEZXRhaWxQYXJhbXMsIElUb3BpY0RldGFpbFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3R5cGVzL2h0dHBfbXNnJztcclxuaW1wb3J0IHsgVGVzdEFwaSB9IGZyb20gJy4uLy4uL3Rlc3RBcGkvVGVzdEFwaSc7XHJcblxyXG4vLyBsZXQgZ2V0VG9waWM9YXN5bmMgKG9iajpJVG9waWNEZXRhaWxQYXJhbXMpOlByb21pc2U8SVRvcGljRGV0YWlsUmVzcG9uc2U+PT57XHJcbi8vICAgICByZXR1cm4gYXdhaXQgYXBpLmdldFRvcGljKG9iaik7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgbW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXHJcbiAgICB1c2VySW5mbzoge30sXHJcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXHJcbiAgICB0b3BsaWNMaXN0OiBbXSxcclxuICAgIHJldHVybkluZm86e31cclxuICB9LFxyXG4gIGJpbmRWaWV3SG90KCl7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOicuLi9ob3QvaG90JyxcclxuICAgICAgc3VjY2Vzcygpe1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTon6Lez6L2s54Ot54K56aG1J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG9uTG9hZCgpIHtcclxuICAgXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEudG9wbGljTGlzdCk7XHJcblxyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHRvcGxpY0xpc3Q6IFRlc3RBcGkuZ2V0VG9wTGlzdCgpLFxyXG4gICAgfSk7XHJcbiAgICB2YXIgdGhhdD10aGlzO1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDonaHR0cHM6Ly9hcGktdGVzdC5pZmFucy5wdWIvdjEvaG9tZS9saXN0JyxcclxuXHJcbiAgICAgIGRhdGE6e1xyXG4gICAgICAgIGN1cnNvcjowLFxyXG4gICAgICAgIGxpbWl0OjVcclxuICAgICAgfSxcclxuXHJcbiAgICAgIG1ldGhvZDpcIkdFVFwiLFxyXG5cclxuICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXjojrflj5bnmoTmlbDmja5yZXPvvJpcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgcmV0dXJuSW5mbzpyZXMuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8q6YCa6L+H6L+U5Zue55qE6K+d6aKY5YiX6KGo5p+l6K+i55u45bqU55qE5Y+C5LiO6K+d6aKY55qE5a+56LGhICovXHJcbiAgICAgICBcclxuICAgICAgfSxcclxuICAgICAgZmFpbChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXjojrflj5bnmoTmlbDmja5lcnLvvJpcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcclxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcclxuICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cclxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxyXG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgdXNlckluZm86IHJlcyxcclxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcclxuICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXHJcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxyXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcbiJdfQ==