//index.js
//获取应用实例
import { IMyApp } from '../../app';
import api from '../../common/api';

const app = getApp<IMyApp>()
let cursor: number = 0;
Page({
  data: {
    topic: null,
    postArr: [],
    title: '',
    userId: null
  },
  async onLoad(options: any) {

    const id = options.userId
    console.log('footPrint.ts', options.userId)

    const that = this;

    //todo 获取缓存的路由------> 
    const data = await api.getFootPrint({  })
    console.table(data)
    if (data.posts.length !== 0) {
      that.setData!({
        postArr: that.data.postArr.concat(data.posts)
      });
      cursor = data.cursor
      wx.hideLoading({});
    } else {
      wx.hideLoading({});
      wx.showToast({
        icon: 'none',
        title: '已经到底了！'
      })
    }

  }

})
