// house/phb/index.js
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

    list:[
      {id:1,title:'杭州成交套数榜', tip:'30天内二手房成交套数数据'},
      {id:2,title:'杭州热点学区榜', tip:'30天内热点学区房数据'},
      {id:3,title:'杭州成交均价榜', tip:'30天内二手房成交均价数据'},
      {id:4,title:'杭州成交库存榜', tip:'30天内二手房成交库存数据'},
      {id:5,title:'杭州带看热度榜', tip:'30天内二手房带看成交数据'},
      {id:6,title:'杭州区域成交榜', tip:'30天内二手房区域数据'},
      {id:7,title:'杭州热点板块榜', tip:'30天内二手房热点板块数据'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t = this;
    t.setData({
      // 状态栏的高度
     statusBarHeight:wx.getSystemInfoSync()['statusBarHeight'] + 'px',
      // 胶囊的高度 也就是自定导航栏的高度
     navheight:wx.getMenuButtonBoundingClientRect()['height'] + 'px',
      // 状态栏加导航栏的高度 加上下的padding的高度 12
      pagetop:wx.getMenuButtonBoundingClientRect()['height'] + wx.getSystemInfoSync()['statusBarHeight'] + 12 + 'px',
   })
   console.log(this.data.statusBarHeight)
   console.log(this.data.navheight)
   console.log(this.data.pagetop)
  },
  back:function(){
    wx.navigateBack({
      delta: 1,
    })
  },
  tolist: function (e) {
    console.log("22222222", e)
    var s = e.currentTarget.dataset;
    var id = s.id
    var index = s.index
    wx.navigateTo({
      url:'/pages/page_5/p3/home?id=' + id +"&index=" + index
    })
  },
  onShow: function () {},
  onPageScroll(e) {//页面滚动就会触发
    this.setData({
      scrollTop:e.scrollTop
    })
  },
})