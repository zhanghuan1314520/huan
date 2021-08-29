// pages/page_22/p4/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFold: true
  },
  showAll: function (e) {
    this.setData({
     isFold: !this.data.isFold,
    })
   }
})