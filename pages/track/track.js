// pages/track/track.js
import api from '../../common/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    topic: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.getTrackTopicList({ id: 1 }).then((data) => {
      console.log(data)
      this.setData({
        loading: false,
        data: data,
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    api.getTrackTopicList({ id: 1 }).then((data) => {
      console.log(data)
      this.setData({
        data: data,
      })
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})