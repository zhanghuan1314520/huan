// pages/a1/page11.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.getdata();
  },

  getdata: function () {
    var arr = [
      { id: 1, name: '测试1' },
      { id: 2, name: '测试2' },
      { id: 3, name: '测试3' },
      { id: 4, name: '测试4' }
    ];
    this.setData({
      list: arr
    })
  },

  delcon: function (e) {
    var t = this;
    var index = e.currentTarget.dataset.indexdel;  //获取自定义的内容下标值
    var name =  e.currentTarget.dataset.name
    var list = this.data.list;                     //获取内容列表

    wx.showModal({
      title: '温馨提示',
      content: '确定删除' + name+'吗？',
      success: function (res) {
        if (res.confirm) {                  //点击确定后
          list.splice(index, 1);       //截取指定的内容
          t.setData({               //重新渲染列表
            list: list
          })
        }
      }
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