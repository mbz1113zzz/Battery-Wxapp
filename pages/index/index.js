//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    markers: [{
      iconPath: "/images/park.png",
      id: 0,
      latitude: 30.51379,
      longitude: 114.343925,
      width: 40,
      height: 48,
    }, {
      iconPath: "/images/park.png",
      id: 1,
      latitude: 30.512921157204673,
      longitude: 114.3504266746521,
      width: 40,
      height: 48,
    }, {
      iconPath: "/images/park.png",
      id: 1,
      latitude: 30.52584208196216,
      longitude: 114.35483086185455,
      width: 40,
      height: 48,
    }, {
      iconPath: "/images/park.png",
      id: 1,
      latitude: 30.51379,
      longitude: 114.343934,
      width: 40,
      height: 48,
    }],
    polyline: [{
      points: [{
        longitude: 102.6569366455,
        latitude: 25.0821785206
      }, {
        longitude: 102.6569366455,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }]
    // controls: [{
    //   id: 1,
    //   iconPath: '/images/car.png',
    //   position: {
    //     left: app.globalData.windowWidth/2-32,
    //     top: app.globalData.windowHeight/2-84,
    //     width: 64,
    //     height: 64
    //   },
    //   clickable: true
    // }]
  },
  onLoad: function (e) {

  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  bindParkingListItemTap: function () {
    wx.navigateTo({
      url: "../detail/detail"
    })
  },
  openParkingMap: function () {
    wx.navigateTo({
      url: '../parkinglotMap/parkinglotMap',
      success: function (res) {
        // success
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  }
})
