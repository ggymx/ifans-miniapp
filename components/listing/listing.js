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
        avatar: {
            type: String,
            value: '../../imgs/test1.jpg'
        }
    },
    data: {
        imgUrl: '../../imgs/home-button-like@2x.png',
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
            console.log(event);
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
                }, 2000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3RpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsQ0FBQztJQWNSLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELEdBQUcsRUFBRTtZQUNILElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLENBQUM7U0FDVDtRQUNELEdBQUcsRUFBRTtZQUNILElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLENBQUM7U0FDVDtRQUNELE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEVBQUU7U0FDVjtRQUNELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLHNCQUFzQjtTQUM5QjtLQUNGO0lBS0QsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLG9DQUFvQztLQUM3QztJQUtELE9BQU8sRUFBRTtRQUVQLFVBQVUsWUFBQyxLQUFTO1lBRWxCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTtnQkFDMUIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtvQkFDN0IsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO29CQUN6QyxFQUFFLENBQUMsVUFBVSxDQUFDO3dCQUNaLEdBQUcsRUFBRSxtQ0FBbUMsR0FBRyxFQUFFO3dCQUM3QyxPQUFPLEVBQUU7NEJBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQ0FDWCxLQUFLLEVBQUUsTUFBTTs2QkFDZCxDQUFDLENBQUM7d0JBQ0wsQ0FBQztxQkFDRixDQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBRUwsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO29CQUMxQyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7b0JBQzFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7d0JBQ1osR0FBRyxFQUFFLDZCQUE2QixHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsR0FBRzt3QkFDeEQsT0FBTyxFQUFFOzRCQUNQLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0NBQ1gsS0FBSyxFQUFFLE9BQU87NkJBQ2YsQ0FBQyxDQUFDO3dCQUNMLENBQUM7cUJBQ0YsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7UUFDSCxDQUFDO1FBQ0QsTUFBTSxZQUFDLEtBQVM7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUMvQixFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxrQkFBa0IsR0FBRyxNQUFNO2dCQUNoQyxPQUFPLEVBQUU7b0JBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDWCxLQUFLLEVBQUUsTUFBTTtxQkFDZCxDQUFDLENBQUM7Z0JBQ0wsQ0FBQzthQUNGLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxRQUFRLFlBQUMsS0FBUztZQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7WUFFaEIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNWLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztnQkFFL0IsVUFBVSxDQUFDO29CQUNULEVBQUUsQ0FBQyxVQUFVLENBQUM7d0JBQ1osR0FBRyxFQUFFLGdCQUFnQjtxQkFDdEIsQ0FBQyxDQUFDO2dCQUNMLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQzthQUNUO2lCQUFNO2dCQUNMLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksb0NBQW9DLEVBQUU7b0JBQzVELElBQUksQ0FBQyxPQUFRLENBQUM7d0JBQ1osTUFBTSxFQUFFLGtDQUFrQztxQkFDM0MsQ0FBQyxDQUFBO2lCQUNIO3FCQUFNO29CQUNMLElBQUksQ0FBQyxPQUFRLENBQUM7d0JBQ1osTUFBTSxFQUFFLG9DQUFvQztxQkFDN0MsQ0FBQyxDQUFBO2lCQUNIO2FBQ0Y7UUFDSCxDQUFDO1FBR0QsTUFBTTtRQUlOLENBQUM7S0FDRjtJQUVELE9BQU8sRUFBRTtRQUNQLGFBQWEsRUFBRSxJQUFJO0tBQ3BCO0lBRUQsU0FBUyxFQUFFO1FBQ1QsUUFBUSxFQUFFLFVBQVUsT0FBVyxFQUFFLE9BQVc7UUFHNUMsQ0FBQztLQUNGO0lBR0QsZUFBZSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztDQUNwQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL2xpc3RpbmcvbGlzdGluZy5qc1xyXG5Db21wb25lbnQoe1xyXG4gIC8qKlxyXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxyXG4gICAqIGNhcmQ65re75Yqg57G7LeWPquWFgeiuuOa3u+WKoGl0ZW0tY2FyZCDljaHniYfmoLflvI9cclxuICAgKiBhcnJvd0J0bu+8muaYr+WQpuaYvuekuuWPs+S+p+eahOS4ieeCueaMiemSrlxyXG4gICAqIHNob3dUb3BpY++8muaYr+WQpuaYvuekuuWFs+iBlOeahOivnemimFxyXG4gICAqIHNob3dJc3N1Ze+8muaYr+WQpuaYvuekuuWPkeW4g+aWh+acrFxyXG4gICAqIGZpbmFsOuehruWumuaYr+WQpuaYr+acgOe7iOmhtemdolxyXG4gICAqIHRJZO+8mue7keWumuivnemimElkXHJcbiAgICogY0lkOue7keWumuivhOiuuklkXHJcbiAgICogdXNlcm5hbWXvvJrnlKjmiLflkI1cclxuICAgKiBub0JvcmRlcjrmmK/lkKbmnInovrnmoYZcclxuICAgKiBhdmF0YXI65aS05YOPXHJcbiAgICovXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgY2FyZDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBhcnJvd0J0bjoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzaG93VGl0bGU6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2hvd0lzc3VlOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHRJZDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG4gICAgY0lkOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcbiAgICB1c2VySWQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJydcclxuICAgIH0sXHJcbiAgICBjbG9jazoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBsaWtlOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGZpbmFsOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGF2YXRhcjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnLi4vLi4vaW1ncy90ZXN0MS5qcGcnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgaW1nVXJsOiAnLi4vLi4vaW1ncy9ob21lLWJ1dHRvbi1saWtlQDJ4LnBuZycsXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXHJcbiAgICovXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLyrot7PovazpobXpnaIgKi9cclxuICAgIGJpbmRSb3V0ZXIoZXZlbnQ6YW55KSB7XHJcbiAgICAgIC8qc2hvd0lzc3Vl5a2Y5Zyo5YiZ6Lez6L2s5Yiw6K+d6aKY6K+m5oOFICovXHJcbiAgICAgIGlmICghdGhpcy5wcm9wZXJ0aWVzLmZpbmFsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcGVydGllcy5zaG93SXNzdWUpIHtcclxuICAgICAgICAgIGxldCBpZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50aWQ7XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnLi4vdG9waWMtZGV0YWlsL3RvcGljLWRldGFpbD90aWQ9JyArIGlkLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+d6aKY6K+m5oOFJ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLyrkuI3lrZjlnKjliJnot7PovazliLDlj5HluIPogIXor6bmg4UgKi9cclxuICAgICAgICAgIGxldCBjSWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2lkO1xyXG4gICAgICAgICAgbGV0IHRJZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50aWQ7XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnLi4vcHVibGlzaGVyL3B1Ymxpc2hlcj90aWQ9JyArIHRJZCArICcmY2lkPScgKyBjSWQsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICflj5HluIPogIXor6bmg4UnXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJpbmRNeShldmVudDphbnkpIHtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICBsZXQgdXNlcklkID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnVpZDtcclxuICAgICAgY29uc29sZS5sb2coXCLnlKjmiLflkI1JZDpcIiArIHVzZXJJZCk7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy4uL215L215P3VzZXJJZD0nICsgdXNlcklkLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5oiR55qE6aaW6aG1J1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvKueCuei1niAqL1xyXG4gICAgZ2l2ZUxpa2UoZXZlbnQ6YW55KSB7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgLy/ojrflj5Z0b2tlblxyXG4gICAgICB2YXIgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7dGl0bGU6ICfor7flhYjnmbvlvZXvvIEnfSk7XHJcbiAgICAgICAgLy/lu7bov5/kuInnp5LmiafooYzot7PovaxcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnLi4vbG9naW4vbG9naW4nXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LDIwMDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGF0LmRhdGEuaW1nVXJsID09ICcuLi8uLi9pbWdzL2hvbWUtYnV0dG9uLWxpa2VAMngucG5nJykge1xyXG4gICAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIGltZ1VybDogJy4uLy4uL2ltZ3MvYnV0dG9uLWxpa2UtZGpAMngucG5nJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIGltZ1VybDogJy4uLy4uL2ltZ3MvaG9tZS1idXR0b24tbGlrZUAyeC5wbmcnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAgLy/ngrnlh7vlvLnlh7rlsY/olL3kuL7miqXmqKHmgIHmoYZcclxuICAgIHBvcEJveCgpe1xyXG4gICAgICAvKirkuI3og73nm7TmjqXorr7nva7moLflvI/vvJ8gKi9cclxuICAgICAgLy8gY29uc3QgcXVlcnk9d3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpLnNlbGVjdCgnLmFyci12aWV3Jyk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBvcHRpb25zOiB7XHJcbiAgICBtdWx0aXBsZVNsb3RzOiB0cnVlIC8vIOWcqOe7hOS7tuWumuS5ieaXtueahOmAiemhueS4reWQr+eUqOWkmnNsb3TmlK/mjIFcclxuICB9LFxyXG4gIC8q5pWw5o2u55uR5ZCs5ZmoICovXHJcbiAgb2JzZXJ2ZXJzOiB7XHJcbiAgICAnaW1nVXJsJzogZnVuY3Rpb24gKG51bWJlckE6YW55LCBudW1iZXJCOmFueSkge1xyXG4gICAgICAvLyDlnKggbnVtYmVyQSDmiJbogIUgbnVtYmVyQiDooqvorr7nva7ml7bvvIzmiafooYzov5nkuKrlh73mlbBcclxuXHJcbiAgICB9XHJcbiAgfSxcclxuICBcclxuICAvKuaOpeWPl+eahOWklumDqOagt+W8j+exuyzpgJrov4dzbG90MS9zbG90MuS4pOS4quWxnuaAp+iOt+WPliAqL1xyXG4gIGV4dGVybmFsQ2xhc3NlczogWydzbG90MScsICdzbG90MiddXHJcbn0pIl19