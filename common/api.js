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
var mock_1 = require("./mock");
function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    });
}
var Api = (function () {
    function Api() {
    }
    Api.prototype.blockUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2];
            });
        });
    };
    Api.prototype.getHomeTopicList = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, delay(Math.random() * 1000)];
                    case 1:
                        _a.sent();
                        return [2, {
                                cursor: Math.random() > 0.3 ? (params.cursor || 0) + 10 : 0,
                                posts: mock_1.default.repeat(10, mock_1.default.post),
                            }];
                }
            });
        });
    };
    Api.prototype.getTrackTopicList = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, delay(Math.random() * 1000)];
                    case 1:
                        _a.sent();
                        return [2, {
                                cursor: Math.random() > 0.3 ? (params.cursor || 0) + 10 : 0,
                                posts: mock_1.default.repeat(10, mock_1.default.post),
                            }];
                }
            });
        });
    };
    Api.prototype.getPost = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, delay(Math.random() * 1000)];
                    case 1:
                        _a.sent();
                        return [2, mock_1.default.post(params.id)];
                }
            });
        });
    };
    Api.prototype.getTopic = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, delay(Math.random() * 1000)];
                    case 1:
                        _a.sent();
                        return [2, {
                                hasMore: Math.random() > 0.5,
                                posts: mock_1.default.repeat(10, mock_1.default.post),
                                topic: mock_1.default.post(params.id),
                            }];
                }
            });
        });
    };
    Api.prototype.getUser = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, delay(Math.random() * 1000)];
                    case 1:
                        _a.sent();
                        return [2, {
                                user: mock_1.default.user(params.id),
                            }];
                }
            });
        });
    };
    Api.prototype.publishPost = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, delay(Math.random() * 1000)];
                    case 1:
                        _a.sent();
                        return [2, mock_1.default.post()];
                }
            });
        });
    };
    return Api;
}());
exports.default = new Api();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBeUI7QUFnQnpCLFNBQVMsS0FBSyxDQUFDLEVBQVU7SUFDdkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDekIsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBaUREO0lBQUE7SUF1REEsQ0FBQztJQXRETyx1QkFBUyxHQUFmOzs7Ozs7S0FFQztJQUlLLDhCQUFnQixHQUF0QixVQUF1QixNQUE0Qjs7Ozs0QkFDakQsV0FBTSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBL0IsU0FBK0IsQ0FBQTt3QkFDL0IsV0FBTztnQ0FDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDM0QsS0FBSyxFQUFFLGNBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGNBQUksQ0FBQyxJQUFJLENBQUM7NkJBQ2xDLEVBQUE7Ozs7S0FDRjtJQUNLLCtCQUFpQixHQUF2QixVQUF3QixNQUE2Qjs7Ozs0QkFDbkQsV0FBTSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBL0IsU0FBK0IsQ0FBQTt3QkFDL0IsV0FBTztnQ0FDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDM0QsS0FBSyxFQUFFLGNBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGNBQUksQ0FBQyxJQUFJLENBQUM7NkJBQ2xDLEVBQUE7Ozs7S0FDRjtJQUlLLHFCQUFPLEdBQWIsVUFBYyxNQUF5Qjs7Ozs0QkFDckMsV0FBTSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBL0IsU0FBK0IsQ0FBQTt3QkFDL0IsV0FBTyxjQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBQTs7OztLQUM1QjtJQUlLLHNCQUFRLEdBQWQsVUFBZSxNQUEwQjs7Ozs0QkFDdkMsV0FBTSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBL0IsU0FBK0IsQ0FBQTt3QkFDL0IsV0FBTztnQ0FDTCxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUc7Z0NBQzVCLEtBQUssRUFBRSxjQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxjQUFJLENBQUMsSUFBSSxDQUFDO2dDQUNqQyxLQUFLLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDOzZCQUM1QixFQUFBOzs7O0tBQ0Y7SUFJSyxxQkFBTyxHQUFiLFVBQWMsTUFBdUI7Ozs7NEJBQ25DLFdBQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQS9CLFNBQStCLENBQUE7d0JBQy9CLFdBQU87Z0NBQ0wsSUFBSSxFQUFFLGNBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs2QkFDM0IsRUFBQTs7OztLQUNGO0lBSUsseUJBQVcsR0FBakIsVUFBa0IsTUFBMEI7Ozs7NEJBQzFDLFdBQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQS9CLFNBQStCLENBQUM7d0JBQ2hDLFdBQU8sY0FBSSxDQUFDLElBQUksRUFBRSxFQUFBOzs7O0tBQ25CO0lBQ0gsVUFBQztBQUFELENBQUMsQUF2REQsSUF1REM7QUFFRCxrQkFBZSxJQUFJLEdBQUcsRUFBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vY2sgZnJvbSAnLi9tb2NrJ1xyXG5pbXBvcnQge1xyXG4gIElIb21lVG9waWNMaXN0UGFyYW1zLFxyXG4gIElIb21lVG9waWNMaXN0UmVzcG9uc2UsXHJcbiAgSVBvc3REZXRhaWxQYXJhbXMsXHJcbiAgSVBvc3REZXRhaWxSZXNwb25zZSxcclxuICBJUG9zdFB1Ymxpc2hQYXJhbXMsXHJcbiAgSVBvc3RQdWJsaXNoUmVzcG9uc2UsXHJcbiAgSVRvcGljRGV0YWlsUGFyYW1zLFxyXG4gIElUb3BpY0RldGFpbFJlc3BvbnNlLFxyXG4gIElVc2VyUGFnZVBhcmFtcyxcclxuICBJVXNlclBhZ2VSZXNwb25zZSxcclxuICBJVHJhY2tUb3BpY0xpc3RQYXJhbXMsXHJcbiAgSVRyYWNrVG9waWNMaXN0UmVzcG9uc2UsXHJcbn0gZnJvbSAnLi90eXBlcy9odHRwX21zZydcclxuXHJcbmZ1bmN0aW9uIGRlbGF5KG1zOiBudW1iZXIpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgc2V0VGltZW91dChyZXNvbHZlLCBtcylcclxuICB9KVxyXG59XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB7XHJcbi8vICAgLyoqXHJcbi8vICAgICog6I635Y+W6aaW6aG16K+d6aKY5YiX6KGoXHJcbi8vICAgICovXHJcbi8vICAgZ2V0SG9tZVRvcGljTGlzdDogYXN5bmMgKHBhcmFtczogSUhvbWVUb3BpY0xpc3RQYXJhbXMpOiBQcm9taXNlPElIb21lVG9waWNMaXN0UmVzcG9uc2U+ID0+IHtcclxuLy8gICAgIGF3YWl0IGRlbGF5KE1hdGgucmFuZG9tKCkqMTAwMClcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgIGN1cnNvcjogTWF0aC5yYW5kb20oKSA+IDAuMyA/IChwYXJhbXMuY3Vyc29yIHx8IDApICsgMTAgOiAwLFxyXG4vLyAgICAgICBwb3N0czogbW9jay5yZXBlYXQoMTAsIG1vY2sucG9zdCksXHJcbi8vICAgICB9XHJcbi8vICAgfSxcclxuLy8gICAvKipcclxuLy8gICAgKiDojrflj5bmipXnqL/or6bmg4VcclxuLy8gICAgKi9cclxuLy8gICBnZXRQb3N0OiBhc3luYyAocGFyYW1zOiBJUG9zdERldGFpbFBhcmFtcyk6IFByb21pc2U8SVBvc3REZXRhaWxSZXNwb25zZT4gPT4ge1xyXG4vLyAgICAgYXdhaXQgZGVsYXkoTWF0aC5yYW5kb20oKSoxMDAwKVxyXG4vLyAgICAgcmV0dXJuIG1vY2sucG9zdChwYXJhbXMuaWQpXHJcbi8vICAgfSxcclxuLy8gICAvKipcclxuLy8gICAgKiDojrflj5bor53popjor6bmg4VcclxuLy8gICAgKi9cclxuLy8gICBnZXRUb3BpYzogYXN5bmMgKHBhcmFtczogSVRvcGljRGV0YWlsUGFyYW1zKTogUHJvbWlzZTxJVG9waWNEZXRhaWxSZXNwb25zZT4gPT4ge1xyXG4vLyAgICAgYXdhaXQgZGVsYXkoTWF0aC5yYW5kb20oKSoxMDAwKVxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgaGFzTW9yZTogTWF0aC5yYW5kb20oKSA+IDAuNSxcclxuLy8gICAgICAgcG9zdHM6IG1vY2sucmVwZWF0KDEwLCBtb2NrLnBvc3QpLFxyXG4vLyAgICAgICB0b3BpYzogbW9jay5wb3N0KHBhcmFtcy5pZCksXHJcbi8vICAgICB9XHJcbi8vICAgfSxcclxuLy8gICAvKipcclxuLy8gICAgKiDojrflj5bnlKjmiLfkv6Hmga9cclxuLy8gICAgKi9cclxuLy8gICBnZXRVc2VyOiBhc3luYyAocGFyYW1zOiBJVXNlclBhZ2VQYXJhbXMpOiBQcm9taXNlPElVc2VyUGFnZVJlc3BvbnNlPiA9PiB7XHJcbi8vICAgICBhd2FpdCBkZWxheShNYXRoLnJhbmRvbSgpKjEwMDApXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICB1c2VyOiBtb2NrLnVzZXIocGFyYW1zLmlkKSxcclxuLy8gICAgIH1cclxuLy8gICB9LFxyXG4vLyAgIC8qKlxyXG4vLyAgICAqIOWPkeW4g+ivnemimC/mipXnqL9cclxuLy8gICAgKi9cclxuLy8gICBwdWJsaXNoUG9zdDogYXN5bmMgKHBhcmFtczogSVBvc3RQdWJsaXNoUGFyYW1zKTogUHJvbWlzZTxJUG9zdFB1Ymxpc2hSZXNwb25zZT4gPT4ge1xyXG4vLyAgICAgYXdhaXQgZGVsYXkoTWF0aC5yYW5kb20oKSoxMDAwKVxyXG4vLyAgICAgcmV0dXJuIG1vY2sucG9zdCgpXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5jbGFzcyBBcGkge1xyXG4gIGFzeW5jIGJsb2NrVXNlcigpIHtcclxuXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOiOt+WPlummlumhteivnemimOWIl+ihqFxyXG4gICAqL1xyXG4gIGFzeW5jIGdldEhvbWVUb3BpY0xpc3QocGFyYW1zOiBJSG9tZVRvcGljTGlzdFBhcmFtcyk6IFByb21pc2U8SUhvbWVUb3BpY0xpc3RSZXNwb25zZT4ge1xyXG4gICAgYXdhaXQgZGVsYXkoTWF0aC5yYW5kb20oKSoxMDAwKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY3Vyc29yOiBNYXRoLnJhbmRvbSgpID4gMC4zID8gKHBhcmFtcy5jdXJzb3IgfHwgMCkgKyAxMCA6IDAsXHJcbiAgICAgIHBvc3RzOiBtb2NrLnJlcGVhdCgxMCwgbW9jay5wb3N0KSxcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgZ2V0VHJhY2tUb3BpY0xpc3QocGFyYW1zOiBJVHJhY2tUb3BpY0xpc3RQYXJhbXMpOiBQcm9taXNlPElUcmFja1RvcGljTGlzdFJlc3BvbnNlPiB7XHJcbiAgICBhd2FpdCBkZWxheShNYXRoLnJhbmRvbSgpKjEwMDApXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjdXJzb3I6IE1hdGgucmFuZG9tKCkgPiAwLjMgPyAocGFyYW1zLmN1cnNvciB8fCAwKSArIDEwIDogMCxcclxuICAgICAgcG9zdHM6IG1vY2sucmVwZWF0KDEwLCBtb2NrLnBvc3QpLFxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiDojrflj5bmipXnqL/or6bmg4VcclxuICAgKi9cclxuICBhc3luYyBnZXRQb3N0KHBhcmFtczogSVBvc3REZXRhaWxQYXJhbXMpOiBQcm9taXNlPElQb3N0RGV0YWlsUmVzcG9uc2U+IHtcclxuICAgIGF3YWl0IGRlbGF5KE1hdGgucmFuZG9tKCkqMTAwMClcclxuICAgIHJldHVybiBtb2NrLnBvc3QocGFyYW1zLmlkKVxyXG4gIH1cclxuICAvKipcclxuICAgKiDojrflj5bor53popjor6bmg4VcclxuICAgKi9cclxuICBhc3luYyBnZXRUb3BpYyhwYXJhbXM6IElUb3BpY0RldGFpbFBhcmFtcyk6IFByb21pc2U8SVRvcGljRGV0YWlsUmVzcG9uc2U+IHtcclxuICAgIGF3YWl0IGRlbGF5KE1hdGgucmFuZG9tKCkqMTAwMClcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhhc01vcmU6IE1hdGgucmFuZG9tKCkgPiAwLjUsXHJcbiAgICAgIHBvc3RzOiBtb2NrLnJlcGVhdCgxMCwgbW9jay5wb3N0KSxcclxuICAgICAgdG9waWM6IG1vY2sucG9zdChwYXJhbXMuaWQpLFxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiDojrflj5bnlKjmiLfkv6Hmga9cclxuICAgKi9cclxuICBhc3luYyBnZXRVc2VyKHBhcmFtczogSVVzZXJQYWdlUGFyYW1zKTogUHJvbWlzZTxJVXNlclBhZ2VSZXNwb25zZT4ge1xyXG4gICAgYXdhaXQgZGVsYXkoTWF0aC5yYW5kb20oKSoxMDAwKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcjogbW9jay51c2VyKHBhcmFtcy5pZCksXHJcbiAgICB9XHJcbiAgfVxyXG4gICAgLyoqXHJcbiAgICog5Y+R5biD6K+d6aKYL+aKleeov1xyXG4gICAqL1xyXG4gIGFzeW5jIHB1Ymxpc2hQb3N0KHBhcmFtczogSVBvc3RQdWJsaXNoUGFyYW1zKTogUHJvbWlzZTxJUG9zdFB1Ymxpc2hSZXNwb25zZT4ge1xyXG4gICAgYXdhaXQgZGVsYXkoTWF0aC5yYW5kb20oKSoxMDAwKTtcclxuICAgIHJldHVybiBtb2NrLnBvc3QoKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwaSgpXHJcbiJdfQ==