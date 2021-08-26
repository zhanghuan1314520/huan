// pages/a1/p8/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    currentIndex: 0,
    startPlay: !0,
    bgColor: ["background: linear-gradient(360deg,rgba(178,126,81,1) 0%,rgba(205,163,109,1) 100%);", "background: linear-gradient(360deg,rgba(37,104,186,1) 0%,rgba(91,140,199,1) 100%);", "background: linear-gradient(360deg,rgba(168,34,28,1) 0%,rgba(211,40,32,1) 100%);"],
    textColor: ["#B27E51", "#3875BF", "#A8221C"],
    list:[
      {Title:'测试',
      Children:[
        {Title:"内容1",SubTitle:"测试"},
        {Title:"内容2",SubTitle:"测试"},
        {Title:"内容2",SubTitle:"测试"}
      ]
    },
      {Title:'测试2',
      Children:[
        {Title:"内容1",SubTitle:"测试"},
        {Title:"内容2",SubTitle:"测试"},
        {Title:"内容2",SubTitle:"测试"}
      ]
    },
      {Title:'测试3',
      Children:[
        {Title:"内容1",SubTitle:"测试"},
        {Title:"内容2",SubTitle:"测试"},
        {Title:"内容2",SubTitle:"测试"}
      ]
    }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleTapClick: function (t) {
    var a = this;
    this.setData({
      currentIndex: t.currentTarget.dataset.index,
      startPlay: !1
    }), clearTimeout(this.data.startPlayTimerId), this.data.startPlayTimerId = setTimeout(function () {
      a.setData({
        startPlay: !0
      });
    }, 100);
  },
  swipeChange: function (t) {
    this.setData({
      activeIndex: t.detail.current
    });
  },
  handleSecondCategorytap: function (a) {
    var e = a.currentTarget.dataset, r = e.id, i = void 0 === r ? "" : r, n = e.title, d = void 0 === n ? "" : n;
    t.navigatePage({
      url: "/pck_common/acticle_list/index?title=" + d + "&id=" + i
    });
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