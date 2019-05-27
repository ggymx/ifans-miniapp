//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';
import { smartGotoPage } from '../../common/helper';
import { EUserStatus } from '../../common/types/comment';
import base from '../../pages/base'
import { init } from '../../common/qiniuUploader';
const app = getApp<IMyApp>()
let id: number;
let cursor: number;
let postId: number;
Page({
  data: {
    topic: null,
    // data: null,
    post:null,
    isLike: null,
    likeCount:0,//保存likeCount状态
    commentCount:0,
    commentValue: '',
    isCreateAnserPage: false,
    showMask: false,
    isPublished: false,
    focus: false,
    comments: [],
    option:null
  },
  isCreateAnserPage(event: any) {
    this.setData!({
      isCreateAnserPage: event.detail.value
    })
  },
  //编辑评论
  startEdit(event: any) {
    this.setData!({
      commentValue: event.detail.value
    })
  },
  //聚焦
  inputFocus(event: any) {
    this.setData!({
      showMask: true
    });
  },
  //失焦
  inputBlur() {
    this.setData!({
      showMask: false
    })
  },
  bindImageInput() {
    this.setData!({
      focus: true
    })
  },
  async sendComment(event: any) {
    console.log('发送评论----------');
    if (!this.data.commentValue) { return }
    const user = await api.getUserInfo()
    if (!user) {
      smartGotoPage({
        url: '/pages/login',
      });
    } else {
      const comment: any = {
        postId:this.data.post.id,
        text: this.data.commentValue
      }
      console.log('文章详情------------+++获取postId',);
      const { id } = await api.createComment(comment)
      comment.user = user
      comment.createAt = comment.creatAt = new Date().toISOString()
      comment.id = id
      const comments = this.data.comments || []
      comments.push(comment)
      this.setData({
        comments,
        commentValue: '',
        commentCount:this.data.commentCount+1
      })
      // 移动到评论区
      const query = wx.createSelectorQuery();
      query.exec((rects: any) => {
        wx.pageScrollTo({
          // TODO: 找到更好的办法
          scrollTop: 1000000,
        })
      })
    }
  },
  //图片预览
  imgPre(event: any) {
    base.imgPre(event,this);
  },
  /*跳转到空间页 */
  findUser() {
    const uId = this.data.post.user.id
    base.link('user',uId);
  },
  //跳转到话题详情
  findTopicDetail() {
    const instance = this as any;
    const tid = instance.data.post.refPost.id;
    smartGotoPage({
      url: `/pages/post/topic-detail?id=${tid}`
    })
  },
  //当评论删除时及时更新
  rComment(e: any){
    const rComment=e.detail;
    const res=this.data.comments.filter((item)=>{
        return item.id!==rComment.id;
    });
    this.setData({
       comments:res,
       commentCount:this.data.commentCount-1
    });
  },
  /*点赞 */
  async giveLike(event: any) {
    base.giveLike(this);
  },
  async onLoad(options: any) {
    id = options.id || { postId }
    let res=await api.getPost({id}) as any;
    console.log('接受到的文章详情--------',res);
    this.setData!({
      isPublished: options.isPublished === '1',
      data:res,
      post:res.post,
      isLike: res.post.isLike,
      likeCount:res.post.likeCount,
      commentCount:res.post.commentCount
    });
    console.log('加载开始-----------',res)
    this.init();
  },

  /* 监听后退事件 */
  onUnload() {
    if (this.data.isPublished) {
      wx.navigateBack({
        delta: 1
      });
    }
  },
  popBox() {
    const res=(this as any).data.post;
    if(wx.getStorageSync('token')){
      if(wx.getStorageSync('userId')===res.userId){
       base.messageBox(res.id,'/v1/post/remove','post','delete');
      }else{
        base.messageBox(res.id,'/v1/post/abuse-report','post');
      }
    }
   },
  onPullDownRefresh(){
    this.init();
    setTimeout(() => {
      wx.stopPullDownRefresh({});
    }, 300);
 },
  //触底加载
  onReachBottom(){
    this.loadMore();
  },
  //初始化加载
  async init(){
    const res2 = await base.pagingLoad('rComment',0,id) as any;
    console.log('res------------------------',res2);
    this.setData({
      comments:res2.comments
    });
    cursor=res2.cursor;
  },
  async loadMore(){
    const res=await base.pagingLoad('rComment',cursor,id) as any;
    if(this.data.comments.length&&res.comments.length){
       this.setData({
        comments:this.data.comments.concat(res.comments)
       });
       cursor=res.cursor;
    }
  }
})
