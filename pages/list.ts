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
  }
})
