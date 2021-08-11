Page({
  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight:0,
    navheight:0,
    pagetop:0,
    scrollTop:0,
    numop:0,
    name:'文本标题'
  },
  onLoad: function (options) {
    this.setData({
      //  状态栏的高度
      statusBarHeight:wx.getSystemInfoSync()['statusBarHeight'] + 'px',
      //  胶囊的高度 也就是自定导航栏的高度
      navheight:wx.getMenuButtonBoundingClientRect()['height'] + 'px',
      //  状态栏加导航栏的高度 加上下的padding的高度 12
       pagetop:wx.getMenuButtonBoundingClientRect()['height'] + wx.getSystemInfoSync()['statusBarHeight'] + 12 + 'px',
    })
    console.log(this.data.statusBarHeight)
    console.log(this.data.navheight)
    console.log(this.data.pagetop)
  },
  onPageScroll(e) {//页面滚动就会触发
    this.setData({
      scrollTop:e.scrollTop
    })
  },
  to:function(){
    wx.navigateBack({
      delta: 1,
    })
  },
  onShow:function(){
    wx.setNavigationBarTitle({
      title: this.data.name
    })
  }
})
