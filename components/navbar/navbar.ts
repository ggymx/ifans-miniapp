import { IMyApp } from './../../app';
const app: IMyApp = getApp();
/*待初始化的缓存和草稿 */
let topicCache:any
let draft:any
Component({
    properties: {
        text: {
            type: String,
            value: 'Wechat'
        },
        back: {
            type: Boolean,
            value: false
        },
        home: {
            type: Boolean,
            value: false
        },
        gear: {
            type: Boolean,
            value: false
        }
    },
    attached() {
      const pages = getCurrentPages().map(p=>p.route)
      this.setData({
        canBack: pages.length > 1,
        needHome: pages.length === 1 && pages[0] !== 'pages/index/index'
      })
    },
    data: {
        statusBarHeight: app.statusBarHeight + 'px',
        navigationBarHeight: (app.statusBarHeight + 44) + 'px'
    },
    methods: {
        backHome() {
            wx.redirectTo({
              url: '/pages/index/index',
            });
        },
        back() {
           topicCache=wx.getStorageSync('topic');
           draft=wx.getStorageSync('draft');
           //回退时，如果缓存有话题和草稿，则清除
           if(topicCache) wx.removeStorageSync('topic')
           if(draft) wx.removeStorageSync('draft')
          /*
          const pages = getCurrentPages().map(p => p.route)
          const currentPage = pages[pages.length - 1]
          let delta = 1
          if (currentPage === 'pages/publisher/publisher' || currentPage === 'pages/topic-detail/topic-detail') {
            for (delta = 1; delta < pages.length; delta++) {
              let targetPage = pages[pages.length - delta - 1]
              console.log('delta', delta, targetPage)
              if (targetPage !== 'pages/publisher/publisher' && targetPage !== 'pages/topic-detail/topic-detail') {
                // 后退停在最初进入的那个 话题或投稿 页面。至少后退一页
                if(delta > 1) {
                  delta--
                }
                break
              }
            }
          }
          console.log('backDelta', delta)
          */
            wx.navigateBack({
                delta: 1
            });
        },
        backGear() {
            wx.showActionSheet({
                itemList: ['我的首页'],
                success(res) {
                    switch (res.tapIndex) {
                        case 0:
                        let token = wx.getStorageSync('token');
                        if(token){
                            //获取用户Id
                            let userId=wx.getStorageSync('userId');
                            setTimeout(()=>{
                                wx.navigateTo({
                                    url: '../my/my?userId='+userId,
                                    success() {
                                       
                                    }
                                });
                            },500)
                            
                        }else{
                            wx.showToast({title:'请先登录！'});
                            setTimeout(()=>{
                                wx.navigateTo({
                                    url:'../login/login'
                                });
                            },500)
                        }
                            break;

                    }
                },
                fail(res) {
                    console.log(res.errMsg);
                }
            });
        }
    }
});
