import api from './api'
import { smartGotoPage } from './helper'
import { upload } from './qiniuUploader'

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
  const token = wx.getStorageSync('token');
  if (!token) {
    smartGotoPage({
      url: '/pages/login'
    });
  } else {
    const { uptoken } = await api.getUploadToken({})
    wx.chooseImage({
      count: 1,
      sizeType: 'compressed',
      sourceType: 'album',
      success(res) {

        let filePath = res.tempFilePaths[0];
        upload({
          filePath,
          options: {
            region: 'ECN',       // 可选(默认为'ECN')
            domain: 'http://pr8jyt7sd.bkt.clouddn.com',
            uptoken,
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
  const token = wx.getStorageSync('token');
  if (!token) {
    smartGotoPage({
      url: '/pages/login'
    });
  } else {
    const { uptoken } = await api.getUploadToken({})
    wx.chooseImage({
      count,
      sizeType: ['compressed'] as any,
      sourceType: ['album','camera'] as any,
      async success(res) {
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
        domain: 'http://static.qiniu.ifans.pub',
        uptoken,
        shouldUseQiniuFileName: true, // 默认false
      },
      success: resolve,
      fail: reject,
      // progress,
      // complete,
    });
  })
}

export function chooseImage(count: number): Promise<string[]> {
  return new Promise<string[]>((resolve, reject) => {
    wx.chooseImage({
      count,
      sizeType: ['compressed'] as any,
      sourceType: ['album', 'camera'] as any,
      success(res) {
        resolve(res.tempFilePaths)
      },
      fail: reject,
    });
  })
}

export async function uploadChosenImages(uptoken: string, tempFilePaths: string[]): Promise<any> {
  const results = await Promise.all(tempFilePaths.map((path) => uploadTempFile(uptoken, path)))
  return results
}
