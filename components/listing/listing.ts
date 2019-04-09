// components/listing/listing.js
Component({
  /**
   * 组件的属性列表
   * card:添加类-只允许添加item-card 卡片样式
   * arrowBtn：是否显示右侧的三点按钮
   * showTopic：是否显示关联的话题
   * showIssue：是否显示发布文本
   * final:确定是否是最终页面
   * tId：绑定话题Id
   * cId:绑定评论Id
   * username：用户名
   * noBorder:是否有边框
   * avatar:头像
   */
  properties: {
    card: {
      type: Boolean,
      value: false
    },
    arrowBtn: {
      type: Boolean,
      value: false
    },
    showTitle: {
      type: Boolean,
      value: false
    },
    showIssue: {
      type: Boolean,
      value: false
    },
    tId: {
      type: Number,
      value: 0
    },
    cId: {
      type: Number,
      value: 0
    },
    userId: {
      type: String,
      value: ''
    },
    clock: {
      type: Boolean,
      value: false
    },
    like: {
      type: Boolean,
      value: false
    },
    final: {
      type: Boolean,
      value: false
    },
    finalMy: {
      type: Boolean,
      value: false
    },
    avatar: {
      type: String,
      value: '../../imgs/test1.jpg'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrl: '../../imgs/home-button-like@2x.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /*跳转页面 */
    bindRouter(event:any) {
      /*showIssue存在则跳转到话题详情 */
      if (!this.properties.final) {
        if (this.properties.showIssue) {
          let id = event.currentTarget.dataset.tid;
          wx.navigateTo({
            url: '../topic-detail/topic-detail?tid=' + id,
            success: function () {
              wx.showToast({
                title: '话题详情'
              });
            }
          });
        } else {
          /*不存在则跳转到发布者详情 */
          let cId = event.currentTarget.dataset.cid;
          let tId = event.currentTarget.dataset.tid;
          wx.navigateTo({
            url: '../publisher/publisher?tid=' + tId + '&cid=' + cId,
            success: function () {
              wx.showToast({
                title: '发布者详情'
              });
            }
          });
        }
      }
    },
    bindMy(event:any) {
      // console.log(event);
      if(!this.properties.finalMy){
      let userId = event.currentTarget.dataset.uid;
      console.log("用户名Id:" + userId);
      wx.navigateTo({
        url: '../my/my?userId=' + userId,
        success: function () {
          wx.showToast({
            title: '我的首页'
          });
        }
      });
    }
    },
    /*点赞 */
    giveLike(event:any) {
      var that = this;
      //获取token
      var token = wx.getStorageSync('token');
      if (!token) {
        wx.showToast({title: '请先登录！'});
        //延迟三秒执行跳转
        setTimeout(()=>{
          wx.navigateTo({
            url: '../login/login'
          });
        },2000);
      } else {
        if (that.data.imgUrl == '../../imgs/home-button-like@2x.png') {
          that.setData!({
            imgUrl: '../../imgs/button-like-dj@2x.png'
          })
        } else {
          that.setData!({
            imgUrl: '../../imgs/home-button-like@2x.png'
          })
        }
      }
    },

     //点击弹出屏蔽举报模态框
    popBox(){
      /**不能直接设置样式？ */
      // const query=wx.createSelectorQuery().in(this).select('.arr-view');
      // console.log("------------------------------------");
    },
  },

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /*数据监听器 */
  observers: {
    'imgUrl': function (numberA:any, numberB:any) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数

    }
  },
  
  /*接受的外部样式类,通过slot1/slot2两个属性获取 */
  externalClasses: ['slot1', 'slot2']
})