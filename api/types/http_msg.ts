export interface HTTPErrorResponse{
  code?: string,
  message?: string,
}

export interface HomeTopicListParams {
  sinceId?: number, // 从某个位置开始，默认0，从最上方开始
  limit?: number, // 最多几条，默认20个
}

export interface HomeTopicListResponse {
  posts: Post[]
  hasMore: boolean
}

export interface PostPublishParams {
  title: string,            // 标题
  text: string,             // 内容 
  banner?: string,          // 封面
  thumbnails?: Thumbnail[], // 九宫格缩略图（视频/音频/图片）
  refPostId?: number,       // 参与的话题（可以扩展为引用他人的文章
}

export interface TopicDetailParams {
  id: number
}

export interface TopicDetailResponse {
  topic: Post,
  posts: Post[],
  hasMore: boolean,
}

export interface PostDetailParams {
  id: number
}

export interface PostDetailResponse extends Post{
}

export interface ReplyListParams {
  postId: number
  sinceId?: number,
  limit?: number
}

export interface ReplyListResponse {
  replies: Reply[]
  hasMore: boolean
}