"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../common/api");
var helper_1 = require("../../common/helper");
var app = getApp();
var tId;
Page({
    data: {
        topic: null,
        pushText: '',
        refPostId: null,
        inputText: '390rpx'
    },
    textAreaInput: function (event) {
        this.setData({
            pushText: event.detail.value
        });
    },
    titleParti: function (event) {
        var that = this;
        var token = wx.getStorageSync('token');
        if (!token) {
            wx.showToast({ title: '请先登录！' });
            setTimeout(function () {
                helper_1.smartGotoPage({
                    url: '../login'
                });
            }, 300);
        }
        else {
            if (!this.data.pushText) {
                wx.showToast({
                    icon: 'none',
                    title: '内容不能为空！'
                });
            }
            else if (this.data.pushText.length < 5) {
                wx.showToast({
                    icon: 'none',
                    title: '抱歉客官，参与投稿不得低于五个字呦'
                });
            }
            else {
                wx.showLoading({
                    title: '投稿中...'
                });
                var userId = wx.getStorageSync('userId');
                api_1.default.request({
                    url: '/v1/post/create',
                    data: {
                        text: that.data.pushText,
                        type: 2,
                        userid: userId,
                        refPostId: this.data.refPostId
                    },
                    method: 'POST',
                    success: function (res) {
                        var data = res.data;
                        var cId = data.id;
                        setTimeout(function () {
                            wx.hideLoading({
                                success: function () {
                                    wx.showToast({
                                        title: '投稿成功！'
                                    });
                                    wx.removeStorageSync('topic');
                                    wx.removeStorageSync('draft');
                                    setTimeout(function () {
                                        wx.redirectTo({
                                            url: "./detail?tid=" + tId + "&cid=" + cId
                                        });
                                    }, 200);
                                }
                            });
                        }, 200);
                    }
                });
            }
        }
    },
    onEditText: function (event) {
        this.setData({
            inputText: '370rpx'
        });
    },
    onEndEditor: function (event) {
        this.setData({
            inputText: '890rpx'
        });
    },
    onLoad: function (options) {
        tId = options.tid;
        this.data.refPostId = options.tid;
        var that = this;
        api_1.default.request({
            url: '/v1/post/detail',
            data: {
                id: tId
            },
            method: 'GET',
            success: function (res) {
                that.setData({
                    topic: res.data
                });
                wx.setStorage({
                    key: 'topic',
                    data: res.data
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esd0NBQW1DO0FBQ25DLDhDQUFvRDtBQUNwRCxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUM1QixJQUFJLEdBQVcsQ0FBQztBQUNoQixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsSUFBSTtRQUNYLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLElBQUk7UUFDZixTQUFTLEVBQUUsUUFBUTtLQUNwQjtJQUVELGFBQWEsWUFBQyxLQUFVO1FBQ3RCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzdCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHRCxVQUFVLFlBQUMsS0FBVTtRQUNuQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBRVYsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ2pDLFVBQVUsQ0FBQztnQkFDVCxzQkFBYSxDQUFDO29CQUNaLEdBQUcsRUFBRSxVQUFVO2lCQUNoQixDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FFVDthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN2QixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxTQUFTO2lCQUNqQixDQUFDLENBQUM7YUFDSjtpQkFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3hDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsSUFBSSxFQUFFLE1BQU07b0JBQ1osS0FBSyxFQUFFLG1CQUFtQjtpQkFDM0IsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsRUFBRSxDQUFDLFdBQVcsQ0FBQztvQkFDYixLQUFLLEVBQUUsUUFBUTtpQkFDaEIsQ0FBQyxDQUFDO2dCQUNILElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzNDLGFBQUcsQ0FBQyxPQUFPLENBQUM7b0JBQ1YsR0FBRyxFQUFFLGlCQUFpQjtvQkFDdEIsSUFBSSxFQUFFO3dCQUNKLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7d0JBQ3hCLElBQUksRUFBRSxDQUFDO3dCQUNQLE1BQU0sRUFBRSxNQUFNO3dCQUNkLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7cUJBQy9CO29CQUNELE1BQU0sRUFBRSxNQUFNO29CQUNkLE9BQU8sWUFBQyxHQUFHO3dCQUNULElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFXLENBQUE7d0JBQzVCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7d0JBQ3BCLFVBQVUsQ0FBQzs0QkFDVCxFQUFFLENBQUMsV0FBVyxDQUFDO2dDQUNiLE9BQU87b0NBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3Q0FDWCxLQUFLLEVBQUUsT0FBTztxQ0FDZixDQUFDLENBQUM7b0NBRUgsRUFBRSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29DQUM5QixFQUFFLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7b0NBQzlCLFVBQVUsQ0FBQzt3Q0FDVCxFQUFFLENBQUMsVUFBVSxDQUFDOzRDQUNaLEdBQUcsRUFBRSxrQkFBZ0IsR0FBRyxhQUFRLEdBQUs7eUNBQ3RDLENBQUMsQ0FBQztvQ0FDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0NBQ1YsQ0FBQzs2QkFDRixDQUFDLENBQUM7d0JBRUwsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUVWLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO2FBRUo7U0FDRjtJQUNILENBQUM7SUFDRCxVQUFVLFlBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osU0FBUyxFQUFFLFFBQVE7U0FDcEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFdBQVcsWUFBQyxLQUFVO1FBQ3BCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixTQUFTLEVBQUUsUUFBUTtTQUNwQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxZQUFDLE9BQVk7UUFFakIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNsQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsYUFBRyxDQUFDLE9BQU8sQ0FBQztZQUNWLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsSUFBSSxFQUFFO2dCQUNKLEVBQUUsRUFBRSxHQUFHO2FBQ1I7WUFDRCxNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sWUFBQyxHQUFHO2dCQUVULElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNoQixDQUFDLENBQUM7Z0JBR0gsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDWixHQUFHLEVBQUUsT0FBTztvQkFDWixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXHJcbi8v6I635Y+W5bqU55So5a6e5L6LXHJcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9jb21tb24vYXBpJztcclxuaW1wb3J0IHsgc21hcnRHb3RvUGFnZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXInO1xyXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXHJcbmxldCB0SWQ6IG51bWJlcjtcclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgdG9waWM6IG51bGwsXHJcbiAgICBwdXNoVGV4dDogJycsXHJcbiAgICByZWZQb3N0SWQ6IG51bGwsXHJcbiAgICBpbnB1dFRleHQ6ICczOTBycHgnXHJcbiAgfSxcclxuICAvKnRleHRhcmVh6L6T5YWl5pe26Kem5Y+R6K+l5Ye95pWwLeW+ruS/oeahhuaetuaXoOWPjOWQkee7keWumiAqL1xyXG4gIHRleHRBcmVhSW5wdXQoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHB1c2hUZXh0OiBldmVudC5kZXRhaWwudmFsdWVcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyrlj5HluIPor53popggKi9cclxuICB0aXRsZVBhcnRpKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgLy/ojrflj5bnvJPlrZjkuK3nmoR0b2tlbu+8jOWQjOatpeaWueW8j1xyXG4gICAgY29uc3QgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgLy/nlKjmiLfmnKrnmbvlvZXmiJbogIV0b2tlbui/h+acn1xyXG4gICAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+ivt+WFiOeZu+W9le+8gScgfSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNtYXJ0R290b1BhZ2Uoe1xyXG4gICAgICAgICAgdXJsOiAnLi4vbG9naW4nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIDMwMCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLmRhdGEucHVzaFRleHQpIHtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgdGl0bGU6ICflhoXlrrnkuI3og73kuLrnqbrvvIEnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLnB1c2hUZXh0Lmxlbmd0aCA8IDUpIHtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgdGl0bGU6ICfmirHmrYnlrqLlrpjvvIzlj4LkuI7mipXnqL/kuI3lvpfkvY7kuo7kupTkuKrlrZflkaYnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmipXnqL/kuK0uLi4nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgdXNlcklkID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJZCcpO1xyXG4gICAgICAgIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogJy92MS9wb3N0L2NyZWF0ZScsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IHRoYXQuZGF0YS5wdXNoVGV4dCxcclxuICAgICAgICAgICAgdHlwZTogMixcclxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXHJcbiAgICAgICAgICAgIHJlZlBvc3RJZDogdGhpcy5kYXRhLnJlZlBvc3RJZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhIGFzIGFueVxyXG4gICAgICAgICAgICBjb25zdCBjSWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5oqV56i/5oiQ5Yqf77yBJ1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgLy/mipXnqL/miJDlip/liJnmuIXpmaTnvJPlrZjkuK3nmoTor53popjlkozojYnnqL9cclxuICAgICAgICAgICAgICAgICAgd3gucmVtb3ZlU3RvcmFnZVN5bmMoJ3RvcGljJyk7XHJcbiAgICAgICAgICAgICAgICAgIHd4LnJlbW92ZVN0b3JhZ2VTeW5jKCdkcmFmdCcpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgIHVybDogYC4vZGV0YWlsP3RpZD0ke3RJZH0mY2lkPSR7Y0lkfWBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0sIDIwMCk7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25FZGl0VGV4dChldmVudDogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgaW5wdXRUZXh0OiAnMzcwcnB4J1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBvbkVuZEVkaXRvcihldmVudDogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgaW5wdXRUZXh0OiAnODkwcnB4J1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBvbkxvYWQob3B0aW9uczogYW55KSB7XHJcblxyXG4gICAgdElkID0gb3B0aW9ucy50aWQ7XHJcbiAgICB0aGlzLmRhdGEucmVmUG9zdElkID0gb3B0aW9ucy50aWQ7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnL3YxL3Bvc3QvZGV0YWlsJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkOiB0SWRcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuXHJcbiAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICB0b3BpYzogcmVzLmRhdGFcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy/nvJPlrZjor53pophcclxuICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgIGtleTogJ3RvcGljJyxcclxuICAgICAgICAgIGRhdGE6IHJlcy5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSlcclxuIl19