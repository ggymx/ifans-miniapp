interface Reply {
  id: number,
  text: string,             // 内容 
  thumbnail?: Thumbnail,     // 图/视频/引用
  user: User,               // 发布者
  // --- statistics 统计信息 ---
  counter?: {
    vote: number,           // 点赞数
    hot: boolean,           // 是否热门
  }
  refPost?: Post,           // 参与的话题（可以扩展为引用他人的文章）

  creatAt: Date,            // 创建时间
  delAt?: Date,             // 删除时间
  status?: EPostStatus,     // 投稿状态，
}