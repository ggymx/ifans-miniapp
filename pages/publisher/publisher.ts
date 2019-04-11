//index.js
//获取应用实例
import { IMyApp } from '../../app'

const app = getApp<IMyApp>()

Page({
  data: {
    topic:null,
    comment: null,
    sharCard:false
  },
  bindViewParti(event:any){
    var tid=event.currentTarget.dataset.tid;
    wx.navigateTo({
      url:'../participate/participate?tid='+tid,
      success:function(){
        // wx.showToast({
        //   title:'发布话题'
        // });
      }
    });
  },
  bindViewTopic(event:any){
    var tid=event.currentTarget.dataset.tid;
    wx.navigateTo({
      url:`../topic-detail/topic-detail?tid=${tid}`,
      success(){

      }
    });
  },
  /*options:获取url参数 */
  onLoad(options:any) {

      //获取场景值，根据场景值切换导航栏的状态
      let launchPara=wx.getLaunchOptionsSync();
      if(launchPara.scene==1007){
        this.setData!({
          sharCard:true
        });
      }

    let tId=options.tid;
    let cId=options.cid;
    console.log("接收到的话题id："+tId);
    console.log("接受到的投稿id："+cId);
    var that=this;
    //获取话题详情
    wx.request({

      url:'https://api-test.ifans.pub/v1/post/detail',

      method:'GET',

      data:{
        id:tId
      },

      success(res){
        console.log("接受到的话题详情-------------------：")
        console.log(res.data);
        //设置数据
        that.setData!({
          topic:res.data
        }); 

      },  
      fail(){

      }
    });

    //获取投稿详情
    wx.request({

      url:'https://api-test.ifans.pub/v1/post/detail',

      method:'GET',

      data:{
        id:cId
      },

      success(res){
        console.log("接受到的投稿详情-------------------：")
        console.log(res.data);
        //设置数据
        that.setData!({
          comment:res.data
        }); 

      },  
      fail(){

      }
    });

  },

  /*转发分享监听事件 */
  onShareAppMessage(res:any){
    // var that=this;
    let text=this.data.comment!.post.text;
     if(this.data.comment!.post.text.length>10){
      text=this.data.comment!.post.text.substring(0,10)+"..."
     }
      return{
        title:`#${this.data.topic.post.title}#${text}`,
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
