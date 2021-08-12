Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 状态栏
    statusBarHeight: 0,
    navheight: 0,
    pagetop: 0,
    scrollTop: 0,
    numop: 0,
    list: [
      { id: 1, title: '内容1', color:'#3f00ff' },
      { id: 2, title: '内容2', color:'#ffa500' },
      { id: 3, title: '内容3', color:'#ff2300' },
      { id: 4, title: '内容4', color:'#e91e63 ' },
      { id: 5, title: '内容5', color:'#2196f3' },
      { id: 6, title: '内容6', color:'#e91e63' },
      { id: 7, title: '内容7', color:'#9c27b0' },
      { id: 8, title: '内容8', color:'#9e9e9e' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (t) {
    var t = this;
    t.setData({
      // 状态栏的高度
      statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'] + 'px',
      // 胶囊的高度 也就是自定导航栏的高度
      navheight: wx.getMenuButtonBoundingClientRect()['height'] + 'px',
      // 状态栏加导航栏的高度 加上下的padding的高度 12
      pagetop: wx.getMenuButtonBoundingClientRect()['height'] + wx.getSystemInfoSync()['statusBarHeight'] + 12 + 'px',
    })
  },
  onShow: function () {

  },
  //返回
  back: function () {
    wx.navigateBack({
      delta: 1,
    })
  },
  onPageScroll(e) {//页面滚动就会触发
    this.setData({
      scrollTop: e.scrollTop
    })
  },
  aa: function (e) {
    console.log("22", e)
    var id = e.currentTarget.dataset.id;
    var title = e.currentTarget.dataset.title;
    var index = e.currentTarget.dataset.index;
    var color = e.currentTarget.dataset.color;
    wx.navigateTo({
      url: '/pages/a67/home?id=' + id + '&title=' + title + "&index=" + index+"&color="+color,
    })
  }
})