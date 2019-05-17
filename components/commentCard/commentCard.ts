import api from '../../common/api';
import { smartGotoPage } from '../../common/helper';

// @ts-ignorets
Component({

  properties: {
    comment: {
      type: Object,
      value: null
    },
    isLike: {
      type: Boolean,
      value: false
    }
  },

  data: {

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
        if (!instance.properties.isLike) {
          const res = await api.giveCommentLike({
            id: instance.properties.comment.id
          });
          instance.setData!({
            isLike: true
          });
        } else {
          const res = await api.disCommentLike({
            id: instance.properties.comment.id
          });
          instance.setData!({
            isLike: false
          });
        }
      }
    },

    /*举报等操作弹出框 */
    popBox() {
      console.log('--------------点击评论弹出框');
      const instance = this as any;
      console.log('instance', instance)
      const token = wx.getStorageSync('token');
      if (token) {
        const ownId = wx.getStorageSync('userId');
        const userId = instance.properties.comment.user.id
        const cId = instance.properties.comment.id;
        console.log('====cId====', cId)
        if (ownId === userId) {
          wx.showActionSheet({
            itemList: ['删除'],
            success(res) {
              switch (res.tapIndex) {
                case 0:
                  wx.showModal({
                    title: '删除评论',
                    content: '确定删除这个评论吗？',
                    async success(res) {
                      if (res.confirm) {
                        const res = await api.removeComment(cId)
                        if (res.code !== 'OK') {
                          wx.showToast({ title: '删除失败' });
                        }
                        wx.showToast({
                          title: '删除成功',
                          success() {
                            wx.navigateBack({
                              delta: 1
                            })
                          }
                        });
                        // api.request({
                        //   url: '/v1/comment/remove',
                        //   data: {
                        //     postId: cId
                        //   },
                        //   method: 'POST',
                        //   success(res) {
                        //     wx.showToast({
                        //       title: '删除成功',
                        //       success() {
                        //         wx.navigateBack({
                        //           delta: 1
                        //         })
                        //       }
                        //     });
                        //   },
                        //   fail(res) {
                        //     wx.showToast({ title: '删除成功' });
                        //   }
                        // });
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
                          //TODO
                          url: '/v1/remove/abuse-report',
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
    }

  },

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /*接受的外部样式类,通过slot1/slot2两个属性获取 */
  externalClasses: ['slot1', 'slot2']
});
