import { chooseImage } from './../../common/upload';
Page({
  data: {
    topic: null,
    pushText: '',
    id: null,
    inputText: '213rpx',
    titleValue: '',
    image2Commit: [],
    isTopic:true,
    refPostId: null,
  },

  async didPressChooesImage() {
    const allowMax = 9 - this.data.image2Commit.length
    const images = await chooseImage(allowMax)
    const image2Commit = this.data.image2Commit.concat(images)
    this.setData!({
      image2Commit
    })
  },

  delPic(e: any) {
    const that = this;
    console.log('e.target', e.target)
    console.log('e.target.dataset.index', e.target.dataset.index)
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
    this.setData!({
      titleValue: event.detail.value
    })
  },
  /*textarea输入时触发该函数-微信框架无双向绑定 */
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
      return
    } else if (this.data.titleValue.length < 5) {
      wx.showToast({
        icon: 'none',
        title: '抱歉，标题不得低于五个字呦'
      });
      return
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
    wx.navigateTo({
      url: '/pages/preview/preview?post='+encodeURIComponent(JSON.stringify(postData))
    })
  },

  onEndEditor(event: any) {
    this.setData!({
      inputText: '213rpx'
    });
  },
  editerConfirm(event: any) {
    this.setData!({
      inputText: '213rpx'
    });
  },
  onLoad(options: any) {
    this.data.id = options.tid;
    const topic = options.topic?JSON.parse(decodeURIComponent(options.topic)):null
    console.log('传过来的topic-------',topic);
    console.log('传过来的页面参数:---------',options);
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
