import { uploadMultiImg } from '../../common/upload';


Page({
  data: {
    uptoken: '',
    imageArr: []
  }
  ,
  async didPressChooesImage() {
    const that = this

    uploadMultiImg(9, {
      before() {
        console.log('before upload');
      },
      success(res) {
        console.log('res', res)

        that.setData({
          'imageArr': res,
        });
      },
      fail(err) {
        console.log('error:' + err);
      },
      progress: (res) => {
        console.log('上传进度', res.progress)
        console.log('已经上传的数据长度', res.totalBytesSent)
        console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
      },
      complete() {
        console.log('upload complete');
      }
    })
  }
})
