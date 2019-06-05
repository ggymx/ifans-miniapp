//index.js
//获取应用实例
import { IMyApp } from '../app'
import api from '../common/api';
import { chooseImage } from '../common/upload';
import { uploadChosenImages } from '../common/upload';


const app = getApp<IMyApp>()
Page({
  data: {
    ID: '',
    upLoadImage: null
  },
  //上传头像
  async uploadAvatar() {
    const upLoadImage = await chooseImage(1);
    console.log("upLoadImage",upLoadImage)
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
  async confirmCreate() {

    if (this.data.ID && this.data.upLoadImage) {

      const { uptoken } = await api.getUploadToken({})
      if (!uptoken) { return null }

      const imgUrlArr = await uploadChosenImages(uptoken,this.data.upLoadImage)
      const imgUrl = imgUrlArr[0].imageURL
      console.log("imgUrl",imgUrl)

      const that = this as any;
      // const userId = wx.getStorageSync('userId');
      api.request({
        url: '/v1/user/create-mini',
        data: {
          nickname: this.data.ID,
          avatar: imgUrl,
          regInfo: 'wxapp',
          // rootuid: userId
        },
        method: 'POST',
        success(res: any) {
          if(res&&res.data.id){
            wx.showToast({ title: '创建成功！' });
            setTimeout(() => {
              wx.navigateBack({ delta: 1 });
            }, 200);
          }
        }
      });

    }
  }
})
