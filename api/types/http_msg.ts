import { IPost, IThumbnail } from './posts'
import { IUser } from './user'

/**
 * 错误返回
 */
export interface IHTTPErrorResponse {
  code?: string                 // 错误码
  message?: string              // 错误信息
}

/**
 * 用户页面参数
 */
export interface IUserPageParams {
  id: number                    // 用户ID
}

/**
 * 用户页面结果
 */
export interface IUserPageResponse {
  user: IUser                   // 用户信息
}

/**
 * 首页话题列表参数
 */
export interface IHomeTopicListParams {
  cursor?: number              // 从某个位置开始，默认0，从最上方开始
  limit?: number                // 最多几条，默认20个
}

/**
 * 首页话题列表结果
 */
export interface IHomeTopicListResponse {
  posts: IPost[]                // 话题/投稿列表
  // cursor 为0，则到达了尾页，没有更多数据。获取下一页的时候，将
  cursor: number                // 下一页标志，传入cursor。0表示无下一页。
}

/**
 * 发布话题/投稿参数
 */
export interface IPostPublishParams {
  title: string,            // 标题
  text: string,             // 内容
  banner?: string,          // 封面
  thumbnails?: IThumbnail[], // 九宫格缩略图（视频/音频/图片）
  refPostId?: number,       // 参与的话题（可以扩展为引用他人的文章
}

/**
 * 发布话题/投稿结果
 */
export type IPostPublishResponse = IPost

/**
 * 话题详情页参数
 */
export interface ITopicDetailParams {
  id: number
}

/**
 * 话题详情页结果
 */
export interface ITopicDetailResponse {
  topic: IPost,
  posts: IPost[],
  hasMore: boolean,
}

/**
 * 投稿详情页参数
 */
export interface IPostDetailParams {
  id: number
}

/**
 * 投稿详情页结果
 */
export type IPostDetailResponse = IPost

/**
 * 回复列表参数
 */
export interface IReplyListParams {
  postId: number
  sinceId?: number,
  limit?: number
}

/**
 * 回复列表结果
 */
export interface IReplyListResponse {
  replies: Reply[]
  hasMore: boolean
}
