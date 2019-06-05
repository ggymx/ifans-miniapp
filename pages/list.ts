//index.js
//获取应用实例
import { IMyApp } from '../app'
import api from '../common/api';
import { smartGotoPage } from '../common/helper';

const app = getApp<IMyApp>()
Page({
  data: {
    resData: null
  },
  createAccount(){
    smartGotoPage({
      url:'/pages/createAccount'
    })
  },
  onLoad(){
    const that = this as any;
    const userId = wx.getStorageSync('userId');
    // console.log("userId",userId)
    const token=wx.getStorageSync('token');
    api.request({
      url: '/v1/user/user-mini-list',
      header: {
        Authorization: token // 默认值
      },
      data:{
        rootuid:userId
      },
      method: 'GET',
      success(res: any) {
        // console.log("res",res)
         res.data.res.forEach(item => {
          item.isCurAccount=false;
             if(item.id===userId){
               item.isCurAccount=true;
             }
         });
         that.setData({
          resData:res
         });
      }
    });
  },
onShow(){ //页面再展示时重新请求
  const that = this as any;
  const userId = wx.getStorageSync('userId');
  // console.log("userId",userId)
  const token=wx.getStorageSync('token');
  api.request({
    url: '/v1/user/user-mini-list',
    header: {
      Authorization: token // 默认值
    },
    data:{
      rootuid:userId
    },
    method: 'GET',
    success(res: any) {
      // console.log("res",res)
       res.data.res.forEach(item => {
        item.isCurAccount=false;
           if(item.id===userId){
             item.isCurAccount=true;
           }
       });
       that.setData({
        resData:res
       });
    }
  });
},

  switchAct(e:any){

    const curItem=e.currentTarget.dataset.item;
    const update =this.data.resData.data.res;
    update.forEach(item => {
      if(item.id===curItem.id){
          item.isCurAccount=true;
      }else{
        item.isCurAccount=false;
      }
    });

    console.log("点击小号列表",e.currentTarget)
    console.log("小号的ID",e.currentTarget.dataset.item.id)

    const miniUserId=e.currentTarget.dataset.item.id;
    const token=wx.getStorageSync('token');
    api.request({
      url: '/v1/auth/login-mini',
      header: {
        Authorization: token // 默认值
      },
      data:{
        userId:miniUserId
      },
      method: 'POST',
      success(res: any) {
        console.log("res",res)
        //往缓存中添加token（异步）
        api.setToken(res.data.token);
        api.getUserInfo(true)
        wx.setStorage({
          key: 'userId',
          data: res.data.user.id
        });
        wx.navigateBack({
          delta: 1
        })
        //  res.data.res.forEach(item => {
        //   item.isCurAccount=false;
        //      if(item.id===userId){
        //        item.isCurAccount=true;
        //      }
        //  });

        //  that.setData({
        //   resData:res
        //  });
      }
    });


  }
})
