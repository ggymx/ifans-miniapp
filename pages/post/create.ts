//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';
import { smartGotoPage } from '../../common/helper';
const app = getApp<IMyApp>()
let tId: number;
Page({
  data: {
    topic: null,
    pushText: '',
    id: null,
    inputText: '390rpx',
    titleValue: ''
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
    const that = this;
    //获取缓存中的token，同步方式
    const token = wx.getStorageSync('token');
    if (!token) {
      //用户未登录或者token过期
      wx.showToast({ title: '请先登录！' });
      setTimeout(() => {
        smartGotoPage({
          url: '../login'
        });
      }, 300);

    } else {
      if (!this.data.titleValue) {
        wx.showToast({
          icon: 'none',
          title: '标题不能为空！'
        });
      } else if (this.data.titleValue.length < 5) {
        wx.showToast({
          icon: 'none',
          title: '抱歉，标题不得低于五个字呦'
        });
      } else {
        wx.showLoading({
          title: '发布中...'
        });
        const userId = wx.getStorageSync('userId');
        api.request({
          url: '/v1/post/create',
          data: {
            text: that.data.pushText,
            title: that.data.titleValue,
            type: 1,
            userid: userId,
          },
          method: 'POST',
          success(res) {
            const data = res.data as any
            const id = data.id;
            setTimeout(() => {
              wx.hideLoading({
                success() {
                  wx.showToast({
                    title: '发布成功！'
                  });
                  //投稿成功则清除缓存中的话题和草稿
                  wx.removeStorageSync('topic');
                  wx.removeStorageSync('draft');
                  console.log('===tId=====', id)
                  setTimeout(() => {
                    wx.redirectTo({
                      url: `./topic-detail?id=${id}`
                    });
                  }, 200);
                }
              });

            }, 200);

          }
        });

      }
    }
  },
  titleFocus(event: any) {
    this.setData!({
      inputText: '370rpx'
    });
  },
  onEditText(event: any) {
    this.setData!({
      inputText: '370rpx'
    });
  },
  onEndEditor(event: any) {
    this.setData!({
      inputText: '890rpx'
    });
  },
  editerConfirm(event: any) {
    this.setData!({
      inputText: '890rpx'
    });
  },
  onLoad(options: any) {
    this.data.id = options.tid;
  }
})
