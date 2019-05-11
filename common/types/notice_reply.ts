import { IUser } from './user';

export interface INoticeReply {
  createAt: Date,
  fromUsers: IUser[],
  text: string,
  tid: number,
  title: string,
  ttype: ETableType,
  type: ENoticeType,
}


export enum ENoticeType {
  System = 0,
  Like = 1,
  Comment = 2,
  Reply = 3,
  Message = 4,
  Attend = 5,
}

export enum ETableType {
  Post = 1,
  Comment = 2,
}
