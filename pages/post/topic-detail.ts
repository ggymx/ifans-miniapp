//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';
import { isPostPage, smartGotoPage } from '../../common/helper';
import base from '../base'
const app = getApp<IMyApp>()
let cursor: number;
let id: number;
Page({
  data: {
    // cursor: 0,
    options: {id: ''},
    isPreview: true, // 预览状态
    isPublished: false, // 发布成功
    post: null,
    topList: [],
    title: '',
    isLike: null,//是否显示红心
    likeCount: 0,  //记录当前点赞数
    attendCount:0 //记录初始的投稿数
  },
  createAnswer(event: any) {
    const topic = this.data.post
    base.link('cPost',0,encodeURIComponent(JSON.stringify(topic)));
  },
  userInfo(event: any) {
   base.link('user');
  },
  topicArea(event: any) {
    base.link('oldIndex');
  },
  //图片预览
  imgPre(event: any) {
    base.imgPre(event,this);
  },
  /*点赞 */
  async giveLike(event: any) {
    base.giveLike(this);
  },
  /*举报等操作弹出框 */
  async popBox() {
    const res=(this as any).data.post;
    if(wx.getStorageSync('token')){
      if(wx.getStorageSync('userId')===res.userId){
       const data = await base.messageBox(res.id,'/v1/post/remove','post','delete') as any;
        if(data.msg==='del-success'){
          //告诉前一页要删除相应的数据。。。
          console.log('删除的数据------------',this.data.post);
          let pages = getCurrentPages();   //获取当前页面信息栈
          let prevPage = pages[pages.length-2] as any;
          const updateTopicList=prevPage.data.topList.filter((item)=>{
            return item.id!==this.data.post.id
          })
          prevPage.setData({
            topList:updateTopicList
          })
        console.log('获取上一个页面栈----------',prevPage.data); 
          wx.navigateBack({delta:1});
        }
        console.log('删除后返回的信息-------',data);
      }else{
        base.messageBox(res.id,'/v1/post/abuse-report','post');
      }
    }
   },
  //删除投稿post
  rPostCard(e: any){
    console.log('测试自定义事件',e);
    const removePost=e.detail;
    const res=this.data.topList.filter((item)=>{
      if(item.id===removePost.id){
        console.log('找到了删除对象-----',item.id);
      }
      return item.id!==removePost.id;
    });
    this.setData({
      topList:res,
      attendCount:this.data.attendCount-1
    })
  },
  //options:获取url参数
  async onLoad(options: any) {
    console.log('触发加载--------tid',options.id);
    const that = this as any;
    this.setData({
      isPublished: options.isPublished === '1',
      options
    })
    console.log('重新返回话题--------------',that.data.post);
    if (!that.data.post) {
      id = options.id;
      const data: any = await api.getPost({ id });
      console.log('接受的data------------//',data);
      if (data.post === null) {
        wx.redirectTo({ url: '/pages/notfound/notfound' })
        return;
      }
      this.setData!({
        post: data.post,
        isLike: data.post.isLike,
        likeCount: data.post.likeCount,
        attendCount:data.post.attendCount
      });
    }
    //获取投稿列表
    const res=await base.pagingLoad('rPost',0,options.id) as any;
    this.setData({
      topList:res.posts
    })
    cursor=res.cursor;
  },
  /*跳转到空间页 */
  findUser() {
    const uId = this.data.post.user.id
    base.link('user',uId);
  },
  /* 监听后退事件 */
  onUnload() {
    if (this.data.isPublished) {
      wx.navigateBack({
        delta: 2
      })
    }
  },
  //下拉刷新
  async onPullDownRefresh() {
    //获取投稿列表
     setTimeout(async () => {
      const res=await base.pagingLoad('rPost',0,this.data.options.id) as any;
      this.setData({
        topList:res.posts
      })
      cursor=res.cursor;
      wx.stopPullDownRefresh({});
    }, 100);
  },
  //触底加载
  onReachBottom() {
    this.loadMore();
  },
  //分享卡片
  onSharePicReady(e: any) {
    this.sharePic = e.detail.picPath
    this.setData({
      sharePic: e.detail.picPath
    })
  },
    /*转发分享监听事件 */
  onShareAppMessage(res: any) {
      const post = this.data.post
      let title = `${post.user.nickname} 发布了一个话题，快来一起讨论吧`
      if(api.user){
        title = `[${api.user.nickname}@了你] 邀请你一起参与讨论`
      }
      return {
        title,
        imageUrl: this.data.sharePic,
        path: `/pages/post/topic-detail?id=${this.data.post.id}`,
      }
  },
  //加载更多
  async loadMore(){
      const res=await base.pagingLoad('rPost',cursor,this.data.options.id as number) as any;
      if(this.data.topList.length&&res.posts) {
        this.setData({
          topList:this.data.topList.concat(res.posts)
        });
        cursor=res.cursor;
      }
  }
})
