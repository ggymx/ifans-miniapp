// 任意投稿，话题
interface Post {
  id: number,
  type: PostType,           // Post类型
  title: string,            // 标题
  // summary: string,       // 文字简介
  text: string,             // 内容 
  banner?: string,          // 封面
  thumbnails?: Thumbnail[], // 九宫格缩略图（视频/音频/图片）
  user: User,               // 发布者
  // --- statistics 统计信息 ---
  counter?: {
    view: number,           // 浏览数
    join: number,           // 话题参与量
    hot: boolean,           // 是否热门
  }
  refPost?: Post,           // 参与的话题（可以扩展为引用他人的文章）

  creatAt: Date,            // 创建时间
  updateAt?: Date,          // 更新时间
  delAt?: Date,             // 删除时间
  status?: EPostStatus,     // 投稿状态，
}

interface Thumbnail {
  image: string,            // 缩略图
  type: EThumbnailType,     // 类型（图片，视频）
  url: string,              // 内容链接
}

enum PostType {
  Normal = 0,               // 普通
  Topic = 1,                // 话题
  TopicReply = 2,           // 话题投稿
}

enum EThumbnailType {       // 这里可以发挥想象
  Image = 0,                // 图片
  Video = 1,                // 视频
  Post = 10,                // Post，可以发个神贴合集, 暂不处理
  User = 11,                // User，可以推荐多个用户，暂不处理
}

enum EPostStatus {          // 发布状态
  Draft = 0,                // 草稿
  Published = 1,            // 已发布
  Removed = 2,              // 已删除
  Ban = 3,                  // 已屏蔽
  Violation = 4,            // 违规
}