//index.js
//获取应用实例
import { IMyApp } from '../app'
import api from '../common/api';
import { smartGotoPage } from '../common/helper';

const app = getApp<IMyApp>()
let loginCode: string
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
    console.log('token------------',token);
    console.log('当前账户--------------',userId);
    api.request({
      url: '/v1/user/user-mini-list',
      header: {
        Authorization: token // 默认值
      },
      data:{
        rootuid:userId
      },
      method: 'GET',
      success(res:any) {
         console.log('接收的小号列表-------',res.data.res);
         that.setData({
          resData:res
         });
         console.log('res---------------',this.data.resData);
      }
    });

    // let res = this.data.res.map((item)=>{
    //    item.isCurAccount=false;
    //    if(item.id===userId){
    //      item.isCurAccount=true;
    //    }
    // });
    // let res=this.data.res.data.res;
    // res.forEach(item => {
    //    item.isCurAccount=false;
    //      if(item.id===userId){
    //        item.isCurAccount=true;
    //      }
    // });
    // this.setData({
    //   res
    // }
  }
})
