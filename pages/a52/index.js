const time = require("../../utils/time.js");
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
        var newsList = res.data.data.newsList
          for (var i = 0; i < newsList.length; i++) {//用for循环把所有的时间戳转换成时间格式
            newsList[i]["publishTime"] = time.formatTime(newsList[i]["publishTime"], 'Y-M-D h:m:s')
          }
           t.setData({
          newsList: res.data.data.newsList
        })
      }
    })
  }
})