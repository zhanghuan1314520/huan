// pages/a43/index.js

const time = require("../../utils/time.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    aa: "",
    Y: '',
    M: '',
    D: '',
    hour: '',
    minute: '',
    second: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年份  
    var Y = date.getFullYear();
    //获取月份  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    //获取小时
    var hour = date.getHours()
    //获取分钟
    var minute = date.getMinutes()
    //获取秒
    var second = date.getSeconds()

    console.log("当前时间：" + Y + '年' + M + '月' + D + '日' + hour + '时' + minute + '分' + second + '秒');
    this.setData({
      aa: Y + '年' + M + '月' + D + '日' + hour + '时' + minute + '分' + second + '秒',
      Y: Y,
      M: M,
      D: D,
      hour: hour,
      minute: minute,
      second: second
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  // 单条
  bb: function () {
    var t = this;
    wx.request({
      url: 'https://api.yaohaodashi.com/v1.0/propertiesForSale/104',
      success(res) {
        //   console.log(res.data)
        //  t.setData({
        //   newsList:res.data.data.newsList
        //  })
        var currenttime = res.data.data.newsList[0].publishTime;
        console.log("currenttime",currenttime)
        t.setData({
          newsList: time.formatTime(currenttime, 'Y.M.D h:m:s'),

        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})