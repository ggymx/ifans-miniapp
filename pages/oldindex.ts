//index.js
//获取应用实例
import { IMyApp } from '../app'
import api from '../common/api';
const app = getApp<IMyApp>()
let cursor: number = 0;
Page({
  data: {
    topList: [],
    isSubscribe: false,
    notErr: true
  },
  // 订阅功能
  bindSubscribe() {
    const status = this.data.isSubscribe;
    if (!status) {
      this.setData!({
        isSubscribe: true
      });
      wx.showToast({
        title: '已订阅，将于明早发送',
        icon: 'none'
      })
    } else {
      this.setData!({
        isSubscribe: false
      })
      wx.showToast({ title: '取消订阅', icon: 'none' });
    }
  },
  // 加载
  loadMore() {
    const that = this as any;
    wx.showLoading({
      title: '请稍候'
    });
    api.request({
      url: '/v1/post/home-list',
      data: {
        cursor,
        limit: 10
      },
      method: 'GET',
      success(res) {
        const data = res.data as any
        if (data.posts.length === 0) {
          setTimeout(() => {
            wx.showToast({
              icon: 'none',
              title: '已经到底了。。。'
            });
          }, 200);
        } else {
          that.setData!({
            topList: that.data.topList.concat(data.posts)
          });
          console.log(that.data)
          //指针后移
          cursor = data.cursor;
        }
      },
      fail(err) {
        wx.hideLoading({});
        setTimeout(() => {
          that.setData!({
            notErr: false
          });
        }, 300)
      }
    });
  },
  onPostRemove(e: any) {
    const { postId } = e.detail
    const topList = this.data.topList
    for (let i = 0; i < topList.length; i++) {
      if (topList[i].id === postId) {
        topList.splice(i, 1)
        this.setData({
          topList,
        })
        break;
      }
    }
  },
  onLoad() {
    cursor = 0
    const that = this as any;
    api.request({
      url: '/v1/post/home-list',
      data: {
        cursor,
        limit: 10
      },
      method: 'GET',
      success(res) {
        const data = res.data as any
        if (data.posts) {
          that.setData!({
            topList: data.posts
          });
        } else {
          wx.showToast({ title: '非法数据' + JSON.stringify(data) })
        }
        setTimeout(() => {
          wx.stopPullDownRefresh({});
        }, 500);
        cursor = data.cursor;
      },
      fail() {
        that.setData({
          notErr: false
        });
      }
    });
  },
  // 下拉刷新功能
  onPullDownRefresh() {
    this.onLoad()
  },
  // 浏览到底端功能
  onReachBottom() {
    const that = this;
    wx.showLoading({
      title: '加载更多.'
    });
    setTimeout(() => {
      //重新加载
      wx.hideLoading({});
      // 获取数据
      that.loadMore();
    }, 500)
  }
})
