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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3RpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsQ0FBQztJQWNSLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELEdBQUcsRUFBRTtZQUNILElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLENBQUM7U0FDVDtRQUNELEdBQUcsRUFBRTtZQUNILElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLENBQUM7U0FDVDtRQUNELE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEVBQUU7U0FDVjtRQUNELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLHNCQUFzQjtTQUM5QjtLQUNGO0lBS0QsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLG9DQUFvQztLQUM3QztJ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Ii8vIGNvbXBvbmVudHMvbGlzdGluZy9saXN0aW5nLmpzXHJcbkNvbXBvbmVudCh7XHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXHJcbiAgICogY2FyZDrmt7vliqDnsbst5Y+q5YWB6K645re75YqgaXRlbS1jYXJkIOWNoeeJh+agt+W8j1xyXG4gICAqIGFycm93QnRu77ya5piv5ZCm5pi+56S65Y+z5L6n55qE5LiJ54K55oyJ6ZKuXHJcbiAgICogc2hvd1RvcGlj77ya5piv5ZCm5pi+56S65YWz6IGU55qE6K+d6aKYXHJcbiAgICogc2hvd0lzc3Vl77ya5piv5ZCm5pi+56S65Y+R5biD5paH5pysXHJcbiAgICogZmluYWw656Gu5a6a5piv5ZCm5piv5pyA57uI6aG16Z2iXHJcbiAgICogdElk77ya57uR5a6a6K+d6aKYSWRcclxuICAgKiBjSWQ657uR5a6a6K+E6K66SWRcclxuICAgKiB1c2VybmFtZe+8mueUqOaIt+WQjVxyXG4gICAqIG5vQm9yZGVyOuaYr+WQpuaciei+ueahhlxyXG4gICAqIGF2YXRhcjrlpLTlg49cclxuICAgKi9cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBjYXJkOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGFycm93QnRuOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNob3dUaXRsZToge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzaG93SXNzdWU6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgdElkOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcbiAgICBjSWQ6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuICAgIHVzZXJJZDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnJ1xyXG4gICAgfSxcclxuICAgIGNsb2NrOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGxpa2U6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZmluYWw6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZmluYWxNeToge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBhdmF0YXI6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJy4uLy4uL2ltZ3MvdGVzdDEuanBnJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIGltZ1VybDogJy4uLy4uL2ltZ3MvaG9tZS1idXR0b24tbGlrZUAyeC5wbmcnLFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxyXG4gICAqL1xyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8q6Lez6L2s6aG16Z2iICovXHJcbiAgICBiaW5kUm91dGVyKGV2ZW50OmFueSkge1xyXG4gICAgICAvKnNob3dJc3N1ZeWtmOWcqOWImei3s+i9rOWIsOivnemimOivpuaDhSAqL1xyXG4gICAgICBpZiAoIXRoaXMucHJvcGVydGllcy5maW5hbCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMuc2hvd0lzc3VlKSB7XHJcbiAgICAgICAgICBsZXQgaWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGlkO1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJy4uL3RvcGljLWRldGFpbC90b3BpYy1kZXRhaWw/dGlkPScgKyBpZCxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ivnemimOivpuaDhSdcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8q5LiN5a2Y5Zyo5YiZ6Lez6L2s5Yiw5Y+R5biD6ICF6K+m5oOFICovXHJcbiAgICAgICAgICBsZXQgY0lkID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmNpZDtcclxuICAgICAgICAgIGxldCB0SWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGlkO1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJy4uL3B1Ymxpc2hlci9wdWJsaXNoZXI/dGlkPScgKyB0SWQgKyAnJmNpZD0nICsgY0lkLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Y+R5biD6ICF6K+m5oOFJ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiaW5kTXkoZXZlbnQ6YW55KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgaWYoIXRoaXMucHJvcGVydGllcy5maW5hbE15KXtcclxuICAgICAgbGV0IHVzZXJJZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC51aWQ7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwi55So5oi35ZCNSWQ6XCIgKyB1c2VySWQpO1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICcuLi9teS9teT91c2VySWQ9JyArIHVzZXJJZCxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+aIkeeahOmmlumhtSdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB9LFxyXG4gICAgLyrngrnotZ4gKi9cclxuICAgIGdpdmVMaWtlKGV2ZW50OmFueSkge1xyXG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgIC8v6I635Y+WdG9rZW5cclxuICAgICAgdmFyIHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn6K+35YWI55m75b2V77yBJ30pO1xyXG4gICAgICAgIC8v5bu26L+f5LiJ56eS5omn6KGM6Lez6L2sXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJy4uL2xvZ2luL2xvZ2luJ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwyMDAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhhdC5kYXRhLmltZ1VybCA9PSAnLi4vLi4vaW1ncy9ob21lLWJ1dHRvbi1saWtlQDJ4LnBuZycpIHtcclxuICAgICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICBpbWdVcmw6ICcuLi8uLi9pbWdzL2J1dHRvbi1saWtlLWRqQDJ4LnBuZydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICBpbWdVcmw6ICcuLi8uLi9pbWdzL2hvbWUtYnV0dG9uLWxpa2VAMngucG5nJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgIC8v54K55Ye75by55Ye65bGP6JS95Li+5oql5qih5oCB5qGGXHJcbiAgICBwb3BCb3goKXtcclxuICAgICAgLyoq5LiN6IO955u05o6l6K6+572u5qC35byP77yfICovXHJcbiAgICAgIC8vIGNvbnN0IHF1ZXJ5PXd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKS5zZWxlY3QoJy5hcnItdmlldycpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgb3B0aW9uczoge1xyXG4gICAgbXVsdGlwbGVTbG90czogdHJ1ZSAvLyDlnKjnu4Tku7blrprkuYnml7bnmoTpgInpobnkuK3lkK/nlKjlpJpzbG905pSv5oyBXHJcbiAgfSxcclxuICAvKuaVsOaNruebkeWQrOWZqCAqL1xyXG4gIG9ic2VydmVyczoge1xyXG4gICAgJ2ltZ1VybCc6IGZ1bmN0aW9uIChudW1iZXJBOmFueSwgbnVtYmVyQjphbnkpIHtcclxuICAgICAgLy8g5ZyoIG51bWJlckEg5oiW6ICFIG51bWJlckIg6KKr6K6+572u5pe277yM5omn6KGM6L+Z5Liq5Ye95pWwXHJcblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgXHJcbiAgLyrmjqXlj5fnmoTlpJbpg6jmoLflvI/nsbss6YCa6L+Hc2xvdDEvc2xvdDLkuKTkuKrlsZ7mgKfojrflj5YgKi9cclxuICBleHRlcm5hbENsYXNzZXM6IFsnc2xvdDEnLCAnc2xvdDInXVxyXG59KSJdfQ==