//index.js
//获取应用实例
import { IMyApp } from '../app'
import api from '../common/api';
import { chooseImage } from '../common/upload';

const app = getApp<IMyApp>()
Page({
  data: {
    ID: '',
    upLoadImage: null
  },
  //上传头像
  async uploadAvatar() {
    const upLoadImage = await chooseImage(1);
    this.setData({
      upLoadImage
    })
  },
  inputID(e: any) {
    this.setData({
      ID: e.detail.value
    })
  },
  //创建用户
  confirmCreate() {
    if (this.data.ID && this.data.upLoadImage) {
      const that = this as any;
      const userId = wx.getStorageSync('userId');
      api.request({
        url: '/v1/user/create-mini',
        data: {
          nickname: this.data.ID,
          avatar: this.data.upLoadImage,
          regInfo: 'wxapp',
          rootuid: userId
        },
        method: 'POST',
        success(res: any) {
          if(res&&res.data.id){
            wx.showToast({ title: '创建成功！' });
            setTimeout(() => {
              wx.navigateBack({ delta: 2 });
            }, 200);
          }
        }
      });

    }
  }
})
