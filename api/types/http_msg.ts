import { IPost, IThumbnail } from './posts'
import { IUser } from './user'

export interface IHTTPErrorResponse {
  code?: string,
  message?: string,
}

export interface IUserPageParams {
  id: number
}

export interface IUserPageResponse {
  user: IUser,
}

export interface IHomeTopicListParams {
  sinceId?: number, // 从某个位置开始，默认0，从最上方开始
  limit?: number, // 最多几条，默认20个
}

export interface IHomeTopicListResponse {
  posts: IPost[]
  hasMore: boolean
}

export interface IPostPublishParams {
  title: string,            // 标题
  text: string,             // 内容
  banner?: string,          // 封面
  thumbnails?: IThumbnail[], // 九宫格缩略图（视频/音频/图片）
  refPostId?: number,       // 参与的话题（可以扩展为引用他人的文章
}

export type IPostPublishResponse = IPost

export interface ITopicDetailParams {
  id: number
}

export interface ITopicDetailResponse {
  topic: IPost,
  posts: IPost[],
  hasMore: boolean,
}

export interface IPostDetailParams {
  id: number
}

export type IPostDetailResponse = IPost

export interface IReplyListParams {
  postId: number
  sinceId?: number,
  limit?: number
}

export interface IReplyListResponse {
  replies: Reply[]
  hasMore: boolean
}
