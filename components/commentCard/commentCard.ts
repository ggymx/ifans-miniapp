import api from '../../common/api';
import { smartGotoPage } from '../../common/helper';
import base from '../../pages/base'
// @ts-ignorets
Component({
  properties: {
    comment: {
      type: Object,
      value: null,
    },
  },

  data: {
    isLike: false,
    likeCount:0
  },

  /**
   * 组件的方法列表
   */
  methods: {

    /*点赞 */
    async giveCmtLike(event: any) {
      const instance = this as any;
      //获取token
      const token = wx.getStorageSync('token');
      if (!token) {
         smartGotoPage({
          url: '/pages/login'
          });
      } else {
        if (!instance.data.isLike) {
          const res = await api.giveCommentLike({
            id: instance.properties.comment.id
          });
          instance.setData!({
            isLike: true,
            likeCount:instance.data.likeCount+1
          });
        } else {
          const res = await api.disCommentLike({
            id: instance.properties.comment.id
          });
          instance.setData!({
            isLike: false,
            likeCount:instance.data.likeCount-1
          });
        }
      }
    },
   /*举报等操作弹出框 */
   async popBox() {
    const res=(this as any).data.comment;
    console.log('res的data--------',res);
    if(wx.getStorageSync('token')){
      if(wx.getStorageSync('userId')===res.userId){
        const msg=await base.messageBox(res.id,'/v1/comment/remove','comment','delete');
        console.log('返回的reData-------',msg);
        if(msg){
          (this as any).triggerEvent('removeCmt', (this as any).data.comment, {composed:true});
        }
      }else{
        base.messageBox(res.id,'/v1/post/abuse-report','comment');
      }
    }
   },
   findUser(){
     base.link('user',(this as any).data.comment.userId);
   }
  },
  ready(){
    let that = this;
    let flag=false;
    wx.getStorage({
      key: 'rootuid',
      success (res) {
       flag = res.data != null ? true : false;
       that.setData({
        showMiniUserFlag:flag
      })
      }
    })
    console.log('ready', this.data.comment)
    //保存点赞数量状态
    this.setData({
     likeCount:this.data.comment.likeCount,
     isLike:this.data.comment.isLike,
    })
    console.log('ready done.')
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /*接受的外部样式类,通过slot1/slot2两个属性获取 */
  externalClasses: ['slot1', 'slot2']
});
