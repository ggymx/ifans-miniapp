import { IPost, IThumbnail } from './posts'
import { IReply } from './reply'
import { IUser } from './user'
import { Comment } from './comment';
import { AbuseReport } from './abuseReport';

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
  // cursor 为0，则到达了尾页，没有更多数据。获取下一页的时候，将
  cursor: number                // 下一页标志，传入cursor。0表示无下一页。
  posts: IPost[]                // 话题/投稿列表
}

/**
 * 足迹话题列表参数
 */
export interface ITrackTopicListParams {
  cursor?: number              // 从某个位置开始，默认0，从最上方开始
  limit?: number                // 最多几条，默认20个
}

/**
 * 足迹话题列表结果
 */
export interface ITrackTopicListResponse {
  // cursor 为0，则到达了尾页，没有更多数据。获取下一页的时候，将
  cursor: number                // 下一页标志，传入cursor。0表示无下一页。
  posts: IPost[]                // 话题/投稿列表
}

/**
 * 发布话题/投稿参数
 */
export interface IPostPublishParams {
  banner?: string         // 封面
  refPostId?: number     // 参与的话题（可以扩展为引用他人的文章
  text?: string            // 内容
  thumbnails?: IThumbnail[] // 九宫格缩略图（视频/音频/图片）
  title: string            // 标题
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
  hasMore: boolean
  posts: IPost[]
  topic: IPost,
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
  limit?: number
  postId: number
  sinceId?: number
}

/**
 * 回复列表结果
 */
export interface IReplyListResponse {
  hasMore: boolean
  replies: IReply[]
}

/**
 * 获取用户列表
 */
export interface IUserListParams {
  cursor: number
  limit: number
}

/**
 *  获取用户列表的返回
 */

export interface IUserListResponse {
  cursor: number
  users: IUser[]
}

/**
 * 使用某个用户发布话题
 */
export interface IUserPostParams {
  banner: string
  text: string
  thumbnails: string
  title: string
  type: number
  userId: number
}

/**
 * 使用某个用户发布话题,返回一个post
 */
export interface IUserPostResponse {
  id: number
}

/**
 * 使用某个用户获取话题列表
 */
export interface IPostListParams {
  cursor: number
  limit: number
}

/**
 * 使用某个用户获取话题列表，返回一个Post话题集合
 */
export interface IPostListResponse {
  cursor: number
  posts: IPost[]
}

/**
 * 删除话题(彻底删除)
 */
export interface IDeletePostParams {
  postId: number
}

/**
 * 删除话题返回值
 */
// tslint:disable-next-line:no-empty-interface
export interface IDeletePostResponse {
}

/**
 * 删除(状态,不彻底删除)
 */
export interface IRemovePostParams {
  postId: number
}

export interface IRemovePostResponse {
  isRemoved: number
}

/**
 * 用户参与话题
 */
export interface IRefPostParams {
  refPostId: number
  text: string
  type: number
  userId: number
}

/**
 * 用户参与话题返回值
 */
export interface IRefPostResponse {
  id: number
}

/**
 * 话题详情
 */
export interface IPostsDetailParams {
  id: number
}

/**
 * 话题详情返回
 */
export interface IPostsDetailResponse {
  post: IPost
}
/**
 * 获取用户详情
 */
export interface IUserDetailParams {
  cursor: number
  id: number
}

/**
 * 获取用户详情返回用户对象
 */
export interface IUserDetailResponse {
  user: IUser
}

/**
 * 通过RefPostId查询多个Post
 */
export interface IGetPostByRefPostIdParams {
  id: number
}

/**
 * 通过RefPostId查询多个Post，返回值为Post[]
 */
export interface IGetPostByRefPostIdResponse {
  posts: IPost[]
}

/**
 * 通过postId查询post对象
 */
export interface IGetPostIdByPostIdParams {
  id: number
}

/**
 * 通过postId查询refPostId，并且返回一个post对象
 */
export interface IGetPostIdByPostIdResponse {
  post: IPost
}

/**
 * 把post表中所有refPostId是请求⾥里里的id的有效数据都返回
 */
export interface IGetAnswerListParams {
  cursor: number
  id: number
  limit: number
}

export interface IGetAnswerListResponse {
  cursor: number
  posts?: IPost[]
  user: IUser
}

/**
 * 把post表中所有userID是请求⾥里里的id的有效数据都返回
 */
export interface IGetMyListParams {
  cursor: number
  limit: number
  userId: number
}

export interface IGetMyListResponse {
  cursor: number
  posts?: IPost[]
}

/**
 * update对应⽤用户表的那条记录
 */
export interface IUpdateUserParams {
  avatar: string
  id: number
  nickname: string
}

export interface IUpdateUserResponse {
  isUpdated: Promise<number>
}

/**
 * 点赞
 */
export interface ILikeParams {
  id: number
}

export interface ILikeResponse {
  memberCount: number
}

/**
 * 取消点赞
 */
export interface IDisLikeParams {
  id: number
}

export interface IDisLikeResponse {
  memberCount: number
}

/**
 * 举报
 */
export interface IAbuseReportParams {
  postId: number
  reason: string
  reportUserId: number
}

export interface IAbuseReportResponse {
  msg: string
}

/**
 * 举报list
 */
export interface IAdminReportListParams {
  cursor?: number
  limit?: number
}

export interface IAdminReportListResponse {
  reports: AbuseReport[]
}

/**
 * 举报审核处理————“删除”数据
 */
export interface IAdminReportHandleParams {
  postId: number
}

export interface IAdminReportHandleResponse {
  msg: string
}

/**
 * 用户评论
 */
export interface ICreateCommentParams {
  media?: string
  mediaType?: string
  postId: number
  text: string
}

export interface ICreateCommentResponese {
  msg: string
}

/**
 * 用户更新评论
 */
export interface IUpdateCommentParams {
  id: number
  media?: string
  mediaType?: string
  text: string
}

export interface IUpdateCommentResponese {
  msg: string
}

/**
 * 用户获取某个Post的评论列表
 */
export interface IGetCommetListParams {
  cursor?: number
  limit?: number
  postId: number
}

export interface IGetCommetListResponse {
  comments: Comment[]
}

/**
 * 用户个人评论过哪些Psot?
 */
export interface IGetMyCommentListParams {
  cursor?: number
  limit?: number
}

export interface IGetMyCommentListResponese {
  comments: Comment[]
}

