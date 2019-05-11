//index.js
//获取应用实例
import { IMyApp } from '../../app'

/**
 * ttype:动作
 * 点赞：1
 * 评论：2
 * 回复：3
 * 参与：4
 * type：文章类型
 * 作品：1
 * 评论：2
 */

const app = getApp<IMyApp>()

Page({
  data: {
       res:[
         {
         ttype:1,
         type:1,
         like:20,
         user:{
           nickname:'游明星',
           avatar:''
         },
         post:{
           title:'你有每年天朝传统节日...'
         },
         date:'05-04'
        },
        {
          ttype:1,
          type:2,
          like:23,
          user:{
            nickname:'泰戈尔~',
            avatar:''
          },
          post:{
            text:'中国春节年年过',
            title:'你有每年天朝传统节日...'
          },
          date:'05-04'
         },
         {
          ttype:2,
          type:1,
          comment:'小姐姐要不要中午喝一杯？',
          user:{
            nickname:'奥特曼',
            avatar:''
          },
          post:{
            text:'中国春节年年过',
            title:'你有每年天朝传统节日...'
          },
          date:'05-04'
         },
         {
          ttype:3,
          type:2,
          replay:'没有兴趣，我喜欢在家',
          comment:'小姐姐要不要中午喝一杯？',
          user:{
            nickname:'智障不压身#',
            avatar:''
          },
          post:{
            text:'中国春节年年过',
            title:'你有每年天朝传统节日...'
          },
          date:'05-04'
         },
         {
          ttype:4,
          type:1,
          attend:'真是个小机灵鬼',
          user:{
            nickname:'样哈哈',
            avatar:''
          },
          post:{
            title:'你有每年天朝传统节日...'
          },
          date:'05-04'
        }
       ]
  },

  onLoad() {

    this.setData!({

    });

  }

})
