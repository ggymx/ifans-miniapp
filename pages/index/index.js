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
        returnInfo: null
    },
    bindViewHot: function () {
        wx.navigateTo({
            url: '../hot/hot',
            success: function () {
                wx.showToast({
                    title: '跳转热点页'
                });
            }
        });
    },
    onLoad: function () {
        var _this = this;
        console.log(this.data.toplicList);
        this.setData({
            toplicList: TestApi_1.TestApi.getTopList(),
        });
        var that = this;
        wx.request({
            url: 'https://api-test.ifans.pub/v1/home/list',
            data: {
                cursor: 0,
                limit: 5
            },
            method: "GET",
            success: function (res) {
                console.log("index获取的数据res：");
                console.log(res.data);
                that.setData({
                    returnInfo: res.data
                });
            },
            fail: function (err) {
                console.log("index获取的数据err：");
                console.log(err);
            }
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
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVFBLGlEQUFnRDtBQUloRCxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBQ25ELFVBQVUsRUFBRSxFQUFFO1FBQ2QsVUFBVSxFQUFDLElBQUk7S0FDaEI7SUFDRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBQyxZQUFZO1lBQ2hCLE9BQU87Z0JBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxLQUFLLEVBQUMsT0FBTztpQkFDZCxDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU07UUFBTixpQkEyREM7UUF6REMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWxDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixVQUFVLEVBQUUsaUJBQU8sQ0FBQyxVQUFVLEVBQUU7U0FDakMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ2QsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBQyx5Q0FBeUM7WUFFN0MsSUFBSSxFQUFDO2dCQUNILE1BQU0sRUFBQyxDQUFDO2dCQUNSLEtBQUssRUFBQyxDQUFDO2FBQ1I7WUFFRCxNQUFNLEVBQUMsS0FBSztZQUVaLE9BQU8sWUFBQyxHQUFHO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osVUFBVSxFQUFDLEdBQUcsQ0FBQyxJQUFJO2lCQUNwQixDQUFDLENBQUM7WUFHTCxDQUFDO1lBQ0QsSUFBSSxZQUFDLEdBQUc7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLENBQUM7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDakMsV0FBVyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFBO1NBQ0g7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRzVCLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxVQUFDLEdBQUc7Z0JBQzlCLEtBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osUUFBUSxFQUFFLEdBQUc7b0JBQ2IsV0FBVyxFQUFFLElBQUk7aUJBQ2xCLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQTtTQUNGO2FBQU07WUFFTCxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0JBQ1YsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtvQkFDdEMsS0FBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLFdBQVcsRUFBRSxJQUFJO3FCQUNsQixDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUNGLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUVELFdBQVcsWUFBQyxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xyXG4vL+iOt+WPluW6lOeUqOWunuS+i1xyXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXHJcblxyXG4vL+iwg+eUqOWQjuWPsGFwaVxyXG4vKuWvvOWFpWluZGV4Pz8/ICovXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vY29tbW9uL2FwaSdcclxuaW1wb3J0IHsgSVRvcGljRGV0YWlsUGFyYW1zLCBJVG9waWNEZXRhaWxSZXNwb25zZSB9IGZyb20gJy4uLy4uL2NvbW1vbi90eXBlcy9odHRwX21zZyc7XHJcbmltcG9ydCB7IFRlc3RBcGkgfSBmcm9tICcuLi8uLi90ZXN0QXBpL1Rlc3RBcGknO1xyXG5cclxuXHJcblxyXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6JyxcclxuICAgIHVzZXJJbmZvOiB7fSxcclxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcclxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcclxuICAgIHRvcGxpY0xpc3Q6IFtdLFxyXG4gICAgcmV0dXJuSW5mbzpudWxsXHJcbiAgfSxcclxuICBiaW5kVmlld0hvdCgpe1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDonLi4vaG90L2hvdCcsXHJcbiAgICAgIHN1Y2Nlc3MoKXtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6J+i3s+i9rOeDreeCuemhtSdcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcbiAgIFxyXG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhLnRvcGxpY0xpc3QpO1xyXG5cclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICB0b3BsaWNMaXN0OiBUZXN0QXBpLmdldFRvcExpc3QoKSxcclxuICAgIH0pO1xyXG4gICAgdmFyIHRoYXQ9dGhpcztcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6J2h0dHBzOi8vYXBpLXRlc3QuaWZhbnMucHViL3YxL2hvbWUvbGlzdCcsXHJcblxyXG4gICAgICBkYXRhOntcclxuICAgICAgICBjdXJzb3I6MCxcclxuICAgICAgICBsaW1pdDo1XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBtZXRob2Q6XCJHRVRcIixcclxuXHJcbiAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluZGV46I635Y+W55qE5pWw5o2ucmVz77yaXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgIHJldHVybkluZm86cmVzLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgICAgICAvKumAmui/h+i/lOWbnueahOivnemimOWIl+ihqOafpeivouebuOW6lOeahOWPguS4juivnemimOeahOWvueixoSAqL1xyXG4gICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoZXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluZGV46I635Y+W55qE5pWw5o2uZXJy77yaXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICB1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXHJcbiAgICAgICAgaGFzVXNlckluZm86IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XHJcbiAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXHJcbiAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcclxuICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgIHVzZXJJbmZvOiByZXMsXHJcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXHJcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxyXG4gICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcclxuICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG59KVxyXG4iXX0=