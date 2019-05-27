//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';
const app = getApp<IMyApp>()
Page({
  data: {
    items: [
      {name: 'USA', value: '色情低俗'},
      {name: 'CHN', value: '政治敏感'},
      {name: 'BRA', value: '违法犯罪'},
      {name: 'JPN', value: '侮辱谩骂'},
      {name: 'ENG', value: '发布垃圾广告'}
    ]
  },
  onLoad(){}
})
