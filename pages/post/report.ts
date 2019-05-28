//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';
import base from '../base';
const app = getApp<IMyApp>()
Page({
  data: {
    items: [
      {name: 'sq', value: '色情低俗'},
      {name: 'zm', value: '政治敏感'},
      {name: 'wf', value: '违法犯罪'},
      {name: 'wr', value: '侮辱谩骂'},
      {name: 'lj', value: '发布垃圾广告'}
    ]
  },
  onLoad(){},
  onSubmit(){
    wx.showToast({title:'举报成功'});
    setTimeout(() => {
      wx.navigateBack({delta:1});
    }, 300);
    //
      // api.request({
      //       url,
      //       data,
      //       method: 'POST',
      //       success(res) {
      //         const data = res.data as any;
      //         data.msg === 'ok'
      //           ? wx.showToast({ title: '举报成功' })
      //           : '';
      //         // {id,msg:'report-success'}
      //       }
      //     });
  }
})
