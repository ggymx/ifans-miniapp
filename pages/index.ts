import { IMyApp } from '../app'
import api from '../common/api';
import { smartGotoPage } from '../common/helper';
const app = getApp<IMyApp>()
let cursor: number = 0;

Page({
  data: {

  },
  // 加载
  onLoad() {

  },
  manyTopic(event: any) {
    wx.navigateTo({
      url: './oldindex'
    })
  },
  createTopic(event: any) {
    console.log('你好？')
    wx.navigateTo({
      url: './post/create'
    })
  }
})
