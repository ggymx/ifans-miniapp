"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        returnInfo: null,
        statusText: '授权登录'
    },
    onGotUserInfo: function (e) {
        console.log("点击了确认按钮");
        if (e.detail.userInfo) {
            var that = this;
            wx.login({
                success: function (res) {
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
                            that.setData({
                                returnInfo: res.data,
                                statusText: '已登录'
                            });
                        },
                        fail: function (res) {
                            console.log("login获取的数据err:");
                            console.log(res.errMsg);
                        }
                    });
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWdCQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBQ25ELFVBQVUsRUFBQyxJQUFJO1FBQ2YsVUFBVSxFQUFDLE1BQU07S0FDbEI7SUE2Q0QsYUFBYSxZQUFDLENBQU07UUFFbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3RCLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQztZQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQ1AsT0FBTyxZQUFDLEdBQUc7b0JBRVQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3JCLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0JBRVQsR0FBRyxFQUFDLDBDQUEwQzt3QkFFOUMsSUFBSSxFQUFDOzRCQUNILElBQUksRUFBQyxHQUFHLENBQUMsSUFBSTt5QkFDZDt3QkFFRCxNQUFNLEVBQUU7NEJBQ04sY0FBYyxFQUFFLGtCQUFrQjt5QkFDbkM7d0JBRUQsTUFBTSxFQUFDLE1BQU07d0JBRWIsT0FBTyxZQUFDLEdBQUc7NEJBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBOzRCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDdEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQ0FDWixVQUFVLEVBQUMsR0FBRyxDQUFDLElBQUk7Z0NBQ25CLFVBQVUsRUFBQyxLQUFLOzZCQUNqQixDQUFDLENBQUM7d0JBQ0wsQ0FBQzt3QkFDRCxJQUFJLFlBQUMsR0FBRzs0QkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7NEJBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUMxQixDQUFDO3FCQUVGLENBQUMsQ0FBQztnQkFDTixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1lBVUQsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDYixLQUFLLEVBQUMsS0FBSzthQUNaLENBQUMsQ0FBQztZQUNILFVBQVUsQ0FBQztnQkFDVCxFQUFFLENBQUMsV0FBVyxDQUFDO29CQUNkLE9BQU87d0JBQ0wsRUFBRSxDQUFDLFVBQVUsQ0FBQzs0QkFDWixHQUFHLEVBQUMsZ0JBQWdCO3lCQUNyQixDQUFDLENBQUM7b0JBQ0wsQ0FBQztpQkFDRCxDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7U0FHVDthQUFNO1lBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxPQUFPLEVBQUUsK0JBQStCO2dCQUN4QyxVQUFVLEVBQUUsS0FBSztnQkFDakIsV0FBVyxFQUFFLE1BQU07Z0JBQ25CLE9BQU8sRUFBRSxVQUFVLEdBQUc7b0JBQ3BCLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTt3QkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO3FCQUMzQjtnQkFDSCxDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBQ0QsTUFBTTtRQUFOLGlCQTZCQztRQTFCQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDakMsV0FBVyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFBO1NBQ0g7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRzVCLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxVQUFDLEdBQUc7Z0JBQzlCLEtBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osUUFBUSxFQUFFLEdBQUc7b0JBQ2IsV0FBVyxFQUFFLElBQUk7aUJBQ2xCLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQTtTQUNGO2FBQU07WUFFTCxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0JBQ1YsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtvQkFDdEMsS0FBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLFdBQVcsRUFBRSxJQUFJO3FCQUNsQixDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUNGLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUVELFdBQVcsWUFBQyxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xyXG4vL+iOt+WPluW6lOeUqOWunuS+i1xyXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXHJcblxyXG4vL+iwg+eUqOWQjuWPsGFwaVxyXG4vKuWvvOWFpWluZGV4Pz8/ICovXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vY29tbW9uL2FwaSdcclxuaW1wb3J0IHsgSVRvcGljRGV0YWlsUGFyYW1zLCBJVG9waWNEZXRhaWxSZXNwb25zZSB9IGZyb20gJy4uLy4uL2NvbW1vbi90eXBlcy9odHRwX21zZyc7XHJcbmltcG9ydCB7IFRlc3RBcGkgfSBmcm9tICcuLi8uLi90ZXN0QXBpL1Rlc3RBcGknO1xyXG5cclxuLy8gbGV0IGdldFRvcGljPWFzeW5jIChvYmo6SVRvcGljRGV0YWlsUGFyYW1zKTpQcm9taXNlPElUb3BpY0RldGFpbFJlc3BvbnNlPj0+e1xyXG4vLyAgICAgcmV0dXJuIGF3YWl0IGFwaS5nZXRUb3BpYyhvYmopO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxyXG4gICAgdXNlckluZm86IHt9LFxyXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxyXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxyXG4gICAgcmV0dXJuSW5mbzpudWxsLFxyXG4gICAgc3RhdHVzVGV4dDon5o6I5p2D55m75b2VJ1xyXG4gIH0sXHJcbiAgLy8gYmluZEdldFVzZXJJbmZvKGU6IGFueSkge1xyXG4gIC8vICAgY29uc29sZS5sb2coXCLmtYvor5UtLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuICAvLyAgIGlmIChlLmRldGFpbC51c2VySW5mbykge1xyXG4gIC8vICAgICAvL+eUqOaIt+aMieS6huWFgeiuuOaOiOadg+aMiemSrlxyXG4gIC8vICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgLy8gICAgIC8v5o+S5YWl55m75b2V55qE55So5oi355qE55u45YWz5L+h5oGv5Yiw5pWw5o2u5bqTXHJcbiAgLy8gICAgIHd4LnJlcXVlc3Qoe1xyXG4gIC8vICAgICAgIHVybDogYXBwLmdsb2JhbERhdGEudXJsUGF0aCArICd1c2VyL2FkZCcsXHJcbiAgLy8gICAgICAgZGF0YToge1xyXG4gIC8vICAgICAgICAgb3BlbmlkOiBnZXRBcHAoKS5nbG9iYWxEYXRhLm9wZW5pZCxcclxuICAvLyAgICAgICAgIG5pY2tOYW1lOiBlLmRldGFpbC51c2VySW5mby5uaWNrTmFtZSxcclxuICAvLyAgICAgICAgIGF2YXRhclVybDogZS5kZXRhaWwudXNlckluZm8uYXZhdGFyVXJsLFxyXG4gIC8vICAgICAgICAgcHJvdmluY2U6IGUuZGV0YWlsLnVzZXJJbmZvLnByb3ZpbmNlLFxyXG4gIC8vICAgICAgICAgY2l0eTogZS5kZXRhaWwudXNlckluZm8uY2l0eVxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgaGVhZGVyOiB7XHJcbiAgLy8gICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgLy8gICAgICAgICAvL+S7juaVsOaNruW6k+iOt+WPlueUqOaIt+S/oeaBr1xyXG4gIC8vICAgICAgICAgLy8gdGhhdC5xdWVyeVVzcmVJbmZvKCk7XHJcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIuaPkuWFpeWwj+eoi+W6j+eZu+W9leeUqOaIt+S/oeaBr+aIkOWKn++8gVwiKTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgICAvL+aOiOadg+aIkOWKn+WQju+8jOi3s+i9rOi/m+WFpeWwj+eoi+W6j+mmlumhtVxyXG4gIC8vICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gIC8vICAgICAgIHVybDogJy9wYWdlcy9pbmRleC9pbmRleCdcclxuICAvLyAgICAgfSlcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIC8v55So5oi35oyJ5LqG5ouS57ud5oyJ6ZKuXHJcbiAgLy8gICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgLy8gICAgICAgdGl0bGU6ICforablkYonLFxyXG4gIC8vICAgICAgIGNvbnRlbnQ6ICfmgqjngrnlh7vkuobmi5Lnu53mjojmnYPvvIzlsIbml6Dms5Xov5vlhaXlsI/nqIvluo/vvIzor7fmjojmnYPkuYvlkI7lho3ov5vlhaUhISEnLFxyXG4gIC8vICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gIC8vICAgICAgIGNvbmZpcm1UZXh0OiAn6L+U5Zue5o6I5p2DJyxcclxuICAvLyAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgLy8gICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAvLyAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+S6huKAnOi/lOWbnuaOiOadg+KAnScpXHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgfVxyXG4gIC8vIH0sXHJcbiAgLyrmjojmnYPnmbvlvZUgKi9cclxuICBvbkdvdFVzZXJJbmZvKGU6IGFueSkge1xyXG4gICAgLyrngrnlh7vnoa7orqTmjInpkq4gKi9cclxuICAgIGNvbnNvbGUubG9nKFwi54K55Ye75LqG56Gu6K6k5oyJ6ZKuXCIpO1xyXG4gICAgaWYgKGUuZGV0YWlsLnVzZXJJbmZvKSB7XHJcbiAgICAgdmFyIHRoYXQ9dGhpcztcclxuICAgICB3eC5sb2dpbih7XHJcbiAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAvKnd4LmxvZ2lu6I635Y+WY29kZS3lvq7kv6HnmbvlvZXnmoTmoIfor4YgKi9cclxuICAgICAgICAgY29uc29sZS5sb2cocmVzLmNvZGUpO1xyXG4gICAgICAgICAgd3gucmVxdWVzdCh7XHJcblxyXG4gICAgICAgICAgICB1cmw6J2h0dHBzOi8vYXBpLXRlc3QuaWZhbnMucHViL3YxL2F1dGgvbG9naW4nLFxyXG5cclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgY29kZTpyZXMuY29kZVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2lu6I635Y+W55qE5pWw5o2ucmVzOlwiKVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgIHJldHVybkluZm86cmVzLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0Oiflt7LnmbvlvZUnXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWwocmVzKXtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2lu6I635Y+W55qE5pWw5o2uZXJyOlwiKVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICB9XHJcbiAgICAgfSlcclxuICAgICAgLy8gY29uc29sZS5sb2coXCIrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK1wiKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZS5kZXRhaWwuZXJyTXNnKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlLmRldGFpbC51c2VySW5mbylcclxuICAgICAgLy8gY29uc29sZS5sb2coZS5kZXRhaWwucmF3RGF0YSlcclxuICAgICAgLy8gdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIC8vICAgYXZhdGFyOiBlLmRldGFpbC51c2VySW5mby5hdmF0YXJVcmwsXHJcbiAgICAgIC8vICAgdXNlcm5hbWU6IGUuZGV0YWlsLnVzZXJJbmZvLm5pY2tOYW1lLFxyXG4gICAgICAvLyAgIHN0YXR1c1RleHQ6J+W3sueZu+W9lSdcclxuICAgICAgLy8gfSk7XHJcbiAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICB0aXRsZTon5Yqg6L295LitJ1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKHtcclxuICAgICAgICAgc3VjY2Vzcygpe1xyXG4gICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgdXJsOicuLi9pbmRleC9pbmRleCdcclxuICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LDMwMDApO1xyXG4gICAgICAvKuWPkei1t2h0dHDor7fmsYIt5o+S5YWl5pWw5o2uICovXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICB0aXRsZTogJ+itpuWRiicsXHJcbiAgICAgICAgY29udGVudDogJ+aCqOeCueWHu+S6huaLkue7neaOiOadg++8jOWwhuaXoOazlei/m+WFpeWwj+eoi+W6j++8jOivt+aOiOadg+S5i+WQjuWGjei/m+WFpSEhIScsXHJcbiAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgY29uZmlybVRleHQ6ICfov5Tlm57mjojmnYMnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye75LqG4oCc6L+U5Zue5o6I5p2D4oCdJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcblxyXG5cclxuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICB1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXHJcbiAgICAgICAgaGFzVXNlckluZm86IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XHJcbiAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXHJcbiAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcclxuICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgIHVzZXJJbmZvOiByZXMsXHJcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXHJcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxyXG4gICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcclxuICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG59KVxyXG4iXX0=