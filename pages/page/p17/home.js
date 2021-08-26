Page({
  data: {
    page:0,
    types: "",
    status: "",
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  abcd: function () {
    var t = this;
    var url = 'https://sbmf.ww2ss.com/app/ewei_shopv2_api.php?i=1&r=zhuanlan.ask.get_list';
    wx.request({
      url: url,
      data: {
        page: t.data.page,
        types: t.data.types,
        status: t.data.status,
      },
      success(res) {
        console.log("问答列表", res)
        t.setData({
          list: res.data.list
        })
      }
    })
  },
  bb: function () {
    wx.navigateTo({
      url: '/pages/page/p17/home'
      ,
    })
  },
  // 删除
  delcon: function (e) {
    var t = this;
    var index = e.currentTarget.dataset.indexdel;  //获取自定义的内容下标值
    var list = this.data.list;                     //获取内容列表

    wx.showModal({
      title: '是否确定删除内容？',
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
  onShow: function () {
    this.abcd();
  }
})