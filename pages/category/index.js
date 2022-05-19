import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({
  data: {
    // 左侧的菜单数据
    leftMenuList: [
      {title:'电池模块' 
    },{title:'电池模块组'
    },
],
    // 右侧的商品数据
    rightContent: [1],
    rightContent1: [   
    {title:'高等数学'
    },{title:'大学物理'
    }
],
    // 被点击的左侧的菜单
    currentIndex: 0,
    // 右侧内容的滚动条距离顶部的距离
    scrollTop: 0,
    contentImgUrls1:[
      {cat_id: 0,
      children:[
      {
          id:"101",
          title:'圣珍冬桃',
          url:'http://www.cpab.net.cn/upload/image/20180818/15345725568233091.jpg'
        }
      ]
      },
      {cat_id: 1,
      children1:[
      {
          title:'黄金梨',
          biaoqian:'苹果>=300g',
          miaoshu:'香脆多汁',
          biaoqian1:'¥88/盒',
          yishou:'已售;2124',
          url:'https://7368-shuyun-1gakxoqv724ef569-1308078039.tcb.qcloud.la/enshishengz/imagegai/Frame%203.png?sign=6f2964d7eea554da187c058ba0c63537&t=1645544440'
        },   {
          title:'金果梨',
          biaoqian:'苹果>=300g',
          miaoshu:'颗颗筛选',
          biaoqian1:'¥148/盒',
          yishou:'已售：799',
          url:'https://7368-shuyun-1gakxoqv724ef569-1308078039.tcb.qcloud.la/enshishengz/imagegai/Frame%204.png?sign=fb540c92c0d056e4f4cf95b75cdac88f&t=1645544475'
        },   {
          title:'圣珍香梨',
          biaoqian:'苹果>=200g',
          miaoshu:'清甜多汁',
          biaoqian1:'¥148/盒',
          yishou:'已售：1011',
          url:'https://7368-shuyun-1gakxoqv724ef569-1308078039.tcb.qcloud.la/enshishengz/imagegai/Frame%205.png?sign=62638a573f7bd15234b988f2c2fd83ed&t=1645544489'
        },   {
          title:'有机梨',
          biaoqian:'苹果>=300g',
          miaoshu:'天然含硒',
          biaoqian1:'¥148/盒',
          yishou:'已售：579',
          url:'https://7368-shuyun-1gakxoqv724ef569-1308078039.tcb.qcloud.la/enshishengz/imagegai/Frame%206.png?sign=ec2f4768aad80f6a4d5ce1cf79b3f48b&t=1645544506F'
        }
       ]
      }
      ]
  },
  // 接口的返回数据
  Cates: [1,2],

  onLoad: function (options) {


  },

  handleItemTap(e) {

    const { index } = e.currentTarget.dataset;
    let rightContent = this.Cates[index].children;
    this.setData({
      currentIndex: index,
      rightContent,
      
      // 重新设置 右侧内容的scroll-view标签的距离顶部的距离
      scrollTop: 0
    })

  }
})