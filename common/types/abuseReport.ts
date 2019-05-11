export interface AbuseReport {
  id: number,               //举报的id   
  postId: number,           //举报的话题id
  reportUserId: number,     //举报人的id
  reportedUserId: number,   //被举报人的id
  reason: string,           //举报原因
  createAt: Date            //举报时间
}
