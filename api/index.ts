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
} from './types/http_msg'

export default {
  getHomeTopicList: async (params: IHomeTopicListParams): Promise<IHomeTopicListResponse> => {
    return {
      hasMore: Math.random() > 0.3,
      posts: mock.repeat(10, mock.post),
    }
  },
  getPost: async (params: IPostDetailParams): Promise<IPostDetailResponse> => {
    return mock.post()
  },
  getTopic: async (params: ITopicDetailParams): Promise<ITopicDetailResponse> => {
    return {
      hasMore: Math.random() > 0.5,
      posts: mock.repeat(10, mock.post),
      topic: mock.post(),
    }
  },
  getUser: async (params: IUserPageParams): Promise<IUserPageResponse> => {
    return {
      user: mock.user(),
    }
  },
  publishPost: async (params: IPostPublishParams): Promise<IPostPublishResponse> => {
    return mock.post()
  },
}
