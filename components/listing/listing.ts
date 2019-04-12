import api from "../../common/api";

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
   * like：是否显示心形按钮
   * isLike根据是否点赞显示是否是红心
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
    isLike:{
      type: Boolean,
      value: false
    },
    likeCount:{
      type:Number,
      value:0
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
    // imgUrl: '../../imgs/home-button-like@2x.png',
    isDelete:true
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
             
            }
          });
        } else {
          /*不存在则跳转到发布者详情 */
          let cId = event.currentTarget.dataset.cid;
          let tId = event.currentTarget.dataset.tid;
          wx.navigateTo({
            url: '../publisher/publisher?tid=' + tId + '&cid=' + cId,
          
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
      
        }
      });
    }
    },
    /*点赞 */
    async giveLike(event:any) {
      //获取token
      var token = wx.getStorageSync('token');
      if (!token) {
        wx.showToast({title: '请先登录！'});
      
        setTimeout(()=>{
          wx.navigateTo({
            url: '../login/login'
          });
        },100);
      } else {
        // console.log('giveLike', this.properties)
        if(!this.properties.isLike) {
          console.log("点赞的cId："+this.properties.cId)
          const res = await api.giveLike({postId: this.properties.cId})
          this.setData!({
            isLike: true
          })
        } else {
          console.log("取消点赞的cId："+this.properties.cId);
          const res = await api.disLike({postId: this.properties.cId})
          this.setData!({
            isLike: false
          })
          // this.properties.isLike=false
        }
      }
    },

    popBox(){
   
      let token=wx.getStorageSync('token');
      // let itemList;
      if(token){
        const ownId=wx.getStorageSync('userId');
        const userId=this.properties.userId
        const cId=this.properties.cId;
        console.log(`当前用户的id：${ownId}，投稿的用户Id：${userId}`);
        console.log(`投稿的id：${cId}`);
        if(ownId==userId){
          wx.showActionSheet({
            itemList:["删除"],
            success(res){
              switch(res.tapIndex){
                case 0:
                  wx.showModal({
                    title:'删除投稿',
                    content:'确定删除这个信息吗？',
                    success(res){
                      if(res.confirm){
                        
                        wx.showToast({title:'删除成功！'})
                      }
                    }
                  });break;
              }
            }
          })
        }else{
          wx.showActionSheet({
            itemList:["举报"],
            success(res){
              switch(res.tapIndex){
                case 0:
                  wx.showModal({
                    title:'举报',
                    content:'确定举报这则投稿吗？',
                    success(res){
                      if(res.confirm){
                        console.log("用户确定");
                        api.request({
                          url:'/v1/post/abuse-report',
                          data:{
                            postId:cId
                          },
                          method:'POST',
                          success(res){
                            console.log("举报后接收到的用户信息：",res.data);
                            res.data.msg=="ok"?wx.showToast({title:'举报成功'}):''
                          },
                          fail(res){
                           console.log("错误信息：",res.errMsg)
                          }
                        });
                       
                      }
                    }
                  });break;
              }
            }
          })
        }
    
    }else{
      wx.showToast({title: '请先登录！'});
      setTimeout(()=>{
        wx.navigateTo({
          url: '../login/login'
        });
      },100);
    }
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