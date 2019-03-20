interface User {
  id: number,
  name: string,
  avatar?: string,
  sign?: string,
  followStatus?: EFollowStatus,
  counter : {
    fans?: number,
    activity?: number,
  }
  status: EUserStatus,
}

enum EFollowStatus {
  Unfollow = 0, // 未关注
  Following = 1, // 已关注
  Mutual = 2, // 相互关注
}

enum EUserStatus {
  Normal = 0,
  Ban = 1, // 被禁用
  Delete = 2, // 用户注销了自己账号
}