import api from "../../common/api";
import { smartGotoPage } from "../../common/helper";

// @ts-ignorets
Component({
  /*
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
    // clock: {
    //   type: Boolean,
    //   value: true
    // },
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
    // finalMy: {
    //   type: Boolean,
    //   value: false
    // },
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
    /*跳转页面 */
    bindRouter(event: any) {
      console.log("//////////////", event);
      // if(event.target.offsetTop!=event.currentTarget.offsetTop){return;}
      const instance = this as any;
      /*showIssue存在则跳转到话题详情 */
      if (!instance.properties.final) {
        const pages = getCurrentPages();
        const curPage = pages[pages.length - 1];
        if (instance.properties.showIssue) {
          const id = instance.properties.post.id;
          if (curPage.route === "pages/index") {
            smartGotoPage({
              url: "./post/topic-detail?tid=" + id
            });
          } else if (curPage.route === "pages/user/detail") {
            smartGotoPage({ url: "../post/topic-detail?tid=" + id });
          } else {
            smartGotoPage({ url: "./topic-detail?tid=" + id });
          }
        } else {
          /*不存在则跳转到文章详情 */
          const cId = instance.properties.post.id;
          const tId = instance.properties.post.refPostId;
          if (curPage.route === "pages/index") {
            smartGotoPage({
              url: "./post/detail?tid=" + tId + "&cid=" + cId
            });
          } else if (curPage.route === "pages/user/detail") {
            smartGotoPage({ url: "../post/detail?tid=" + tId + "&cid=" + cId });
          } else {
            smartGotoPage({
              url: "./detail?tid=" + tId + "&cid=" + cId
            });
          }
        }
      }
    },
    finalRouter(event: any) {
      // if(event.target.offsetTop!=event.currentTarget.offsetTop){return;}
      const instance = this as any;
      /*showIssue存在则跳转到话题详情 */
      const pages = getCurrentPages();
      const curPage = pages[pages.length - 1];
      if (instance.properties.showIssue) {
        const id = instance.properties.post.id;
        if (curPage.route === "pages/index") {
          smartGotoPage({
            url: "./post/topic-detail?tid=" + id
          });
        } else if (curPage.route === "pages/user/detail") {
          smartGotoPage({ url: "../post/topic-detail?tid=" + id });
        } else {
          smartGotoPage({ url: "./topic-detail?tid=" + id });
        }
      } else {
        /*不存在则跳转到文章详情 */
        const cId = instance.properties.post.id;
        const tId = instance.properties.post.refPostId;
        if (curPage.route === "pages/index") {
          smartGotoPage({
            url: "./post/detail?tid=" + tId + "&cid=" + cId
          });
        } else if (curPage.route === "pages/user/detail") {
          smartGotoPage({ url: "../post/detail?tid=" + tId + "&cid=" + cId });
        } else {
          smartGotoPage({
            url: "./detail?tid=" + tId + "&cid=" + cId
          });
        }
      }
    },
    bindMy(event: any) {
      const instance = this as any;
      if (!instance.properties.finalMy) {
        //获取当前页面
        const pages = getCurrentPages();
        const curPage = pages[pages.length - 1];
        const userId = instance.properties.post.user.id;
        if (curPage.route === "pages/index") {
          smartGotoPage({
            url: "./user/detail?userId=" + userId
          });
        } else {
          smartGotoPage({
            url: "../user/detail?userId=" + userId
          });
        }
      }
    },
    finalLink(event: any) {
      const instance = this as any;
      //获取当前页面
      const pages = getCurrentPages();
      // 数组中第一个元素为首页，最后一个元素为当前页面。
      const curPage = pages[pages.length - 1];
      const userId = instance.properties.post.user.id;
      console.log(curPage.route);
      // 判断跳转页面和当前页面一致
      if (curPage.route === "pages/user/detail") {
        return false;
      }
      if (curPage.route === "pages/index") {
        smartGotoPage({
          url: "./user/detail?userId=" + userId
        });
      } else {
        smartGotoPage({
          url: "../user/detail?userId=" + userId
        });
      }
    },
    /*点赞 */
    async giveLike(event: any) {
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
          const res = await api.giveLike({
            postId: instance.properties.post.id
          });
          instance.setData!({
            isLike: true
          });
        } else {
          const res = await api.disLike({
            postId: instance.properties.post.id
          });
          instance.setData!({
            isLike: false
          });
        }
      }
    },

    popBox() {
      const instance = this as any;
      const token = wx.getStorageSync("token");
      if (token) {
        const ownId = wx.getStorageSync("userId");
        const userId = instance.properties.post.user.id;
        const cId = instance.properties.post.id;
        if (ownId === userId) {
          wx.showActionSheet({
            itemList: ["删除"],
            success(res) {
              switch (res.tapIndex) {
                case 0:
                  wx.showModal({
                    title: "删除投稿",
                    content: "确定删除这则投稿吗？",
                    success(res) {
                      if (res.confirm) {
                        api.request({
                          url: "/v1/post/delete",
                          data: {
                            postId: cId
                          },
                          method: "POST",
                          success(res) {
                            wx.showToast({ 
                              title: "删除成功" ,
                              success: function() {
                                console.log('123')
                                wx.navigateBack({
                                  delta: 1
                                })
                              }
                            });
                            // const pages=getCurrentPages();
                            // const curPage=pages[pages.length-1];
                            // const keyWord=curPage.route.split('/')[2]
                            // console.log('------',keyWord);
                            // wx.redirectTo({
                            //   url:`./${keyWord}`
                            // });
                          },
                          fail(res) {
                            wx.showToast({ title: "删除成功" });
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
            itemList: ["举报"],
            success(res) {
              switch (res.tapIndex) {
                case 0:
                  wx.showModal({
                    title: "举报",
                    content: "确定举报这则投稿吗？",
                    success(res) {
                      if (res.confirm) {
                        api.request({
                          url: "/v1/post/abuse-report",
                          data: {
                            postId: cId
                          },
                          method: "POST",
                          success(res) {
                            const data = res.data as any;
                            data.msg === "ok"
                              ? wx.showToast({ title: "举报成功" })
                              : "";
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
      }
    }
  },

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /*接受的外部样式类,通过slot1/slot2两个属性获取 */
  externalClasses: ["slot1", "slot2"]
});
