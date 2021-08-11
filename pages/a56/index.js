// pages/a56/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isTiptrue: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let firstOpen = wx.getStorageSync("loadOpen")
    console.log("是否首次打开本页面==",firstOpen)
    if (firstOpen == undefined || firstOpen == '') { //根据缓存周期决定是否显示新手引导
      this.setData({
        isTiptrue: true,
      })
    } else {
      this.setData({
        isTiptrue: false,
      })
    }
  },
  closeThis(e){
    wx.setStorage({
      key: 'loadOpen',
      data: 'OpenTwo'
    })
    this.setData({
      isTiptrue:false
    })
  }
})