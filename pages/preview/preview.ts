import api from '../../common/api'
import { smartGotoPage } from '../../common/helper'
import { uploadChosenImages } from '../../common/upload'
import base from '../base';
Page({
  data: {
    post: null,
    uploadPromise: null,
    user:null,
    //缩略图
    gallery:null
  },
  async getFormId(e: any) {
    const res = await api.reportUserFormId({ formId: e.detail.formId })
  },
  backToCreate(event: any) {
    wx.navigateBack({
      delta: 1,
    })
  },
  /**
   * 静默上传，可以多次调用，只会执行一次
   */
  uploadOnce(uptoken: string) {
    const data = this.data.post
    if (data.thumbnails) {
      const uploadPromise = this.data.uploadPromise ||
        uploadChosenImages(uptoken, data.thumbnails.map((item: any) => item.url))
      this.setData({
        uploadPromise,
      })
      return uploadPromise;
    }
    return Promise.resolve([])
  },
  async tryAutoUpload() {
    const token = wx.getStorageSync('token');
    if (!token) { return null }
    const { uptoken } = await api.getUploadToken({})
    if (!uptoken) { return null }
    this.uploadOnce(uptoken)
  },

  async confirmPublish(event: any) {
    const that = this;
    //获取缓存中的token，同步方式
    const token = wx.getStorageSync('token');
    if (!token) {
      smartGotoPage({
        url: '../login'
      });
      return
    } else {
      const data = this.data.post
      if(data.thumbnails && data.thumbnails.length > 0) {
        const { uptoken } = await api.getUploadToken({})
        if (!uptoken) {
          smartGotoPage({
            url: '../login'
          })
          return;
        }
        const result = await this.uploadOnce(uptoken)
        data.gallery = result.map((item: any) => item.imageURL).join(',')
      }
      if(data.thumbnails) {
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
          if (that.data.post.type === 1) {
            wx.redirectTo({
              url: `/pages/post/topic-detail?id=${id}&isPublished=1`
            });
          } else {
            // 在前一个topic-detail页面 插入刚刚创建的投稿数据
            const pages = getCurrentPages()
            if(pages.length >=3 && pages[pages.length - 3].route === 'pages/post/topic-detail') {
              const topicPage = pages[pages.length - 3]
              const postArr = (topicPage.data as any).postArr || []
              const post = that.data.post
              post.id = data.id
              post.createAt = new Date().toISOString()
              api.getUserInfo().then(user=>{
                post.user = user
                postArr.unshift(post)
                topicPage.setData({
                  postArr
                })
              })
            }
            wx.redirectTo({
              url: `/pages/post/detail?id=${id}&isPublished=1`
            });
          }
        }
      });
    }
  },
   //图片预览
   imgPre(event: any) {
    base.imgPre(event,this);
  },
  //options:获取url参数
  async onLoad(options: any) {
    const post = JSON.parse(decodeURIComponent(options.post))
    this.setData({
      post
    })
  },
  async onShow(){
    const that=this as any;
    //获取用户信息
    await api.getUserInfo().then((user)=>{
      that.setData({
        user
      })
    }).catch();

    wx.getStorage({
      key:'gallery',
      success(res){
        that.setData({
          gallery:res.data
        });
      }
    })
    this.tryAutoUpload()
  },
})
