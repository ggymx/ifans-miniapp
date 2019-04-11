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
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../common/api");
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
            return __awaiter(this, void 0, void 0, function () {
                var that, token, res, res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            that = this;
                            token = wx.getStorageSync('token');
                            if (!!token) return [3, 1];
                            wx.showToast({ title: '请先登录！' });
                            setTimeout(function () {
                                wx.navigateTo({
                                    url: '../login/login'
                                });
                            }, 200);
                            return [3, 5];
                        case 1:
                            console.log('giveLike', this.properties);
                            if (!!this.properties.isLike) return [3, 3];
                            return [4, api_1.default.giveLike({ postId: this.data.cId })];
                        case 2:
                            res = _a.sent();
                            that.setData({
                                isLike: true,
                            });
                            return [3, 5];
                        case 3: return [4, api_1.default.disLike({ postId: this.data.cId })];
                        case 4:
                            res = _a.sent();
                            that.setData({
                                isLike: false,
                            });
                            _a.label = 5;
                        case 5: return [2];
                    }
                });
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3RpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFtQztBQUduQyxTQUFTLENBQUM7SUFjUixVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2I7UUFDRCxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2I7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2I7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2I7UUFDRCxHQUFHLEVBQUU7WUFDSCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxDQUFDO1NBQ1Q7UUFDRCxHQUFHLEVBQUU7WUFDSCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxDQUFDO1NBQ1Q7UUFDRCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2I7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2I7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2I7UUFDRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2I7UUFDRCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxzQkFBc0I7U0FDOUI7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MEM7NEJBQ3RELElBQUksQ0FBQyxPQUFRLENBQUM7Z0NBQ1osTUFBTSxFQUFFLEtBQUs7NkJBRWQsQ0FBQyxDQUFBOzs7Ozs7U0FHUDtRQUdELE1BQU07UUFJTixDQUFDO0tBQ0Y7SUFFRCxPQUFPLEVBQUU7UUFDUCxhQUFhLEVBQUUsSUFBSTtLQUNwQjtJQUVELFNBQVMsRUFBRTtRQUNULFFBQVEsRUFBRSxVQUFVLE9BQVcsRUFBRSxPQUFXO1FBRzVDLENBQUM7S0FDRjtJQUdELGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7Q0FDcEMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vY29tbW9uL2FwaVwiO1xyXG5cclxuLy8gY29tcG9uZW50cy9saXN0aW5nL2xpc3RpbmcuanNcclxuQ29tcG9uZW50KHtcclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcclxuICAgKiBjYXJkOua3u+WKoOexuy3lj6rlhYHorrjmt7vliqBpdGVtLWNhcmQg5Y2h54mH5qC35byPXHJcbiAgICogYXJyb3dCdG7vvJrmmK/lkKbmmL7npLrlj7PkvqfnmoTkuInngrnmjInpkq5cclxuICAgKiBzaG93VG9waWPvvJrmmK/lkKbmmL7npLrlhbPogZTnmoTor53pophcclxuICAgKiBzaG93SXNzdWXvvJrmmK/lkKbmmL7npLrlj5HluIPmlofmnKxcclxuICAgKiBmaW5hbDrnoa7lrprmmK/lkKbmmK/mnIDnu4jpobXpnaJcclxuICAgKiB0SWTvvJrnu5Hlrpror53pophJZFxyXG4gICAqIGNJZDrnu5Hlrpror4TorrpJZFxyXG4gICAqIHVzZXJuYW1l77ya55So5oi35ZCNXHJcbiAgICogbm9Cb3JkZXI65piv5ZCm5pyJ6L655qGGXHJcbiAgICogYXZhdGFyOuWktOWDj1xyXG4gICAqL1xyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIGNhcmQ6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYXJyb3dCdG46IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2hvd1RpdGxlOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNob3dJc3N1ZToge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICB0SWQ6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuICAgIGNJZDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG4gICAgdXNlcklkOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICcnXHJcbiAgICB9LFxyXG4gICAgY2xvY2s6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgbGlrZToge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBmaW5hbDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBmaW5hbE15OiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGF2YXRhcjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnLi4vLi4vaW1ncy90ZXN0MS5qcGcnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgLy8gaW1nVXJsOiAnLi4vLi4vaW1ncy9ob21lLWJ1dHRvbi1saWtlQDJ4LnBuZycsXHJcbiAgICBpc0RlbGV0ZTp0cnVlXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXHJcbiAgICovXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLyrot7PovazpobXpnaIgKi9cclxuICAgIGJpbmRSb3V0ZXIoZXZlbnQ6YW55KSB7XHJcbiAgICAgIC8qc2hvd0lzc3Vl5a2Y5Zyo5YiZ6Lez6L2s5Yiw6K+d6aKY6K+m5oOFICovXHJcbiAgICAgIGlmICghdGhpcy5wcm9wZXJ0aWVzLmZpbmFsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcGVydGllcy5zaG93SXNzdWUpIHtcclxuICAgICAgICAgIGxldCBpZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50aWQ7XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnLi4vdG9waWMtZGV0YWlsL3RvcGljLWRldGFpbD90aWQ9JyArIGlkLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+d6aKY6K+m5oOFJ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLyrkuI3lrZjlnKjliJnot7PovazliLDlj5HluIPogIXor6bmg4UgKi9cclxuICAgICAgICAgIGxldCBjSWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2lkO1xyXG4gICAgICAgICAgbGV0IHRJZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50aWQ7XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnLi4vcHVibGlzaGVyL3B1Ymxpc2hlcj90aWQ9JyArIHRJZCArICcmY2lkPScgKyBjSWQsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICflj5HluIPogIXor6bmg4UnXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJpbmRNeShldmVudDphbnkpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICBpZighdGhpcy5wcm9wZXJ0aWVzLmZpbmFsTXkpe1xyXG4gICAgICBsZXQgdXNlcklkID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnVpZDtcclxuICAgICAgY29uc29sZS5sb2coXCLnlKjmiLflkI1JZDpcIiArIHVzZXJJZCk7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy4uL215L215P3VzZXJJZD0nICsgdXNlcklkLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5oiR55qE6aaW6aG1J1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIH0sXHJcbiAgICAvKueCuei1niAqL1xyXG4gICAgYXN5bmMgZ2l2ZUxpa2UoZXZlbnQ6YW55KSB7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgLy/ojrflj5Z0b2tlblxyXG4gICAgICB2YXIgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7dGl0bGU6ICfor7flhYjnmbvlvZXvvIEnfSk7XHJcbiAgICAgICAgLy/lu7bov5/kuInnp5LmiafooYzot7PovaxcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnLi4vbG9naW4vbG9naW4nXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LDIwMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dpdmVMaWtlJywgdGhpcy5wcm9wZXJ0aWVzKVxyXG4gICAgICAgIGlmKCF0aGlzLnByb3BlcnRpZXMuaXNMaWtlKSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2l2ZUxpa2Uoe3Bvc3RJZDogdGhpcy5kYXRhLmNJZH0pXHJcbiAgICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgICAgaXNMaWtlOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBpbWdVcmw6ICcuLi8uLi9pbWdzL2J1dHRvbi1saWtlLWRqQDJ4LnBuZydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5kaXNMaWtlKHtwb3N0SWQ6IHRoaXMuZGF0YS5jSWR9KVxyXG4gICAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIGlzTGlrZTogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIGltZ1VybDogJy4uLy4uL2ltZ3MvaG9tZS1idXR0b24tbGlrZUAyeC5wbmcnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAgLy/ngrnlh7vlvLnlh7rlsY/olL3kuL7miqXmqKHmgIHmoYZcclxuICAgIHBvcEJveCgpe1xyXG4gICAgICAvKirkuI3og73nm7TmjqXorr7nva7moLflvI/vvJ8gKi9cclxuICAgICAgLy8gY29uc3QgcXVlcnk9d3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpLnNlbGVjdCgnLmFyci12aWV3Jyk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBvcHRpb25zOiB7XHJcbiAgICBtdWx0aXBsZVNsb3RzOiB0cnVlIC8vIOWcqOe7hOS7tuWumuS5ieaXtueahOmAiemhueS4reWQr+eUqOWkmnNsb3TmlK/mjIFcclxuICB9LFxyXG4gIC8q5pWw5o2u55uR5ZCs5ZmoICovXHJcbiAgb2JzZXJ2ZXJzOiB7XHJcbiAgICAnaW1nVXJsJzogZnVuY3Rpb24gKG51bWJlckE6YW55LCBudW1iZXJCOmFueSkge1xyXG4gICAgICAvLyDlnKggbnVtYmVyQSDmiJbogIUgbnVtYmVyQiDooqvorr7nva7ml7bvvIzmiafooYzov5nkuKrlh73mlbBcclxuXHJcbiAgICB9XHJcbiAgfSxcclxuICBcclxuICAvKuaOpeWPl+eahOWklumDqOagt+W8j+exuyzpgJrov4dzbG90MS9zbG90MuS4pOS4quWxnuaAp+iOt+WPliAqL1xyXG4gIGV4dGVybmFsQ2xhc3NlczogWydzbG90MScsICdzbG90MiddXHJcbn0pIl19