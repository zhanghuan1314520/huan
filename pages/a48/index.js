Page({
  data: {
    list: [],
    cid: '',
    mediuarr: {},
  },
  onLoad: function (a) {
    this.getList();
  },

  onShow: function () {


  },
  getList: function () {
    var t = this;
    wx.request({
      url: 'https://sbmf.ww2ss.com/app/ewei_shopv2_api.php?i=1&r=noticeApi.get_webview',
      data: {
        cid: 67
      },
      success(res) {
        console.log(res)
        t.setData({
            list: res.data.list,
            mediuarr:res.data.mediuarr
          });
      }
    })
  },
  callBroker: function () {
    if (this.data.broker.mobile) {
      var t = this.data.broker.mobile,
        a = t.split(",");
      a[1] ? wx.showModal({
        title: "提示",
        content: "请在语音提示后拨分机号\r\n" + a[1].split("#")[0] + "﹟",
        success: function (t) {
          t.confirm && wx.makePhoneCall({
            phoneNumber: a[0]
          });
        }
      }) : wx.makePhoneCall({
        phoneNumber: t
      });
    }
  },
  handleGoDetail: function (t) {
    var a = t.currentTarget.dataset.userid;
    var b = t.currentTarget.dataset.adid;
    var c = t.currentTarget.dataset.houseid;
    // wx.navigateTo({
    //     url: '/house/guwen/gw-detail/index?userid=' + a + '&adid=' + b + '&houseid=' + c,
    // })
    wx.navigateTo({
      url: '/project/pages/chat/chat?userid=' + a + '&adid=' + b,
    })
  },
  sharePoster: function () {
    console.log(111)
    wx.navigateTo({
      url: "/project/pages/news/poster/poster?id=" + this.data.cid
    });
  },
  /**
  * 用户点击右上角分享
  */
  onShareAppMessage: function () {
    var st = this;

    var diytitle = st.data.list.title
    var t = null, at = null;
    return diytitle && (t = '/project/pages/share/share?id=' + st.data.cid, at = diytitle),
      e.onShareAppMessage(t, at);


  },
  onShareTimeline: function () {
    var st = this;
    var diytitle = st.data.list.title
    var t = null, at = null;
    return diytitle && (t = '/project/pages/share/share?id=' + st.data.cid, at = diytitle),
      e.onShareTimeline(t, at);
  },

});