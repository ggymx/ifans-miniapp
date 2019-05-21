import api from '../../common/api';
import { smartGotoPage } from '../../common/helper';
import base from '../../pages/base'
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
    popBox() {
      // base.popBox(this);
    }
  },
  ready(){
    //保存点赞数量状态
    this.setData({
     likeCount:this.data.comment.likeCount
    })
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /*接受的外部样式类,通过slot1/slot2两个属性获取 */
  externalClasses: ['slot1', 'slot2']
});
