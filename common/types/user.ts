export interface IUser {
  id: number,
  nickname: string,
  avatar?: string,
  sign?: string,
  followStatus?: EFollowStatus,
  counter?: {
    fans?: number,
    activity?: number,
  }
  status?: EUserStatus,
}

export enum EFollowStatus {
  Unfollow = 0, // 未关注
  Following = 1, // 已关注
  Mutual = 2, // 相互关注
}

export enum EUserStatus {
  Normal = 0,
  Ban = 1, // 被禁用
  Delete = 2, // 用户注销了自己账号
}
