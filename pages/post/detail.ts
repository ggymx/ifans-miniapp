//index.js
//获取应用实例
import { IMyApp } from '../../app'
import { smartGotoPage } from '../../common/helper';
import api from '../../common/api';

const app = getApp<IMyApp>()
let id: number;
let cursor: number = 0;
let postId: number;

Page({
  data: {
    topic: null,
    comment: null,
    comments: [],
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
    console.log('=====id====', id)
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

    postId = id
    const data = await api.getCommentList({ postId, cursor, limit: 10 })
  
    console.log('评论列表', data)
    that.setData!({
      comments: data.comments
    })
    // api.request({
    //   url: '/v1/comment/list',
    //   method: 'GET',
    //   data: {
    //     postId: id
    //   },
    //   success(res) {
    //     const data = res.data.comments
    //     console.table({ data })
    //   }
    // })

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
