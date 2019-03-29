"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../common/api");
var getTopic = function (obj) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, api_1.default.getTopic(obj)];
            case 1: return [2, _a.sent()];
        }
    });
}); };
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        topicText: "快点发布话题讨论吧",
        richOldLocal: "0px",
        richNewLocal: "100px",
        temp: "0px"
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        });
    },
    bindViewTopicDetail: function () {
        wx.navigateTo({
            url: '../topic-detail/topic-detail',
            success: function () {
                wx.showToast({ title: '跳转到话题详情页！' });
            }
        });
    },
    bindViewIndex: function () {
        wx.navigateTo({
            url: '../index/index',
            success: function () {
                wx.showToast({ title: '跳转到首页！' });
            }
        });
    },
    bindKeyInput: function (e) {
        if (e.detail.value) {
            this.setData({
                topicText: e.detail.value
            });
        }
        else {
            this.setData({
                topicText: "快点发布话题讨论吧"
            });
        }
    },
    setMoveUp: function (e) {
        console.log(e.detail);
        this.setData({
            temp: this.data.richNewLocal
        });
    },
    setMoveDown: function () {
        this.setData({
            temp: this.data.richOldLocal
        });
    },
    onLoad: function () {
        var _this = this;
        getTopic({ id: 1 }).then(function (data) {
            var creatAt = data.topic.createAt.toLocaleString();
            _this.setData({ data: data, creatAt: creatAt });
            console.log(data);
        }).catch();
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
        var richLocation = 0;
        wx.getSystemInfo({
            success: function (res) {
                richLocation = res.screenHeight - 335;
            }
        });
        console.log(richLocation);
        this.setData({
            richOldLocal: richLocation + "px",
            temp: richLocation + "px"
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNzdWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpc3N1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxpQkE2SUE7O0FBeklBLHdDQUFrQztBQUlsQyxJQUFJLFFBQVEsR0FBQyxVQUFPLEdBQXNCOzs7b0JBQy9CLFdBQU0sYUFBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBQTtvQkFBOUIsV0FBTyxTQUF1QixFQUFDOzs7S0FDbEMsQ0FBQTtBQU9ELElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsU0FBUyxFQUFDLFdBQVc7UUFDckIsWUFBWSxFQUFDLEtBQUs7UUFDbEIsWUFBWSxFQUFDLE9BQU87UUFDcEIsSUFBSSxFQUFDLEtBQUs7S0FDWDtJQUVELFdBQVc7UUFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGNBQWM7U0FDcEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELG1CQUFtQjtRQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFDLDhCQUE4QjtZQUNsQyxPQUFPLEVBQUM7Z0JBQ04sRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDO1lBQ3BDLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsYUFBYTtRQUNYLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUMsZ0JBQWdCO1lBQ3BCLE9BQU8sRUFBQztnQkFDTixFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7WUFDakMsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZLFlBQUMsQ0FBSztRQUNoQixJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osU0FBUyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSzthQUN6QixDQUFDLENBQUM7U0FDSjthQUFJO1lBQ0gsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixTQUFTLEVBQUMsV0FBVzthQUN0QixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFFRCxTQUFTLFlBQUMsQ0FBSztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO1NBQzVCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNYLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7U0FDN0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU07UUFBTixpQkFzREM7UUFyREMsUUFBUSxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUsxQixJQUFJLE9BQU8sR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtZQUVoRCxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQTtZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2xCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBSVgsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUMzQixJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVE7Z0JBQ2pDLFdBQVcsRUFBRSxJQUFJO2FBQ2xCLENBQUMsQ0FBQTtTQUNIO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUczQixHQUFHLENBQUMscUJBQXFCLEdBQUcsVUFBQyxHQUFHO2dCQUM5QixLQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLFFBQVEsRUFBRSxHQUFHO29CQUNiLFdBQVcsRUFBRSxJQUFJO2lCQUNsQixDQUFDLENBQUE7WUFDSixDQUFDLENBQUE7U0FDRjthQUFNO1lBRUwsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDYixPQUFPLEVBQUUsVUFBQSxHQUFHO29CQUNWLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7b0JBQ3RDLEtBQUksQ0FBQyxPQUFRLENBQUM7d0JBQ1osUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO3dCQUN0QixXQUFXLEVBQUUsSUFBSTtxQkFDbEIsQ0FBQyxDQUFBO2dCQUNKLENBQUM7YUFDRixDQUFDLENBQUE7U0FDSDtRQUdELElBQUksWUFBWSxHQUFDLENBQUMsQ0FBQztRQUNuQixFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ2YsT0FBTyxZQUFDLEdBQUc7Z0JBRVQsWUFBWSxHQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUMsR0FBRyxDQUFDO1lBQ3BDLENBQUM7U0FDRixDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixZQUFZLEVBQUMsWUFBWSxHQUFDLElBQUk7WUFDOUIsSUFBSSxFQUFDLFlBQVksR0FBQyxJQUFJO1NBQ3ZCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxXQUFXLFlBQUMsQ0FBTTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDM0MsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcclxuLy/ojrflj5blupTnlKjlrp7kvotcclxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xyXG5cclxuLy/osIPnlKjlkI7lj7BhcGlcclxuLyrlr7zlhaVpbmRleD8/PyAqL1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL2NvbW1vbi9hcGknXHJcbmltcG9ydCB7IElUb3BpY0RldGFpbFBhcmFtcyxJVG9waWNEZXRhaWxSZXNwb25zZX0gZnJvbSAnLi4vLi4vY29tbW9uL3R5cGVzL2h0dHBfbXNnJztcclxuXHJcblxyXG5sZXQgZ2V0VG9waWM9YXN5bmMgKG9iajpJVG9waWNEZXRhaWxQYXJhbXMpOlByb21pc2U8SVRvcGljRGV0YWlsUmVzcG9uc2U+PT57XHJcbiAgICByZXR1cm4gYXdhaXQgYXBpLmdldFRvcGljKG9iaik7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgbW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXHJcbiAgICB1c2VySW5mbzoge30sXHJcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXHJcbiAgICB0b3BpY1RleHQ6XCLlv6vngrnlj5HluIPor53popjorqjorrrlkKdcIixcclxuICAgIHJpY2hPbGRMb2NhbDpcIjBweFwiLFxyXG4gICAgcmljaE5ld0xvY2FsOlwiMTAwcHhcIixcclxuICAgIHRlbXA6XCIwcHhcIlxyXG4gIH0sXHJcbiAgLy/kuovku7blpITnkIblh73mlbBcclxuICBiaW5kVmlld1RhcCgpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcuLi9sb2dzL2xvZ3MnXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgYmluZFZpZXdUb3BpY0RldGFpbCgpe1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDonLi4vdG9waWMtZGV0YWlsL3RvcGljLWRldGFpbCcsXHJcbiAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24oKXtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe3RpdGxlOifot7PovazliLDor53popjor6bmg4XpobXvvIEnfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgYmluZFZpZXdJbmRleCgpe1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDonLi4vaW5kZXgvaW5kZXgnLFxyXG4gICAgICBzdWNjZXNzOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHt0aXRsZTon6Lez6L2s5Yiw6aaW6aG177yBJ30pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIC8qaW5wdXTlkozmlofmnKzmmL7npLrnu5HlrpogKi9cclxuICBiaW5kS2V5SW5wdXQoZTphbnkpe1xyXG4gICAgaWYoZS5kZXRhaWwudmFsdWUpe1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICB0b3BpY1RleHQ6ZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgdG9waWNUZXh0Olwi5b+r54K55Y+R5biD6K+d6aKY6K6o6K665ZCnXCJcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIC8q6K6+572u5LiL5pa56KGo5oOF5qGG5LiK56e75Yqo55S7ICovXHJcbiAgc2V0TW92ZVVwKGU6YW55KXtcclxuICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsKTtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICB0ZW1wOnRoaXMuZGF0YS5yaWNoTmV3TG9jYWxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc2V0TW92ZURvd24oKXtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgdGVtcDp0aGlzLmRhdGEucmljaE9sZExvY2FsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGdldFRvcGljKHtpZDoxfSkudGhlbigoZGF0YSk9PntcclxuICAgIC8vICAvIHVzZXI9ZGF0YTtcclxuICAgIC8vICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAvKmRhdGEudG9waWMuY3JlYXRBdD1kYXRhLnRvcGljLmNyZWF0QXQudG9Mb2NhbGVEYXRlU3RyaW5nKCk7Ki9cclxuICAgICAvL+aXpeacn+WkhOeQhlxyXG4gICAgIGxldCBjcmVhdEF0PWRhdGEudG9waWMuY3JlYXRlQXQudG9Mb2NhbGVTdHJpbmcoKVxyXG4gICAgIC8v5oqV56i/5Lq65aSE55CGXHJcbiAgICAgdGhpcy5zZXREYXRhISh7ZGF0YTpkYXRhLGNyZWF0QXQ6Y3JlYXRBdH0pXHJcbiAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH0pLmNhdGNoKCk7XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICB1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXHJcbiAgICAgICAgaGFzVXNlckluZm86IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKXtcclxuICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cclxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxyXG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgdXNlckluZm86IHJlcyxcclxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcclxuICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXHJcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICAgICBcclxuICAgIC8q5Yid5aeL5YyW5a+M5paH5pys55qE5L2N572uKi9cclxuICAgIGxldCByaWNoTG9jYXRpb249MDtcclxuICAgIHd4LmdldFN5c3RlbUluZm8oe1xyXG4gICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgLy9zY3JlZW5IZWlnaHTojrflj5bmiYvmnLrlsY/luZXnmoTpq5jluqbvvIxzY3JlZW5IZWlnaHQtNjQtMjAwLTQxLTMwXHJcbiAgICAgICAgcmljaExvY2F0aW9uPXJlcy5zY3JlZW5IZWlnaHQtMzM1O1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2cocmljaExvY2F0aW9uKTtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICByaWNoT2xkTG9jYWw6cmljaExvY2F0aW9uK1wicHhcIixcclxuICAgICAgdGVtcDpyaWNoTG9jYXRpb24rXCJweFwiXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgXHJcbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcclxuICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG59KVxyXG4iXX0=