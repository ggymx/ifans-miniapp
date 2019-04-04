"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        avatar: '',
        username: '未登录',
        statusText: '授权登录'
    },
    onGotUserInfo: function (e) {
        console.log("点击了确认按钮");
        if (e.detail.userInfo) {
            wx.login({
                success: function (res) {
                    console.log("----------------------++++++-------------");
                    console.log(res.code);
                    wx.request({
                        url: 'https://api-test.ifans.pub/v1/auth/login',
                        data: {
                            code: res.code
                        },
                        header: {
                            'content-type': 'application/json'
                        },
                        method: 'POST',
                        success: function (res) {
                            console.log("login获取的数据res:");
                            console.log(res.data);
                        },
                        fail: function (res) {
                            console.log("login获取的数据err:");
                            console.log(res.errMsg);
                        }
                    });
                }
            });
            this.setData({
                avatar: e.detail.userInfo.avatarUrl,
                username: e.detail.userInfo.nickName,
                statusText: '已登录'
            });
            wx.showLoading({
                title: '加载中'
            });
            setTimeout(function () {
                wx.hideLoading({
                    success: function () {
                        wx.navigateTo({
                            url: '../index/index'
                        });
                    }
                });
            }, 3000);
        }
        else {
            wx.showModal({
                title: '警告',
                content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
                showCancel: false,
                confirmText: '返回授权',
                success: function (res) {
                    if (res.confirm) {
                        console.log('用户点击了“返回授权”');
                    }
                }
            });
        }
    },
    onLoad: function () {
        var _this = this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWdCQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBQ25ELE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLEtBQUs7UUFDZixVQUFVLEVBQUMsTUFBTTtLQUNsQjtJQTZDRCxhQUFhLFlBQUMsQ0FBTTtRQUVsQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDdEIsRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDUCxPQUFPLFlBQUMsR0FBRztvQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7b0JBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNyQixFQUFFLENBQUMsT0FBTyxDQUFDO3dCQUVULEdBQUcsRUFBQywwQ0FBMEM7d0JBRTlDLElBQUksRUFBQzs0QkFDSCxJQUFJLEVBQUMsR0FBRyxDQUFDLElBQUk7eUJBQ2Q7d0JBRUQsTUFBTSxFQUFFOzRCQUNOLGNBQWMsRUFBRSxrQkFBa0I7eUJBQ25DO3dCQUVELE1BQU0sRUFBQyxNQUFNO3dCQUViLE9BQU8sWUFBQyxHQUFHOzRCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTs0QkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3hCLENBQUM7d0JBQ0QsSUFBSSxZQUFDLEdBQUc7NEJBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBOzRCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDMUIsQ0FBQztxQkFFRixDQUFDLENBQUM7Z0JBQ04sQ0FBQzthQUNGLENBQUMsQ0FBQTtZQUtELElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVM7Z0JBQ25DLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRO2dCQUNwQyxVQUFVLEVBQUMsS0FBSzthQUNqQixDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNiLEtBQUssRUFBQyxLQUFLO2FBQ1osQ0FBQyxDQUFDO1lBQ0gsVUFBVSxDQUFDO2dCQUNULEVBQUUsQ0FBQyxXQUFXLENBQUM7b0JBQ2QsT0FBTzt3QkFDTCxFQUFFLENBQUMsVUFBVSxDQUFDOzRCQUNaLEdBQUcsRUFBQyxnQkFBZ0I7eUJBQ3JCLENBQUMsQ0FBQztvQkFDTCxDQUFDO2lCQUNELENBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztTQUdUO2FBQU07WUFDTCxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxJQUFJO2dCQUNYLE9BQU8sRUFBRSwrQkFBK0I7Z0JBQ3hDLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixXQUFXLEVBQUUsTUFBTTtnQkFDbkIsT0FBTyxFQUFFLFVBQVUsR0FBRztvQkFDcEIsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO3dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7cUJBQzNCO2dCQUNILENBQUM7YUFDRixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFDRCxNQUFNO1FBQU4saUJBNkJDO1FBMUJDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUE7U0FDSDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHNUIsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDOUIsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRLEVBQUUsR0FBRztvQkFDYixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFBO1NBQ0Y7YUFBTTtZQUVMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsV0FBVyxFQUFFLElBQUk7cUJBQ2xCLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUQsV0FBVyxZQUFDLENBQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNkLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXHJcbi8v6I635Y+W5bqU55So5a6e5L6LXHJcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcclxuXHJcbi8v6LCD55So5ZCO5Y+wYXBpXHJcbi8q5a+85YWlaW5kZXg/Pz8gKi9cclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9jb21tb24vYXBpJ1xyXG5pbXBvcnQgeyBJVG9waWNEZXRhaWxQYXJhbXMsIElUb3BpY0RldGFpbFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3R5cGVzL2h0dHBfbXNnJztcclxuaW1wb3J0IHsgVGVzdEFwaSB9IGZyb20gJy4uLy4uL3Rlc3RBcGkvVGVzdEFwaSc7XHJcblxyXG4vLyBsZXQgZ2V0VG9waWM9YXN5bmMgKG9iajpJVG9waWNEZXRhaWxQYXJhbXMpOlByb21pc2U8SVRvcGljRGV0YWlsUmVzcG9uc2U+PT57XHJcbi8vICAgICByZXR1cm4gYXdhaXQgYXBpLmdldFRvcGljKG9iaik7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgbW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXHJcbiAgICB1c2VySW5mbzoge30sXHJcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyk7XHJcbiAgICBhdmF0YXI6ICcnLFxyXG4gICAgdXNlcm5hbWU6ICfmnKrnmbvlvZUnLFxyXG4gICAgc3RhdHVzVGV4dDon5o6I5p2D55m75b2VJ1xyXG4gIH0sXHJcbiAgLy8gYmluZEdldFVzZXJJbmZvKGU6IGFueSkge1xyXG4gIC8vICAgY29uc29sZS5sb2coXCLmtYvor5UtLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuICAvLyAgIGlmIChlLmRldGFpbC51c2VySW5mbykge1xyXG4gIC8vICAgICAvL+eUqOaIt+aMieS6huWFgeiuuOaOiOadg+aMiemSrlxyXG4gIC8vICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgLy8gICAgIC8v5o+S5YWl55m75b2V55qE55So5oi355qE55u45YWz5L+h5oGv5Yiw5pWw5o2u5bqTXHJcbiAgLy8gICAgIHd4LnJlcXVlc3Qoe1xyXG4gIC8vICAgICAgIHVybDogYXBwLmdsb2JhbERhdGEudXJsUGF0aCArICd1c2VyL2FkZCcsXHJcbiAgLy8gICAgICAgZGF0YToge1xyXG4gIC8vICAgICAgICAgb3BlbmlkOiBnZXRBcHAoKS5nbG9iYWxEYXRhLm9wZW5pZCxcclxuICAvLyAgICAgICAgIG5pY2tOYW1lOiBlLmRldGFpbC51c2VySW5mby5uaWNrTmFtZSxcclxuICAvLyAgICAgICAgIGF2YXRhclVybDogZS5kZXRhaWwudXNlckluZm8uYXZhdGFyVXJsLFxyXG4gIC8vICAgICAgICAgcHJvdmluY2U6IGUuZGV0YWlsLnVzZXJJbmZvLnByb3ZpbmNlLFxyXG4gIC8vICAgICAgICAgY2l0eTogZS5kZXRhaWwudXNlckluZm8uY2l0eVxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgaGVhZGVyOiB7XHJcbiAgLy8gICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgLy8gICAgICAgICAvL+S7juaVsOaNruW6k+iOt+WPlueUqOaIt+S/oeaBr1xyXG4gIC8vICAgICAgICAgLy8gdGhhdC5xdWVyeVVzcmVJbmZvKCk7XHJcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIuaPkuWFpeWwj+eoi+W6j+eZu+W9leeUqOaIt+S/oeaBr+aIkOWKn++8gVwiKTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgICAvL+aOiOadg+aIkOWKn+WQju+8jOi3s+i9rOi/m+WFpeWwj+eoi+W6j+mmlumhtVxyXG4gIC8vICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gIC8vICAgICAgIHVybDogJy9wYWdlcy9pbmRleC9pbmRleCdcclxuICAvLyAgICAgfSlcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIC8v55So5oi35oyJ5LqG5ouS57ud5oyJ6ZKuXHJcbiAgLy8gICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgLy8gICAgICAgdGl0bGU6ICforablkYonLFxyXG4gIC8vICAgICAgIGNvbnRlbnQ6ICfmgqjngrnlh7vkuobmi5Lnu53mjojmnYPvvIzlsIbml6Dms5Xov5vlhaXlsI/nqIvluo/vvIzor7fmjojmnYPkuYvlkI7lho3ov5vlhaUhISEnLFxyXG4gIC8vICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gIC8vICAgICAgIGNvbmZpcm1UZXh0OiAn6L+U5Zue5o6I5p2DJyxcclxuICAvLyAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgLy8gICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAvLyAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+S6huKAnOi/lOWbnuaOiOadg+KAnScpXHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgfVxyXG4gIC8vIH0sXHJcbiAgLyrmjojmnYPnmbvlvZUgKi9cclxuICBvbkdvdFVzZXJJbmZvKGU6IGFueSkge1xyXG4gICAgLyrngrnlh7vnoa7orqTmjInpkq4gKi9cclxuICAgIGNvbnNvbGUubG9nKFwi54K55Ye75LqG56Gu6K6k5oyJ6ZKuXCIpO1xyXG4gICAgaWYgKGUuZGV0YWlsLnVzZXJJbmZvKSB7XHJcbiAgICAgd3gubG9naW4oe1xyXG4gICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rKysrKystLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhyZXMuY29kZSk7XHJcbiAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuXHJcbiAgICAgICAgICAgIHVybDonaHR0cHM6Ly9hcGktdGVzdC5pZmFucy5wdWIvdjEvYXV0aC9sb2dpbicsXHJcblxyXG4gICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICBjb2RlOnJlcy5jb2RlXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG5cclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW7ojrflj5bnmoTmlbDmja5yZXM6XCIpXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsKHJlcyl7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbuiOt+WPlueahOaVsOaNrmVycjpcIilcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgfVxyXG4gICAgIH0pXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKytcIik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGV0YWlsLmVyck1zZylcclxuICAgICAgLy8gY29uc29sZS5sb2coZS5kZXRhaWwudXNlckluZm8pXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGV0YWlsLnJhd0RhdGEpXHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIGF2YXRhcjogZS5kZXRhaWwudXNlckluZm8uYXZhdGFyVXJsLFxyXG4gICAgICAgIHVzZXJuYW1lOiBlLmRldGFpbC51c2VySW5mby5uaWNrTmFtZSxcclxuICAgICAgICBzdGF0dXNUZXh0Oiflt7LnmbvlvZUnXHJcbiAgICAgIH0pO1xyXG4gICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6J+WKoOi9veS4rSdcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICB3eC5oaWRlTG9hZGluZyh7XHJcbiAgICAgICAgIHN1Y2Nlc3MoKXtcclxuICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgIHVybDonLi4vaW5kZXgvaW5kZXgnXHJcbiAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSwzMDAwKTtcclxuICAgICAgLyrlj5HotbdodHRw6K+35rGCLeaPkuWFpeaVsOaNriAqL1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6ICforablkYonLFxyXG4gICAgICAgIGNvbnRlbnQ6ICfmgqjngrnlh7vkuobmi5Lnu53mjojmnYPvvIzlsIbml6Dms5Xov5vlhaXlsI/nqIvluo/vvIzor7fmjojmnYPkuYvlkI7lho3ov5vlhaUhISEnLFxyXG4gICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpcm1UZXh0OiAn6L+U5Zue5o6I5p2DJyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+S6huKAnOi/lOWbnuaOiOadg+KAnScpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG5cclxuXHJcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxyXG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xyXG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxyXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XHJcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSAocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICB1c2VySW5mbzogcmVzLFxyXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxyXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcclxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXHJcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuIl19