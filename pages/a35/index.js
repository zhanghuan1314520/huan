// pages/a35/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultType: true,
    passwordType: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
//defaultType：眼睛状态   passwordType：密码可见与否状态
eyeStatus: function(){
  this.data.defaultType= !this.data.defaultType
  this.data.passwordType= !this.data.passwordType
  this.setData({
    defaultType: this.data.defaultType,
    passwordType: this.data.passwordType
})

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