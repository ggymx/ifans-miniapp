import api from '../../common/api';
import { smartGotoPage } from '../../common/helper';

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
    post: {
      type: Object,
      value: null
    },
    showMore: {
      type: Boolean,
      value: false
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
    /*跳转话题&文章详情*/
    findDetail(event: any) {
      const instance = this as any;
         // instance.properties.final为false的时候进来
      if (!instance.properties.final) {
        //type=1则是话题详情
        if (instance.properties.post.type === 1) {
          const id = instance.properties.post.id
          smartGotoPage({
            url: '/pages/post/topic-detail?id=' + id
          })
        } else {
          const id = instance.properties.post.id
          smartGotoPage({
            url:'/pages/post/detail?id=' + id
          })
        }
      }
    },
    //跳转到空间
    findMy(event: any) {
      const instance = this as any;
      //获取当前页面
      const pages = getCurrentPages();
      // 数组中第一个元素为首页，最后一个元素为当前页面。
      const curPage = pages[pages.length - 1];
      const userId = instance.properties.post.user.id;
      // 判断跳转页面和当前页面一致
      if (curPage.route === 'pages/user/detail') {
        return;
      }
      smartGotoPage({
        url: '/pages/user/detail?userId=' + userId
      });
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
          smartGotoPage({
            url: '/pages/login'
          });
        }, 100);
      } else {
        const instance = this as any;
        if (!instance.properties.isLike) {
          const res = await api.giveLike({
            id: instance.properties.post.id
          });
          instance.setData!({
            isLike: true
          });
        } else {
          const res = await api.disLike({
            id: instance.properties.post.id
          });
          instance.setData!({
            isLike: false
          });
        }
      }
    },
    /*举报等操作弹出框 */
    popBox() {
      const instance = this as any;
      const token = wx.getStorageSync('token');
      if (token) {
        const ownId = wx.getStorageSync('userId');
        const userId = instance.properties.post.user.id;
        const cId = instance.properties.post.id;
        if (ownId === userId) {
          wx.showActionSheet({
            itemList: ['删除'],
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
                            wx.showToast({
                              title: '删除成功',
                              success() {
                                wx.navigateBack({
                                  delta: 1
                                })
                              }
                            });
                          },
                          fail(res) {
                            wx.showToast({ title: '删除成功' });
                          }
                        });
                      }
                    }
                  });
                  break;
              }
            }
          });
        } else {
          wx.showActionSheet({
            itemList: ['举报'],
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
                            const data = res.data as any;
                            data.msg === 'ok'
                              ? wx.showToast({ title: '举报成功' })
                              : '';
                          }
                        });
                      }
                    }
                  });
                  break;
              }
            }
          });
        }
      } else {
        wx.showToast({ title: '请先登录！' });
        setTimeout(() => {
          smartGotoPage({
            url: '/pages/login'
          });
        }, 100);
      }
    },
    //图片预览
    imgPre(event: any){
      const instance=this as any;
      const thumbnails=instance.data.post.thumbnails;
      const imgs=thumbnails.map((item: any)=>item=item.url);
      wx.previewImage({
        current: event.target.dataset.src, // 当前显示图片的http链接
        urls: imgs // 需要预览的图片http链接列表
      })
    }
  },

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /*接受的外部样式类,通过slot1/slot2两个属性获取 */
  externalClasses: ['slot1', 'slot2']
});
