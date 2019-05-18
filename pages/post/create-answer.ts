//index.js
//获取应用实例
import api from '../../common/api';
import { smartGotoPage } from '../../common/helper';
import { chooseImage } from '../../common/upload';
Page({
  data: {
    topic: null,
    pushText: '',
    refPostId: null,
    inputText: '213rpx',
    uptoken: '',
    image2Commit: [],
  },

  async didPressChooesImage() {
    const allowMax = 9 - this.data.image2Commit.length
    const images = await chooseImage(allowMax)
    const image2Commit = this.data.image2Commit.concat(images)
    this.setData!({
      image2Commit
    })
  },

  delPic(e: any) {
    const that = this;
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

  /*textarea输入时触发该函数-微信框架无双向绑定 */
  textAreaInput(event: any) {
    this.setData!({
      pushText: event.detail.value
    })
  },

  /**
   * 发布投稿
   * @param event 
   */
  clickPublish(event: any) {
    const postData = {
      text: this.data.pushText,
      type: 2,
      refPostId: this.data.refPostId,
      refPost: this.data.topic,
      thumbnails: this.data.image2Commit.map(path=>({
        image: path,
        type: 0,
        url: path,
      })),
    }
    wx.navigateTo({
      url: '/pages/preview/preview?post='+encodeURIComponent(JSON.stringify(postData))
    })
  },
  onEditText(event: any) {
    this.setData!({
      inputText: '213rpx'
    });
  },
  onEndEditor(event: any) {
    this.setData!({
      inputText: '213rpx'
    });
  },
  onLoad(options: any) {
    const topic = JSON.parse(decodeURIComponent(options.topic))
    this.setData!({
      topic,
    });
    this.data.refPostId = topic.id
  }
})
