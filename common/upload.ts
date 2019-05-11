import { smartGotoPage } from "./helper";
import api from "./api";
import { upload } from "./qiniuUploader";

interface IUploadImgOptions {
  success?: AnyFunction;
  fail?: AnyFunction;
  progress?: wx.UploadTaskOnProgressUpdateCallback;
  cancelTask?: AnyFunction;
  before?: () => void;
  complete?: wx.UploadFileCompleteCallback;
}

export async function uploadSingleImg(options: IUploadImgOptions) {
  const { success, fail, complete, progress, before } = options
  const token = wx.getStorageSync("token");
  if (!token) {
    smartGotoPage({
      url: "/pages/login"
    });
  } else {
    const { uptoken } = await api.getUploadToken({})
    wx.chooseImage({
      count: 1,
      sizeType: 'compressed',
      sourceType: 'album',
      success: function (res) {

        var filePath = res.tempFilePaths[0];
        upload({
          filePath: filePath,
          options: {
            region: 'ECN',       // 可选(默认为'ECN')
            domain: 'http://pr8jyt7sd.bkt.clouddn.com',
            uptoken: uptoken,
            shouldUseQiniuFileName: true // 默认false
          },
          before,
          success,
          fail,
          progress,
          complete,
        });
      }
    });
  }
}

export async function uploadMultiImg(count: number, options: IUploadImgOptions) {
  const token = wx.getStorageSync("token");
  if (!token) {
    smartGotoPage({
      url: "/pages/login"
    });
  } else {
    const { uptoken } = await api.getUploadToken({})
    wx.chooseImage({
      count,
      sizeType: ['compressed'] as any,
      sourceType: ['album'] as any,
      success: async function (res) {
        try{
          const results = await Promise.all(res.tempFilePaths.map((item) => uploadTempFile(uptoken, item)))
          options.success(results)
        } catch(err) {
          options.fail(err)
        }
      },
      fail(err){
        console.error('ChooseImage Fail:', err)
      }
    });
  }
}

function uploadTempFile(uptoken: string, filePath: string) {
  return new Promise((resolve, reject) => {
    upload({
      filePath,
      options: {
        region: 'ECN',       // 可选(默认为'ECN')
        domain: 'http://pr8jyt7sd.bkt.clouddn.com',
        uptoken: uptoken,
        shouldUseQiniuFileName: true // 默认false
      },
      success: resolve,
      fail: reject,
      // progress,
      // complete,
    });
  })
}