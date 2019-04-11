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
var Api = (function () {
    function Api(host) {
        this.getHomeTopicList = this.makeApi('GET', '/v1/post/home-list');
        this.getPost = this.makeApi('GET', '/v1/post/detail');
        this.getUser = this.makeApi('GET', '/v1/user/detail');
        this.giveLike = this.makeApi('POST', '/v1/post/like');
        this.disLike = this.makeApi('POST', '/v1/post/dislike');
        this.host = host;
        this.token = wx.getStorageSync('token');
    }
    Api.prototype.init = function (host) {
        this.host = host;
        this.token = wx.getStorageSync('token');
    };
    Api.prototype.request = function (option) {
        if (option.url[0] !== '/') {
            throw new Error('api.request: url 需要以 "/" 开头');
        }
        option.url = this.host + option.url;
        option.header = option.header || {};
        var header = this.getHeader();
        for (var h in header) {
            option.header[h] = header[h];
        }
        return wx.request(option);
    };
    Api.prototype.httpRequest = function (method, path, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        wx.request({
                            method: method,
                            url: _this.host + path,
                            data: data,
                            header: _this.getHeader(),
                            success: function (res) {
                                resolve(res);
                            },
                            fail: function (res) {
                                reject(res);
                            }
                        });
                    })];
            });
        });
    };
    Api.prototype.httpGet = function (path, data) {
        if (data === void 0) { data = {}; }
        return this.httpRequest('GET', path, data);
    };
    Api.prototype.httpPost = function (path, data) {
        if (data === void 0) { data = {}; }
        return this.httpRequest('POST', path, data);
    };
    Api.prototype.makeApi = function (method, path) {
        var _this = this;
        return function (params) {
            return _this.httpRequest(method, path, params).then(function (res) { return res.data; });
        };
    };
    Api.prototype.getHeader = function () {
        if (this.token) {
            return { Authorization: this.token };
        }
        return {};
    };
    return Api;
}());
var api = new Api('');
exports.default = api;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtJQTZCRSxhQUFZLElBQVk7UUF6QnhCLHFCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQStDLEtBQUssRUFBRSxvQkFBb0IsQ0FBQyxDQUFBO1FBSzFHLFlBQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUEwQyxLQUFLLEVBQUUsaUJBQWlCLENBQUMsQ0FBQTtRQUt6RixZQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBcUMsS0FBSyxFQUFFLGlCQUFpQixDQUFDLENBQUE7UUFLcEYsYUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQTZCLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQTtRQUs1RSxZQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBbUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLENBQUE7UUFNbEYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxrQkFBSSxHQUFKLFVBQUssSUFBWTtRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBS0QscUJBQU8sR0FBUCxVQUFRLE1BQXdCO1FBQzlCLElBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO1NBQy9DO1FBQ0QsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUE7UUFDbkMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQTtRQUNuQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDL0IsS0FBSSxJQUFNLENBQUMsSUFBSSxNQUFNLEVBQUU7WUFDckIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDN0I7UUFDRCxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUVLLHlCQUFXLEdBQWpCLFVBQWtCLE1BQW9CLEVBQUUsSUFBWSxFQUFFLElBQVk7Ozs7Z0JBQ2hFLFdBQU8sSUFBSSxPQUFPLENBQWtDLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQ2xFLEVBQUUsQ0FBQyxPQUFPLENBQUM7NEJBQ1QsTUFBTSxRQUFBOzRCQUNOLEdBQUcsRUFBRSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7NEJBQ3JCLElBQUksTUFBQTs0QkFDSixNQUFNLEVBQUUsS0FBSSxDQUFDLFNBQVMsRUFBRTs0QkFDeEIsT0FBTyxFQUFFLFVBQUMsR0FBRztnQ0FDWCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7NEJBQ2QsQ0FBQzs0QkFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHO2dDQUNSLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTs0QkFDYixDQUFDO3lCQUNGLENBQUMsQ0FBQTtvQkFDSixDQUFDLENBQUMsRUFBQTs7O0tBQ0g7SUFFRCxxQkFBTyxHQUFQLFVBQVEsSUFBWSxFQUFFLElBQWlCO1FBQWpCLHFCQUFBLEVBQUEsU0FBaUI7UUFDckMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVELHNCQUFRLEdBQVIsVUFBUyxJQUFZLEVBQUUsSUFBaUI7UUFBakIscUJBQUEsRUFBQSxTQUFpQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBRU8scUJBQU8sR0FBZixVQUFxQyxNQUFzQixFQUFFLElBQVk7UUFBekUsaUJBSUM7UUFIQyxPQUFPLFVBQUMsTUFBUztZQUNmLE9BQU8sS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFTLEVBQWIsQ0FBYSxDQUFDLENBQUE7UUFDeEUsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVPLHVCQUFTLEdBQWpCO1FBQ0UsSUFBRyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2IsT0FBTyxFQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUE7U0FDbkM7UUFDRCxPQUFPLEVBQUUsQ0FBQTtJQUNYLENBQUM7SUFFSCxVQUFDO0FBQUQsQ0FBQyxBQTdGRCxJQTZGQztBQUNELElBQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBRXZCLGtCQUFlLEdBQUcsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlIG1heC1saW5lLWxlbmd0aFxyXG5pbXBvcnQgeyBJSG9tZVRvcGljTGlzdFBhcmFtcywgSUhvbWVUb3BpY0xpc3RSZXNwb25zZSwgSVBvc3REZXRhaWxQYXJhbXMsIElQb3N0RGV0YWlsUmVzcG9uc2UsIElQb3N0c0RldGFpbFJlc3BvbnNlLCBJVXNlclBhZ2VQYXJhbXMsIElMaWtlUGFyYW1zLCBJTGlrZVJlc3BvbnNlLCBJRGlzTGlrZVBhcmFtcywgSVVzZXJQYWdlUmVzcG9uc2UsIElEaXNMaWtlUmVzcG9uc2UgfSBmcm9tIFwiLi90eXBlcy9odHRwX21zZ1wiO1xyXG5cclxuY2xhc3MgQXBpIHtcclxuICAvKipcclxuICAgKiDojrflj5bpppbpobXor53popjliJfooahcclxuICAgKi9cclxuICBnZXRIb21lVG9waWNMaXN0ID0gdGhpcy5tYWtlQXBpPElIb21lVG9waWNMaXN0UGFyYW1zLCBJSG9tZVRvcGljTGlzdFJlc3BvbnNlPignR0VUJywgJy92MS9wb3N0L2hvbWUtbGlzdCcpXHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluaKleeov+ivpuaDhVxyXG4gICAqL1xyXG4gIGdldFBvc3QgPSB0aGlzLm1ha2VBcGk8SVBvc3REZXRhaWxQYXJhbXMsIElQb3N0c0RldGFpbFJlc3BvbnNlPignR0VUJywgJy92MS9wb3N0L2RldGFpbCcpXHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPlueUqOaIt+S/oeaBr1xyXG4gICAqL1xyXG4gIGdldFVzZXIgPSB0aGlzLm1ha2VBcGk8SVVzZXJQYWdlUGFyYW1zLCBJVXNlclBhZ2VSZXNwb25zZT4oJ0dFVCcsICcvdjEvdXNlci9kZXRhaWwnKVxyXG5cclxuICAvKipcclxuICAgKiDngrnotZ5cclxuICAgKi9cclxuICBnaXZlTGlrZSA9IHRoaXMubWFrZUFwaTxJTGlrZVBhcmFtcywgSUxpa2VSZXNwb25zZT4oJ1BPU1QnLCAnL3YxL3Bvc3QvbGlrZScpXHJcblxyXG4gIC8qKlxyXG4gICAqIOWPlua2iOeCuei1nlxyXG4gICAqL1xyXG4gIGRpc0xpa2UgPSB0aGlzLm1ha2VBcGk8SURpc0xpa2VQYXJhbXMsIElEaXNMaWtlUmVzcG9uc2U+KCdQT1NUJywgJy92MS9wb3N0L2Rpc2xpa2UnKVxyXG5cclxuICBwcml2YXRlIGhvc3Q6IHN0cmluZ1xyXG4gIHByaXZhdGUgdG9rZW46IHN0cmluZ1xyXG5cclxuICBjb25zdHJ1Y3Rvcihob3N0OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaG9zdCA9IGhvc3RcclxuICAgIHRoaXMudG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICB9XHJcblxyXG4gIGluaXQoaG9zdDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmhvc3QgPSBob3N0XHJcbiAgICB0aGlzLnRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDkuLrkuobmlrnkvr/nmoTov4Hnp7sgd3gucmVxdXNldO+8jOS/ruaUueS9jSBhcGkucmVxdWVzdFxyXG4gICAqL1xyXG4gIHJlcXVlc3Qob3B0aW9uOiB3eC5SZXF1ZXN0T3B0aW9uKTogd3guUmVxdWVzdFRhc2sge1xyXG4gICAgaWYob3B0aW9uLnVybFswXSAhPT0gJy8nKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignYXBpLnJlcXVlc3Q6IHVybCDpnIDopoHku6UgXCIvXCIg5byA5aS0JylcclxuICAgIH1cclxuICAgIG9wdGlvbi51cmwgPSB0aGlzLmhvc3QgKyBvcHRpb24udXJsXHJcbiAgICBvcHRpb24uaGVhZGVyID0gb3B0aW9uLmhlYWRlciB8fCB7fVxyXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRIZWFkZXIoKVxyXG4gICAgZm9yKGNvbnN0IGggaW4gaGVhZGVyKSB7XHJcbiAgICAgIG9wdGlvbi5oZWFkZXJbaF0gPSBoZWFkZXJbaF1cclxuICAgIH1cclxuICAgIHJldHVybiB3eC5yZXF1ZXN0KG9wdGlvbilcclxuICB9XHJcblxyXG4gIGFzeW5jIGh0dHBSZXF1ZXN0KG1ldGhvZDogJ0dFVCd8J1BPU1QnLCBwYXRoOiBzdHJpbmcsIGRhdGE6IG9iamVjdCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHd4LlJlcXVlc3RTdWNjZXNzQ2FsbGJhY2tSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgIHVybDogdGhpcy5ob3N0ICsgcGF0aCxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIGhlYWRlcjogdGhpcy5nZXRIZWFkZXIoKSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IChyZXMpID0+IHtcclxuICAgICAgICAgIHJlamVjdChyZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGh0dHBHZXQocGF0aDogc3RyaW5nLCBkYXRhOiBvYmplY3QgPSB7fSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFJlcXVlc3QoJ0dFVCcsIHBhdGgsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBodHRwUG9zdChwYXRoOiBzdHJpbmcsIGRhdGE6IG9iamVjdCA9IHt9KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUmVxdWVzdCgnUE9TVCcsIHBhdGgsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VBcGk8USBleHRlbmRzIG9iamVjdCwgUj4obWV0aG9kOiAnR0VUJyB8ICdQT1NUJywgcGF0aDogc3RyaW5nKTogKHBhcmFtczogUSkgPT4gUHJvbWlzZTxSPiB7XHJcbiAgICByZXR1cm4gKHBhcmFtczogUSk6IFByb21pc2U8Uj4gPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwUmVxdWVzdChtZXRob2QsIHBhdGgsIHBhcmFtcykudGhlbihyZXM9PnJlcy5kYXRhIGFzIFIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEhlYWRlcigpOiBhbnkge1xyXG4gICAgaWYodGhpcy50b2tlbikge1xyXG4gICAgICByZXR1cm4ge0F1dGhvcml6YXRpb246IHRoaXMudG9rZW59XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge31cclxuICB9XHJcblxyXG59XHJcbmNvbnN0IGFwaSA9IG5ldyBBcGkoJycpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGkiXX0=