Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.get_list();
  },
  get_list: function () {
    var t = this;
    var url = 'https://sbmf.ww2ss.com/app/ewei_shopv2_api.php?i=1&r=reports.get_prolist2021'
    wx.request({
      url: url,
      data: {
        page: 1,
        pcount: 15
      },
      success(res) {
        console.log("res", res)
        t.setData({
          datalist: res.data.datalist
        })
      }
    })
  },
  Reports_sort: function (dt) {//排序
    var t = this;
    var arr = dt.currentTarget.dataset.arr;
    var datalist = t.data.datalist;
    datalist = datalist.sort(t.sort_compare(arr));
    t.setData({
      datalist: datalist,
    })
    var datalist = t.data.datalist;
    datalist = datalist.sort(t.sort_compare(arr));
    t.setData({
      datalist: datalist,
    })
  },
  sort_compare: function (arg) {//排序
    return function (a, b) {
      return b[arg] - a[arg];
    }
  }
})