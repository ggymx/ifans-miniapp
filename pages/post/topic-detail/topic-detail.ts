//index.js
//获取应用实例
import { IMyApp } from '../../../app'
import api from '../../../common/api';


const app = getApp<IMyApp>()
let id: number
Page({
  data: {
    topic: {},
    comment: {}
  },
  bindViewParti(event: any) {
    var tid = event.currentTarget.dataset.tid;
    wx.navigateTo({
      url: '../create/create?tid=' + tid,
      success: function () {
        wx.showToast({
          title: '发布话题'
        });
      }
    });
  },

  /*options:获取url参数 */
  onLoad(options: any) {

    // let id=options.tid;
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
        console.log("获取的话题详情：", res.data);
        that.setData!({
          topic: res.data
        });
        api.request(
          {
            url: '/v1/post/list',

            method: 'GET',

            data: {
              id: id
            },
            success(res) {
              //设置数据
              console.log("获取的投稿列表：", res.data);
              that.setData!({
                // topic:res.data
                comment: res.data,
              });
            },
            fail(err) {
              console.log("打印错误信息");
              console.log(err.errMsg);
            }
          }
        )

      },
      fail() {

      }
    });
  },

  /*转发分享监听事件 */
  onShareAppMessage(res: any) {
    var that = this
    console.log("激活转发事件：", res)
    return {
      title: `#${this.data.topic.post.title}#`,
      // imageUrl:'../../imgs/topicShare.png',
      success(e: any) {
        wx.showShareMenu({
          withShareTicket: true
        })
      },
      fail() {

      }
    }
  }
})
