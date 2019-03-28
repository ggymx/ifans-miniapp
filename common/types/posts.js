"use strict";
exports.__esModule = true;
var EPostType;
(function (EPostType) {
    EPostType[EPostType["Normal"] = 0] = "Normal";
    EPostType[EPostType["Topic"] = 1] = "Topic";
    EPostType[EPostType["TopicReply"] = 2] = "TopicReply";
})(EPostType = exports.EPostType || (exports.EPostType = {}));
var EThumbnailType;
(function (EThumbnailType) {
    EThumbnailType[EThumbnailType["Image"] = 0] = "Image";
    EThumbnailType[EThumbnailType["Video"] = 1] = "Video";
    EThumbnailType[EThumbnailType["Post"] = 10] = "Post";
    EThumbnailType[EThumbnailType["User"] = 11] = "User";
})(EThumbnailType = exports.EThumbnailType || (exports.EThumbnailType = {}));
var EPostStatus;
(function (EPostStatus) {
    EPostStatus[EPostStatus["Draft"] = 0] = "Draft";
    EPostStatus[EPostStatus["Published"] = 1] = "Published";
    EPostStatus[EPostStatus["Removed"] = 2] = "Removed";
    EPostStatus[EPostStatus["Ban"] = 3] = "Ban";
    EPostStatus[EPostStatus["Violation"] = 4] = "Violation";
})(EPostStatus = exports.EPostStatus || (exports.EPostStatus = {}));
