// components/listing/listing.js
Component({
  /**
   * 组件的属性列表
   * addClass:添加类-只允许添加item-card 卡片样式
   * arrowBtn：是否显示右侧的三点按钮
   * showTopic：是否显示关联的话题
   * showIssue：是否显示发布文本
   */
  properties: {
    addClass:{
      type:String,
      value:''
    },
    arrowBtn:{
      type:Boolean,
      value:false
    },
    showTitle:{
      type:Boolean,
      value:false
    },
    showIssue:{
      type:Boolean,
      value:false
    },
    tId:{
      type:Number,
      value:0
    },
    cId: {
      type: Number,
      value: 0
    },
    clock:{
      type:Boolean,
      value:false
    },
    like:{
      type:Boolean,
      value:false
    },
    liked:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /*跳转页面 */
    bindRouter:function(event){
      console.log(event);
      console.log(this.properties.showIssue);

      // 
      // console.log(`即将发送的id=${id}`);
      if(this.properties.showIssue){
        let id=event.currentTarget.dataset.tid;
      wx.navigateTo({
        url:'../topic-detail/topic-detail?tid='+id,
        success:function(){
          wx.showToast({title:'话题详情'});
        }
      });
    }else{
      let cId=event.currentTarget.dataset.cid;
      let tId=event.currentTarget.dataset.tid;
      console.log(`cId的值：${cId}，tId的值：${tId}`);
      // console.log("评论的id："+id);
      wx.navigateTo({
        url:'../publisher/publisher?tid='+tId+'&cid='+cId,
        success:function(){
          wx.showToast({title:'发布者详情'});
        }
      });
    }
  }
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  }
})
