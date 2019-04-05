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
        var tId = options.tid;
        var cId = options.cid;
        var that = this;
        wx.request({
            url: 'http://api-test.ifans.pub/v1/post/detail',
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
            url: 'http://api-test.ifans.pub/v1/post/detail',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFFNUIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxLQUFLLEVBQUMsSUFBSTtRQUNWLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxhQUFhO1FBQ1gsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBQyw0QkFBNEI7WUFDaEMsT0FBTyxFQUFDO2dCQUNOLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFDLE1BQU07aUJBQ2IsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLFlBQUMsT0FBVztRQUFsQixpQkFrRkM7UUFqRkMsSUFBSSxHQUFHLEdBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNwQixJQUFJLEdBQUcsR0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBRXBCLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQztRQUVkLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFFVCxHQUFHLEVBQUMsMENBQTBDO1lBRTlDLE1BQU0sRUFBQyxLQUFLO1lBRVosSUFBSSxFQUFDO2dCQUNILEVBQUUsRUFBQyxHQUFHO2FBQ1A7WUFFRCxPQUFPLFlBQUMsR0FBRztnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUE7Z0JBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUV0QixJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLEtBQUssRUFBQyxHQUFHLENBQUMsSUFBSTtpQkFDZixDQUFDLENBQUM7WUFFTCxDQUFDO1lBQ0QsSUFBSTtZQUVKLENBQUM7U0FDRixDQUFDLENBQUM7UUFHSCxFQUFFLENBQUMsT0FBTyxDQUFDO1lBRVQsR0FBRyxFQUFDLDBDQUEwQztZQUU5QyxNQUFNLEVBQUMsS0FBSztZQUVaLElBQUksRUFBQztnQkFDSCxFQUFFLEVBQUMsR0FBRzthQUNQO1lBRUQsT0FBTyxZQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO2dCQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFdEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixPQUFPLEVBQUMsR0FBRyxDQUFDLElBQUk7aUJBQ2pCLENBQUMsQ0FBQztZQUVMLENBQUM7WUFDRCxJQUFJO1lBRUosQ0FBQztTQUNGLENBQUMsQ0FBQztRQUdILElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUE7U0FDSDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHNUIsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDOUIsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRLEVBQUUsR0FBRztvQkFDYixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFBO1NBQ0Y7YUFBTTtZQUVMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsV0FBVyxFQUFFLElBQUk7cUJBQ2xCLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUQsV0FBVyxZQUFDLENBQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNkLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXHJcbi8v6I635Y+W5bqU55So5a6e5L6LXHJcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxyXG4gICAgdXNlckluZm86IHt9LFxyXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxyXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxyXG4gICAgdG9waWM6bnVsbCxcclxuICAgIGNvbW1lbnQ6IG51bGxcclxuICB9LFxyXG4gIGJpbmRWaWV3UGFydGkoKXtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6Jy4uL3BhcnRpY2lwYXRlL3BhcnRpY2lwYXRlJyxcclxuICAgICAgc3VjY2VzczpmdW5jdGlvbigpe1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTon5Y+R5biD6K+d6aKYJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIC8qb3B0aW9uczrojrflj5Z1cmzlj4LmlbAgKi9cclxuICBvbkxvYWQob3B0aW9uczphbnkpIHtcclxuICAgIGxldCB0SWQ9b3B0aW9ucy50aWQ7XHJcbiAgICBsZXQgY0lkPW9wdGlvbnMuY2lkO1xyXG4gICAgIFxyXG4gICAgdmFyIHRoYXQ9dGhpcztcclxuICAgIC8v6I635Y+W6K+d6aKY6K+m5oOFXHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuXHJcbiAgICAgIHVybDonaHR0cDovL2FwaS10ZXN0LmlmYW5zLnB1Yi92MS9wb3N0L2RldGFpbCcsXHJcblxyXG4gICAgICBtZXRob2Q6J0dFVCcsXHJcblxyXG4gICAgICBkYXRhOntcclxuICAgICAgICBpZDp0SWRcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuaOpeWPl+WIsOeahOivnemimOivpuaDhS0tLS0tLS0tLS0tLS0tLS0tLS3vvJpcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgLy/orr7nva7mlbDmja5cclxuICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgIHRvcGljOnJlcy5kYXRhXHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgICAgfSwgIFxyXG4gICAgICBmYWlsKCl7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL+iOt+WPluaKleeov+ivpuaDhVxyXG4gICAgd3gucmVxdWVzdCh7XHJcblxyXG4gICAgICB1cmw6J2h0dHA6Ly9hcGktdGVzdC5pZmFucy5wdWIvdjEvcG9zdC9kZXRhaWwnLFxyXG5cclxuICAgICAgbWV0aG9kOidHRVQnLFxyXG5cclxuICAgICAgZGF0YTp7XHJcbiAgICAgICAgaWQ6Y0lkXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmjqXlj5fliLDnmoTmipXnqL/or6bmg4UtLS0tLS0tLS0tLS0tLS0tLS0t77yaXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIC8v6K6+572u5pWw5o2uXHJcbiAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICBjb21tZW50OnJlcy5kYXRhXHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgICAgfSwgIFxyXG4gICAgICBmYWlsKCl7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcclxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcclxuICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cclxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxyXG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgdXNlckluZm86IHJlcyxcclxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcclxuICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXHJcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxyXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcbiJdfQ==