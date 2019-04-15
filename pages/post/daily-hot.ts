//index.js
//获取应用实例
import { IMyApp } from '../../app'

//调用后台api
/*导入index??? */
import api from '../../common/api'
import { ITopicDetailParams, ITopicDetailResponse } from '../../common/types/http_msg';
import { TestApi } from '../../testApi/TestApi';
const app = getApp<IMyApp>()

Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    toplicList: [],
    toplic: {},
    comment: {},
    subText: '搜索订阅号',
    subImg: '../../imgs/jia.png'
  },
  /*订阅 */
  subscribe() {
    this.setData!({
      subText: '已订阅',
      subImg: '../../imgs/gou.png'
    });
    wx.showModal({
      title: '订阅方法',
      content: '搜索并关注轻话题公众号，通过\n【点击订阅轻话题每日热点】完成订阅\n\n明日起将收到公众号提醒',
      showCancel: false,
      confirmText: '确认复制',
      confirmColor: '#4D7193'
    })
  },
  onLoad() {
    this.setData!({
      toplicList: TestApi.getTopList(),
      toplic: TestApi.getTopic(3)
    });

  },
  //转发分享监听事件
  onShareAppMessage(res: any) {
    if (res.from === 'button') {
      wx.showShareMenu({
        withShareTicket: true
      })
    }
    return {

    }
  }
})
