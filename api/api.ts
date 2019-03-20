import { HomeTopicListParams, HomeTopicListResponse, TopicDetailParams, TopicDetailResponse, PostDetailParams, PostDetailResponse } from "./types/http_msg";

export default {
  getHomeTopicList: async (params: HomeTopicListParams): Promise<HomeTopicListResponse> => {
    return {}
  },
  getTopic: async (params: TopicDetailParams): Promise<TopicDetailResponse> => {
    return {}
  },
  getPost: async (params: PostDetailParams): Promise<PostDetailResponse> => {
    return {}
  },
  publishPost: async () => {

  }
}