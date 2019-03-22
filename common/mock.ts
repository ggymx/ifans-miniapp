// https://github.com/Marak/faker.js
import faker = require('./faker.zh_CN')

import { EPostType, IPost } from './types/posts'
import { IUser } from './types/user'

const mocker = {
  post(id?: number): IPost {
    return {
      banner: Math.random() > 0.5 ? faker.image.image() : undefined,
      creatAt: faker.date.past(),
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
    return {
      banner: faker.image.image(),
      creatAt: faker.date.past(),
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
    }
  },
}

export default mocker
