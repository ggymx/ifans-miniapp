//index.js
//获取应用实例
import { IMyApp } from '../../app'


const app = getApp<IMyApp>()
let id:number
Page({
  data: {
    topic: {},
    comment:{},
    sharCard:false
  },
  bindViewParti(event:any){
    var tid=event.currentTarget.dataset.tid;
    wx.navigateTo({
      url:'../participate/participate?tid='+tid,
      success:function(){
        wx.showToast({
          title:'发布话题'
        });
      }
    });
  },

  /*options:获取url参数 */
  onLoad(options:any) {
  
    // let id=options.tid;
    id=options.tid;
        //获取场景值，根据场景值切换导航栏的状态
        let launchPara=wx.getLaunchOptionsSync();
  
        if(launchPara.scene==1007){
          this.setData!({
            sharCard:true
          });
        }

    var that=this;
    wx.request({
      url:'https://api-test.ifans.pub/v1/post/detail',
      method:'GET',
      data:{
        id:id
      },
      success(res){
        //设置数据
        that.setData!({
          topic:res.data
        }); 
        wx.request(
          {
            url:'https://api-test.ifans.pub/v1/post/list',
    
            method:'GET',
    
            data:{
              id:id
            },
            success(res){
              //设置数据
              that.setData!({
                // topic:res.data
                comment:res.data
              });
            },  
            fail(err){
              console.log("打印错误信息");
              console.log(err.errMsg);
            }
          }
        )   

      },  
      fail(){

      }
    });

  },

  /*转发分享监听事件 */
  onShareAppMessage(res:any){
    var that=this
    console.log("激活转发事件：",res)
      return{
        title:`#${this.data.topic.post.title}#`,
        imageUrl:'../../imgs/topicShare.png',
        success(e:any){
        wx.showShareMenu({
          withShareTicket:true
        })
        },
        fail(){

        }
      }
  }
})
