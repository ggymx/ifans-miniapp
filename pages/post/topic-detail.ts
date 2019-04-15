//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';
import { smartGotoPage } from '../../common/helper';
const app = getApp<IMyApp>()
let id: number;
let cursor: number=0;
Page({
  data: {
    topic: null,
    postArr:[]
  },
  bindViewParti(event: any) {
    const tid = event.currentTarget.dataset.tid;
    smartGotoPage({
      url: './create?tid=' + tid
    });
  },

  //options:获取url参数
  onLoad(options: any) {
    console.log('cursor的值：',cursor);
    const that = this;
    if(!that.data.topic){
    id = options.tid;

    api.request({
      url: '/v1/post/detail',
      method: 'GET',
      data: {
        id
      },
      success(res) {
        //设置数据
        that.setData!({
          topic: res.data
        });
      }
    });
    cursor=0;
  }
    api.request(
      {
        url:'/v1/post/answer-list',
        // url: '/v1/post/list',
        method: 'GET',
        data: {
          id,
          cursor,
          limit:5
        },
        success(res) {
          //设置数据
          const data=res.data as any
          console.log('获取到的res：',res);
          if(data.posts.length!==0){
            that.setData!({
              postArr: that.data.postArr.concat(data.posts)
            });
            cursor=data.cursor
            wx.hideLoading({});
          }else{
            wx.hideLoading({});
            wx.showToast({
              icon:'none',
              title:'已经到底了！'
            })
          }
        }
      }
    )
  },

  /*转发分享监听事件 */
  onShareAppMessage(res: any) {
    const that = this
    return {
      title: `#${this.data.topic.post.title}#`,
      success(e: any) {
        wx.showShareMenu({
          withShareTicket: true
        })
      }
    }
  },
  //下拉刷新
  onPullDownRefresh(){
    console.log('触发下拉刷新事件');
    const that = this;
    api.request(
      {
        url:'/v1/post/answer-list',
        // url: '/v1/post/list',
        method: 'GET',
        data: {
          id,
          cursor:0,
          limit:5
        },
        success(res) {
          //设置数据
          const data=res.data as any
            that.setData!({
              postArr: data.posts
            });
            setTimeout(() => {
              wx.stopPullDownRefresh({});
            }, 200);
            cursor=data.cursor
        }
      }
    )
  },
  //触底加载
  onReachBottom(){
    wx.showLoading({
      title:'加载更多...'
    })
   setTimeout(() => {
    this.onLoad()
   }, 200);
   }
})
