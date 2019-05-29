//index.js
//获取应用实例
import { IMyApp } from '../app'
import api from '../common/api';
import { smartGotoPage } from '../common/helper';
import { chooseImage } from '../common/upload';

const app = getApp<IMyApp>()
let loginCode: string
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
    console.log('上传图片的路径--------------', upLoadImage);
  },
  inputID(e: any) {
    console.log('用户的昵称------------------', e.detail.value)
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
        success(res:any) {
          console.log('返回的数据', res);
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
