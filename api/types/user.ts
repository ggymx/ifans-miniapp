interface User extends BaseModel{
  name: string,
  avatar?: string,
  sign?: string,
}

interface UserResult extends User {
  followStatus: Array<number>,
  fansNum: number,
  actiivtyNum: number,
}