"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../common/api");
var helper_1 = require("../../common/helper");
var app = getApp();
Page({
    data: {
        topic: null,
        comment: null
    },
    bindViewParti: function (event) {
        var tid = event.currentTarget.dataset.tid;
        helper_1.smartGotoPage({
            url: './create?tid=' + tid
        });
    },
    bindViewTopic: function (event) {
        var tid = event.currentTarget.dataset.tid;
        helper_1.smartGotoPage({
            url: "./topic-detail?tid=" + tid
        });
    },
    onLoad: function (options) {
        var tId = options.tid;
        var cId = options.cid;
        var that = this;
        api_1.default.request({
            url: '/v1/post/detail',
            method: 'GET',
            data: {
                id: tId
            },
            success: function (res) {
                that.setData({
                    topic: res.data
                });
            }
        });
        api_1.default.request({
            url: '/v1/post/detail',
            method: 'GET',
            data: {
                id: cId
            },
            success: function (res) {
                that.setData({
                    comment: res.data
                });
            }
        });
    },
    onShareAppMessage: function (res) {
        var text = this.data.comment.post.text;
        if (this.data.comment.post.text.length > 10) {
            text = this.data.comment.post.text.substring(0, 10) + '...';
        }
        return {
            title: "#" + this.data.topic.post.title + "#" + text,
            success: function (e) {
                wx.showShareMenu({
                    withShareTicket: true
                });
            }
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esd0NBQW1DO0FBQ25DLDhDQUFvRDtBQUVwRCxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsSUFBSTtRQUNYLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxhQUFhLFlBQUMsS0FBVTtRQUN0QixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDNUMsc0JBQWEsQ0FBQztZQUNaLEdBQUcsRUFBRSxlQUFlLEdBQUcsR0FBRztTQUMzQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsYUFBYSxZQUFDLEtBQVU7UUFDdEIsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQzVDLHNCQUFhLENBQUM7WUFDWixHQUFHLEVBQUUsd0JBQXNCLEdBQUs7U0FDakMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sWUFBQyxPQUFZO1FBRWpCLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDeEIsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUN4QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsYUFBRyxDQUFDLE9BQU8sQ0FBQztZQUNWLEdBQUcsRUFBRSxpQkFBaUI7WUFFdEIsTUFBTSxFQUFFLEtBQUs7WUFFYixJQUFJLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLEdBQUc7YUFDUjtZQUVELE9BQU8sWUFBQyxHQUFHO2dCQUVULElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNoQixDQUFDLENBQUM7WUFFTCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBR0gsYUFBRyxDQUFDLE9BQU8sQ0FBQztZQUNWLEdBQUcsRUFBRSxpQkFBaUI7WUFFdEIsTUFBTSxFQUFFLEtBQUs7WUFFYixJQUFJLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLEdBQUc7YUFDUjtZQUVELE9BQU8sWUFBQyxHQUFHO2dCQUVULElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNsQixDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUdELGlCQUFpQixZQUFDLEdBQVE7UUFDeEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtZQUM1QyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQTtTQUM3RDtRQUNELE9BQU87WUFDTCxLQUFLLEVBQUUsTUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFJLElBQU07WUFDL0MsT0FBTyxZQUFDLENBQU07Z0JBQ1osRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDZixlQUFlLEVBQUUsSUFBSTtpQkFDdEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUE7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xyXG4vL+iOt+WPluW6lOeUqOWunuS+i1xyXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vY29tbW9uL2FwaSc7XHJcbmltcG9ydCB7IHNtYXJ0R290b1BhZ2UgfSBmcm9tICcuLi8uLi9jb21tb24vaGVscGVyJztcclxuXHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIHRvcGljOiBudWxsLFxyXG4gICAgY29tbWVudDogbnVsbFxyXG4gIH0sXHJcbiAgYmluZFZpZXdQYXJ0aShldmVudDogYW55KSB7XHJcbiAgICBjb25zdCB0aWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGlkO1xyXG4gICAgc21hcnRHb3RvUGFnZSh7XHJcbiAgICAgIHVybDogJy4vY3JlYXRlP3RpZD0nICsgdGlkXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGJpbmRWaWV3VG9waWMoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3QgdGlkID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnRpZDtcclxuICAgIHNtYXJ0R290b1BhZ2Uoe1xyXG4gICAgICB1cmw6IGAuL3RvcGljLWRldGFpbD90aWQ9JHt0aWR9YFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICAvKm9wdGlvbnM66I635Y+WdXJs5Y+C5pWwICovXHJcbiAgb25Mb2FkKG9wdGlvbnM6IGFueSkge1xyXG5cclxuICAgIGNvbnN0IHRJZCA9IG9wdGlvbnMudGlkO1xyXG4gICAgY29uc3QgY0lkID0gb3B0aW9ucy5jaWQ7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgIC8v6I635Y+W6K+d6aKY6K+m5oOFXHJcbiAgICBhcGkucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJy92MS9wb3N0L2RldGFpbCcsXHJcblxyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG5cclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkOiB0SWRcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgLy/orr7nva7mlbDmja5cclxuICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgIHRvcGljOiByZXMuZGF0YVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy/ojrflj5bmipXnqL/or6bmg4VcclxuICAgIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnL3YxL3Bvc3QvZGV0YWlsJyxcclxuXHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcblxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWQ6IGNJZFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAvL+iuvue9ruaVsOaNrlxyXG4gICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgY29tbWVudDogcmVzLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8q6L2s5Y+R5YiG5Lqr55uR5ZCs5LqL5Lu2ICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzOiBhbnkpIHtcclxuICAgIGxldCB0ZXh0ID0gdGhpcy5kYXRhLmNvbW1lbnQhLnBvc3QudGV4dDtcclxuICAgIGlmICh0aGlzLmRhdGEuY29tbWVudCEucG9zdC50ZXh0Lmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgIHRleHQgPSB0aGlzLmRhdGEuY29tbWVudCEucG9zdC50ZXh0LnN1YnN0cmluZygwLCAxMCkgKyAnLi4uJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6IGAjJHt0aGlzLmRhdGEudG9waWMucG9zdC50aXRsZX0jJHt0ZXh0fWAsXHJcbiAgICAgIHN1Y2Nlc3MoZTogYW55KSB7XHJcbiAgICAgICAgd3guc2hvd1NoYXJlTWVudSh7XHJcbiAgICAgICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iXX0=