Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.bb();
  },
  bb: function () {
    var t = this;
    wx.request({
      url: 'https://api.yaohaodashi.com/v1.0/propertiesForSale/104',
      success(res) {
        console.log(res.data)
        t.setData({
          newsList: res.data.data.newsList
        })
      }
    })
  }
})