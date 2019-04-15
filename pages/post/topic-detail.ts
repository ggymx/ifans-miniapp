//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';


const app = getApp<IMyApp>()
let id: number;
Page({
  data: {
    topic: {},
    comment: {}
  },
  bindViewParti(event: any) {
    var tid = event.currentTarget.dataset.tid;
    wx.navigateTo({
      url: '../create/create?tid=' + tid
    });
  },

  /*options:获取url参数 */
  onLoad(options: any) {

    id = options.tid;

    var that = this;
    api.request({
      url: '/v1/post/detail',
      method: 'GET',
      data: {
        id: id
      },
      success(res) {
        //设置数据
        that.setData!({
          topic: res.data
        });
        api.request(
          {
            // url:'/v1/post/answer-list',
            url:'/v1/post/list',
            method:'GET',
    
            data:{
              id:id
            },
            success(res) {
              //设置数据
              that.setData!({
                comment: res.data,
              });
            }
          }
        )

      } 
    });
  },

  /*转发分享监听事件 */
  onShareAppMessage(res: any) {
    var that = this
    return {
      title: `#${this.data.topic.post.title}#`,
      success(e: any) {
        wx.showShareMenu({
          withShareTicket: true
        })
      }
    }
  }
})
