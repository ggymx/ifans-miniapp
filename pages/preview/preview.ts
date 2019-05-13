import { smartGotoPage } from "../../common/helper"
import api from "../../common/api";

Page({
  data: {
    post: null,
  },
  backToCreate(event: any) {
    wx.navigateBack({
      delta: 1,
    })
  },
  
  confirmPublish(event: any) {
    const that = this;
    //获取缓存中的token，同步方式
    const token = wx.getStorageSync('token');
    if (!token) {
      smartGotoPage({
        url: '../login'
      });
    } else {
      api.request({
        url: '/v1/post/create',
        data: this.data.post,
        method: 'POST',
        success(res) {
          const data = res.data as any
          const id = data.id;
          //投稿成功则清除缓存中的话题和草稿
          wx.removeStorageSync('topic');
          wx.removeStorageSync('draft');
          wx.redirectTo({
            url: `../post/topic-detail?id=${id}`
          });
        }
      });
    }
  },

  //options:获取url参数
  async onLoad(options: any) {
    console.log('Options.post', options.post)
    let post = JSON.parse(decodeURIComponent(options.post))
    this.setData({
      post: post,
    })
  },

})
