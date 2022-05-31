// pages/reclaim/index.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
import { areaList } from '../../miniprogram_npm/@vant/area-data/index';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    areaList,
    detailAddress:'',
    currentAddress:'',
    price:3000,
    show: false,
    show1: false,
    show2: false,
    show3: false,
    pcd: '',
    pcd_arr: [],
    radio:'1',
    radio1:'0',
  },

  onSubmit(){
    wx.navigateTo({
      url: '/pages/reclaim_success/index',
    })
  },

  onConfirm1(){
    this.setData({
      show1:false,
      currentAddress:this.data.pcd_arr[this.data.radio1],
    })
    
  },

  onCancel1(){
    this.setData({
      show1:false,
    })
  },

  push_arr(arr,element) {
    arr.push(element);
    return arr;
  },

  onConfirm2(){
    this.setData({
      show2:false,
      // pcd_arr:this.data.pcd_arr.push(this.data.pcd+' '+this.data.detailAddress),
      pcd_arr:this.push_arr(this.data.pcd_arr,this.data.pcd+' '+this.data.detailAddress),
    })
  },

  onCancel2(){
    this.setData({
      show2:false,
    })
  },

  onConfirm3(event){
    this.setData({
      show3: false,
      pcd:[event.detail.values[0].name,event.detail.values[1].name,event.detail.values[2].name].join(' '),
    })
  },

  onCancel3(){
    this.setData({
      show3:false,
    })
  },

  showRegion(){
    this.setData({
      show3: true,
    })
  },

  OnDetail(event){
    this.setData({
      detailAddress:event.detail,
    })
  },
  onAddAddress(){
    this.setData({
      show2: true,
    })
  },

  onAddress() {
    this.setData({
      show1: true,
    })
  },

  onChange(event) {
    this.setData({
      radio: event.detail,
    });
  },
  
  onChangeAdd(event) {
    this.setData({
      radio1: event.detail,
    })
    console.log(event);
    console.log(this.data.radio1);
  },

  onClick(event) {
    const { name } = event.currentTarget.dataset;
    this.setData({
      radio: name,
    });
  },
  
  showPopup() {
    this.setData({
      show:true,
    })
  },

  onClose() {
    this.setData({
      show:false,
    })
  },

  onButton1() {
    this.onClose();
    Dialog.alert({
      context: this,
      title: '价格明细',
      message: '1：xxxx',
    }).then(() => {
      // on close
    });
  },

  onButton2() {
    wx.navigateTo({
      url: '/pages/value/index',
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