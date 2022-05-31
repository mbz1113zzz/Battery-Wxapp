// pages/evaluate/index.js
import { values } from 'mobx-miniprogram';
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
var dayjs = require('../../miniprogram_npm/dayjs/index');
const cars = {
  小鹏: ['1', '2', '3', '4', '5'],
  特斯拉: ['1', '2', '3', '4', '5'],
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: '',
    date: '',
    currentDate:new Date().getTime(),
    minDate:new Date(2010,0,1).getTime(),
    maxDate:new Date().getTime(),
    distance: '',
    show1: false,
    show2: false,
    columns: [
      {
        values: Object.keys(cars),
        className:'column1',
      },
      {
        values: cars['小鹏'],
        className:'column2',
        defaultIndex: 2,
      }
    ],
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      }
      if (type === 'month') {
        return `${value}月`;
      }
      if (type === 'day') {
        return `${value}日`;
      }
      return value;
    },
  },

  show_dialog:function() {
    Dialog.alert({
      message: '我们将会根据您的车型、购买时间以及行驶里程评估电池的大致价格!',
    }).then(() => {
      // on close
    });
  },

  showPopup1() {
    this.setData({ show1: true });
  },

  showPopup2() {
    this.setData({ show2: true });
  },

  onClose1() {
    this.setData({ show1: false });
  },

  onClose2() {
    this.setData({ show2: false });
  },

  onChange1(event) {
    const {picker, value, index} = event.detail;
    picker.setColumnValues(1,cars[value[0]]);
  },

  onChange2(event) {
    const {picker, value, index} = event.detail;
    picker.setColumnValues(1,cars[value[0]]);
  },

  onChange3(event) {
    this.setData({
      distance: event.detail,
    })
  },

  onConfirm1(event) {
    this.setData({ show1: false });
    this.setData({
      type:event.detail.value.join(' '),
    })
  },

  onConfirm2(event) {
    this.setData({ show2: false });
    this.setData({
      date:dayjs(event.detail).format('YYYY-MM-DD'),
    })
  },
  
  onCancel1(event) {
    this.setData({ show1: false });
  },

  onCancel2(event) {
    this.setData({ show2: false });
  },

  toValue() {
    wx.navigateTo({
      url: '/pages/value/index?date='+this.data.date+'&distance='+this.data.distance,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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