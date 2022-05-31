// pages/value/index.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    config: {
      canvasSize: {
        width: 400,
        height: 400
      },
      percent: 100,
      barStyle: [{width: 20, fillStyle: '#f0f0f0'}, {width: 20,  fillStyle: [{position: 0, color: '#56B37F'}, {position: 1, color: '#c0e674'}]}],
      needDot: true,
      dotStyle: [{r: 20, fillStyle: '#ffffff', shadow: 'rgba(0,0,0,.15)'}, {r: 10, fillStyle: '#56B37F'}]
    },
    percentage: 90,
    query:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    Toast.loading({
      message:'加载中...',
      forbidClick: true,
    })

    this.setData({
      query:options
    });

  },

  onButton1() {
    wx.navigateTo({
      url: '/pages/reclaim/index',
    })
  },

  onButton2() {
    wx.switchTab({
      url: '/pages/first/index',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})