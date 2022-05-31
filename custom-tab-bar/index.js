// custom-tab-bar/index.js
import { action } from "mobx-miniprogram";
import { storeBindingsBehavior } from "mobx-miniprogram-bindings";
import { store } from "../store/store";
Component({
  options:{
    styleIsolation:'shared'
  },
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,
    fields: {
      sum: "sum",
      active: 'activeTabBarIndex'
    },
    actions: {
      updateActive: 'updateActiveTabBarIndex'
    },
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    "list": [
      {
        "pagePath": "/pages/first/index",
        "text": "首页",
        "iconPath": "/icons/home.png",
        "selectedIconPath": "/icons/home-1.png"
      },
      {
        "pagePath": "/pages/category/index",
        "text": "商城",
        "iconPath": "/icons/sale.png",
        "selectedIconPath": "/icons/sale-1.png"
      },
      {
        "pagePath": "/pages/evaluate/index",
        "text": "估价",
        "iconPath": "/icons/sale.png",
        "selectedIconPath": "/icons/sale-1.png"
      },
      {
        "pagePath": "/pages/show_data/index",
        "text": "数据",
        "iconPath": "/icons/sale.png",
        "selectedIconPath": "/icons/sale-1.png"
      },
      {
        "pagePath": "/pages/self/index",
        "text": "我的",
        "iconPath": "/icons/my.png",
        "selectedIconPath": "/icons/my-1.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      //this.setData({ active: event.detail })
      this.updateActive(event.detail)
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
    },
  }
})
