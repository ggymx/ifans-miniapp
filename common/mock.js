"use strict";
exports.__esModule = true;
// https://github.com/Marak/faker.js
var faker = require("./faker.zh_CN");
var posts_1 = require("./types/posts");
var mocker = {
    post: function (id) {
        return {
            banner: Math.random() > 0.5 ? faker.image.image() : undefined,
            creatAt: faker.date.past(),
            id: id || faker.random.number(),
            text: faker.lorem.paragraph(),
            title: faker.lorem.sentence(),
            type: posts_1.EPostType.Normal,
            user: mocker.user()
        };
    },
    repeat: function (n, fn) {
        return Array(n).fill(0).map(function (_, id) { return fn(id); });
    },
    topic: function (id) {
        return {
            banner: faker.image.image(),
            creatAt: faker.date.past(),
            id: id || faker.random.number(),
            text: faker.lorem.paragraph(),
            title: faker.lorem.sentence(),
            type: posts_1.EPostType.Normal,
            user: mocker.user()
        };
    },
    user: function (id) {
        return {
            avatar: faker.image.avatar(),
            id: id || faker.random.number(),
            name: faker.name.findName()
        };
    }
};
exports["default"] = mocker;
