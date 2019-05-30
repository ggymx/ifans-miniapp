import { IUser } from './user';
import { EPostStatus } from './posts';

export interface INoticeReply {
  isRefPost: any;
  createAt: Date,
  fromUsers: IUser[],
  text: string,
  tid: number,
  title: string,
  ttype: ETableType,
  type: ENoticeType,
  status: EPostStatus
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
