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
var api_1 = require("./api");
function getTopic(obj) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.default.getTopic(obj)];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
function test() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _b = (_a = console).log;
                    return [4, api_1.default.getHomeTopicList({})];
                case 1:
                    _b.apply(_a, [_g.sent()]);
                    _d = (_c = console).log;
                    return [4, api_1.default.getTopic({ id: 1 })];
                case 2:
                    _d.apply(_c, [_g.sent()]);
                    _f = (_e = console).log;
                    return [4, api_1.default.getPost({ id: 2 })];
                case 3:
                    _f.apply(_e, [_g.sent()]);
                    return [2];
            }
        });
    });
}
test().then().catch(console.log.bind(console));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBLDZCQUF1QjtBQUl2QixTQUFlLFFBQVEsQ0FBQyxHQUFzQjs7Ozt3QkFDckMsV0FBTSxhQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFBO3dCQUE5QixXQUFPLFNBQXVCLEVBQUM7Ozs7Q0FDaEM7QUFFRCxTQUFlLElBQUk7Ozs7OztvQkFDaEIsS0FBQSxDQUFBLEtBQUEsT0FBTyxDQUFBLENBQUMsR0FBRyxDQUFBO29CQUFDLFdBQU0sYUFBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxFQUFBOztvQkFBMUMsY0FBWSxTQUE4QixFQUFDLENBQUE7b0JBQzVDLEtBQUEsQ0FBQSxLQUFBLE9BQU8sQ0FBQSxDQUFDLEdBQUcsQ0FBQTtvQkFBQyxXQUFNLGFBQUcsQ0FBQyxRQUFRLENBQUMsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQTs7b0JBQXZDLGNBQVksU0FBMkIsRUFBQyxDQUFBO29CQUN6QyxLQUFBLENBQUEsS0FBQSxPQUFPLENBQUEsQ0FBQyxHQUFHLENBQUE7b0JBQUMsV0FBTSxhQUFHLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUE7O29CQUF0QyxjQUFZLFNBQTBCLEVBQUMsQ0FBQTs7Ozs7Q0FDdEM7QUFFRixJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBhcGkgZnJvbSAnLi8nXHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiB0ZXN0KCkge1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKFwi6I635Y+W6aaW6aG16K+d6aKY5YiX6KGo77yaXCIpO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKGF3YWl0IGFwaS5nZXRIb21lVG9waWNMaXN0KHt9KSlcclxuLy8gICBjb25zb2xlLmxvZyhcIuiOt+WPluivnemimOivpuaDhe+8mlwiKTtcclxuLy8gICBjb25zb2xlLmxvZyhhd2FpdCBhcGkuZ2V0VG9waWMoe2lkOiAxfSkpXHJcbi8vICAgLy8gY29uc29sZS5sb2coXCLojrflj5bmipXnqL/or6bmg4XvvJpcIik7XHJcbi8vICAgLy8gY29uc29sZS5sb2coYXdhaXQgYXBpLmdldFBvc3Qoe2lkOiAyfSkpXHJcbi8vIH1cclxuXHJcbi8vIHRlc3QoKS50aGVuKCkuY2F0Y2goY29uc29sZS5sb2cuYmluZChjb25zb2xlKSlcclxuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSdcclxuaW1wb3J0IHsgSVRvcGljRGV0YWlsUGFyYW1zIH0gZnJvbSAnLi90eXBlcy9odHRwX21zZyc7XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VG9waWMob2JqOklUb3BpY0RldGFpbFBhcmFtcyk6UHJvbWlzZTxhbnk+e1xyXG4gIHJldHVybiBhd2FpdCBhcGkuZ2V0VG9waWMob2JqKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gdGVzdCgpIHtcclxuICAgY29uc29sZS5sb2coYXdhaXQgYXBpLmdldEhvbWVUb3BpY0xpc3Qoe30pKVxyXG4gIGNvbnNvbGUubG9nKGF3YWl0IGFwaS5nZXRUb3BpYyh7aWQ6IDF9KSlcclxuIGNvbnNvbGUubG9nKGF3YWl0IGFwaS5nZXRQb3N0KHtpZDogMn0pKVxyXG4gfVxyXG5cclxudGVzdCgpLnRoZW4oKS5jYXRjaChjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpKSJdfQ==