"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestApi_1 = require("../../testApi/TestApi");
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        toplicList: [],
        toplic: {},
        comment: {},
        subText: '分享给朋友',
        subImg: '../../imgs/jia.png'
    },
    subscribe: function () {
        console.log("测试");
        this.setData({
            subText: '已订阅',
            subImg: '../../imgs/gou.png'
        });
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
        console.log(this.data.toplicList);
        this.setData({
            toplicList: TestApi_1.TestApi.getTopList(),
            toplic: TestApi_1.TestApi.getTopic(3)
        });
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
                    console.log(shareTickets);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsaURBQWdEO0FBUWhELElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsVUFBVSxFQUFFLEVBQUU7UUFDZCxNQUFNLEVBQUUsRUFBRTtRQUNWLE9BQU8sRUFBRSxFQUFFO1FBQ1gsT0FBTyxFQUFDLE9BQU87UUFDZixNQUFNLEVBQUMsb0JBQW9CO0tBQzVCO0lBRUYsU0FBUztRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLE9BQU8sRUFBRSxLQUFLO1lBQ2QsTUFBTSxFQUFDLG9CQUFvQjtTQUM1QixDQUFDLENBQUM7UUFDRixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFDLE1BQU07WUFDWixPQUFPLEVBQUMsa0RBQWtEO1lBQzFELFVBQVUsRUFBQyxLQUFLO1lBQ2hCLFdBQVcsRUFBQyxNQUFNO1lBQ2xCLFlBQVksRUFBQyxTQUFTO1lBQ3RCLE9BQU87WUFHUCxDQUFDO1lBQ0QsSUFBSTtZQUVKLENBQUM7U0FDRixDQUFDLENBQUE7SUFDTCxDQUFDO0lBQ0QsU0FBUztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFDQyxNQUFNO1FBQU4saUJBMENDO1FBekNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osVUFBVSxFQUFFLGlCQUFPLENBQUMsVUFBVSxFQUFFO1lBQ2hDLE1BQU0sRUFBRSxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDNUIsQ0FBQyxDQUFDO1FBV0gsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUMzQixJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVE7Z0JBQ2pDLFdBQVcsRUFBRSxJQUFJO2FBQ2xCLENBQUMsQ0FBQTtTQUNIO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUc1QixHQUFHLENBQUMscUJBQXFCLEdBQUcsVUFBQyxHQUFHO2dCQUM5QixLQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLFFBQVEsRUFBRSxHQUFHO29CQUNiLFdBQVcsRUFBRSxJQUFJO2lCQUNsQixDQUFDLENBQUE7WUFDSixDQUFDLENBQUE7U0FDRjthQUFNO1lBRUwsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDYixPQUFPLEVBQUUsVUFBQSxHQUFHO29CQUNWLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7b0JBQ3RDLEtBQUksQ0FBQyxPQUFRLENBQUM7d0JBQ1osUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO3dCQUN0QixXQUFXLEVBQUUsSUFBSTtxQkFDbEIsQ0FBQyxDQUFBO2dCQUNKLENBQUM7YUFDRixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFDRCxpQkFBaUIsWUFBQyxHQUFPO1FBQ3ZCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDekIsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDZixlQUFlLEVBQUMsSUFBSTtnQkFDcEIsT0FBTyxZQUFDLFlBQVk7b0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBRzFCLENBQUM7YUFDRixDQUFDLENBQUE7U0FDSDtRQUNELE9BQU8sRUFJTixDQUFBO0lBQ0gsQ0FBQztJQUVELFdBQVcsWUFBQyxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xyXG4vL+iOt+WPluW6lOeUqOWunuS+i1xyXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXHJcblxyXG4vL+iwg+eUqOWQjuWPsGFwaVxyXG4vKuWvvOWFpWluZGV4Pz8/ICovXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vY29tbW9uL2FwaSdcclxuaW1wb3J0IHsgSVRvcGljRGV0YWlsUGFyYW1zLCBJVG9waWNEZXRhaWxSZXNwb25zZSB9IGZyb20gJy4uLy4uL2NvbW1vbi90eXBlcy9odHRwX21zZyc7XHJcbmltcG9ydCB7IFRlc3RBcGkgfSBmcm9tICcuLi8uLi90ZXN0QXBpL1Rlc3RBcGknO1xyXG5cclxuLy8gbGV0IGdldFRvcGljPWFzeW5jIChvYmo6SVRvcGljRGV0YWlsUGFyYW1zKTpQcm9taXNlPElUb3BpY0RldGFpbFJlc3BvbnNlPj0+e1xyXG4vLyAgICAgcmV0dXJuIGF3YWl0IGFwaS5nZXRUb3BpYyhvYmopO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxyXG4gICAgdXNlckluZm86IHt9LFxyXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxyXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxyXG4gICAgdG9wbGljTGlzdDogW10sXHJcbiAgICB0b3BsaWM6IHt9LFxyXG4gICAgY29tbWVudDoge30sXHJcbiAgICBzdWJUZXh0OifliIbkuqvnu5nmnIvlj4snLFxyXG4gICAgc3ViSW1nOicuLi8uLi9pbWdzL2ppYS5wbmcnXHJcbiAgfSxcclxuIC8q6K6i6ZiFICovXHJcbiBzdWJzY3JpYmUoKXtcclxuICBjb25zb2xlLmxvZyhcIua1i+ivlVwiKTtcclxuICB0aGlzLnNldERhdGEhKHtcclxuICAgIHN1YlRleHQ6ICflt7LorqLpmIUnLFxyXG4gICAgc3ViSW1nOicuLi8uLi9pbWdzL2dvdS5wbmcnXHJcbiAgfSk7XHJcbiAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgdGl0bGU6J+iuoumYheaWueazlScsXHJcbiAgICAgY29udGVudDon5pCc57Si5bm25YWz5rOo6L276K+d6aKY5YWs5LyX5Y+377yM6YCa6L+HXFxu44CQ54K55Ye76K6i6ZiF6L276K+d6aKY5q+P5pel54Ot54K544CR5a6M5oiQ6K6i6ZiFXFxuXFxu5piO5pel6LW35bCG5pS25Yiw5YWs5LyX5Y+35o+Q6YaSJyxcclxuICAgICBzaG93Q2FuY2VsOmZhbHNlLFxyXG4gICAgIGNvbmZpcm1UZXh0Oifnoa7orqTlpI3liLYnLFxyXG4gICAgIGNvbmZpcm1Db2xvcjonIzRENzE5MycsXHJcbiAgICAgc3VjY2Vzcygpe1xyXG4gICAgICAvL+aIkOWKn+aXtueahOWbnuiwg+WHveaVsFxyXG4gICAgIFxyXG4gICAgIH0sXHJcbiAgICAgZmFpbCgpe1xyXG4gICAgICAvL+Wksei0peaXtueahOWbnuiwg+WHveaVsFxyXG4gICAgIH1cclxuICAgfSlcclxufSxcclxuc2hhcmVDYXJkKCl7XHJcbiAgY29uc29sZS5sb2coXCLmtYvor5VcIik7XHJcbiAgd3guc2hvd1RvYXN0KHt0aXRsZTpcIua1i+ivlVwifSkgXHJcbn0sXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhLnRvcGxpY0xpc3QpO1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHRvcGxpY0xpc3Q6IFRlc3RBcGkuZ2V0VG9wTGlzdCgpLFxyXG4gICAgICB0b3BsaWM6IFRlc3RBcGkuZ2V0VG9waWMoMylcclxuICAgIH0pO1xyXG4gICAgLy8gZ2V0VG9waWMoe2lkOjF9KS50aGVuKChkYXRhKT0+e1xyXG5cclxuICAgIC8vICBsZXQgY3JlYXRBdD1kYXRhLnRvcGljLmNyZWF0ZUF0LnRvTG9jYWxlU3RyaW5nKClcclxuXHJcbiAgICAvLyAgdGhpcy5zZXREYXRhISh7ZGF0YTpkYXRhLGNyZWF0QXQ6Y3JlYXRBdH0pXHJcbiAgICAvLyAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIC8vIH0pLmNhdGNoKCk7XHJcblxyXG5cclxuXHJcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxyXG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xyXG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxyXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XHJcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSAocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICB1c2VySW5mbzogcmVzLFxyXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxyXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcclxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzOmFueSkge1xyXG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICB3eC5zaG93U2hhcmVNZW51KHtcclxuICAgICAgICB3aXRoU2hhcmVUaWNrZXQ6dHJ1ZSxcclxuICAgICAgICBzdWNjZXNzKHNoYXJlVGlja2V0cyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2hhcmVUaWNrZXRzKTtcclxuICAgICAgICAvLyAgdmFyIHRlc3Q9SlNPTi5zdHJpbmdpZnkoc2hhcmVUaWNrZXRzKTtcclxuICAgICAgICAvLyAgd3guc2hvd1RvYXN0KHt0aXRsZTp0ZXN0fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLy8gdGl0bGU6ICfoh6rlrprkuYnovazlj5HmoIfpopgnLFxyXG4gICAgICAvLyBwYXRoOiAnL3BhZ2UvdXNlcj9pZD0xMjMnXHJcbiAgICAgIC8vIGltYWdlVXJsOicuLi8uLi9pbWdzL3RvcGljLnBuZydcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxyXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcbiJdfQ==