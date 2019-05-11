"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../common/api");
var app = getApp();
var loginCode;
Page({
    data: {
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        returnInfo: null,
        statusText: '授权登录'
    },
    onGotUserInfo: function (e) {
        if (e.detail.userInfo) {
            var that_1 = this;
            api_1.default.request({
                url: '/v1/auth/login',
                data: {
                    code: loginCode,
                    encryptedData: e.detail.encryptedData,
                    iv: e.detail.iv,
                    rawData: e.detail.rawData,
                    signature: e.detail.signature,
                },
                header: {
                    'content-type': 'application/json'
                },
                method: 'POST',
                success: function (res) {
                    var data = res.data;
                    that_1.setData({
                        returnInfo: res.data,
                        statusText: '已登录'
                    });
                    api_1.default.setToken(data.token);
                    wx.setStorage({
                        key: 'userId',
                        data: data.user.id
                    });
                }
            });
            wx.showLoading({
                title: '加载中'
            });
            setTimeout(function () {
                wx.hideLoading({
                    success: function () { wx.navigateBack({ delta: 1 }); }
                });
            }, 500);
        }
        else {
            wx.showModal({
                title: '警告',
                content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
                showCancel: false,
                confirmText: '返回授权'
            });
        }
    },
    onLoad: function () {
        wx.login({
            success: function (res) {
                loginCode = res.code;
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHFDQUFnQztBQUVoQyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUM1QixJQUFJLFNBQWlCLENBQUE7QUFDckIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsVUFBVSxFQUFFLElBQUk7UUFDaEIsVUFBVSxFQUFFLE1BQU07S0FDbkI7SUFFRCxhQUFhLFlBQUMsQ0FBTTtRQUdsQixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3JCLElBQU0sTUFBSSxHQUFHLElBQUksQ0FBQztZQUVsQixhQUFHLENBQUMsT0FBTyxDQUFDO2dCQUVWLEdBQUcsRUFBRSxnQkFBZ0I7Z0JBRXJCLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsU0FBUztvQkFDZixhQUFhLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhO29CQUNyQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUNmLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU87b0JBQ3pCLFNBQVMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVM7aUJBQzlCO2dCQUVELE1BQU0sRUFBRTtvQkFDTixjQUFjLEVBQUUsa0JBQWtCO2lCQUNuQztnQkFFRCxNQUFNLEVBQUUsTUFBTTtnQkFFZCxPQUFPLFlBQUMsR0FBRztvQkFDVCxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBVyxDQUFBO29CQUM1QixNQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLFVBQVUsRUFBRSxHQUFHLENBQUMsSUFBSTt3QkFDcEIsVUFBVSxFQUFFLEtBQUs7cUJBQ2xCLENBQUMsQ0FBQztvQkFFSCxhQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFFekIsRUFBRSxDQUFDLFVBQVUsQ0FBQzt3QkFDWixHQUFHLEVBQUUsUUFBUTt3QkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO3FCQUNuQixDQUFDLENBQUM7Z0JBQ0wsQ0FBQzthQUNGLENBQUMsQ0FBQztZQUNILEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLEtBQUs7YUFDYixDQUFDLENBQUM7WUFDSCxVQUFVLENBQUM7Z0JBQ1QsRUFBRSxDQUFDLFdBQVcsQ0FBQztvQkFDYixPQUFPLGdCQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUM7aUJBQzVDLENBQUMsQ0FBQztZQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUdUO2FBQU07WUFDTCxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxJQUFJO2dCQUNYLE9BQU8sRUFBRSwrQkFBK0I7Z0JBQ3hDLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixXQUFXLEVBQUUsTUFBTTthQUNwQixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFDRCxNQUFNO1FBRUosRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sWUFBQyxHQUFHO2dCQUVULFNBQVMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFBO1lBQ3RCLENBQUM7U0FDRixDQUFDLENBQUE7SUFFSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xyXG4vL+iOt+WPluW6lOeUqOWunuS+i1xyXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi9hcHAnXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vY29tbW9uL2FwaSc7XHJcblxyXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXHJcbmxldCBsb2dpbkNvZGU6IHN0cmluZ1xyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXHJcbiAgICByZXR1cm5JbmZvOiBudWxsLFxyXG4gICAgc3RhdHVzVGV4dDogJ+aOiOadg+eZu+W9lSdcclxuICB9LFxyXG4gIC8q5o6I5p2D55m75b2VICovXHJcbiAgb25Hb3RVc2VySW5mbyhlOiBhbnkpIHtcclxuICAgIC8q54K55Ye756Gu6K6k5oyJ6ZKuICovXHJcbiAgICAvKuW9k+aLv+WIsOeUqOaIt+S/oeaBr+aXtiovXHJcbiAgICBpZiAoZS5kZXRhaWwudXNlckluZm8pIHtcclxuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICAgIC8q6L+Z6YeM5LiN6ZyA6KaB55SodG9rZW7liKTmlq0gKi9cclxuICAgICAgYXBpLnJlcXVlc3Qoe1xyXG5cclxuICAgICAgICB1cmw6ICcvdjEvYXV0aC9sb2dpbicsXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGNvZGU6IGxvZ2luQ29kZSxcclxuICAgICAgICAgIGVuY3J5cHRlZERhdGE6IGUuZGV0YWlsLmVuY3J5cHRlZERhdGEsXHJcbiAgICAgICAgICBpdjogZS5kZXRhaWwuaXYsXHJcbiAgICAgICAgICByYXdEYXRhOiBlLmRldGFpbC5yYXdEYXRhLFxyXG4gICAgICAgICAgc2lnbmF0dXJlOiBlLmRldGFpbC5zaWduYXR1cmUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcblxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGEgYXMgYW55XHJcbiAgICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgICAgcmV0dXJuSW5mbzogcmVzLmRhdGEsXHJcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6ICflt7LnmbvlvZUnXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8v5b6A57yT5a2Y5Lit5re75YqgdG9rZW7vvIjlvILmraXvvIlcclxuICAgICAgICAgIGFwaS5zZXRUb2tlbihkYXRhLnRva2VuKTtcclxuICAgICAgICAgIC8v5b6A57yT5a2Y5Lit5re75Yqg5b2T5YmN55So5oi355qEaWRcclxuICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6ICd1c2VySWQnLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLnVzZXIuaWRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKHtcclxuICAgICAgICAgIHN1Y2Nlc3MoKSB7IHd4Lm5hdmlnYXRlQmFjayh7IGRlbHRhOiAxIH0pIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgICAgLyrlj5HotbdodHRw6K+35rGCLeaPkuWFpeaVsOaNriAqL1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6ICforablkYonLFxyXG4gICAgICAgIGNvbnRlbnQ6ICfmgqjngrnlh7vkuobmi5Lnu53mjojmnYPvvIzlsIbml6Dms5Xov5vlhaXlsI/nqIvluo/vvIzor7fmjojmnYPkuYvlkI7lho3ov5vlhaUhISEnLFxyXG4gICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpcm1UZXh0OiAn6L+U5Zue5o6I5p2DJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgLyrojrflj5bnmbvlvZXlh63or4EqL1xyXG4gICAgd3gubG9naW4oe1xyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIC8qd3gubG9naW7ojrflj5Zjb2RlLeW+ruS/oeeZu+W9leeahOagh+ivhiAqL1xyXG4gICAgICAgIGxvZ2luQ29kZSA9IHJlcy5jb2RlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gIH1cclxufSlcclxuIl19