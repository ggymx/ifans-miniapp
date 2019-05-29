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
  },
  switchAct(e:any){
    const curItem=e.currentTarget.dataset.item;
    console.log('点击切换账号------------',e.currentTarget.dataset.item);
    let update=this.data.resData.data.res;
    update.forEach(item => {
      if(item.id===curItem.id){
          item.isCurAccount=true;
      }else{
        item.isCurAccount=false;
      }
    });
    console.log('update-----------------',update);
    // this.setData({
    //   resData:update
    // })
  }
})
