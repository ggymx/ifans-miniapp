import mock from './mock'
import {
  IHomeTopicListParams,
  IHomeTopicListResponse,
  IPostDetailParams,
  IPostDetailResponse,
  IPostPublishParams,
  IPostPublishResponse,
  ITopicDetailParams,
  ITopicDetailResponse,
  IUserPageParams,
  IUserPageResponse,
  ITrackTopicListParams,
  ITrackTopicListResponse,
} from './types/http_msg'

function delay(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

// export default {
//   /**
//    * 获取首页话题列表
//    */
//   getHomeTopicList: async (params: IHomeTopicListParams): Promise<IHomeTopicListResponse> => {
//     await delay(Math.random()*1000)
//     return {
//       cursor: Math.random() > 0.3 ? (params.cursor || 0) + 10 : 0,
//       posts: mock.repeat(10, mock.post),
//     }
//   },
//   /**
//    * 获取投稿详情
//    */
//   getPost: async (params: IPostDetailParams): Promise<IPostDetailResponse> => {
//     await delay(Math.random()*1000)
//     return mock.post(params.id)
//   },
//   /**
//    * 获取话题详情
//    */
//   getTopic: async (params: ITopicDetailParams): Promise<ITopicDetailResponse> => {
//     await delay(Math.random()*1000)
//     return {
//       hasMore: Math.random() > 0.5,
//       posts: mock.repeat(10, mock.post),
//       topic: mock.post(params.id),
//     }
//   },
//   /**
//    * 获取用户信息
//    */
//   getUser: async (params: IUserPageParams): Promise<IUserPageResponse> => {
//     await delay(Math.random()*1000)
//     return {
//       user: mock.user(params.id),
//     }
//   },
//   /**
//    * 发布话题/投稿
//    */
//   publishPost: async (params: IPostPublishParams): Promise<IPostPublishResponse> => {
//     await delay(Math.random()*1000)
//     return mock.post()
//   }
// }

class Api {
  async blockUser() {

  }
  /**
   * 获取首页话题列表
   */
  async getHomeTopicList(params: IHomeTopicListParams): Promise<IHomeTopicListResponse> {
    await delay(Math.random()*1000)
    return {
      cursor: Math.random() > 0.3 ? (params.cursor || 0) + 10 : 0,
      posts: mock.repeat(10, mock.post),
    }
  }
  async getTrackTopicList(params: ITrackTopicListParams): Promise<ITrackTopicListResponse> {
    await delay(Math.random()*1000)
    return {
      cursor: Math.random() > 0.3 ? (params.cursor || 0) + 10 : 0,
      posts: mock.repeat(10, mock.post),
    }
  }
  /**
   * 获取投稿详情
   */
  async getPost(params: IPostDetailParams): Promise<IPostDetailResponse> {
    await delay(Math.random()*1000)
    return mock.post(params.id)
  }
  /**
   * 获取话题详情
   */
  async getTopic(params: ITopicDetailParams): Promise<ITopicDetailResponse> {
    await delay(Math.random()*1000)
    return {
      hasMore: Math.random() > 0.5,
      posts: mock.repeat(10, mock.post),
      topic: mock.post(params.id),
    }
  }
  /**
   * 获取用户信息
   */
  async getUser(params: IUserPageParams): Promise<IUserPageResponse> {
    await delay(Math.random()*1000)
    return {
      user: mock.user(params.id),
    }
  }
    /**
   * 发布话题/投稿
   */
  async publishPost(params: IPostPublishParams): Promise<IPostPublishResponse> {
    await delay(Math.random()*1000);
    return mock.post()
  }
}

export default new Api()
