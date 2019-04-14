//index.js
//获取应用实例
import { IMyApp } from '../../../app'
import api from '../../../common/api';
import { smartGotoPage } from '../../../common/helper';

const app = getApp<IMyApp>()

Page({
  data: {
    topic: null,
    comment: null
  },
  bindViewParti(event: any) {
    var tid = event.currentTarget.dataset.tid;
    wx.navigateTo({
      url: '../create/create?tid=' + tid
    });
  },
  bindViewTopic(event: any) {
    var tid = event.currentTarget.dataset.tid;
    wx.navigateTo({
      url: `../topic-detail/topic-detail?tid=${tid}`
    });
  },
  /*options:获取url参数 */
  onLoad(options: any) {

    let tId = options.tid;
    let cId = options.cid;
    var that = this;
    //获取话题详情
    api.request({

      url: '/v1/post/detail',

      method: 'GET',

      data: {
        id: tId
      },

      success(res) {
        //设置数据
        that.setData!({
          topic: res.data
        });

      }
    });

    //获取投稿详情
    api.request({

      url: '/v1/post/detail',

      method: 'GET',

      data: {
        id: cId
      },

      success(res) {
        //设置数据
        that.setData!({
          comment: res.data
        });
      }
    });

  },

  /*转发分享监听事件 */
  onShareAppMessage(res: any) {
    let text = this.data.comment!.post.text;
    if (this.data.comment!.post.text.length > 10) {
      text = this.data.comment!.post.text.substring(0, 10) + "..."
    }
    return {
      title: `#${this.data.topic.post.title}#${text}`,
      success(e: any) {
        wx.showShareMenu({
          withShareTicket: true
        })
      }
    }
  }
})
