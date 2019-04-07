//index.js
//获取应用实例
import { IMyApp } from '../../app'


const app = getApp<IMyApp>()

Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    topic: null,
    pushText:'',
    refPostId: null
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
      }, 2000);

    } else {
      if (!this.data.pushText) {
        wx.showToast({
          title: '内容不能为空！'
        });
      } else {
        wx.showLoading({
          title: '投稿中...',
          success() {
          }
        });
        let userId = wx.getStorageSync('userId');
        console.log('获取到的userId:', userId);
        console.log('获取到的话题的id:', this.data.refPostId);
        console.log('获取到的投稿的内容：',this.data.pushText);
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
            console.log("发布投稿成功！！！！！！！！！",res.data);
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
                      url: '../index/index'
                    });
                  }, 1000);
                }
              });

            }, 1000);

          },
          fail(res) {
            console.log(res.errMsg);
          }
        });

      }
    }
  },

  onLoad(options: any) {
    console.log('触发load事件');
    let topic=wx.getStorageSync('topic')
    console.log('获得缓存中的topic：',topic);
    //没有话题缓存说明是首次来该页面
    if(!topic){
    let tid = options.tid;
    this.data.refPostId = options.tid;
    console.log(`传过来的tid：${tid}，存储的id${this.data.refPostId}`);
    var that = this;
    wx.request({
      url: 'https://api-test.ifans.pub/v1/post/detail',
      data: {
        id: tid
      },
      method: 'GET',
      success(res) {
        console.log("参与话题页----------获取res");
        console.log(res.data);
        that.setData!({
          topic: res.data
        });

        //缓存话题
        wx.setStorage({
          key:'topic',
          data:res.data,
          success(){
            console.log("缓存取到的话题：",res.data);
          }
        });
      },
      fail(err) {
        console.log("打印错误信息:" + err.errMsg);
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

    if (app.globalData.userInfo) {
      this.setData!({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = (res) => {
        this.setData!({
          userInfo: res,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData!({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo(e: any) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData!({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
