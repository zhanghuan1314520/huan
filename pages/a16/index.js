Page({

  /**
   * 页面的初始数据
   */
  data: {
    // navTab: ['高级版', '豪华版', '专业版'],
    navTab:[
      {name:"高级版",bg:"#366AB3"},
      {name:"豪华版",bg:"#FF5A68"},
      {name:"专业版",bg:"#FFB047"}
    ],
    currentTab: 0,
    name:"高级版",
    bg:'#366AB3',
    list:[
      {title:"楼盘历史成交明细（全部）"},
      {title:"楼盘热度指数（月报，周报）"},
      {title:"楼盘成交报告（月报，周报）"},
      {title:"全城热度指数（月报，周报）"},
      {title:"全城成交指数（月报，周报）"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  currentTab: function (e) {
    console.log("eeeeee",e)
    var name = e.currentTarget.dataset.name;
    var bg = e.currentTarget.dataset.bg;
    this.setData({
      currentTab: e.currentTarget.dataset.idx,
      name:name,
      bg:bg
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