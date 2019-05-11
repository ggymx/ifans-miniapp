import { EPostStatus, IPost, IThumbnail } from './posts'
import { IUser } from './user'

export interface IReply {
  id: number,
  text: string,             // 内容
  thumbnail?: IThumbnail,     // 图/视频/引用
  user: IUser,               // 发布者
  // --- statistics 统计信息 ---
  counter?: {
    vote: number,           // 点赞数
    hot: boolean,           // 是否热门
  }
  refPost?: IPost,           // 参与的话题（可以扩展为引用他人的文章）

  createAt: Date,            // 创建时间
  delAt?: Date,             // 删除时间
  status?: EPostStatus,     // 投稿状态，
}
