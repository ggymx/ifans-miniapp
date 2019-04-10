"use strict";
Component({
    properties: {
        card: {
            type: Boolean,
            value: false
        },
        arrowBtn: {
            type: Boolean,
            value: false
        },
        showTitle: {
            type: Boolean,
            value: false
        },
        showIssue: {
            type: Boolean,
            value: false
        },
        tId: {
            type: Number,
            value: 0
        },
        cId: {
            type: Number,
            value: 0
        },
        userId: {
            type: String,
            value: ''
        },
        clock: {
            type: Boolean,
            value: false
        },
        like: {
            type: Boolean,
            value: false
        },
        final: {
            type: Boolean,
            value: false
        },
        finalMy: {
            type: Boolean,
            value: false
        },
        avatar: {
            type: String,
            value: '../../imgs/test1.jpg'
        }
    },
    data: {
        imgUrl: '../../imgs/home-button-like@2x.png',
        isDelete: true
    },
    methods: {
        bindRouter: function (event) {
            if (!this.properties.final) {
                if (this.properties.showIssue) {
                    var id = event.currentTarget.dataset.tid;
                    wx.navigateTo({
                        url: '../topic-detail/topic-detail?tid=' + id,
                        success: function () {
                            wx.showToast({
                                title: '话题详情'
                            });
                        }
                    });
                }
                else {
                    var cId = event.currentTarget.dataset.cid;
                    var tId = event.currentTarget.dataset.tid;
                    wx.navigateTo({
                        url: '../publisher/publisher?tid=' + tId + '&cid=' + cId,
                        success: function () {
                            wx.showToast({
                                title: '发布者详情'
                            });
                        }
                    });
                }
            }
        },
        bindMy: function (event) {
            if (!this.properties.finalMy) {
                var userId = event.currentTarget.dataset.uid;
                console.log("用户名Id:" + userId);
                wx.navigateTo({
                    url: '../my/my?userId=' + userId,
                    success: function () {
                        wx.showToast({
                            title: '我的首页'
                        });
                    }
                });
            }
        },
        giveLike: function (event) {
            var that = this;
            var token = wx.getStorageSync('token');
            if (!token) {
                wx.showToast({ title: '请先登录！' });
                setTimeout(function () {
                    wx.navigateTo({
                        url: '../login/login'
                    });
                }, 200);
            }
            else {
                if (that.data.imgUrl == '../../imgs/home-button-like@2x.png') {
                    that.setData({
                        imgUrl: '../../imgs/button-like-dj@2x.png'
                    });
                }
                else {
                    that.setData({
                        imgUrl: '../../imgs/home-button-like@2x.png'
                    });
                }
            }
        },
        popBox: function () {
        },
    },
    options: {
        multipleSlots: true
    },
    observers: {
        'imgUrl': function (numberA, numberB) {
        }
    },
    externalClasses: ['slot1', 'slot2']
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3RpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsQ0FBQztJQWNSLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELEdBQUcsRUFBRTtZQUNILElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLENBQUM7U0FDVDtRQUNELEdBQUcsRUFBRTtZQUNILElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLENBQUM7U0FDVDtRQUNELE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEVBQUU7U0FDVjtRQUNELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLHNCQUFzQjtTQUM5QjtLQUNGO0lBS0QsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLG9DQUFvQztRQUM1QyxRQUFRLEVBQUMsSUFBSTtLQUNkO0lBS0QsT0FBTyxFQUFFO1FBRVAsVUFBVSxZQUFDLEtBQVM7WUFFbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO2dCQUMxQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO29CQUM3QixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7b0JBQ3pDLEVBQUUsQ0FBQyxVQUFVLENBQUM7d0JBQ1osR0FBRyxFQUFFLG1DQUFtQyxHQUFHLEVBQUU7d0JBQzdDLE9BQU8sRUFBRTs0QkFDUCxFQUFFLENBQUMsU0FBUyxDQUFDO2dDQUNYLEtBQUssRUFBRSxNQUFNOzZCQUNkLENBQUMsQ0FBQzt3QkFDTCxDQUFDO3FCQUNGLENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFFTCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7b0JBQzFDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztvQkFDMUMsRUFBRSxDQUFDLFVBQVUsQ0FBQzt3QkFDWixHQUFHLEVBQUUsNkJBQTZCLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHO3dCQUN4RCxPQUFPLEVBQUU7NEJBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQ0FDWCxLQUFLLEVBQUUsT0FBTzs2QkFDZixDQUFDLENBQUM7d0JBQ0wsQ0FBQztxQkFDRixDQUFDLENBQUM7aUJBQ0o7YUFDRjtRQUNILENBQUM7UUFDRCxNQUFNLFlBQUMsS0FBUztZQUVkLElBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBQztnQkFDNUIsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQztnQkFDL0IsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDWixHQUFHLEVBQUUsa0JBQWtCLEdBQUcsTUFBTTtvQkFDaEMsT0FBTyxFQUFFO3dCQUNQLEVBQUUsQ0FBQyxTQUFTLENBQUM7NEJBQ1gsS0FBSyxFQUFFLE1BQU07eUJBQ2QsQ0FBQyxDQUFDO29CQUNMLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7UUFDRCxDQUFDO1FBRUQsUUFBUSxZQUFDLEtBQVM7WUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBRWhCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDVixFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7Z0JBRS9CLFVBQVUsQ0FBQztvQkFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO3dCQUNaLEdBQUcsRUFBRSxnQkFBZ0I7cUJBQ3RCLENBQUMsQ0FBQztnQkFDTCxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUM7YUFDUjtpQkFBTTtnQkFDTCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLG9DQUFvQyxFQUFFO29CQUM1RCxJQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLE1BQU0sRUFBRSxrQ0FBa0M7cUJBQzNDLENBQUMsQ0FBQTtpQkFDSDtxQkFBTTtvQkFDTCxJQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLE1BQU0sRUFBRSxvQ0FBb0M7cUJBQzdDLENBQUMsQ0FBQTtpQkFDSDthQUNGO1FBQ0gsQ0FBQztRQUdELE1BQU07UUFJTixDQUFDO0tBQ0Y7SUFFRCxPQUFPLEVBQUU7UUFDUCxhQUFhLEVBQUUsSUFBSTtLQUNwQjtJQUVELFNBQVMsRUFBRTtRQUNULFFBQVEsRUFBRSxVQUFVLE9BQVcsRUFBRSxPQUFXO1FBRzVDLENBQUM7S0FDRjtJQUdELGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7Q0FDcEMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9saXN0aW5nL2xpc3RpbmcuanNcclxuQ29tcG9uZW50KHtcclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcclxuICAgKiBjYXJkOua3u+WKoOexuy3lj6rlhYHorrjmt7vliqBpdGVtLWNhcmQg5Y2h54mH5qC35byPXHJcbiAgICogYXJyb3dCdG7vvJrmmK/lkKbmmL7npLrlj7PkvqfnmoTkuInngrnmjInpkq5cclxuICAgKiBzaG93VG9waWPvvJrmmK/lkKbmmL7npLrlhbPogZTnmoTor53pophcclxuICAgKiBzaG93SXNzdWXvvJrmmK/lkKbmmL7npLrlj5HluIPmlofmnKxcclxuICAgKiBmaW5hbDrnoa7lrprmmK/lkKbmmK/mnIDnu4jpobXpnaJcclxuICAgKiB0SWTvvJrnu5Hlrpror53pophJZFxyXG4gICAqIGNJZDrnu5Hlrpror4TorrpJZFxyXG4gICAqIHVzZXJuYW1l77ya55So5oi35ZCNXHJcbiAgICogbm9Cb3JkZXI65piv5ZCm5pyJ6L655qGGXHJcbiAgICogYXZhdGFyOuWktOWDj1xyXG4gICAqL1xyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIGNhcmQ6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYXJyb3dCdG46IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2hvd1RpdGxlOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNob3dJc3N1ZToge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICB0SWQ6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuICAgIGNJZDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG4gICAgdXNlcklkOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICcnXHJcbiAgICB9LFxyXG4gICAgY2xvY2s6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgbGlrZToge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBmaW5hbDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBmaW5hbE15OiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGF2YXRhcjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnLi4vLi4vaW1ncy90ZXN0MS5qcGcnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgaW1nVXJsOiAnLi4vLi4vaW1ncy9ob21lLWJ1dHRvbi1saWtlQDJ4LnBuZycsXHJcbiAgICBpc0RlbGV0ZTp0cnVlXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXHJcbiAgICovXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLyrot7PovazpobXpnaIgKi9cclxuICAgIGJpbmRSb3V0ZXIoZXZlbnQ6YW55KSB7XHJcbiAgICAgIC8qc2hvd0lzc3Vl5a2Y5Zyo5YiZ6Lez6L2s5Yiw6K+d6aKY6K+m5oOFICovXHJcbiAgICAgIGlmICghdGhpcy5wcm9wZXJ0aWVzLmZpbmFsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcGVydGllcy5zaG93SXNzdWUpIHtcclxuICAgICAgICAgIGxldCBpZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50aWQ7XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnLi4vdG9waWMtZGV0YWlsL3RvcGljLWRldGFpbD90aWQ9JyArIGlkLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+d6aKY6K+m5oOFJ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLyrkuI3lrZjlnKjliJnot7PovazliLDlj5HluIPogIXor6bmg4UgKi9cclxuICAgICAgICAgIGxldCBjSWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2lkO1xyXG4gICAgICAgICAgbGV0IHRJZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50aWQ7XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnLi4vcHVibGlzaGVyL3B1Ymxpc2hlcj90aWQ9JyArIHRJZCArICcmY2lkPScgKyBjSWQsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICflj5HluIPogIXor6bmg4UnXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJpbmRNeShldmVudDphbnkpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICBpZighdGhpcy5wcm9wZXJ0aWVzLmZpbmFsTXkpe1xyXG4gICAgICBsZXQgdXNlcklkID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnVpZDtcclxuICAgICAgY29uc29sZS5sb2coXCLnlKjmiLflkI1JZDpcIiArIHVzZXJJZCk7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy4uL215L215P3VzZXJJZD0nICsgdXNlcklkLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5oiR55qE6aaW6aG1J1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIH0sXHJcbiAgICAvKueCuei1niAqL1xyXG4gICAgZ2l2ZUxpa2UoZXZlbnQ6YW55KSB7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgLy/ojrflj5Z0b2tlblxyXG4gICAgICB2YXIgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7dGl0bGU6ICfor7flhYjnmbvlvZXvvIEnfSk7XHJcbiAgICAgICAgLy/lu7bov5/kuInnp5LmiafooYzot7PovaxcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnLi4vbG9naW4vbG9naW4nXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LDIwMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHRoYXQuZGF0YS5pbWdVcmwgPT0gJy4uLy4uL2ltZ3MvaG9tZS1idXR0b24tbGlrZUAyeC5wbmcnKSB7XHJcbiAgICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgICAgaW1nVXJsOiAnLi4vLi4vaW1ncy9idXR0b24tbGlrZS1kakAyeC5wbmcnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgICAgaW1nVXJsOiAnLi4vLi4vaW1ncy9ob21lLWJ1dHRvbi1saWtlQDJ4LnBuZydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgICAvL+eCueWHu+W8ueWHuuWxj+iUveS4vuaKpeaooeaAgeahhlxyXG4gICAgcG9wQm94KCl7XHJcbiAgICAgIC8qKuS4jeiDveebtOaOpeiuvue9ruagt+W8j++8nyAqL1xyXG4gICAgICAvLyBjb25zdCBxdWVyeT13eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcykuc2VsZWN0KCcuYXJyLXZpZXcnKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIG9wdGlvbnM6IHtcclxuICAgIG11bHRpcGxlU2xvdHM6IHRydWUgLy8g5Zyo57uE5Lu25a6a5LmJ5pe255qE6YCJ6aG55Lit5ZCv55So5aSac2xvdOaUr+aMgVxyXG4gIH0sXHJcbiAgLyrmlbDmja7nm5HlkKzlmaggKi9cclxuICBvYnNlcnZlcnM6IHtcclxuICAgICdpbWdVcmwnOiBmdW5jdGlvbiAobnVtYmVyQTphbnksIG51bWJlckI6YW55KSB7XHJcbiAgICAgIC8vIOWcqCBudW1iZXJBIOaIluiAhSBudW1iZXJCIOiiq+iuvue9ruaXtu+8jOaJp+ihjOi/meS4quWHveaVsFxyXG5cclxuICAgIH1cclxuICB9LFxyXG4gIFxyXG4gIC8q5o6l5Y+X55qE5aSW6YOo5qC35byP57G7LOmAmui/h3Nsb3QxL3Nsb3Qy5Lik5Liq5bGe5oCn6I635Y+WICovXHJcbiAgZXh0ZXJuYWxDbGFzc2VzOiBbJ3Nsb3QxJywgJ3Nsb3QyJ11cclxufSkiXX0=