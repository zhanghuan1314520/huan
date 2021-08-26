Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab: [
      { name: "尊享豪华版", bg: "#366AB3", limit: "预测", describe: "专注数据分析，趋势走向", titles: "尊享豪华版服务" },
      { name: "尊享年卡", bg: "#366A66", limit: "动态", describe: "专注数据分析", titles: "尊享年卡服务" },
      { name: "尊享月卡", bg: "#366A44", limit: "查看全部", describe: "了解部分数据报告", titles: "尊享月卡服务" },
    ],
    list: [
      { title: "楼盘历史成交明细（全部）", names: "" },
      { title: "楼盘热度指数", names: "月报/年报" },
      { title: "楼盘成交报告", names: "月报/年报" },
      { title: "全城热度指数", names: "月报/年报" },
      { title: "全城成交指数", names: "月报/年报" },
      { title: "杭州小区信心霸王榜-月报", names: "月报" },
      { title: "杭州小区热搜上升榜-月报", names: "月报" },
      { title: "杭州小区即卖即买榜-月报", names: "月报"},
      { title: "杭州新盘楼市分析报告", names: "月报" },
      { title: "杭州二手房楼市报告[筛选功能]", names: "上月/本月/自定义" },
      { title: "房东个人房源置顶15天", names: "置顶15天" },
      { title: "两个单盘市场调研报告", names: "2个" },
      { title: "两个板块市场调研报告", names: "2个" },
      { title: "一年两次一对一买房咨询", names: "2次" },
      { title: "一年两次线下报告会", names: "2次" },
      { title: "楼盘热度指数", names: "月报/周报" },
      { title: "楼盘成交报告", names: '月报/周报' },
      { title: "全城热度指数", names: "月报/周报" },
      { title: "全城成交指数", names: "月报/周报" }
    ],
    list1: [
      { title: "楼盘历史成交明细（全部）", names: "" },
      { title: "楼盘热度指数", names: "月报/周报" },
      { title: "楼盘成交报告", names: '月报/周报' },
      { title: "全城热度指数", names: "月报/周报" },
      { title: "全城成交指数", names: "月报/周报" },
      { title: "杭州小区信心霸王榜-月报", names: "月报" },
      { title: "杭州小区热搜上升榜-月报", names: "月报" },
      { title: "杭州小区即卖即买榜-月报", names: "月报" },
      { title: "杭州二手房楼市报告[筛选功能]", names: "近180天" },
      { title: "房东个人房源置顶15天", names: "置顶15天" },
      { title: "两个单盘市场调研报告", names: "2个" },
      { title: "两个板块市场调研报告", names: "2个" },
      { title: "一年两次一对一买房咨询", names: "2次" },
      { title: "一年两次线下报告会", names: "2次" }
    ],
    currentTab: 0,
    name: "尊享豪华版",
    titles: "尊享豪华版服务",
    bg: '#366AB3',
    limit: "预测",
    describe: "专注数据分析，趋势走向",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  currentTab: function (e) {
    console.log("eeeeee", e)
    var name = e.currentTarget.dataset.name;
    var bg = e.currentTarget.dataset.bg;
    var limit = e.currentTarget.dataset.limit;
    var describe = e.currentTarget.dataset.describe;
    var titles = e.currentTarget.dataset.titles;
    this.setData({
      currentTab: e.currentTarget.dataset.idx,
      name: name,
      bg: bg,
      limit: limit,
      describe: describe,
      titles: titles
    })
  },
  home: function () {
    wx.navigateBack({
      delta: 1,
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