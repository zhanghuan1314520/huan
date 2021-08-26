// pages/a1/p/p1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsArray: [
      { 
        id:1,
        picture: 'https://cdn.lottery.okgoes.com/fps/2021/4/bb2a67cc9ac74700b1ea0a501c5c9ce4.jpg', 
        m1: "正在登记",
        m2: "06.18-06.20",
        name: "地铁万科彩虹天空之城测试测试测试测试测试测试测试测试从",
        minPrice: 51500,
        addr: "萧山区萧山南站",
        num:3,
        time:'2021.08.17',
        tabs:['地铁房','非无房可参与','学区规划']
        },
        { 
          id:2,
          picture: 'https://cdn.lottery.okgoes.com/fps/2021/4/0872d519683440f7aa03517d95785cd0.jpg', 
          m1: "正在登记",
          m2: "06.18-06.20",
          name: "地铁万科未来天空之城",
          minPrice: 66500,
          addr: "萧山区萧山南站",
          num:10,
          time:'2021.08.17',
          tabs:['地铁房','非无房可参与','学区规划']
          },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.list = this.selectComponent("#list");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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