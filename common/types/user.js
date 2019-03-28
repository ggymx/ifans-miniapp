"use strict";
exports.__esModule = true;
var EFollowStatus;
(function (EFollowStatus) {
    EFollowStatus[EFollowStatus["Unfollow"] = 0] = "Unfollow";
    EFollowStatus[EFollowStatus["Following"] = 1] = "Following";
    EFollowStatus[EFollowStatus["Mutual"] = 2] = "Mutual";
})(EFollowStatus = exports.EFollowStatus || (exports.EFollowStatus = {}));
var EUserStatus;
(function (EUserStatus) {
    EUserStatus[EUserStatus["Normal"] = 0] = "Normal";
    EUserStatus[EUserStatus["Ban"] = 1] = "Ban";
    EUserStatus[EUserStatus["Delete"] = 2] = "Delete";
})(EUserStatus = exports.EUserStatus || (exports.EUserStatus = {}));
