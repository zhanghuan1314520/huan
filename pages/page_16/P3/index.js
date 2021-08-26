// pages/a1/p11/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.getlist();
  },
  getlist: function () {
    var t = this;
    var items = [
      { time: '2021.08.31', name: '王娜娜', title: '未来科技城', image: 'http://www.tmsf.com/upload/newhouse/propertyinfo/mainlogo/20210701/1625129726505425_300x225.jpg' },
      { time: '2021.08.31', name: '王娜娜', title: '未来科技城', image: 'http://www.tmsf.com/upload/newhouse/propertyinfo/mainlogo/20210701/1625129726505425_300x225.jpg' },
      { time: '2021.08.31', name: '王娜娜', title: '未来科技城', image: 'http://www.tmsf.com/upload/newhouse/propertyinfo/mainlogo/20210701/1625129726505425_300x225.jpg' },
      { time: '2021.08.31', name: '王娜娜', title: '未来科技城', image: 'http://www.tmsf.com/upload/newhouse/propertyinfo/mainlogo/20210701/1625129726505425_300x225.jpg' }
    ]
    t.setData({
      items: items
    })
  },
})