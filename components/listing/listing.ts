import api from "../../common/api";
import { smartGotoPage } from "../../common/helper";

// components/listing/listing.js

Component({
  /**
   * 组件的属性列表
   * card:添加类-只允许添加item-card 卡片样式
   * arrowBtn：是否显示右侧的三点按钮
   * showTopic：是否显示关联的话题
   * showIssue：是否显示发布文本
   * final:确定是否是最终页面
   * noBorder:是否有边框
   * like：是否显示心形按钮
   * isLike：根据是否点赞显示是否是红心
   * post:传入的post对象
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
    clock: {
      type: Boolean,
      value: false
    },
    like: {
      type: Boolean,
      value: false
    },
    isLike: {
      type: Boolean,
      value: false
    },
    likeCount: {
      type: Number,
      value: 0
    },
    final: {
      type: Boolean,
      value: false
    },
    finalMy: {
      type: Boolean,
      value: false
    },
    post:{
      type:Object,
      value:null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isDelete: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /*跳转页面 */
    bindRouter(event: any) {
      /*showIssue存在则跳转到话题详情 */
     
      if (!this.properties.final) {
        
        let pages = getCurrentPages()
        let curPage = pages[pages.length - 1];
        if (this.properties.showIssue) {
          let id=this.properties.post.id
          if (curPage.route == "pages/index/index") {
            wx.navigateTo({
              url: '../post/topic-detail/topic-detail?tid=' + id
            });
          }else if(curPage.route=="pages/user/detail/detail"){
            wx.navigateTo({ url: '../../post/topic-detail/topic-detail?tid=' + id });
          }else {
            wx.navigateTo({ url: '../topic-detail/topic-detail?tid=' + id });
          }
        } else {
          /*不存在则跳转到文章详情 */
          let cId = this.properties.post.id;
          let tId = this.properties.post.refPostId;
          if (curPage.route == "pages/index/index") {
            wx.navigateTo({
              url: '../post/contribute/contribute?tid=' + tId + '&cid=' + cId
            });
          } else if(curPage.route=="pages/user/detail/detail"){
            wx.navigateTo({  url: '../../post/contribute/contribute?tid=' + tId + '&cid=' + cId });
          }else {
            wx.navigateTo({
              url: '../contribute/contribute?tid=' + tId + '&cid=' + cId,
            });
          }
        }
      }
    },
    bindMy(event: any) {
      if (!this.properties.finalMy) {
        //获取当前页面
        let pages = getCurrentPages()
        let curPage = pages[pages.length - 1];
        let  userId= this.properties.post.user.id;
        if(curPage.route=="pages/index/index"){
          wx.navigateTo({
            url: '../user/detail/detail?userId=' + userId
          });
        }else{
          wx.navigateTo({
            url: '../../user/detail/detail?userId=' + userId
          })
        }
      
      }
    },
    /*点赞 */
    async giveLike(event: any) {
      //获取token
      var token = wx.getStorageSync('token');
      if (!token) {
        let pages=getCurrentPages();
        let curPage=pages[pages.length-1];
        wx.showToast({ title: '请先登录！' });

        setTimeout(() => {
         if(curPage.route=="pages/index/index"){
          wx.navigateTo({
            url: '../login/login'
          });
        }else{
          wx.navigateTo({
            url: '../../login/login'
          });
        }
        }, 100);
      } else {
        if (!this.properties.isLike) {
          const res = await api.giveLike({ postId: this.properties.cId })
          this.setData!({
            isLike: true
          })
        } else {
          const res = await api.disLike({ postId: this.properties.cId })
          this.setData!({
            isLike: false
          })
        }
      }
    },

    popBox() {
      let token = wx.getStorageSync('token');
      if (token) {
        const ownId = wx.getStorageSync('userId');
        const userId = this.properties.userId
        const cId = this.properties.cId;
        if (ownId == userId) {
          wx.showActionSheet({
            itemList: ["删除"],
            success(res) {
              switch (res.tapIndex) {
                case 0:
                  wx.showModal({
                    title: '删除投稿',
                    content: '确定删除这则投稿吗？',
                    success(res) {
                      if (res.confirm) {
                        api.request({
                          url: '/v1/post/delete',
                          data: {
                            postId: cId
                          },
                          method: 'POST',
                          success(res) {
                            wx.showToast({ title: '删除成功' })
                          },
                          fail(res) {
                            wx.showToast({ title: '删除成功' })
                          }
                        });

                      }
                    }
                  }); break;
              }
            }
          })
        } else {
          wx.showActionSheet({
            itemList: ["举报"],
            success(res) {
              switch (res.tapIndex) {
                case 0:
                  wx.showModal({
                    title: '举报',
                    content: '确定举报这则投稿吗？',
                    success(res) {
                      if (res.confirm) {
                        api.request({
                          url: '/v1/post/abuse-report',
                          data: {
                            postId: cId
                          },
                          method: 'POST',
                          success(res) {
                            res.data.msg == "ok" ? wx.showToast({ title: '举报成功' }) : ''
                          }
                        });

                      }
                    }
                  }); break;
              }
            }
          })
        }

      } else {
        let pages=getCurrentPages();
        let curPage=pages[pages.length-1];
        wx.showToast({ title: '请先登录！' });
        setTimeout(() => {
          if(curPage.route=="pages/index/index"){
          wx.navigateTo({
            url: '../login/login'
          });
        }else{
          wx.navigateTo({
            url: '../../login/login'
          });
        }
        }, 100);
      }
    },
  },

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /*接受的外部样式类,通过slot1/slot2两个属性获取 */
  externalClasses: ['slot1', 'slot2']
})