"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
var id;
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        topic: {},
        comment: {},
        sharCard: false
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
        id = options.tid;
        var launchPara = wx.getLaunchOptionsSync();
        if (launchPara.scene == 1007 && false) {
            this.setData({
                sharCard: true
            });
        }
        console.log("话题的id：" + id);
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
                        id: id
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
    onShareAppMessage: function (res) {
        var that = this;
        console.log("激活转发事件：", res);
        return {
            title: "#" + this.data.topic.post.title + "#",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWMtZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9waWMtZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFDNUIsSUFBSSxFQUFTLENBQUE7QUFDYixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBQ25ELEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFDLEVBQUU7UUFDVixRQUFRLEVBQUMsS0FBSztLQUNmO0lBQ0QsYUFBYSxZQUFDLEtBQVM7UUFDckIsSUFBSSxHQUFHLEdBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUMsaUNBQWlDLEdBQUMsR0FBRztZQUN6QyxPQUFPLEVBQUM7Z0JBQ04sRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxLQUFLLEVBQUMsTUFBTTtpQkFDYixDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELE1BQU0sWUFBQyxPQUFXO1FBQWxCLGlCQWdHQztRQTVGQyxFQUFFLEdBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUVYLElBQUksVUFBVSxHQUFDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBWXpDLElBQUcsVUFBVSxDQUFDLEtBQUssSUFBRSxJQUFJLElBQUUsS0FBSyxFQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osUUFBUSxFQUFDLElBQUk7YUFDZCxDQUFDLENBQUM7U0FDSjtRQUVMLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFDLEVBQUUsQ0FB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LEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNkLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXHJcbi8v6I635Y+W5bqU55So5a6e5L6LXHJcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcclxuXHJcblxyXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXHJcbmxldCBpZDpudW1iZXJcclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgbW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXHJcbiAgICB1c2VySW5mbzoge30sXHJcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXHJcbiAgICB0b3BpYzoge30sXHJcbiAgICBjb21tZW50Ont9LFxyXG4gICAgc2hhckNhcmQ6ZmFsc2VcclxuICB9LFxyXG4gIGJpbmRWaWV3UGFydGkoZXZlbnQ6YW55KXtcclxuICAgIHZhciB0aWQ9ZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnRpZDtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6Jy4uL3BhcnRpY2lwYXRlL3BhcnRpY2lwYXRlP3RpZD0nK3RpZCxcclxuICAgICAgc3VjY2VzczpmdW5jdGlvbigpe1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTon5Y+R5biD6K+d6aKYJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvKm9wdGlvbnM66I635Y+WdXJs5Y+C5pWwICovXHJcbiAgb25Mb2FkKG9wdGlvbnM6YW55KSB7XHJcbiAgXHJcblxyXG4gICAgLy8gbGV0IGlkPW9wdGlvbnMudGlkO1xyXG4gICAgaWQ9b3B0aW9ucy50aWQ7XHJcbiAgICAgICAgLy/ojrflj5blnLrmma/lgLzvvIzmoLnmja7lnLrmma/lgLzliIfmjaLlr7zoiKrmoI/nmoTnirbmgIFcclxuICAgICAgICBsZXQgbGF1bmNoUGFyYT13eC5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xyXG4gICAgICAgIC8vIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgLy8gICBpY29uOlwibm9uZVwiLFxyXG4gICAgICAgIC8vICAgdGl0bGU6XCLlnLrmma/lgLzvvJpcIitsYXVuY2hQYXJhLnBhdGhcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIGxldCBwYWdlcz1nZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgICAvLyBsZXQgcHJldnBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTtcclxuICAgICAgICAvLyB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIC8vICAgaWNvbjpcIm5vbmVcIixcclxuICAgICAgICAvLyAgIHRpdGxlOnByZXZwYWdlLnJvdXRlIS50b1N0cmluZygpXHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIGlmKGxhdW5jaFBhcmEuc2NlbmU9PTEwMDcmJmZhbHNlKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICBzaGFyQ2FyZDp0cnVlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCLor53popjnmoRpZO+8mlwiK2lkKTtcclxuICAgIHZhciB0aGF0PXRoaXM7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOidodHRwczovL2FwaS10ZXN0LmlmYW5zLnB1Yi92MS9wb3N0L2RldGFpbCcsXHJcbiAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgZGF0YTp7XHJcbiAgICAgICAgaWQ6aWRcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5o6l5Y+X5Yiw55qE6K+d6aKY6K+m5oOFLS0tLS0tLS0tLS0tLS0tLS0tLe+8mlwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAvL+iuvue9ruaVsOaNrlxyXG4gICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgdG9waWM6cmVzLmRhdGFcclxuICAgICAgICB9KTsgXHJcbiAgICAgICAgd3gucmVxdWVzdChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOidodHRwczovL2FwaS10ZXN0LmlmYW5zLnB1Yi92MS9wb3N0L2xpc3QnLFxyXG4gICAgXHJcbiAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgIFxyXG4gICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICBpZDppZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmjqXlj5fliLDnmoTlj4LkuI7liJfooagtLS0tLS0tLS0tLS0tLS0tLS0t77yaXCIpXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgIC8v6K6+572u5pWw5o2uXHJcbiAgICAgICAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICAvLyB0b3BpYzpyZXMuZGF0YVxyXG4gICAgICAgICAgICAgICAgY29tbWVudDpyZXMuZGF0YVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCAgXHJcbiAgICAgICAgICAgIGZhaWwoZXJyKXtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaJk+WNsOmUmeivr+S/oeaBr1wiKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICkgICBcclxuXHJcbiAgICAgIH0sICBcclxuICAgICAgZmFpbCgpe1xyXG5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcclxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcclxuICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cclxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxyXG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgdXNlckluZm86IHJlcyxcclxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcclxuICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXHJcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKui9rOWPkeWIhuS6q+ebkeWQrOS6i+S7tiAqL1xyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKHJlczphbnkpe1xyXG4gICAgdmFyIHRoYXQ9dGhpc1xyXG4gICAgY29uc29sZS5sb2coXCLmv4DmtLvovazlj5Hkuovku7bvvJpcIixyZXMpXHJcbiAgICAgIHJldHVybntcclxuICAgICAgICB0aXRsZTpgIyR7dGhpcy5kYXRhLnRvcGljLnBvc3QudGl0bGV9I2AsXHJcbiAgICAgICAgaW1hZ2VVcmw6Jy4uLy4uL2ltZ3MvdG9waWNTaGFyZS5wbmcnLFxyXG4gICAgICAgIHN1Y2Nlc3MoZTphbnkpe1xyXG4gICAgICAgIHd4LnNob3dTaGFyZU1lbnUoe1xyXG4gICAgICAgICAgd2l0aFNoYXJlVGlja2V0OnRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbCgpe1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9LFxyXG5cclxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxyXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcbiJdfQ==