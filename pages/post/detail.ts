//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';
import { smartGotoPage } from '../../common/helper';
import { EUserStatus } from '../../common/types/comment';
import base from '../../pages/base'
const app = getApp<IMyApp>()
let id: number;
const cursor: number = 0;
let postId: number;
Page({
  data: {
    topic: null,
    // data: null,
    post:null,
    isLike: null,
    likeCount:0,          //保存likeCount状态
    postId: 0,
    commentValue: '',
    isCreateAnserPage: false,
    showMask: false,
    isPublished: false,
    focus: false,
    comments: []
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
    if (!this.data.commentValue) { return }
    const { user } = await api.getUserProfile()
    if (!user) {
      smartGotoPage({
        url: '/pages/login',
      });
    } else {
      const comment: any = {
        postId,
        text: this.data.commentValue,
        status: EUserStatus.Normal
      }
      const { id } = await api.createComment(comment)
      comment.user = user
      comment.createAt = comment.creatAt = new Date().toISOString()
      comment.id = id
      const comments = this.data.comments || []
      comments.push(comment)
      this.setData({
        comments,
        commentValue: '',
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
  onPullDownRefresh(){
     setTimeout(() => {
       wx.stopPullDownRefresh({});
     }, 500);
  },
  /*跳转到空间页 */
  findUserDetail() {
    const uId = this.data.post.user.id
    smartGotoPage({
      url: `/pages/user/detail?userId=${uId}`
    })
  },
  //跳转到话题详情
  findTopicDetail() {
    const instance = this as any;
    const tid = instance.data.post.refPost.id;
    smartGotoPage({
      url: `/pages/post/topic-detail?id=${tid}`
    })
  },
  /*点赞 */
  async giveLike(event: any) {
    //获取token
    const token = wx.getStorageSync('token');
    if (!token) {
      const pages = getCurrentPages();
      const curPage = pages[pages.length - 1];
      wx.showToast({ title: '请先登录！' });
      setTimeout(() => {
        if (curPage.route === 'pages/index') {
          smartGotoPage({
            url: './login'
          });
        } else {
          smartGotoPage({
            url: '../login'
          });
        }
      }, 100);
    } else {
      const instance = this as any;
      if (!instance.data.isLike) {
        const res = await api.giveLike({
          id: instance.data.post.id
        });
        instance.setData!({
          isLike: true,
          likeCount:this.data.likeCount+1
        });
      } else {
        const res = await api.disLike({
          id: instance.data.post.id
        });
        instance.setData!({
          isLike: false,
          likeCount:this.data.likeCount-1
        });
      }
    }
  },
  async onLoad(options: any) {
    const that = this;
    const id = options.id || { postId }
    this.setData({
      isPublished: options.isPublished === '1'
    })
    api.request({
      url: '/v1/post/detail',
      method: 'GET',
      data: {
        id
      },
      success(res) {
        const data = res.data as any;
        if (data.post === null) {
          wx.redirectTo({ url: '/pages/notfound/notfound' });
          return;
        }
        that.setData!({
          data,
          post:data.post,
          isLike: data.post.isLike,
          likeCount:data.post.likeCount
        });
      }
    });
    postId = id
    const data = await api.getCommentList({ postId, cursor, limit: 10 })
    that.setData!({
      comments: data.comments
    })
  },
  /* 监听后退事件 */
  onUnload() {
    if (this.data.isPublished) {
      wx.navigateBack({
        delta: 1
      });
    }
  },
  /*举报等操作弹出框 */
  popBox() {
    base.popBox(this);
  }
  /*转发分享监听事件 */
  // onShareAppMessage(res: any) {
  //   let text = this.data.data!.post.refPost.text;
  //   if (this.data.data!.post.refPost.text.length > 10) {
  //     text = this.data.data!.post.text.substring(0, 10) + '...'
  //   }
  //   return {
  //     title: `#${this.data.topic.post.title}#${text}`,
  //     success(e: any) {
  //       wx.showShareMenu({
  //         withShareTicket: true
  //       })
  //     }
  //   }
  // }
})
