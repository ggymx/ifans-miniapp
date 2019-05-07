//index.js
//获取应用实例
import { IMyApp } from '../../app'
import { smartGotoPage } from '../../common/helper';
import api from '../../common/api';

const app = getApp<IMyApp>()

Page({
  data: {
    topic: null,
    comment: null
  },
  bindViewParti(event: any) {
    const tid = event.currentTarget.dataset.tid;
    smartGotoPage({
      url: './create?tid=' + tid
    });
  },
  bindViewTopic(event: any) {
    const tid = event.currentTarget.dataset.tid;
    smartGotoPage({
      url: `./topic-detail?tid=${tid}`
    });
  },
  /*options:获取url参数 */
  async onLoad(options: any) {
    // const tId = options.tid;
    console.log('进入detail.ts中的onLoad事件')
    // const cId = options.refPostId;
    const id = options.id
    const that = this;

    api.request({
      url: '/v1/post/detail',

      method: 'GET',

      data: {
        id
      },

      success(res) {
        //设置数据
        console.table('获取到数据', res.data)
        that.setData!({
          comment: res.data
        });
      }
    });

    // const res = await api.getPost({ id })
    // console.table('详情', res)
    // this.setData!({
    //   topic: res.post
    // })

  },

  /*转发分享监听事件 */
  onShareAppMessage(res: any) {
    let text = this.data.comment!.post.text;
    if (this.data.comment!.post.text.length > 10) {
      text = this.data.comment!.post.text.substring(0, 10) + '...'
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
