Page({
  data: {
    modalHidden: true,
    goodsList:[],
    HotImgUrls: [
      {
        //头像地址,文字标题,文字内容,图片地址
        head:'https://img0.baidu.com/it/u=4198288367,794718080&fm=224&fmt=auto&gp=0.jpg',
        title:'特价：88元/盒',
        content: ' 恩施鹤峰冬桃硒地脆桃当季新鲜水果现摘现发',
        url: '../../image/dianchizu1.png',
        url1: '../../image/dianchizu2.png',

      }
    ],
    
  },


  buttonTap: function() {
    wx.showModal({
      title: 'Tips',
      content: '您确定要将此商品加入购物车吗',
      cancelText: '确定',
      confirmText: '取消',
      success: function(res) {
        if(res.cancel){
        //right
        wx.redirectTo({
          url: '../cart/index',
        })
        }else{
        //left
          wx.redirectTo({
            url: '../category/index',
          })
        }
    }
  })
}


})