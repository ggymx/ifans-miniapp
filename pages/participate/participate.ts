//index.js
//获取应用实例
import { IMyApp } from '../../app'


const app = getApp<IMyApp>()
let tId:number;
Page({
  data: {
    topic: null,
    pushText:'',
    refPostId: null,
    inputText:'390rpx'
  },
  /*textarea输入时触发该函数-微信框架无双向绑定 */
  textAreaInput(event: any) {
    this.setData!({
      pushText: event.detail.value
    })
  },

  tapConfirm(event: any) {
    console.log('点击完成被触发');
    wx.showToast({ title: '点击完成被触发' });
  },

  /*发布话题 */
  titleParti(event: any) {
    var that = this;
    //获取缓存中的token，同步方式
    let token = wx.getStorageSync('token');
    if (!token) {
      //用户未登录或者token过期
      wx.showToast({ title: '请先登录！' });
      //缓存未发布的草稿
      console.log("未发布的草稿：",this.data.pushText)
      if(this.data.pushText!=''){
      wx.setStorage({
        key:'draft',
        data:this.data.pushText,
        success(){
        }
      });
    }
      setTimeout(() => {
        wx.navigateTo({
          url: '../login/login',
          success() {

          }
        });
      }, 300);

    } else {
      if (!this.data.pushText) {
        wx.showToast({
          icon:'none',
          title: '内容不能为空！'
        });
      }else if(this.data.pushText.length<5){
        wx.showToast({
          icon:'none',
          title:'抱歉客官，参与投稿不得低于五个字呦'
        });
      }else {
        wx.showLoading({
          title: '投稿中...',
          success() {
          }
        });
        let userId = wx.getStorageSync('userId');
      
        wx.request({
          url: 'https://api-test.ifans.pub/v1/post/create',
          data: {
            text: that.data.pushText,
            type: 2,
            userid: userId,
            refPostId: this.data.refPostId
          },
          header: {
            Authorization: token
          },
          method: 'POST',
          success(res) {
            let cId=res.data.id;
        
            setTimeout(() => {
              wx.hideLoading({
                success() {
                  wx.showToast({
                    title: '投稿成功！'
                  });
                  //投稿成功则清除缓存中的话题和草稿
                  wx.removeStorageSync('topic');
                  wx.removeStorageSync('draft');
                  setTimeout(() => {
                    wx.navigateTo({
                      url: `../publisher/publisher?tid=${tId}&cid=${cId}`
                    });
                  }, 200);
                }
              });

            }, 200);

          },
          fail(res) {
            console.log(res.errMsg);
          }
        });

      }
    }
  },
  
onEditText(event:any){
  // console.log(event);
  this.setData!({
    inputText:'390rpx'
  });
},
onEndEditor(event:any){
 
  this.setData!({
    inputText:'900rpx'
  });
}
,
  onLoad(options: any) {

    let topic=wx.getStorageSync('topic')
    //没有话题缓存说明是首次来该页面
    if(!topic){
    tId = options.tid;
    this.data.refPostId = options.tid;
   
    var that = this;
    wx.request({
      url: 'https://api-test.ifans.pub/v1/post/detail',
      data: {
        id: tId
      },
      method: 'GET',
      success(res) {

        that.setData!({
          topic: res.data
        });

        //缓存话题
        wx.setStorage({
          key:'topic',
          data:res.data,
          success(){
            // console.log("缓存取到的话题：",res.data);
          }
        });
      },
      fail(err) {
        // console.log("打印错误信息:" + err.errMsg);
      }
    });
  }else{
    //有话题缓存说明是从登录页跳转过来的，就直接取缓存
    this.setData!({
      topic:topic
    });
    this.setData!({
      refPostId:topic.post.id
    });
    //取出缓存的草稿，应该是异步，这里是同步待修改
    let draft =wx.getStorageSync('draft');
    this.setData!({
      pushText:draft
    });
  }
  }
})
