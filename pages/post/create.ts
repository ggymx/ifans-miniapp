import api from '../../common/api';
import base from '../base';
import { chooseImage } from './../../common/upload';
Page({
  data: {
    topic: null,
    id: null,
    refPostId: null,
    isTopic:true,
    pushText: '',
    titleValue: '',
    inputText: '300rpx',
    image2Commit: [],
  },
  async getFormId(e: any) {
    const res = await api.reportUserFormId({ formId: e.detail.formId })
  },
  async didPressChooesImage() {
    const allowMax = 9 - this.data.image2Commit.length
    const images = await chooseImage(allowMax)
    console.log('image2Commit的长度-------------',this.data.image2Commit.length);
    if(this.data.image2Commit.length<9){
      const image2Commit = this.data.image2Commit.concat(images)
      this.setData!({
        image2Commit
      })
    }
  },
  delPic(e: any) {
    const that = this;
    const index = e.target.dataset.index
    if (that.data.image2Commit.length == 1) {                    //仅有一张图，全删
      that.setData({
        image2Commit: []
      });
    } else {                                                     //多张继续判断
      if (index == 0) {                                          //要删第一张，直接shift
        that.data.image2Commit.shift()
        that.setData({
          image2Commit: that.data.image2Commit
        });
      } else if (index == that.data.image2Commit.length - 1) {   //要删最后一张，直接pop
        that.data.image2Commit.pop()
        that.setData({
          image2Commit: that.data.image2Commit
        });
      } else if (index != 'undefined') {                          //删除中间的，先把index前面数据拿到，再拿index后面数据，然后拼接重新渲染
        const arrHead = that.data.image2Commit.slice(0, index)
        const arrEnd = that.data.image2Commit.slice(index + 1);
        that.setData({
          image2Commit: arrHead.concat(arrEnd)
        });
      }
    }
  },
  titleInput(event: any) {
    console.log("event.detail.value",event.detail.value.length)
    if(event.detail.value.length>=40){
      wx.showToast({
        icon: 'none',
        title: '标题最多40个字呦~'
      });
    }else{
      this.setData!({
        titleValue: event.detail.value
      })
    }

  },
  textAreaInput(event: any) {
    this.setData!({
      pushText: event.detail.value
    })
  },
  /*发布话题 */
  clickPublish(event: any) {
    let postData=null;
    //发布话题
    if(this.data.isTopic){
    if (!this.data.titleValue) {
      wx.showToast({
        icon: 'none',
        title: '标题不能为空！'
      });
      return;
    } else if (this.data.titleValue.length < 5) {
      wx.showToast({
        icon: 'none',
        title: '抱歉，标题不得低于五个字呦~'
      });
      return;
    }
    postData = {
      text: this.data.pushText,
      title: this.data.titleValue,
      type: 1,
      thumbnails: this.data.image2Commit.map(path=>({
        image: path,
        type: 0,
        url: path,
      })),
    }
    }else{
      //发布投稿
      if(!this.data.pushText){
        wx.showToast({
          icon: 'none',
          title: '发布内容不允许为空！'
        });
        return;
      }else if(this.data.pushText.length<5){
        wx.showToast({
          icon: 'none',
          title: '抱歉，发布内容不能低于五个字呦~'
        });
        return;
      }
       postData = {
        text: this.data.pushText,
        type: 2,
        refPostId: this.data.refPostId,
        refPost: this.data.topic,
        thumbnails: this.data.image2Commit.map(path=>({
          image: path,
          type: 0,
          url: path,
        })),
      }
    }
    //判断是否登录
    if(!wx.getStorageSync('token')){
       base.link('login');
    }else{
    wx.navigateTo({
      url: `/pages/preview/preview?post=${encodeURIComponent(JSON.stringify(postData))}
           &&isTopic=${this.data.isTopic}`
    })
   }
  },
  //结束编辑
  onEndEditor(event: any) {
    this.setData!({
      inputText: '300rpx'
    });
  },
  editerConfirm(event: any) {
    this.setData!({
      inputText: '300rpx'
    });
  },
  onLoad(options: any) {
    this.data.id = options.tid;
    const topic = options.topic?JSON.parse(decodeURIComponent(options.topic)):null;
    if(topic){
      //投稿
      this.setData({
        isTopic:false,
        topic
      });
      this.data.refPostId = topic.id
    }
  }
})
