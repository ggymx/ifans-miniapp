import api from '../../common/api'
import { smartGotoPage } from '../../common/helper'
import { uploadChosenImages } from '../../common/upload'

Page({
  data: {
    post: null,
    uploadPromise: null,
    user:null,
    //缩略图
    gallery:null
  },
  backToCreate(event: any) {
    wx.navigateBack({
      delta: 1,
    })
  },

  /**
   * 静默上传，可以多次调用，只会执行一次
   */
  uploadOnce() {
    const token = wx.getStorageSync('token');
    if (!token) { return null }
    const data = this.data.post
    if (data.thumbnails) {
      const uploadPromise = this.data.uploadPromise || uploadChosenImages(data.thumbnails.map((item: any) => item.url))
      this.setData({
        uploadPromise,
      })
      return uploadPromise
    }
    return Promise.resolve([])
  },

  async confirmPublish(event: any) {
    const that = this;
    //获取缓存中的token，同步方式
    const token = wx.getStorageSync('token');
    if (!token) {
      smartGotoPage({
        url: '../login'
      });
    } else {
      const data = this.data.post
      if(data.thumbnails) {
        wx.showToast({
          title: '文件上传中...',
          icon: 'loading',
        })
        const result = await this.uploadOnce()
        wx.hideToast({})
        data.gallery = result.map((item: any) => item.imageURL).join(',')
        delete data.thumbnails
      }
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
            url: `/pages/post/topic-detail?id=${id}&isPublished=1`
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
    this.uploadOnce()
  },
})
