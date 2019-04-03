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
   */
  properties: {
    card:{
      type:Boolean,
      value:false
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
    cId:{
      type:Number,
      value:0
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
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrl:'../../imgs/home-button-like@2x.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /*跳转页面 */
    bindRouter: function (event) {
      // console.log(event);
      // console.log(this.properties.showIssue)
      if (!this.properties.final) {
        if (this.properties.showIssue) {
          wx.navigateTo({
            url: '../topic-detail/topic-detail',
            success: function () {
              wx.showToast({
                title: '话题详情'
              });
            }
          });
        } else {
          wx.navigateTo({
            url: '../publisher/publisher',
            success: function () {
              wx.showToast({
                title: '发布者详情'
              });
            }
          });
        }
      }
    },
    /*点赞 */
    likeSwitch: function (event) {
      if(this.data.imgUrl=='../../imgs/home-button-like@2x.png'){
        this.setData({
          imgUrl:'../../imgs/button-like-dj@2x.png'
        })
      }else{
        this.setData({
          imgUrl:'../../imgs/home-button-like@2x.png'
        })
      }
   
      // setTimeout(2000,()=>{
      //   console.log("2秒后执行")
      //   this.setData({
      //     imgUrl:''
      //   });
      // });
    }
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /*数据监听器 */
  observers: {
    'imgUrl': function (numberA, numberB) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
   
    }
  }
})