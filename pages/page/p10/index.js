Page({

  /**
   * 页面的初始数据
   */
  data: {
    spendingNum:"666.66",//如果有后台改次属性的值就行
    spendingHideNum:"****",
    jepng:"https://i.loli.net/2021/08/22/uMH3izWj6NCcF8L.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
 //点击view块
 eyeChange: function(){
  this.setData({
    jepng:this.data.showView?"https://i.loli.net/2021/08/22/b5pYyBw82nckiQu.png":"https://i.loli.net/2021/08/22/uMH3izWj6NCcF8L.png",
    showView: !this.data.showView
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