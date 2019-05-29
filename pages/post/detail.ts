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
      const { id } = await api.createComment(comment);
      console.log('插入评论-------',comment);
      comment.user = user
      comment.createAt = comment.creatAt = new Date().toISOString()
      comment.id = id;
      comment.isLike=false;
      comment.likeCount=0;
      comment.userId=wx.getStorageSync('userId');
      const comments = this.data.comments || []
      comments.push(comment)
      this.setData({
        comments,
        commentValue: '',
        commentCount:this.data.commentCount+1
      })
      console.log('此时的评论列表-------',this.data.comments);
      // 移动到评论区
      wx.pageScrollTo({
        // TODO: 找到更好的办法
        scrollTop: 1000000,
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
    api.getUserInfo()
  },

  /* 监听后退事件 */
  onUnload() {
    if (this.data.isPublished) {
      wx.navigateBack({
        delta: 1
      });
    }
  },
  async popBox() {
    const res=(this as any).data.post;
    if(wx.getStorageSync('token')){
      if(wx.getStorageSync('userId')===res.userId){
       const data=await base.messageBox(res.id,'/v1/post/remove','post','delete') as any;
       if(data.msg==='del-success'){
         //告诉前一页要删除相应的数据。。。
         let pages = getCurrentPages();   //获取当前页面信息栈
         let prevPage = pages[pages.length-2] as any;
         console.log('前一个页面栈的数据---------',prevPage.data);
         const updateTopicList=prevPage.data.topList.filter((item)=>{
           return item.id!==this.data.post.id
         })
         const attendCount=prevPage.data.attendCount;
         prevPage.setData({
           topList:updateTopicList,
           attendCount:attendCount-1
         })
         wx.navigateBack({delta:1});
       }
       console.log('删除后返回的信息-------',data);
      }else{
        base.messageBox(res.id,'/v1/post/abuse-report','post');
      }
    }
   },
  onSharePicReady(e: any) {
    console.log('onSharePicReady')
    this.sharePic = e.detail.picPath
    this.setData({
      sharePic: e.detail.picPath
    })
  },
  /*转发分享监听事件 */
  onShareAppMessage(res: any) {
    const post = this.data.post
    let title = `${post.user.nickname} 参与了一个话题，来和他一起讨论吧`
    if(api.user){
      title = `[${api.user.nickname}@了你] 邀请你一起参与讨论`
    }
    return {
      title,
      imageUrl: this.data.sharePic,
      path: `/pages/post/detail?id=${this.data.post.id}`,
      success(e: any) {
        wx.showShareMenu({
          withShareTicket: true
        })
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
