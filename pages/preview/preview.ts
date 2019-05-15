import api from '../../common/api';
import { smartGotoPage } from '../../common/helper'

Page({
  data: {
    post: null,
    user:null,
    //缩略图
    gallery:null
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
          wx.removeStorageSync('gallery');
          wx.redirectTo({
            url: `../post/topic-detail?id=${id}`
          });
        }
      });
    }
  },

  //options:获取url参数
  async onLoad(options: any) {
    const that=this as any;
    //获取用户信息
    await api.getUserProfile().then((res: any)=>{
      console.log('接受到的res-----------------',res);
      that.setData({
        user:res.user
      })
    }).catch();

    wx.getStorage({
      key:'gallery',
      success(res){
        console.log('缓存中的gallery--------------：',res.data);
        that.setData({
          gallery:res.data
        })
        // console.log('接受的that.data.gallery--------------',that.data.gallery);
      }
    })

    console.log('Options.post', options.post)
    const post = JSON.parse(decodeURIComponent(options.post))
    this.setData({
      post
    })
  },

})
