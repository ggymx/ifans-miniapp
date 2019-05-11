"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../common/api");
var helper_1 = require("../../common/helper");
var app = getApp();
var id;
var cursor = 0;
Page({
    data: {
        topic: null,
        postArr: []
    },
    bindViewParti: function (event) {
        var tid = event.currentTarget.dataset.tid;
        helper_1.smartGotoPage({
            url: './create?tid=' + tid
        });
    },
    onLoad: function (options) {
        console.log('cursor的值：', cursor);
        var that = this;
        if (!that.data.topic) {
            id = options.tid;
            api_1.default.request({
                url: '/v1/post/detail',
                method: 'GET',
                data: {
                    id: id
                },
                success: function (res) {
                    that.setData({
                        topic: res.data
                    });
                }
            });
            cursor = 0;
        }
        api_1.default.request({
            url: '/v1/post/answer-list',
            method: 'GET',
            data: {
                id: id,
                cursor: cursor,
                limit: 5
            },
            success: function (res) {
                var data = res.data;
                console.log('获取到的res：', res);
                if (data.posts.length !== 0) {
                    that.setData({
                        postArr: that.data.postArr.concat(data.posts)
                    });
                    cursor = data.cursor;
                    wx.hideLoading({});
                }
                else {
                    wx.hideLoading({});
                    wx.showToast({
                        icon: 'none',
                        title: '已经到底了！'
                    });
                }
            }
        });
    },
    onShareAppMessage: function (res) {
        var that = this;
        return {
            title: "#" + this.data.topic.post.title + "#",
            success: function (e) {
                wx.showShareMenu({
                    withShareTicket: true
                });
            }
        };
    },
    onPullDownRefresh: function () {
        console.log('触发下拉刷新事件');
        var that = this;
        api_1.default.request({
            url: '/v1/post/answer-list',
            method: 'GET',
            data: {
                id: id,
                cursor: 0,
                limit: 5
            },
            success: function (res) {
                var data = res.data;
                that.setData({
                    postArr: data.posts
                });
                setTimeout(function () {
                    wx.stopPullDownRefresh({});
                }, 200);
                cursor = data.cursor;
            }
        });
    },
    onReachBottom: function () {
        var _this = this;
        wx.showLoading({
            title: '加载更多...'
        });
        setTimeout(function () {
            _this.onLoad();
        }, 200);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWMtZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9waWMtZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esd0NBQW1DO0FBQ25DLDhDQUFvRDtBQUNwRCxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUM1QixJQUFJLEVBQVUsQ0FBQztBQUNmLElBQUksTUFBTSxHQUFTLENBQUMsQ0FBQztBQUNyQixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsSUFBSTtRQUNYLE9BQU8sRUFBQyxFQUFFO0tBQ1g7SUFDRCxhQUFhLFlBQUMsS0FBVTtRQUN0QixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDNUMsc0JBQWEsQ0FBQztZQUNaLEdBQUcsRUFBRSxlQUFlLEdBQUcsR0FBRztTQUMzQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsTUFBTSxZQUFDLE9BQVk7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQztZQUNwQixFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUVqQixhQUFHLENBQUMsT0FBTyxDQUFDO2dCQUNWLEdBQUcsRUFBRSxpQkFBaUI7Z0JBQ3RCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLElBQUksRUFBRTtvQkFDSixFQUFFLElBQUE7aUJBQ0g7Z0JBQ0QsT0FBTyxZQUFDLEdBQUc7b0JBRVQsSUFBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDWixLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUk7cUJBQ2hCLENBQUMsQ0FBQztnQkFDTCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxHQUFDLENBQUMsQ0FBQztTQUNWO1FBQ0MsYUFBRyxDQUFDLE9BQU8sQ0FDVDtZQUNFLEdBQUcsRUFBQyxzQkFBc0I7WUFFMUIsTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUU7Z0JBQ0osRUFBRSxJQUFBO2dCQUNGLE1BQU0sUUFBQTtnQkFDTixLQUFLLEVBQUMsQ0FBQzthQUNSO1lBQ0QsT0FBTyxZQUFDLEdBQUc7Z0JBRVQsSUFBTSxJQUFJLEdBQUMsR0FBRyxDQUFDLElBQVcsQ0FBQTtnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUcsQ0FBQyxFQUFDO29CQUN2QixJQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztxQkFDOUMsQ0FBQyxDQUFDO29CQUNILE1BQU0sR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO29CQUNsQixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNwQjtxQkFBSTtvQkFDSCxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNuQixFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNYLElBQUksRUFBQyxNQUFNO3dCQUNYLEtBQUssRUFBQyxRQUFRO3FCQUNmLENBQUMsQ0FBQTtpQkFDSDtZQUNILENBQUM7U0FDRixDQUNGLENBQUE7SUFDSCxDQUFDO0lBR0QsaUJBQWlCLFlBQUMsR0FBUTtRQUN4QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUE7UUFDakIsT0FBTztZQUNMLEtBQUssRUFBRSxNQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLE1BQUc7WUFDeEMsT0FBTyxZQUFDLENBQU07Z0JBQ1osRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDZixlQUFlLEVBQUUsSUFBSTtpQkFDdEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUE7SUFDSCxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsYUFBRyxDQUFDLE9BQU8sQ0FDVDtZQUNFLEdBQUcsRUFBQyxzQkFBc0I7WUFFMUIsTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUU7Z0JBQ0osRUFBRSxJQUFBO2dCQUNGLE1BQU0sRUFBQyxDQUFDO2dCQUNSLEtBQUssRUFBQyxDQUFDO2FBQ1I7WUFDRCxPQUFPLFlBQUMsR0FBRztnQkFFVCxJQUFNLElBQUksR0FBQyxHQUFHLENBQUMsSUFBVyxDQUFBO2dCQUN4QixJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSztpQkFDcEIsQ0FBQyxDQUFDO2dCQUNILFVBQVUsQ0FBQztvQkFDVCxFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzdCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDUixNQUFNLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQTtZQUN0QixDQUFDO1NBQ0YsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQUVELGFBQWE7UUFBYixpQkFPRTtRQU5BLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDYixLQUFLLEVBQUMsU0FBUztTQUNoQixDQUFDLENBQUE7UUFDSCxVQUFVLENBQUM7WUFDVixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDZCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDUixDQUFDO0NBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xyXG4vL+iOt+WPluW6lOeUqOWunuS+i1xyXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vY29tbW9uL2FwaSc7XHJcbmltcG9ydCB7IHNtYXJ0R290b1BhZ2UgfSBmcm9tICcuLi8uLi9jb21tb24vaGVscGVyJztcclxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxyXG5sZXQgaWQ6IG51bWJlcjtcclxubGV0IGN1cnNvcjogbnVtYmVyPTA7XHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIHRvcGljOiBudWxsLFxyXG4gICAgcG9zdEFycjpbXVxyXG4gIH0sXHJcbiAgYmluZFZpZXdQYXJ0aShldmVudDogYW55KSB7XHJcbiAgICBjb25zdCB0aWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGlkO1xyXG4gICAgc21hcnRHb3RvUGFnZSh7XHJcbiAgICAgIHVybDogJy4vY3JlYXRlP3RpZD0nICsgdGlkXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvL29wdGlvbnM66I635Y+WdXJs5Y+C5pWwXHJcbiAgb25Mb2FkKG9wdGlvbnM6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coJ2N1cnNvcueahOWAvO+8micsY3Vyc29yKTtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgaWYoIXRoYXQuZGF0YS50b3BpYyl7XHJcbiAgICBpZCA9IG9wdGlvbnMudGlkO1xyXG5cclxuICAgIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnL3YxL3Bvc3QvZGV0YWlsJyxcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgLy/orr7nva7mlbDmja5cclxuICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgIHRvcGljOiByZXMuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGN1cnNvcj0wO1xyXG4gIH1cclxuICAgIGFwaS5yZXF1ZXN0KFxyXG4gICAgICB7XHJcbiAgICAgICAgdXJsOicvdjEvcG9zdC9hbnN3ZXItbGlzdCcsXHJcbiAgICAgICAgLy8gdXJsOiAnL3YxL3Bvc3QvbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpZCxcclxuICAgICAgICAgIGN1cnNvcixcclxuICAgICAgICAgIGxpbWl0OjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAvL+iuvue9ruaVsOaNrlxyXG4gICAgICAgICAgY29uc3QgZGF0YT1yZXMuZGF0YSBhcyBhbnlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bliLDnmoRyZXPvvJonLHJlcyk7XHJcbiAgICAgICAgICBpZihkYXRhLnBvc3RzLmxlbmd0aCE9PTApe1xyXG4gICAgICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgICAgICBwb3N0QXJyOiB0aGF0LmRhdGEucG9zdEFyci5jb25jYXQoZGF0YS5wb3N0cylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGN1cnNvcj1kYXRhLmN1cnNvclxyXG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZyh7fSk7XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIGljb246J25vbmUnLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiflt7Lnu4/liLDlupXkuobvvIEnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgfSxcclxuXHJcbiAgLyrovazlj5HliIbkuqvnm5HlkKzkuovku7YgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZShyZXM6IGFueSkge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiBgIyR7dGhpcy5kYXRhLnRvcGljLnBvc3QudGl0bGV9I2AsXHJcbiAgICAgIHN1Y2Nlc3MoZTogYW55KSB7XHJcbiAgICAgICAgd3guc2hvd1NoYXJlTWVudSh7XHJcbiAgICAgICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICAvL+S4i+aLieWIt+aWsFxyXG4gIG9uUHVsbERvd25SZWZyZXNoKCl7XHJcbiAgICBjb25zb2xlLmxvZygn6Kem5Y+R5LiL5ouJ5Yi35paw5LqL5Lu2Jyk7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgIGFwaS5yZXF1ZXN0KFxyXG4gICAgICB7XHJcbiAgICAgICAgdXJsOicvdjEvcG9zdC9hbnN3ZXItbGlzdCcsXHJcbiAgICAgICAgLy8gdXJsOiAnL3YxL3Bvc3QvbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpZCxcclxuICAgICAgICAgIGN1cnNvcjowLFxyXG4gICAgICAgICAgbGltaXQ6NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgIC8v6K6+572u5pWw5o2uXHJcbiAgICAgICAgICBjb25zdCBkYXRhPXJlcy5kYXRhIGFzIGFueVxyXG4gICAgICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgICAgICBwb3N0QXJyOiBkYXRhLnBvc3RzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKHt9KTtcclxuICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAgICAgY3Vyc29yPWRhdGEuY3Vyc29yXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgfSxcclxuICAvL+inpuW6leWKoOi9vVxyXG4gIG9uUmVhY2hCb3R0b20oKXtcclxuICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6J+WKoOi9veabtOWkmi4uLidcclxuICAgIH0pXHJcbiAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgdGhpcy5vbkxvYWQoKVxyXG4gICB9LCAyMDApO1xyXG4gICB9XHJcbn0pXHJcbiJdfQ==