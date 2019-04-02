"use strict";
var app = getApp();
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
            wx.reLaunch({
                url: '../index/index',
            });
        },
        back: function () {
            console.log("测试");
            wx.navigateBack({
                delta: 1
            });
        },
        backGear: function () {
            wx.showActionSheet({
                itemList: ['我的空间', '消息通知', '我的足迹', '我的关注', '联系客服'],
                success: function (res) {
                    switch (res.tapIndex) {
                        case 0:
                            wx.navigateTo({
                                url: '../my/my',
                                success: function () {
                                    wx.showToast({
                                        title: '跳转空间页！'
                                    });
                                }
                            });
                            break;
                        case 1:
                            wx.navigateTo({
                                url: '../news/news',
                                success: function () {
                                    wx.showToast({
                                        title: '跳转消息页！'
                                    });
                                }
                            });
                            break;
                        case 2:
                            wx.navigateTo({
                                url: '../track/track',
                                success: function () {
                                    wx.showToast({
                                        title: '跳转足迹页！'
                                    });
                                }
                            });
                            break;
                        case 3:
                            wx.navigateTo({
                                url: '../news-concern/news-concern',
                                success: function () {
                                    wx.showToast({
                                        title: '跳转关注页！'
                                    });
                                }
                            });
                            break;
                    }
                },
                fail: function (res) {
                    console.log(res.errMsg);
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2YmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQTtBQUVwQixTQUFTLENBQUM7SUFFUixVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxRQUFRO1NBQ2hCO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNiO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNiO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNiO0tBQ0Y7SUFFRCxJQUFJLEVBQUU7UUFDSixlQUFlLEVBQUUsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJO1FBQzNDLG1CQUFtQixFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJO0tBQ3ZEO0lBRUQsT0FBTyxFQUFFO1FBQ1AsUUFBUSxFQUFFO1lBQ1IsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDVixHQUFHLEVBQUUsZ0JBQWdCO2FBQ3RCLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxJQUFJLEVBQUU7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0QsUUFBUSxFQUFFO1lBRVIsRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDakIsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztnQkFDbEQsT0FBTyxZQUFDLEdBQUc7b0JBQ1QsUUFBUSxHQUFHLENBQUMsUUFBUSxFQUFFO3dCQUNwQixLQUFLLENBQUM7NEJBQ0osRUFBRSxDQUFDLFVBQVUsQ0FBQztnQ0FDWixHQUFHLEVBQUUsVUFBVTtnQ0FDZixPQUFPLEVBQUU7b0NBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3Q0FDWCxLQUFLLEVBQUUsUUFBUTtxQ0FDaEIsQ0FBQyxDQUFDO2dDQUNMLENBQUM7NkJBQ0YsQ0FBQyxDQUFDOzRCQUNILE1BQU07d0JBQ1IsS0FBSyxDQUFDOzRCQUNKLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0NBQ1osR0FBRyxFQUFFLGNBQWM7Z0NBQ25CLE9BQU8sRUFBRTtvQ0FDUCxFQUFFLENBQUMsU0FBUyxDQUFDO3dDQUNYLEtBQUssRUFBRSxRQUFRO3FDQUNoQixDQUFDLENBQUM7Z0NBQ0wsQ0FBQzs2QkFDRixDQUFDLENBQUM7NEJBQ0gsTUFBTTt3QkFFUixLQUFLLENBQUM7NEJBQ0osRUFBRSxDQUFDLFVBQVUsQ0FBQztnQ0FDWixHQUFHLEVBQUUsZ0JBQWdCO2dDQUNyQixPQUFPLEVBQUU7b0NBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3Q0FDWCxLQUFLLEVBQUUsUUFBUTtxQ0FDaEIsQ0FBQyxDQUFDO2dDQUNMLENBQUM7NkJBQ0YsQ0FBQyxDQUFDOzRCQUNILE1BQU07d0JBRVIsS0FBSyxDQUFDOzRCQUNKLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0NBQ1osR0FBRyxFQUFFLDhCQUE4QjtnQ0FDbkMsT0FBTyxFQUFFO29DQUNQLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0NBQ1gsS0FBSyxFQUFFLFFBQVE7cUNBQ2hCLENBQUMsQ0FBQztnQ0FDTCxDQUFDOzZCQUNGLENBQUMsQ0FBQzs0QkFDSCxNQUFNO3FCQUNUO2dCQUNILENBQUM7Z0JBQ0QsSUFBSSxZQUFDLEdBQUc7b0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ3pCLENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHAgPSBnZXRBcHAoKVxyXG5cclxuQ29tcG9uZW50KHtcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgdGV4dDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnV2VjaGF0J1xyXG4gICAgfSxcclxuICAgIGJhY2s6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgaG9tZToge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBnZWFyOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGRhdGE6IHtcclxuICAgIHN0YXR1c0JhckhlaWdodDogYXBwLnN0YXR1c0JhckhlaWdodCArICdweCcsXHJcbiAgICBuYXZpZ2F0aW9uQmFySGVpZ2h0OiAoYXBwLnN0YXR1c0JhckhlaWdodCArIDQ0KSArICdweCdcclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBiYWNrSG9tZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgdXJsOiAnLi4vaW5kZXgvaW5kZXgnLFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCLmtYvor5VcIik7XHJcbiAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgZGVsdGE6IDFcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBiYWNrR2VhcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIua1i+ivlUxpc3RcIik7XHJcbiAgICAgIHd4LnNob3dBY3Rpb25TaGVldCh7XHJcbiAgICAgICAgaXRlbUxpc3Q6IFsn5oiR55qE56m66Ze0JywgJ+a2iOaBr+mAmuefpScsICfmiJHnmoTotrPov7knLCAn5oiR55qE5YWz5rOoJywgJ+iBlOezu+WuouacjSddLFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICBzd2l0Y2ggKHJlcy50YXBJbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9teS9teScsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfot7Povaznqbrpl7TpobXvvIEnXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9uZXdzL25ld3MnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6Lez6L2s5raI5oGv6aG177yBJ1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL3RyYWNrL3RyYWNrJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+i3s+i9rOi2s+i/uemhte+8gSdcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9uZXdzLWNvbmNlcm4vbmV3cy1jb25jZXJuJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+i3s+i9rOWFs+azqOmhte+8gSdcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmVyck1zZylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==