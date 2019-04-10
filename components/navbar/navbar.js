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
                                setTimeout(function () {
                                    wx.navigateTo({
                                        url: '../my/my?userId=' + userId_1,
                                        success: function () {
                                        }
                                    });
                                }, 500);
                            }
                            else {
                                wx.showToast({ title: '请先登录！' });
                                setTimeout(function () {
                                    wx.navigateTo({
                                        url: '../login/login'
                                    });
                                }, 500);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2YmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBRW5CLElBQUksVUFBYyxDQUFBO0FBQ2xCLElBQUksS0FBUyxDQUFBO0FBQ2IsU0FBUyxDQUFDO0lBQ04sVUFBVSxFQUFFO1FBQ1IsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsUUFBUTtTQUNsQjtRQUNELElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtRQUNELElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtRQUNELElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtLQUNKO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsZUFBZSxFQUFFLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSTtRQUMzQyxtQkFBbUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSTtLQUN6RDtJQUNELE9BQU8sRUFBRTtRQUNMLFFBQVE7WUFDSixFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNWLEdBQUcsRUFBRSxnQkFBZ0I7YUFDeEIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELElBQUk7WUFDRCxVQUFVLEdBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QyxLQUFLLEdBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVqQyxJQUFHLFVBQVU7Z0JBQUUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzVDLElBQUcsS0FBSztnQkFBRSxFQUFFLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDdEMsRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDWixLQUFLLEVBQUUsQ0FBQzthQUNYLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxRQUFRO1lBQ0osRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDZixRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztnQkFDbkMsT0FBTyxZQUFDLEdBQUc7b0JBQ1AsUUFBUSxHQUFHLENBQUMsUUFBUSxFQUFFO3dCQUNsQixLQUFLLENBQUM7NEJBQ04sSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDdkMsSUFBRyxLQUFLLEVBQUM7Z0NBRUwsSUFBSSxRQUFNLEdBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQ0FDdkMsVUFBVSxDQUFDO29DQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUM7d0NBQ1YsR0FBRyxFQUFFLGtCQUFrQixHQUFDLFFBQU07d0NBQzlCLE9BQU87d0NBRVAsQ0FBQztxQ0FDSixDQUFDLENBQUM7Z0NBQ1AsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFBOzZCQUVUO2lDQUFJO2dDQUNELEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztnQ0FDOUIsVUFBVSxDQUFDO29DQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUM7d0NBQ1YsR0FBRyxFQUFDLGdCQUFnQjtxQ0FDdkIsQ0FBQyxDQUFDO2dDQUNQLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQTs2QkFDVDs0QkFDRyxNQUFNO3dCQUNWLEtBQUssQ0FBQyxDQUFDLENBQUEsTUFBTTt3QkFDYixLQUFLLENBQUMsQ0FBQyxDQUFBLE1BQU07cUJBQ2hCO2dCQUNMLENBQUM7Z0JBQ0QsSUFBSSxZQUFDLEdBQUc7b0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzVCLENBQUM7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIGFwcCA9IGdldEFwcCgpO1xyXG4vKuW+heWIneWni+WMlueahOe8k+WtmOWSjOiNieeovyAqL1xyXG5sZXQgdG9waWNDYWNoZTphbnlcclxubGV0IGRyYWZ0OmFueVxyXG5Db21wb25lbnQoe1xyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ1dlY2hhdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhY2s6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBob21lOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2Vhcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIHN0YXR1c0JhckhlaWdodDogYXBwLnN0YXR1c0JhckhlaWdodCArICdweCcsXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhckhlaWdodDogKGFwcC5zdGF0dXNCYXJIZWlnaHQgKyA0NCkgKyAncHgnXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGJhY2tIb21lKCkge1xyXG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2luZGV4L2luZGV4JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYWNrKCkge1xyXG4gICAgICAgICAgIHRvcGljQ2FjaGU9d3guZ2V0U3RvcmFnZVN5bmMoJ3RvcGljJyk7XHJcbiAgICAgICAgICAgZHJhZnQ9d3guZ2V0U3RvcmFnZVN5bmMoJ2RyYWZ0Jyk7XHJcbiAgICAgICAgICAgLy/lm57pgIDml7bvvIzlpoLmnpznvJPlrZjmnInor53popjlkozojYnnqL/vvIzliJnmuIXpmaRcclxuICAgICAgICAgICBpZih0b3BpY0NhY2hlKSB3eC5yZW1vdmVTdG9yYWdlU3luYygndG9waWMnKVxyXG4gICAgICAgICAgIGlmKGRyYWZ0KSB3eC5yZW1vdmVTdG9yYWdlU3luYygnZHJhZnQnKVxyXG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYWNrR2VhcigpIHtcclxuICAgICAgICAgICAgd3guc2hvd0FjdGlvblNoZWV0KHtcclxuICAgICAgICAgICAgICAgIGl0ZW1MaXN0OiBbJ+aIkeeahOmmlumhtScsICfogZTns7vlrqLmnI0nLCAn5YiG5Lqr57uZ5pyL5Y+LJ10sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzLnRhcEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRva2VuKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6I635Y+W55So5oi3SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1c2VySWQ9d3guZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcuLi9teS9teT91c2VySWQ9Jyt1c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7dGl0bGU6J+ivt+WFiOeZu+W9le+8gSd9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOicuLi9sb2dpbi9sb2dpbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOmJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6YnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmVyck1zZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==