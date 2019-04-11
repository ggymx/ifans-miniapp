// https://github.com/Marak/faker.js
import faker = require('./faker.zh_CN')

import { EPostType, IPost } from './types/posts'
import { IUser } from './types/user'
import { smartDate } from './helper';

const mocker = {
  post(id?: number): IPost {
    let createAt=faker.date.past(),
        createAtStr=smartDate(createAt);
    return {
      // banner: Math.random() > 0.3 ? faker.image.image() : undefined,
      banner: faker.image.image(),
      // createAt: faker.date.past(),
      // createAtStr: smartDate(createAt),
      createAt: createAt,
      createAtStr: createAtStr,
      id: id || faker.random.number(),
      text: faker.lorem.paragraph(),
      title: faker.lorem.sentence(),
      type: EPostType.Normal,
      user: mocker.user(),
      counter: {
        view: faker.random.number(),
        join: faker.random.number(),
        hot: false,
      }
    }
  },
  repeat<T>(n: number, fn: (id?: number) => T): T[] {
    return Array(n).fill(0).map((_, id) => fn(id))
  },
  topic(id?: number): IPost {
    let createAt=faker.date.past(),
    createAtStr=smartDate(createAt);
    return {
      banner: faker.image.image(),
      createAt: createAt,
      createAtStr: createAtStr,
      id: id || faker.random.number(),
      text: faker.lorem.paragraph(),
      title: faker.lorem.sentence(),
      type: EPostType.Normal,
      user: mocker.user(),
    }
  },
  user(id?: number): IUser {
    return {
      avatar: faker.image.avatar(),
      id: id || faker.random.number(),
      name: faker.name.findName(),
      followStatus: 0,
      status: 0
    }
  },
}

export default mocker
