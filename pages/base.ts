//公共代码封装
import api from '../common/api';
import { isPostPage, smartGotoPage } from '../common/helper';

class Base {
  /**
   * 屏蔽举报操作
   * @param instance 当前页面的实例对象
   */
  public popBox(instance: Page.PageInstance): void {
    const token = wx.getStorageSync('token');
    if (token) {
      const ownId = wx.getStorageSync('userId');
      const userId = instance.data.post.user.id;
      const cId = instance.data.post.id;
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
                        url: '/v1/post/remove',
                        data: {
                          postId: cId
                        },
                        method: 'POST',
                        success(res) {
                          wx.showToast({
                            title: '删除成功',
                            success() {
                              // wx.navigateBack({
                              //   delta: 1
                              // })
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
  }

  /**
   * 图片预览
   * @param event  当前预览的图片源
   * @param instance  当前页面的实例对象
   */
  public imgPre(event: any, instance: Page.PageInstance): void {
    const thumbnails = instance.data.post.thumbnails;
    const imgs = thumbnails.map((item: any) => item = item.url);
    wx.previewImage({
      current: event.target.dataset.src, // 当前显示图片的http链接
      urls: imgs // 需要预览的图片http链接列表
    })
  }

  /**
   * 话题-投稿-评论点赞
   * @param user 当前的使用者，取值component/page
   * @param instance 当前页面或组件的实例对象
   */
  public async giveLike(user: string,instance: Page.PageInstance){
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
     let id: number;
     const that=instance as any;
     let isLike: boolean;
     if(user==='component'){
       id=that.properties.post.id;
       isLike=that.properties.isLike;
     }else{
       id=that.data.post.id;
       isLike=that.data.isLike
     }
     if (!isLike) {
       const res = await api.giveLike({
         id
       });
       instance.setData!({
         isLike: true,
         likeCount:instance.data.likeCount+1
       });
     } else {
       const res = await api.disLike({
         id
       });
       instance.setData!({
         isLike: false,
         likeCount:instance.data.likeCount-1
       });
     }
   }
  }

}
const base = new Base();
export default base
