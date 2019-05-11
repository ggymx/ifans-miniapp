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
        subText: '搜索订阅号',
        subImg: '../../imgs/jia.png'
    },
    subscribe: function () {
        this.setData({
            subText: '已订阅',
            subImg: '../../imgs/gou.png'
        });
        wx.showModal({
            title: '订阅方法',
            content: '搜索并关注轻话题公众号，通过\n【点击订阅轻话题每日热点】完成订阅\n\n明日起将收到公众号提醒',
            showCancel: false,
            confirmText: '确认复制',
            confirmColor: '#4D7193'
        });
    },
    onLoad: function () {
        this.setData({
            toplicList: TestApi_1.TestApi.getTopList(),
            toplic: TestApi_1.TestApi.getTopic(3)
        });
    },
    onShareAppMessage: function (res) {
        if (res.from === 'button') {
            wx.showShareMenu({
                withShareTicket: true
            });
        }
        return {};
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFpbHktaG90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGFpbHktaG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsaURBQWdEO0FBQ2hELElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsVUFBVSxFQUFFLEVBQUU7UUFDZCxNQUFNLEVBQUUsRUFBRTtRQUNWLE9BQU8sRUFBRSxFQUFFO1FBQ1gsT0FBTyxFQUFFLE9BQU87UUFDaEIsTUFBTSxFQUFFLG9CQUFvQjtLQUM3QjtJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsb0JBQW9CO1NBQzdCLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxLQUFLLEVBQUUsTUFBTTtZQUNiLE9BQU8sRUFBRSxrREFBa0Q7WUFDM0QsVUFBVSxFQUFFLEtBQUs7WUFDakIsV0FBVyxFQUFFLE1BQU07WUFDbkIsWUFBWSxFQUFFLFNBQVM7U0FDeEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU07UUFDSixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osVUFBVSxFQUFFLGlCQUFPLENBQUMsVUFBVSxFQUFFO1lBQ2hDLE1BQU0sRUFBRSxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDNUIsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUVELGlCQUFpQixZQUFDLEdBQVE7UUFDeEIsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUN6QixFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUNmLGVBQWUsRUFBRSxJQUFJO2FBQ3RCLENBQUMsQ0FBQTtTQUNIO1FBQ0QsT0FBTyxFQUVOLENBQUE7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xyXG4vL+iOt+WPluW6lOeUqOWunuS+i1xyXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXHJcblxyXG4vL+iwg+eUqOWQjuWPsGFwaVxyXG4vKuWvvOWFpWluZGV4Pz8/ICovXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vY29tbW9uL2FwaSdcclxuaW1wb3J0IHsgSVRvcGljRGV0YWlsUGFyYW1zLCBJVG9waWNEZXRhaWxSZXNwb25zZSB9IGZyb20gJy4uLy4uL2NvbW1vbi90eXBlcy9odHRwX21zZyc7XHJcbmltcG9ydCB7IFRlc3RBcGkgfSBmcm9tICcuLi8uLi90ZXN0QXBpL1Rlc3RBcGknO1xyXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6JyxcclxuICAgIHVzZXJJbmZvOiB7fSxcclxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcclxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcclxuICAgIHRvcGxpY0xpc3Q6IFtdLFxyXG4gICAgdG9wbGljOiB7fSxcclxuICAgIGNvbW1lbnQ6IHt9LFxyXG4gICAgc3ViVGV4dDogJ+aQnOe0ouiuoumYheWPtycsXHJcbiAgICBzdWJJbWc6ICcuLi8uLi9pbWdzL2ppYS5wbmcnXHJcbiAgfSxcclxuICAvKuiuoumYhSAqL1xyXG4gIHN1YnNjcmliZSgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICBzdWJUZXh0OiAn5bey6K6i6ZiFJyxcclxuICAgICAgc3ViSW1nOiAnLi4vLi4vaW1ncy9nb3UucG5nJ1xyXG4gICAgfSk7XHJcbiAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICB0aXRsZTogJ+iuoumYheaWueazlScsXHJcbiAgICAgIGNvbnRlbnQ6ICfmkJzntKLlubblhbPms6jovbvor53popjlhazkvJflj7fvvIzpgJrov4dcXG7jgJDngrnlh7vorqLpmIXovbvor53popjmr4/ml6Xng63ngrnjgJHlrozmiJDorqLpmIVcXG5cXG7mmI7ml6XotbflsIbmlLbliLDlhazkvJflj7fmj5DphpInLFxyXG4gICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgY29uZmlybVRleHQ6ICfnoa7orqTlpI3liLYnLFxyXG4gICAgICBjb25maXJtQ29sb3I6ICcjNEQ3MTkzJ1xyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICB0b3BsaWNMaXN0OiBUZXN0QXBpLmdldFRvcExpc3QoKSxcclxuICAgICAgdG9wbGljOiBUZXN0QXBpLmdldFRvcGljKDMpXHJcbiAgICB9KTtcclxuXHJcbiAgfSxcclxuICAvL+i9rOWPkeWIhuS6q+ebkeWQrOS6i+S7tlxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKHJlczogYW55KSB7XHJcbiAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XHJcbiAgICAgIHd4LnNob3dTaGFyZU1lbnUoe1xyXG4gICAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iXX0=