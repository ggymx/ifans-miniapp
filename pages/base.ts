//公共代码封装
import api from '../common/api';
import { isPostPage, smartGotoPage, wxPromise } from '../common/helper';

class Base {

  async handlePopDelete(id: number,url: string,target: string) {
    let modalRes = await wxPromise<wx.ShowModalSuccessCallbackResult>(wx.showModal,{
      title: '删除',
      content: '确定删除？'
    })

    if (modalRes.confirm) {
      let data: object;
      if(target==='post'){
          data={postId:id}
      }else if(target==='comment'){
          data={id}
      }
      try{
        let res  = await api.httpPost(url, data);
        wx.showToast({
          title: '删除成功',
          success() {
            // wx.navigateBack({
            //   delta: 1
            // })
          }
        });
        return {id,msg:'del-success'}
      } catch(e){
        wx.showToast({ title: '删除失败' });
        return {id,msg:'del-fail'}
      }
    }
  }

  handlePopReport(id: number,url: string,target: string,todo?: string,) {
    wx.showModal({
      title: '举报',
      content: '确定举报？',
      success(res) {
        if (res.confirm) {
          let data: object;
          if(target==='post'){
            data={postId:id}
         }else if(target==='comment'){
            data={id}
         }
          api.request({
            url,
            data,
            method: 'POST',
            success(res) {
              const data = res.data as any;
              data.msg === 'ok'
                ? wx.showToast({ title: '举报成功' })
                : '';
              // {id,msg:'report-success'}
            }
          });
        }
      }
    });
  }

  /**
   * 屏蔽举报的弹出框
   * @param id:(number) 要操作的对象的id
   * @param url(string) 相关的api
   * @param target:(string) 操作对象（post：话题/投稿，comment：投稿）
   * @param todo:(string) 操作类型（可选）：删除（delete）默认举报
   * 
   */
  async messageBox(id: number,url: string,target: string,todo?: string,): Promise<any> {
    let message: any;
    let that = this;
    const token = wx.getStorageSync('token');
    if (token) {
      if (todo==='delete') {
        let res = await wxPromise<wx.ShowActionSheetSuccessCallbackResult>(wx.showActionSheet, {itemList: ['删除']})
        if(res.tapIndex == 0) {
          return await that.handlePopDelete(id, url, target)
        }
      } else {
        let res = await wxPromise<wx.ShowActionSheetSuccessCallbackResult>(wx.showActionSheet, {
          itemList: ['举报']
        })
        if(res.tapIndex==0){
          return await that.handlePopReport(id, url, target, todo)
        }
      }
    } else {
      smartGotoPage({
        url: '/pages/login'
      });
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
  public async giveLike(instance: Page.PageInstance, user: string = 'page') {
    //获取token
    const token = wx.getStorageSync('token');
    if (!token) {
      const pages = getCurrentPages();
      const curPage = pages[pages.length - 1];
      wx.showToast({ title: '请先登录！' });
      setTimeout(() => {
        this.link('login');
      }, 100);
    } else {
      let id: number;
      const that = instance as any;
      let isLike: boolean;
      if (user === 'component') {
        id = that.properties.post.id;
        isLike = that.properties.isLike;
      } else {
        id = that.data.post.id;
        isLike = that.data.isLike
      }
      if (!isLike) {
        const res = await api.giveLike({
          id
        });
        instance.setData!({
          isLike: true,
          likeCount: instance.data.likeCount + 1
        });
      } else {
        const res = await api.disLike({
          id
        });
        instance.setData!({
          isLike: false,
          likeCount: instance.data.likeCount - 1
        });
      }
    }
  }
  /**
   * 跳转到目标页面
   * @param target 要跳转的目标页面(string)
   *  @type 取值topic（话题详情）post（文章详情）
   *        user(用户空间) login(登录)
   *        cTopic(创建话题)  cPost(创建投稿)
   *        footPrint(足迹)  news(消息通知)
   *        index(首页)    oldIndex(话题社区)
   *        notFound（404未发现页面）
   * @param id 传入相应接口的主键id（可选参数）
   * @param topic 发布投稿时需要携带的topic（json串）
   */
  public link(target: string, id?: number,topic?: string): void {
    //目标页是空间页
    if (target === 'user') {
      //获取当前页面
      const pages = getCurrentPages();
      //数组中第一个元素为首页，最后一个元素为当前页面。
      const curPage = pages[pages.length - 1];
      // 判断跳转页面和当前页面一致
      if (curPage.route === 'pages/user/detail') {
        return;
      }
      smartGotoPage({
        url: `/pages/user/detail?userId=${id}`
      });
      return;
    }
    //话题详情
    if (target === 'topic') {
      smartGotoPage({
        url: `/pages/post/topic-detail?id=${id}`
      })
      return;
    }
    //文章详情
    if (target === 'post') {
      smartGotoPage({
        url: `/pages/post/detail?id=${id}`
      });
      return;
    }
    if (target === 'login') {
      smartGotoPage({
        url: '/pages/login'
      });
      return;
    }
    if (target === 'footPrint') {
      smartGotoPage({
        url: `/pages/user/foot-print?userId=${id}`
      });
      return;
    }
    if (target === 'news') {
      smartGotoPage({
        url: '/pages/user/news'
      });
    }
    //创建话题
    if(target==='cTopic'){
      smartGotoPage({
        url:'/pages/post/create'
      })
      return;
    }
    //创建投稿
    if(target==='cPost'){
      smartGotoPage({
        url: `/pages/post/create?topic=${topic}`
     });
     return;
    }
    if(target==='index'){
      smartGotoPage({
        url:'/pages/index'
      });
      return;
    }
    if(target==='oldIndex'){
      smartGotoPage({
        url:'/pages/oldindex'
      })
    }
  }
  /**
   * 分页方法
   * @param target 要获取的数据列表的简称
   * @type post（话题列表-包含投稿）footPrint（足迹列表）
   *       news（消息列表）
   * @param cursor 传入的分页指针
   */
  public async pagingLoad(target: string, cursor: number=0): Promise<object> {
    let list: object = null;
     //cursor不等于0说明是加载更多
    if (cursor !== 0) {
      wx.showLoading({
        title: '加载更多'
      });
      setTimeout(() => {
        wx.hideLoading({});
      }, 500);
    }
    //获取话题列表
    if(target==='post'){
      list = await api.getHomeTopicList({ cursor, limit: 10 });
      console.log('话题列表的list',list);
    }else if(target==='footPrint'){
      list =await api.getFootPrint({cursor,limit:10});
      console.log('足迹列表的list',list);
    }else if(target==='news'){
      // console.log('传入消息列表的cursor',cursor);
      // list =await api.getUserNotice({cursor,limit:10});
      // console.log('消息列表的list',list);
    }
    if ((list as any).posts.length === 0) {
      wx.showToast({
        icon: 'none',
        title: '已经到底了。。。'
      });
      setTimeout(() => {
        wx.hideToast({});
      }, 400);
    }
    return new Promise((resolve) => { resolve(list) });
}
}
const base = new Base();
export default base
