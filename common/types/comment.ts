export interface Comment {
  id: number,               //评论的id   
  userId: number,           //评论人的id
  postId: number,           //评论的话题的id
  text: string,             //评论话题的内容
  media?: string,           //评论话题的媒体 TODO
  mediaType?: string,       //评论话题的媒体类型  TODO
  status?: EUserStatus,     //评论的状态
  likeCount?: number,       //评论的点赞数
  createAt: Date,           //评论的时间
  updateAt: Date,           //评论的更新时间
  delAt?: Date              //删除评论的时间
}

export enum EUserStatus {
  Normal = 0,//正常
  Ban = 1, // 被禁用
  Delete = 2, // 用户注销了自己账号
}
