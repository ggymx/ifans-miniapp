"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        returnInfo: {},
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWdCQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBQ25ELFVBQVUsRUFBQyxFQUFFO1FBQ2IsVUFBVSxFQUFDLE1BQU07S0FDbEI7SUE2Q0QsYUFBYSxZQUFDLENBQU07UUFFbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3RCLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQztZQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQ1AsT0FBTyxZQUFDLEdBQUc7b0JBRVQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3JCLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0JBRVQsR0FBRyxFQUFDLDBDQUEwQzt3QkFFOUMsSUFBSSxFQUFDOzRCQUNILElBQUksRUFBQyxHQUFHLENBQUMsSUFBSTt5QkFDZDt3QkFFRCxNQUFNLEVBQUU7NEJBQ04sY0FBYyxFQUFFLGtCQUFrQjt5QkFDbkM7d0JBRUQsTUFBTSxFQUFDLE1BQU07d0JBRWIsT0FBTyxZQUFDLEdBQUc7NEJBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBOzRCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDdEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQ0FDWixVQUFVLEVBQUMsR0FBRyxDQUFDLElBQUk7Z0NBQ25CLFVBQVUsRUFBQyxLQUFLOzZCQUNqQixDQUFDLENBQUM7d0JBQ0wsQ0FBQzt3QkFDRCxJQUFJLFlBQUMsR0FBRzs0QkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7NEJBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUMxQixDQUFDO3FCQUVGLENBQUMsQ0FBQztnQkFDTixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1lBVUQsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDYixLQUFLLEVBQUMsS0FBSzthQUNaLENBQUMsQ0FBQztZQUNILFVBQVUsQ0FBQztnQkFDVCxFQUFFLENBQUMsV0FBVyxDQUFDO29CQUNkLE9BQU87d0JBQ0wsRUFBRSxDQUFDLFVBQVUsQ0FBQzs0QkFDWixHQUFHLEVBQUMsZ0JBQWdCO3lCQUNyQixDQUFDLENBQUM7b0JBQ0wsQ0FBQztpQkFDRCxDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7U0FHVDthQUFNO1lBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxPQUFPLEVBQUUsK0JBQStCO2dCQUN4QyxVQUFVLEVBQUUsS0FBSztnQkFDakIsV0FBVyxFQUFFLE1BQU07Z0JBQ25CLE9BQU8sRUFBRSxVQUFVLEdBQUc7b0JBQ3BCLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTt3QkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO3FCQUMzQjtnQkFDSCxDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBQ0QsTUFBTTtRQUFOLGlCQTZCQztRQTFCQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDakMsV0FBVyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFBO1NBQ0g7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRzVCLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxVQUFDLEdBQUc7Z0JBQzlCLEtBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osUUFBUSxFQUFFLEdBQUc7b0JBQ2IsV0FBVyxFQUFFLElBQUk7aUJBQ2xCLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQTtTQUNGO2FBQU07WUFFTCxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0JBQ1YsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtvQkFDdEMsS0FBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLFdBQVcsRUFBRSxJQUFJO3FCQUNsQixDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUNGLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUVELFdBQVcsWUFBQyxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xyXG4vL+iOt+WPluW6lOeUqOWunuS+i1xyXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXHJcblxyXG4vL+iwg+eUqOWQjuWPsGFwaVxyXG4vKuWvvOWFpWluZGV4Pz8/ICovXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vY29tbW9uL2FwaSdcclxuaW1wb3J0IHsgSVRvcGljRGV0YWlsUGFyYW1zLCBJVG9waWNEZXRhaWxSZXNwb25zZSB9IGZyb20gJy4uLy4uL2NvbW1vbi90eXBlcy9odHRwX21zZyc7XHJcbmltcG9ydCB7IFRlc3RBcGkgfSBmcm9tICcuLi8uLi90ZXN0QXBpL1Rlc3RBcGknO1xyXG5cclxuLy8gbGV0IGdldFRvcGljPWFzeW5jIChvYmo6SVRvcGljRGV0YWlsUGFyYW1zKTpQcm9taXNlPElUb3BpY0RldGFpbFJlc3BvbnNlPj0+e1xyXG4vLyAgICAgcmV0dXJuIGF3YWl0IGFwaS5nZXRUb3BpYyhvYmopO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxyXG4gICAgdXNlckluZm86IHt9LFxyXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxyXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxyXG4gICAgcmV0dXJuSW5mbzp7fSxcclxuICAgIHN0YXR1c1RleHQ6J+aOiOadg+eZu+W9lSdcclxuICB9LFxyXG4gIC8vIGJpbmRHZXRVc2VySW5mbyhlOiBhbnkpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwi5rWL6K+VLS0tLS0tLS0tLS0tLS0tLS0tXCIpXHJcbiAgLy8gICBpZiAoZS5kZXRhaWwudXNlckluZm8pIHtcclxuICAvLyAgICAgLy/nlKjmiLfmjInkuoblhYHorrjmjojmnYPmjInpkq5cclxuICAvLyAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gIC8vICAgICAvL+aPkuWFpeeZu+W9leeahOeUqOaIt+eahOebuOWFs+S/oeaBr+WIsOaVsOaNruW6k1xyXG4gIC8vICAgICB3eC5yZXF1ZXN0KHtcclxuICAvLyAgICAgICB1cmw6IGFwcC5nbG9iYWxEYXRhLnVybFBhdGggKyAndXNlci9hZGQnLFxyXG4gIC8vICAgICAgIGRhdGE6IHtcclxuICAvLyAgICAgICAgIG9wZW5pZDogZ2V0QXBwKCkuZ2xvYmFsRGF0YS5vcGVuaWQsXHJcbiAgLy8gICAgICAgICBuaWNrTmFtZTogZS5kZXRhaWwudXNlckluZm8ubmlja05hbWUsXHJcbiAgLy8gICAgICAgICBhdmF0YXJVcmw6IGUuZGV0YWlsLnVzZXJJbmZvLmF2YXRhclVybCxcclxuICAvLyAgICAgICAgIHByb3ZpbmNlOiBlLmRldGFpbC51c2VySW5mby5wcm92aW5jZSxcclxuICAvLyAgICAgICAgIGNpdHk6IGUuZGV0YWlsLnVzZXJJbmZvLmNpdHlcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIGhlYWRlcjoge1xyXG4gIC8vICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gIC8vICAgICAgICAgLy/ku47mlbDmja7lupPojrflj5bnlKjmiLfkv6Hmga9cclxuICAvLyAgICAgICAgIC8vIHRoYXQucXVlcnlVc3JlSW5mbygpO1xyXG4gIC8vICAgICAgICAgY29uc29sZS5sb2coXCLmj5LlhaXlsI/nqIvluo/nmbvlvZXnlKjmiLfkv6Hmga/miJDlip/vvIFcIik7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9KTtcclxuICAvLyAgICAgLy/mjojmnYPmiJDlip/lkI7vvIzot7Povazov5vlhaXlsI/nqIvluo/pppbpobVcclxuICAvLyAgICAgd3guc3dpdGNoVGFiKHtcclxuICAvLyAgICAgICB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICAvL+eUqOaIt+aMieS6huaLkue7neaMiemSrlxyXG4gIC8vICAgICB3eC5zaG93TW9kYWwoe1xyXG4gIC8vICAgICAgIHRpdGxlOiAn6K2m5ZGKJyxcclxuICAvLyAgICAgICBjb250ZW50OiAn5oKo54K55Ye75LqG5ouS57ud5o6I5p2D77yM5bCG5peg5rOV6L+b5YWl5bCP56iL5bqP77yM6K+35o6I5p2D5LmL5ZCO5YaN6L+b5YWlISEhJyxcclxuICAvLyAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAvLyAgICAgICBjb25maXJtVGV4dDogJ+i/lOWbnuaOiOadgycsXHJcbiAgLy8gICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gIC8vICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgLy8gICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vkuobigJzov5Tlm57mjojmnYPigJ0nKVxyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfSlcclxuICAvLyAgIH1cclxuICAvLyB9LFxyXG4gIC8q5o6I5p2D55m75b2VICovXHJcbiAgb25Hb3RVc2VySW5mbyhlOiBhbnkpIHtcclxuICAgIC8q54K55Ye756Gu6K6k5oyJ6ZKuICovXHJcbiAgICBjb25zb2xlLmxvZyhcIueCueWHu+S6huehruiupOaMiemSrlwiKTtcclxuICAgIGlmIChlLmRldGFpbC51c2VySW5mbykge1xyXG4gICAgIHZhciB0aGF0PXRoaXM7XHJcbiAgICAgd3gubG9naW4oe1xyXG4gICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgLyp3eC5sb2dpbuiOt+WPlmNvZGUt5b6u5L+h55m75b2V55qE5qCH6K+GICovXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5jb2RlKTtcclxuICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG5cclxuICAgICAgICAgICAgdXJsOidodHRwczovL2FwaS10ZXN0LmlmYW5zLnB1Yi92MS9hdXRoL2xvZ2luJyxcclxuXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgIGNvZGU6cmVzLmNvZGVcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcblxyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbuiOt+WPlueahOaVsOaNrnJlczpcIilcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5JbmZvOnJlcy5kYXRhLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dDon5bey55m75b2VJ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsKHJlcyl7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbuiOt+WPlueahOaVsOaNrmVycjpcIilcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgfVxyXG4gICAgIH0pXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKytcIik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGV0YWlsLmVyck1zZylcclxuICAgICAgLy8gY29uc29sZS5sb2coZS5kZXRhaWwudXNlckluZm8pXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGV0YWlsLnJhd0RhdGEpXHJcbiAgICAgIC8vIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAvLyAgIGF2YXRhcjogZS5kZXRhaWwudXNlckluZm8uYXZhdGFyVXJsLFxyXG4gICAgICAvLyAgIHVzZXJuYW1lOiBlLmRldGFpbC51c2VySW5mby5uaWNrTmFtZSxcclxuICAgICAgLy8gICBzdGF0dXNUZXh0Oiflt7LnmbvlvZUnXHJcbiAgICAgIC8vIH0pO1xyXG4gICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6J+WKoOi9veS4rSdcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICB3eC5oaWRlTG9hZGluZyh7XHJcbiAgICAgICAgIHN1Y2Nlc3MoKXtcclxuICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgIHVybDonLi4vaW5kZXgvaW5kZXgnXHJcbiAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSwzMDAwKTtcclxuICAgICAgLyrlj5HotbdodHRw6K+35rGCLeaPkuWFpeaVsOaNriAqL1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6ICforablkYonLFxyXG4gICAgICAgIGNvbnRlbnQ6ICfmgqjngrnlh7vkuobmi5Lnu53mjojmnYPvvIzlsIbml6Dms5Xov5vlhaXlsI/nqIvluo/vvIzor7fmjojmnYPkuYvlkI7lho3ov5vlhaUhISEnLFxyXG4gICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpcm1UZXh0OiAn6L+U5Zue5o6I5p2DJyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+S6huKAnOi/lOWbnuaOiOadg+KAnScpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG5cclxuXHJcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxyXG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xyXG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxyXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XHJcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSAocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICB1c2VySW5mbzogcmVzLFxyXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxyXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcclxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXHJcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuIl19