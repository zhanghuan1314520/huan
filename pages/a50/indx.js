// pages/a50/indx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectOpen: ["展开", "收起"],
    num: 0,
    shows: false,
    switchTitle:"关",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { },
  onReady: function () { },
  onShow: function () { },
  switchChange(e) {
    var currentTarget = e.currentTarget;
    var tab = currentTarget.dataset.index;
    if (tab == "0") {
      this.setData({
        num: 0,
      })
    } else {
      this.setData({
        num: 1,
      })
    }
  },
  switch1Change1: function (e) {
    this.setData({
      shows: e.detail.value
    });
  },
  switchClick: function (event) {
    var status = event.detail.value;    
    this.setData({
      switchTitle: (status ? "开" : "关"),
    });
  }
})