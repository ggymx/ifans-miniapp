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
        var id = options.tid;
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
            imageUrl: '../../imgs/jietu.png',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWMtZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9waWMtZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFFNUIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sRUFBQyxFQUFFO0tBQ1g7SUFDRCxhQUFhLFlBQUMsS0FBUztRQUNyQixJQUFJLEdBQUcsR0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDeEMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBQyxpQ0FBaUMsR0FBQyxHQUFHO1lBQ3pDLE9BQU8sRUFBQztnQkFDTixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBQyxNQUFNO2lCQUNiLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsTUFBTSxZQUFDLE9BQVc7UUFBbEIsaUJBMkVDO1FBMUVDLElBQUksRUFBRSxHQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUMsRUFBRSxDQUFDLENBQUM7UUFDekIsSUFBSSxJQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ2QsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBQywyQ0FBMkM7WUFDL0MsTUFBTSxFQUFDLEtBQUs7WUFDWixJQUFJLEVBQUM7Z0JBQ0gsRUFBRSxFQUFDLEVBQUU7YUFDTjtZQUNELE9BQU8sWUFBQyxHQUFHO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThC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Q0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcclxuLy/ojrflj5blupTnlKjlrp7kvotcclxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xyXG5cclxuXHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxyXG4gICAgdXNlckluZm86IHt9LFxyXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxyXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxyXG4gICAgdG9waWM6IHt9LFxyXG4gICAgY29tbWVudDp7fVxyXG4gIH0sXHJcbiAgYmluZFZpZXdQYXJ0aShldmVudDphbnkpe1xyXG4gICAgdmFyIHRpZD1ldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGlkO1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDonLi4vcGFydGljaXBhdGUvcGFydGljaXBhdGU/dGlkPScrdGlkLFxyXG4gICAgICBzdWNjZXNzOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiflj5HluIPor53popgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8qb3B0aW9uczrojrflj5Z1cmzlj4LmlbAgKi9cclxuICBvbkxvYWQob3B0aW9uczphbnkpIHtcclxuICAgIGxldCBpZD1vcHRpb25zLnRpZDtcclxuICAgIGNvbnNvbGUubG9nKFwi6K+d6aKY55qEaWTvvJpcIitpZCk7XHJcbiAgICB2YXIgdGhhdD10aGlzO1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDonaHR0cHM6Ly9hcGktdGVzdC5pZmFucy5wdWIvdjEvcG9zdC9kZXRhaWwnLFxyXG4gICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgIGRhdGE6e1xyXG4gICAgICAgIGlkOmlkXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuaOpeWPl+WIsOeahOivnemimOivpuaDhS0tLS0tLS0tLS0tLS0tLS0tLS3vvJpcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgLy/orr7nva7mlbDmja5cclxuICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgIHRvcGljOnJlcy5kYXRhXHJcbiAgICAgICAgfSk7IFxyXG4gICAgICAgIHd4LnJlcXVlc3QoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDonaHR0cHM6Ly9hcGktdGVzdC5pZmFucy5wdWIvdjEvcG9zdC9saXN0JyxcclxuICAgIFxyXG4gICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICBcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgaWQ6aWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5o6l5Y+X5Yiw55qE5Y+C5LiO5YiX6KGoLS0tLS0tLS0tLS0tLS0tLS0tLe+8mlwiKVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAvL+iuvue9ruaVsOaNrlxyXG4gICAgICAgICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICAgICAgLy8gdG9waWM6cmVzLmRhdGFcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQ6cmVzLmRhdGFcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgIFxyXG4gICAgICAgICAgICBmYWlsKGVycil7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiZPljbDplJnor6/kv6Hmga9cIik7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLmVyck1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApICAgXHJcblxyXG4gICAgICB9LCAgXHJcbiAgICAgIGZhaWwoKXtcclxuXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICBcclxuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICB1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXHJcbiAgICAgICAgaGFzVXNlckluZm86IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XHJcbiAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXHJcbiAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcclxuICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgIHVzZXJJbmZvOiByZXMsXHJcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXHJcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxyXG4gICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyrovazlj5HliIbkuqvnm5HlkKzkuovku7YgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZShyZXM6YW55KXtcclxuICAgIHZhciB0aGF0PXRoaXNcclxuICAgIGNvbnNvbGUubG9nKFwi5r+A5rS76L2s5Y+R5LqL5Lu277yaXCIscmVzKVxyXG4gICAgICByZXR1cm57XHJcbiAgICAgICAgdGl0bGU6YCMke3RoaXMuZGF0YS50b3BpYy5wb3N0LnRpdGxlfSNgLFxyXG4gICAgICAgIGltYWdlVXJsOicuLi8uLi9pbWdzL2ppZXR1LnBuZycsXHJcbiAgICAgICAgc3VjY2VzcyhlOmFueSl7XHJcbiAgICAgICAgd3guc2hvd1NoYXJlTWVudSh7XHJcbiAgICAgICAgICB3aXRoU2hhcmVUaWNrZXQ6dHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsKCl7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH0sXHJcblxyXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXHJcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuIl19