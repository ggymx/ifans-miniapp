import api from "../../common/api";
import { smartGotoPage } from "../../common/helper";

// @ts-ignorets
Component({

  properties: {
    isLike: {
      type: Boolean,
      value: false
    },
  },

  data: {

  },

  methods: {
    /*点赞 */
    async giveCommentLike(event: any) {
      //获取token
      const token = wx.getStorageSync("token");
      if (!token) {
        const pages = getCurrentPages();
        const curPage = pages[pages.length - 1];
        wx.showToast({ title: "请先登录！" });
        setTimeout(() => {
          if (curPage.route === "pages/index") {
            smartGotoPage({
              url: "./login"
            });
          } else {
            smartGotoPage({
              url: "../login"
            });
          }
        }, 100);
      } else {
        const instance = this as any;
        if (!instance.properties.isLike) {
          const res = await api.giveCommentLike({
            id: instance.data.comment.id
          });
          instance.setData!({
            isLike: true
          });
        } else {
          const res = await api.disCommentLike({
            id: instance.data.comment.id
          });
          instance.setData!({
            isLike: false
          });
        }
      }
    },

  },

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /*接受的外部样式类,通过slot1/slot2两个属性获取 */
  externalClasses: ["slot1", "slot2"]
});
