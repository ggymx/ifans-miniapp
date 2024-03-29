//获取应用实例
import { IMyApp } from '../../app';
import api from '../../common/api';
import { smartGotoPage } from '../../common/helper';
import { FontNotice } from '../../common/types/font_notice';
import { ENoticeType, ETableType, INoticeReply } from '../../common/types/notice_reply';
import base from '../base'
const app = getApp<IMyApp>()
Page({
  data: {
    pages: 'news',
    notices: [],
    //当页面正常时
    notErr: true,
  },
  httpDataProcessing(iNotice: INoticeReply[]): FontNotice[] {
    return iNotice.map(notice => this.getFontNotice(notice))
  },
  getFontNotice(notice: INoticeReply) {
    if(notice===null){
      return false;
    }
    const userId = notice.fromUsers[0].id
    const nickname = notice.fromUsers[0].nickname
    const avatar = notice.fromUsers[0].avatar
    const isRefPost= notice.isRefPost
    let noticeMessage = '' //等2人赞了你的作品 || 评论了你的作品
    let title = ''
    let text = ''
    const userCount = notice.userCount;
    if (notice.ttype === ETableType.Post) {
      //判断是否为Post点赞
      if (notice.type === ENoticeType.Like) {
        // TODO:没有设置点赞人数,待完成--服务端 noticeservice 中的bus.on监听事件也待完成
        noticeMessage = '等' + userCount + '人赞了你的作品'
        title = notice.title
      }
      //判断是否评论了某一条作品
      if (notice.type === ENoticeType.Comment) {
        noticeMessage = '评论了你的作品'
        title = notice.title
        text = notice.text
      }
      //判断是否参与了某一个作品
      if (notice.type === ENoticeType.Attend) {
        noticeMessage = '参与了你的话题'
        title = notice.title
        text = notice.text
      }
    }
    //判断传入的类型是否为Comment评论类型,该判断逻辑目前有两种：1. 点赞评论 2.回复评论(TODO)
    if (notice.ttype === ETableType.Comment) {
      if (notice.type === ENoticeType.Like) {
        // TODO:没有设置点赞人数,待完成--服务端 noticeservice 中的bus.on监听事件也待完成
        noticeMessage = '等' + userCount + '人赞了你的评论'
        text = notice.text
      }
      if (notice.type === ENoticeType.Reply) {
        //
      }
    }
    return {
      tid: notice.tid,
      userId,
      nickname,
      avatar,
      noticeMessage,
      title,
      text,
      isRefPost,
      createAt: notice.createAt,
      userCount,
    } as FontNotice
  },
  async onLoad() {
    const token = wx.getStorageSync('token');
    const that = this;
    if (token) {
      //获取用户Id
      const userId = wx.getStorageSync('userId')
      const data = await api.getUserNotice({})
      const notices = this.httpDataProcessing(data.notices).filter(item=>{
        return item;
      });
      this.setData!({
        notices,
      });
    } else {
      smartGotoPage({
        url: '/pages/login'
      });
    }
  },
  findUser(event: any) {
    const uId = event.target.dataset.uid;
    base.link('user', uId);
  },
  findOldIndex() {
    base.link('oldIndex');
  },
  findDetail(event: any){
    console.log("点了点了你了诶到了",event)
    const tId = event.currentTarget.dataset.tid;
    const isrefpost=event.currentTarget.dataset.isrefpost;
    if(isrefpost===0){
      base.link('topic',tId);
    }else if(isrefpost===1){
      base.link('post',tId);
    }
  }
})
