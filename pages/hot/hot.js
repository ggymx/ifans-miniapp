"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    subscribe: function () {
        console.log("测试");
        wx.showModal({
            title: '订阅方法',
            content: '搜索并关注轻话题公众号，通过\n【点击订阅轻话题每日热点】完成订阅\n\n明日起将收到公众号提醒',
            showCancel: false,
            confirmText: '确认复制',
            confirmColor: '#4D7193',
            success: function () {
            },
            fail: function () {
            }
        });
    },
    shareCard: function () {
        console.log("测试");
        wx.showToast({ title: "测试" });
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
    onShareAppMessage: function (res) {
        if (res.from === 'button') {
            wx.showShareMenu({
                withShareTicket: true,
                success: function (shareTickets) {
                }
            });
        }
        return {};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBZ0JBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7S0FDcEQ7SUFHRCxTQUFTO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFDLE1BQU07WUFDWixPQUFPLEVBQUMsa0RBQWtEO1lBQzFELFVBQVUsRUFBQyxLQUFLO1lBQ2hCLFdBQVcsRUFBQyxNQUFNO1lBQ2xCLFlBQVksRUFBQyxTQUFTO1lBQ3RCLE9BQU87WUFFUCxDQUFDO1lBQ0QsSUFBSTtZQUVKLENBQUM7U0FDRixDQUFDLENBQUE7SUFDTCxDQUFDO0lBQ0QsU0FBUztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRCxNQUFNO1FBQU4saUJBcUNDO1FBMUJDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUE7U0FDSDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUM7WUFHM0IsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDOUIsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRLEVBQUUsR0FBRztvQkFDYixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFBO1NBQ0Y7YUFBTTtZQUVMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsV0FBVyxFQUFFLElBQUk7cUJBQ2xCLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBQ0QsaUJBQWlCLFlBQUMsR0FBTztRQUN2QixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ3pCLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQ2YsZUFBZSxFQUFDLElBQUk7Z0JBQ3BCLE9BQU8sWUFBQyxZQUFZO2dCQUlwQixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7UUFDRCxPQUFPLEVBSU4sQ0FBQTtJQUNILENBQUM7SUFFRCxXQUFXLFlBQUMsQ0FBTTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDM0MsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcclxuLy/ojrflj5blupTnlKjlrp7kvotcclxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xyXG5cclxuLy/osIPnlKjlkI7lj7BhcGlcclxuLyrlr7zlhaVpbmRleD8/PyAqL1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL2NvbW1vbi9hcGknXHJcbmltcG9ydCB7IElUb3BpY0RldGFpbFBhcmFtcyxJVG9waWNEZXRhaWxSZXNwb25zZX0gZnJvbSAnLi4vLi4vY29tbW9uL3R5cGVzL2h0dHBfbXNnJztcclxuXHJcblxyXG4vLyBsZXQgZ2V0VG9waWM9YXN5bmMgKG9iajpJVG9waWNEZXRhaWxQYXJhbXMpOlByb21pc2U8SVRvcGljRGV0YWlsUmVzcG9uc2U+PT57XHJcbi8vICAgICByZXR1cm4gYXdhaXQgYXBpLmdldFRvcGljKG9iaik7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgbW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXHJcbiAgICB1c2VySW5mbzoge30sXHJcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJylcclxuICB9LFxyXG5cclxuIC8q6K6i6ZiFICovXHJcbiAgc3Vic2NyaWJlKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIua1i+ivlVwiKTtcclxuICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgdGl0bGU6J+iuoumYheaWueazlScsXHJcbiAgICAgICBjb250ZW50OifmkJzntKLlubblhbPms6jovbvor53popjlhazkvJflj7fvvIzpgJrov4dcXG7jgJDngrnlh7vorqLpmIXovbvor53popjmr4/ml6Xng63ngrnjgJHlrozmiJDorqLpmIVcXG5cXG7mmI7ml6XotbflsIbmlLbliLDlhazkvJflj7fmj5DphpInLFxyXG4gICAgICAgc2hvd0NhbmNlbDpmYWxzZSxcclxuICAgICAgIGNvbmZpcm1UZXh0Oifnoa7orqTlpI3liLYnLFxyXG4gICAgICAgY29uZmlybUNvbG9yOicjNEQ3MTkzJyxcclxuICAgICAgIHN1Y2Nlc3MoKXtcclxuICAgICAgICAvL+aIkOWKn+aXtueahOWbnuiwg+WHveaVsFxyXG4gICAgICAgfSxcclxuICAgICAgIGZhaWwoKXtcclxuICAgICAgICAvL+Wksei0peaXtueahOWbnuiwg+WHveaVsFxyXG4gICAgICAgfVxyXG4gICAgIH0pXHJcbiAgfSxcclxuICBzaGFyZUNhcmQoKXtcclxuICAgIGNvbnNvbGUubG9nKFwi5rWL6K+VXCIpO1xyXG4gICAgd3guc2hvd1RvYXN0KHt0aXRsZTpcIua1i+ivlVwifSkgXHJcbiAgfSxcclxuICBcclxuICBvbkxvYWQoKSB7XHJcbiAgICAvLyBnZXRUb3BpYyh7aWQ6MX0pLnRoZW4oKGRhdGEpPT57XHJcblxyXG4gICAgLy8gIGxldCBjcmVhdEF0PWRhdGEudG9waWMuY3JlYXRlQXQudG9Mb2NhbGVTdHJpbmcoKVxyXG5cclxuICAgIC8vICB0aGlzLnNldERhdGEhKHtkYXRhOmRhdGEsY3JlYXRBdDpjcmVhdEF0fSlcclxuICAgIC8vICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgLy8gfSkuY2F0Y2goKTtcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcclxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2Upe1xyXG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxyXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XHJcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSAocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICB1c2VySW5mbzogcmVzLFxyXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxyXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcclxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzOmFueSkge1xyXG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICB3eC5zaG93U2hhcmVNZW51KHtcclxuICAgICAgICB3aXRoU2hhcmVUaWNrZXQ6dHJ1ZSxcclxuICAgICAgICBzdWNjZXNzKHNoYXJlVGlja2V0cyl7XHJcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKHNoYXJlVGlja2V0cyk7XHJcbiAgICAgICAgLy8gIHZhciB0ZXN0PUpTT04uc3RyaW5naWZ5KHNoYXJlVGlja2V0cyk7XHJcbiAgICAgICAgLy8gIHd4LnNob3dUb2FzdCh7dGl0bGU6dGVzdH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC8vIHRpdGxlOiAn6Ieq5a6a5LmJ6L2s5Y+R5qCH6aKYJyxcclxuICAgICAgLy8gcGF0aDogJy9wYWdlL3VzZXI/aWQ9MTIzJ1xyXG4gICAgICAvLyBpbWFnZVVybDonLi4vLi4vaW1ncy90b3BpYy5wbmcnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcclxuICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG59KVxyXG4iXX0=