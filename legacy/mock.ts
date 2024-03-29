// https://github.com/Marak/faker.js
import faker = require('./faker.zh_CN')

import { smartDate } from '../common/helper';
import { EPostType, IPost } from '../common/types/posts'
import { IUser } from '../common/types/user'

const mocker = {
  post(id?: number): IPost {
    const createAt=faker.date.past(),
        createAtStr=smartDate(createAt);
    return {
      // banner: Math.random() > 0.3 ? faker.image.image() : undefined,
      banner: faker.image.image(),
      // createAt: faker.date.past(),
      // createAtStr: smartDate(createAt),
      createAt,
      createAtStr,
      id: id || faker.random.number(),
      text: faker.lorem.paragraph(),
      title: faker.lorem.sentence(),
      type: EPostType.Normal,
      user: mocker.user(),
    }
  },
  repeat<T>(n: number, fn: (id?: number) => T): T[] {
    return Array(n).fill(0).map((_, id) => fn(id))
  },
  topic(id?: number): IPost {
    const createAt=faker.date.past(),
    createAtStr=smartDate(createAt);
    return {
      banner: faker.image.image(),
      createAt,
      createAtStr,
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
      nickname: faker.name.findName(),
      followStatus: 0,
      status: 0
    }
  },
}

export default mocker
