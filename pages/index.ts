import api from '../common/api';
import { smartGotoPage } from '../common/helper';
import base from './base';
let startTime, endTime;
Page({
  data: {
    user: null,
    isRead: true
  },
  async getFormId(e: any) {
    const res = await api.reportUserFormId({ formId: e.detail.formId })
  },
  onLoad() {
    //监测是否有未读消息
    const token=wx.getStorageSync('token');
    this.isRead(token);
  },
  async onShow() {
    const token = wx.getStorageSync('token');
    if (token) {
      const { user } = await api.getUserProfile()
      if (user) {
        this.setData!({
          user
        })
      }
      this.isRead(token);
    }
  },
  onShareAppMessage(opts: Page.IShareAppMessageOption) {
    return {
      title: '轻话题',
      // path:'',
      // imageUrl:'',
    }
  },
  onPullDownRefresh() {
    setTimeout(() => {
      wx.stopPullDownRefresh({
      });
    }, 500);
  },
  //点击'我的足迹'按钮，执行跳转，传递当前的userId
  userFootPrint(options: any) {
    if (this.data.user) {
      //获取用户Id
      const userId = wx.getStorageSync('userId')
      base.link('footPrint', userId);
    } else {
      base.link('login');
    }
  },
  //消息通知
  userNews() {
    if (wx.getStorageSync('token') && this.data.user) {
      base.link('news');
    } else {
      base.link('login');
    }
  },
  Login() {
    if (this.endTime - this.startTime < 3000) {
      if (this.data.user) {
        const userId = wx.getStorageSync('userId');
        base.link('user', userId);
      }
      else {
        base.link('login');
      }
    }
  },
  manyTopic(event: any) {
    base.link('oldIndex');
  },
  createTopic(event: any) {
    base.link('cTopic');
  },
  touchStart(e: any) {
    this.startTime = e.timeStamp;
  },
  touchEnd(e: any) {
    this.endTime = e.timeStamp;
  },
  //用户是否有未读消息
  isRead(token: string){
    const that=this as any;
    console.log('token-------------',token);
    if(token){
      api.request({
        url:'/v1/notice/unread-count',
        method:'GET',
        header:{
          Authorization: token
        },
        success(res:any){
          console.log('unreadCount--------',res.data.unreadCount)
          if(res.data.unreadCount){
            that.setData({
                 isRead:false
               })
          }else{
            that.setData({
              isRead:true
            })
          }
        }
      });
    }
  },
  //切换小号
  changeAccount() {

    const token=wx.getStorageSync('token');
    const userId=wx.getStorageSync('userId');
    if(token){
      api.request({
        url: '/v1/user/mini-root',
        header: {
          Authorization: token // 默认值
        },
        data:{
          userId
        },
        method: 'GET',
        success(res:any) {
          console.log('返回成功-----------------');
          console.log("res", res)
          if(token&&res.data.isRoot){
            wx.showActionSheet({
              itemList: ['账号列表', '清除数据', '退出登录'],
              success(res) {
                console.log(res.tapIndex)
                if (res.tapIndex === 0) {
                    smartGotoPage({
                      url: '/pages/list'
                    })
                } else if (res.tapIndex === 1) {
                  wx.clearStorageSync();
                } else {
                  console.log('用户退出登录');
                }
              }
            })
          }
        }
      });
    }
  }
})
