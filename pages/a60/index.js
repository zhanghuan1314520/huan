
Page({
  data: {
    active: 0,
    list: [],
    nav: [],
    page: 1,
    notice_type: ''
  },
  onLoad: function (e) {
    var t = this;
    t.get_list();
  },
  get_list: function () {
    var t = this;
    var url = 'https://sbmf.ww2ss.com/app/ewei_shopv2_api.php?i=1&r=noticeApi.get_list'
    wx.request({
      url: url,
      data: {
        page: t.data.page,
        notice_type: t.data.notice_type
      },
      success(res) {
        console.log(res.data)
        t.setData({
          list: res.data.list,
          nav: res.data.notice_type
        })
      }
    })
  },
  // 点击切换选中
  changeNav(e) {
    console.log("e", e)
    let notice_type = e.currentTarget.dataset.id;
    console.log(notice_type)
    let index = e.currentTarget.dataset.index;
    this.setData({
        active: index,
        page:1,
        notice_type: notice_type,
        list:[]
    })
    this.get_list();
},
});