export interface IUser {
  avatar?: string,
  counter?: {
    activity?: number,
    fans?: number,
  }
  followStatus?: EFollowStatus,
  id: number,
  nickname: string,
  rootuid?: number,
  sign?: string,
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
