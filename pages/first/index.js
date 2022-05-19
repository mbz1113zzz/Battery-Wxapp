// 0 引入 用来发送请求的 方法 一定要把路径补全

import { request } from "../../request/index.js";
Page({
  data: {
    // 轮播图数组
    swiperList: [],
    // 导航 数组
    catesList:[],
    // 楼层数据
    floorList:[],
    imgUrl:[],

    //第二部分数据数组
    contentImgUrls:[
      {
        id : '01' , 
        title:'动力电池销售',
        url:'../../image/xiaoshou.png'
      },{
        title:'寻找充电站',
        url:'../../image/map.png'
      },{
        title:'BMS电池管理系统',
        url:'../../image/guanli.png'
      },{
        title:'废旧电池回收',
        url:'../../image/xunhuan.png'
      }
    ],
    indicatorDots: true, //显示面板显示点
    autoplay: false,  //自动切换
    interval: 5000,  //切换时间
    duration: 1000  //动画时长
      
  },
  readDetail: function () {
    wx.navigateTo({
      url: "../index/index"
    })
  },
  bindParkingListItemTap1: function () {
    wx.navigateTo({
      url: "../detail/detail"
    })
  },
  bindParkingListItemTap2: function () {
    wx.navigateTo({
      url: "../detail/detail"
    })
  },
  bindParkingListItemTap3: function () {
    wx.navigateTo({
      url: "../detail/detail"
    })
  },

  // 页面开始加载 就会触发
  onLoad: function (options) {


    
  },

})
