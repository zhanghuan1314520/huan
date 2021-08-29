// pages/page_22/p1/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showIndex:0
  },
  panel: function (e) {
    if (e.currentTarget.dataset.index != this.data.showIndex) {
      this.setData({
        showIndex: e.currentTarget.dataset.index
      })
    } else {
      this.setData({
        showIndex: 0
      })
    }
  }
})