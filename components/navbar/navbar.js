"use strict";
var app = getApp();
var topicCache;
var draft;
Component({
    properties: {
        text: {
            type: String,
            value: 'Wechat'
        },
        back: {
            type: Boolean,
            value: false
        },
        home: {
            type: Boolean,
            value: false
        },
        gear: {
            type: Boolean,
            value: false
        }
    },
    data: {
        statusBarHeight: app.statusBarHeight + 'px',
        navigationBarHeight: (app.statusBarHeight + 44) + 'px'
    },
    methods: {
        backHome: function () {
            wx.navigateTo({
                url: '../index/index',
            });
        },
        back: function () {
            topicCache = wx.getStorageSync('topic');
            draft = wx.getStorageSync('draft');
            if (topicCache)
                wx.removeStorageSync('topic');
            if (draft)
                wx.removeStorageSync('draft');
            wx.navigateBack({
                delta: 1
            });
        },
        backGear: function () {
            wx.showActionSheet({
                itemList: ['我的首页', '联系客服', '分享给朋友'],
                success: function (res) {
                    switch (res.tapIndex) {
                        case 0:
                            var token = wx.getStorageSync('token');
                            if (token) {
                                var userId_1 = wx.getStorageSync('userId');
                                wx.showToast({
                                    title: '前往空间'
                                });
                                setTimeout(function () {
                                    wx.navigateTo({
                                        url: '../my/my?userId=' + userId_1,
                                        success: function () {
                                        }
                                    });
                                }, 2000);
                            }
                            else {
                                wx.showToast({ title: '请先登录！' });
                                setTimeout(function () {
                                    wx.navigateTo({
                                        url: '../login/login'
                                    });
                                }, 2000);
                            }
                            break;
                        case 1: break;
                        case 2: break;
                    }
                },
                fail: function (res) {
                    console.log(res.errMsg);
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2YmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBRW5CLElBQUksVUFBYyxDQUFBO0FBQ2xCLElBQUksS0FBUyxDQUFBO0FBQ2IsU0FBUyxDQUFDO0lBQ04sVUFBVSxFQUFFO1FBQ1IsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsUUFBUTtTQUNsQjtRQUNELElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtRQUNELElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtRQUNELElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtLQUNKO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsZUFBZSxFQUFFLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSTtRQUMzQyxtQkFBbUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSTtLQUN6RDtJQUNELE9BQU8sRUFBRTtRQUNMLFFBQVE7WUFDSixFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNWLEdBQUcsRUFBRSxnQkFBZ0I7YUFDeEIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELElBQUk7WUFDRCxVQUFVLEdBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QyxLQUFLLEdBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVqQyxJQUFHLFVBQVU7Z0JBQUUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzVDLElBQUcsS0FBSztnQkFBRSxFQUFFLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDdEMsRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDWixLQUFLLEVBQUUsQ0FBQzthQUNYLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxRQUFRO1lBQ0osRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDZixRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztnQkFDbkMsT0FBTyxZQUFDLEdBQUc7b0JBQ1AsUUFBUSxHQUFHLENBQUMsUUFBUSxFQUFFO3dCQUNsQixLQUFLLENBQUM7NEJBQ04sSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDdkMsSUFBRyxLQUFLLEVBQUM7Z0NBRUwsSUFBSSxRQUFNLEdBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQ0FDdkMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQ0FDVCxLQUFLLEVBQUUsTUFBTTtpQ0FDaEIsQ0FBQyxDQUFDO2dDQUNILFVBQVUsQ0FBQztvQ0FDUCxFQUFFLENBQUMsVUFBVSxDQUFDO3dDQUNWLEdBQUcsRUFBRSxrQkFBa0IsR0FBQyxRQUFNO3dDQUM5QixPQUFPO3dDQUVQLENBQUM7cUNBQ0osQ0FBQyxDQUFDO2dDQUNQLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQTs2QkFFVjtpQ0FBSTtnQ0FDRCxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7Z0NBQzlCLFVBQVUsQ0FBQztvQ0FDUCxFQUFFLENBQUMsVUFBVSxDQUFDO3dDQUNWLEdBQUcsRUFBQyxnQkFBZ0I7cUNBQ3ZCLENBQUMsQ0FBQztnQ0FDUCxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUE7NkJBQ1Y7NEJBQ0csTUFBTTt3QkFDVixLQUFLLENBQUMsQ0FBQyxDQUFBLE1BQU07d0JBQ2IsS0FBSyxDQUFDLENBQUMsQ0FBQSxNQUFNO3FCQUNoQjtnQkFDTCxDQUFDO2dCQUNELElBQUksWUFBQyxHQUFHO29CQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBhcHAgPSBnZXRBcHAoKTtcclxuLyrlvoXliJ3lp4vljJbnmoTnvJPlrZjlkozojYnnqL8gKi9cclxubGV0IHRvcGljQ2FjaGU6YW55XHJcbmxldCBkcmFmdDphbnlcclxuQ29tcG9uZW50KHtcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0ZXh0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICdXZWNoYXQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYWNrOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaG9tZToge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdlYXI6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IGFwcC5zdGF0dXNCYXJIZWlnaHQgKyAncHgnLFxyXG4gICAgICAgIG5hdmlnYXRpb25CYXJIZWlnaHQ6IChhcHAuc3RhdHVzQmFySGVpZ2h0ICsgNDQpICsgJ3B4J1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBiYWNrSG9tZSgpIHtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9pbmRleC9pbmRleCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmFjaygpIHtcclxuICAgICAgICAgICB0b3BpY0NhY2hlPXd4LmdldFN0b3JhZ2VTeW5jKCd0b3BpYycpO1xyXG4gICAgICAgICAgIGRyYWZ0PXd4LmdldFN0b3JhZ2VTeW5jKCdkcmFmdCcpO1xyXG4gICAgICAgICAgIC8v5Zue6YCA5pe277yM5aaC5p6c57yT5a2Y5pyJ6K+d6aKY5ZKM6I2J56i/77yM5YiZ5riF6ZmkXHJcbiAgICAgICAgICAgaWYodG9waWNDYWNoZSkgd3gucmVtb3ZlU3RvcmFnZVN5bmMoJ3RvcGljJylcclxuICAgICAgICAgICBpZihkcmFmdCkgd3gucmVtb3ZlU3RvcmFnZVN5bmMoJ2RyYWZ0JylcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmFja0dlYXIoKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dBY3Rpb25TaGVldCh7XHJcbiAgICAgICAgICAgICAgICBpdGVtTGlzdDogWyfmiJHnmoTpppbpobUnLCAn6IGU57O75a6i5pyNJywgJ+WIhuS6q+e7meaci+WPiyddLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcy50YXBJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0b2tlbil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+iOt+WPlueUqOaIt0lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXNlcklkPXd4LmdldFN0b3JhZ2VTeW5jKCd1c2VySWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfliY3lvoDnqbrpl7QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vbXkvbXk/dXNlcklkPScrdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwyMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHt0aXRsZTon6K+35YWI55m75b2V77yBJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6Jy4uL2xvZ2luL2xvZ2luJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwyMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOmJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6YnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmVyck1zZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==