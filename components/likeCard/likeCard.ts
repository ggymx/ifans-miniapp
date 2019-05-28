import api from '../../common/api';
import { smartGotoPage } from '../../common/helper';
import { ETableType } from '../../common/types/notice_reply';

// @ts-ignorets
Component({

  properties: {
    //是否已经点赞
    isLike: {
      type: Boolean,
      value: false
    },
    //点赞的类型：1.Post(话题和投稿)=>同一张表 2.Comment评论
    likeType: {
      type: ETableType,
      value: 0
    },
    //id: postId 或者是 commentId
    id: {
      type: Number,
      value: 0
    },
    likeCount: {
      type: Number,
      value: 0
    }
  },

  data: {

  },

  methods: {
    /*点赞 */
    async giveLike(event: any) {
      //获取token
      const token = wx.getStorageSync('token');
      if (!token) {
          smartGotoPage({
            url: '/pages/login'
          });
      } else {
        const instance = this as any;
        if (!instance.properties.isLike) {
          if (instance.properties.likeType === ETableType.Post) {
            const res = await api.giveLike({
              id: instance.data.id
            })
          }
          if (instance.properties.likeType === ETableType.Comment) {
            const res = await api.giveCommentLike({
              id: instance.data.id
            })
          }

          instance.setData!({
            isLike: true,
            likeCount: instance.properties.likeCount + 1
          });

        } else {
          if (instance.properties.likeType === ETableType.Post) {
            const res = await api.disLike({
              id: instance.data.id
            })
          }
          if (instance.properties.likeType === ETableType.Comment) {
            const res = await api.disCommentLike({
              id: instance.data.id,
            });
          }

          instance.setData!({
            isLike: false,
            likeCount: instance.properties.likeCount - 1
          });
        }
      }
    },

  },

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /*接受的外部样式类,通过slot1/slot2两个属性获取 */
  externalClasses: ['slot1', 'slot2']
});
