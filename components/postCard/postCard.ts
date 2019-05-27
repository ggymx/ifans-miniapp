import api from '../../common/api';
import { smartGotoPage } from '../../common/helper';
import base from '../../pages/base';

// @ts-ignorets
Component({
  /*
   * 组件的属性列表
   * card:添加类-只允许添加item-card 卡片样式
   * arrowBtn：是否显示右侧的三点按钮
   * showTopic：是否显示关联的话题
   * showIssue：显示发布了话题字样
   * final:确定是否是最终页面
   * noBorder:是否有边框
   * like：是否显示心形按钮
   * isLike：根据是否点赞显示是否是红心
   * post:传入的post对象
   * showMore:是否显示更多按钮
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
    like: {
      type: Boolean,
      value: false
    },
    isLike: {
      type: Boolean,
      value: true
    },
    final: {
      type: Boolean,
      value: false
    },
    post: {
      type: Object,
      value: null
    },
    showMore: {
      type: Boolean,
      value: false
    }
  },
  data: {
    isDelete: true,
    likeCount:0
  },
  methods: {
    /*跳转话题&文章详情*/
    findDetail(event: any) {
      const instance = this as any;
         // instance.properties.final为false的时候进来
      if (!instance.properties.final) {
        //type=1则是话题详情
        const id = (instance.properties.post.id) as number
        (instance.properties.post.type === 1)?base.link('topic',id): base.link('post',id);
      }
    },
    async getFormId(e: any) {
      const res = await api.reportUserFormId({ formId: e.detail.formId })
    },
    //跳转到空间
    findUser(event: any) {
      const userId = (this as any).properties.post.user.id;
      base.link('user',userId);
    },
    //跳转到发布页
    createAnswer(event: any) {
      const instance =this as any;
      const topic = instance.properties.post;
      //目前仅支持对话题投稿，不支持投稿评论
      if(topic.type===1){
      // smartGotoPage({
      //    url: '/pages/post/create?topic=' + encodeURIComponent(JSON.stringify(topic))
      // });
      base.link('cPost',0,encodeURIComponent(JSON.stringify(topic)));
     }else{
       //对投稿进行评论，暂无
      base.link('post',instance.properties.post.id);
     }
    },
    /*点赞 */
    async giveLike(event: any) {
      base.giveLike(this as any,'component');
    },
    /*举报等操作弹出框 */
   async popBox() {
     const res=(this as any).data.post;
     if(wx.getStorageSync('token')){
       if(wx.getStorageSync('userId')===res.userId){
        const msg= await base.messageBox(res.id,'/v1/post/remove','post','delete');
         console.log('调用回执---------------',msg);
         if(msg){
          (this as any).triggerEvent('removePost', (this as any).data.post, {composed:true});
         }
       }else{
         base.messageBox(res.id,'/v1/post/abuse-report','post');
       }
     }
    },
    //图片预览
    imgPre(event: any){
      base.imgPre(event,this as any);
    }
  },
  ready(){
     this.setData({
         likeCount:this.data.post.likeCount
     });
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /*接受的外部样式类,通过slot1/slot2两个属性获取 */
  externalClasses: ['slot1', 'slot2']
});
