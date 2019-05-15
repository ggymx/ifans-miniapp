//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';
import { smartGotoPage } from '../../common/helper';
import { uploadMultiImg } from '../../common/upload';
const app = getApp<IMyApp>()
let tId: number;
Page({
  data: {
    topic: null,
    pushText: '',
    id: null,
    inputText: '213rpx',
    titleValue: '',
    uptoken: '',
    imageArr: [],
    image2Commit: [],
  },

  async didPressChooesImage() {
    const that = this;
    const allowMax = 9 - that.data.image2Commit.length
    console.log('此次最多上传： ' + allowMax + ' 张')
    uploadMultiImg(allowMax, {
      before() {
        console.log('before upload');
      },
      success(res) {
        console.log('res---------------------++++++=', res)
        //将缩略图存入缓存
        wx.setStorageSync('gallery',res);
        that.setData({
          imageArr: res,
          image2Commit: that.data.image2Commit.concat(res)
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
  },

  delPic(e: any) {
    const that = this;
    console.log('e.target', e.target)
    console.log('e.target.dataset.index', e.target.dataset.index)
    const index = e.target.dataset.index

    if (that.data.image2Commit.length == 1) {                    //仅有一张图，全删
      that.setData({
        image2Commit: []
      });
    } else {                                                     //多张继续判断

      if (index == 0) {                                          //要删第一张，直接shift
        that.data.image2Commit.shift()
        that.setData({
          image2Commit: that.data.image2Commit
        });
      } else if (index == that.data.image2Commit.length - 1) {   //要删最后一张，直接pop
        that.data.image2Commit.pop()
        that.setData({
          image2Commit: that.data.image2Commit
        });
      } else if (index != 'undefined') {                          //删除中间的，先把index前面数据拿到，再拿index后面数据，然后拼接重新渲染
        const arrHead = that.data.image2Commit.slice(0, index)
        const arrEnd = that.data.image2Commit.slice(index + 1);
        that.setData({
          image2Commit: arrHead.concat(arrEnd)
        });
      }

    }

  },

  titleInput(event: any) {
    this.setData!({
      titleValue: event.detail.value
    })
  },
  /*textarea输入时触发该函数-微信框架无双向绑定 */
  textAreaInput(event: any) {
    this.setData!({
      pushText: event.detail.value
    })
  },

  /*发布话题 */
  titleParti(event: any) {
    if (!this.data.titleValue) {
      wx.showToast({
        icon: 'none',
        title: '标题不能为空！'
      });
      return
    } else if (this.data.titleValue.length < 5) {
      wx.showToast({
        icon: 'none',
        title: '抱歉，标题不得低于五个字呦'
      });
      return
    }

    const gallery = this.data.image2Commit.map(item => item.imageURL).join(',');
    console.log('gallery拦截----------------------------',gallery) ;
    const postData = {
      text: this.data.pushText,
      title: this.data.titleValue,
      type: 1,
      gallery,    //
    }
    wx.navigateTo({
      url: '../preview/preview?post='+encodeURIComponent(JSON.stringify(postData))
    })
  },
  // titleFocus(event: any) {   //title 的view 也要一起改变大小
  //   this.setData!({
  //     titleStyle: '213rpx'
  //   });
  // },
  // onEditText(event: any) {
  //   this.setData!({
  //     inputText: '213rpx'
  //   });
  // },
  onEndEditor(event: any) {
    this.setData!({
      inputText: '213rpx'
    });
  },
  editerConfirm(event: any) {
    this.setData!({
      inputText: '213rpx'
    });
  },
  onLoad(options: any) {
    this.data.id = options.tid;
  }
})
