// newhouse/page/common/area.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idx: '',
    tab: [true, true, true, true],
    titleData: ["区域", "价格", "面积", "开发商"],
    active: 0,
    p_active: 0,
    actives: 0,
    p_actives: 0,
    activess: 0,
    area: [{ name: '不限' }],
    region: [
      { name: "萧山区" }
    ],
    regionData: [
      { name: "不限" }
    ],
    price: [
      { name: "单价" }
    ],
    ids: [],
    unitPrice: [],
    totalPrice: [],
    regionPrice: [],
    // size: [{
    //   name: "50㎡以下",
    //   id: 1,
    //   checked: !1
    // }, {
    //   name: "50㎡以下",
    //   id: 2,
    //   checked: !1
    // }, {
    //   name: "50㎡以下",
    //   id: 3,
    //   checked: !1
    // }, {
    //   name: "50㎡以下",
    //   id: 4,
    //   checked: !1
    // }],
    size: [],
    developer: [],


    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */


  aa: function () {

    var e = this;

    wx.request({
      url: 'https://api.yaohaodashi.com/v1.0/propertiesForSale/list',
      method: 'POST',
      data: {
        areaId: "",
        developerId: 2,//动态渲染
        hourseAreaId: 0,
        keyword: "",
        matchId: 0,
        page: 1,
        pagesize: 10,
        priceRangeId: "",
        tabName: "",
      },
      success(res) {
        console.log("列表数据", res)
        e.setData({
          list: res.data.data
        })
      }
    })
  },



  onLoad: function (options) {
    console.log("this.data", this.data)
    this.querySelectData();
    this.aa();

  },
  price: function () {
    var e = [{
      id: "1",
      name: "单价",
      children: this.unitPrice
    }];
    return e;
  },
  querySelectData: function () {
    // var e = this;
    // wx.request("https://api.yaohaodashi.com/v1.0/area/select/0", {}).then(function (i) {
    //   e.area = i.data[0].children;
    // }),wx.request("https://api.yaohaodashi.com/v1.0//condition/select/2").then(function (i) {
    //   e.unitPrice = i.data;
    // }), wx.request("https://api.yaohaodashi.com/v1.0//condition/select/1").then(function (i) {
    //   e.totalPrice = i.data;
    // }), wx.request("https://api.yaohaodashi.com/v1.0//condition/select/3").then(function (i) {
    //   e.size = i.data;
    // }), wx.request("https://api.yaohaodashi.com/v1.0//developer/options").then(function (i) {
    //   e.developer = i.data;
    // });
    var e = this;
    wx.request({
      url: 'https://api.yaohaodashi.com/v1.0/area/select/0',
      success(res) {
        console.log("区域", res)
        e.setData({
          // area: res.data.data[0].children
          area: res.data.data
        })
      }
    })
    wx.request({
      url: 'https://api.yaohaodashi.com/v1.0//condition/select/2',
      success(res) {
        console.log("价格", res)
        e.setData({
          regionPrice: res.data.data
        })
      }
    })

    wx.request({
      url: 'https://api.yaohaodashi.com/v1.0//condition/select/1',
      success(res) {
        console.log("1111111", res)
        e.setData({
          unitPrice: res.data.data
        })
      }
    })

    wx.request({
      url: 'https://api.yaohaodashi.com/v1.0//condition/select/3',
      success(res) {
        console.log("面积", res)
        e.setData({
          size: res.data.data
        })
      }
    })



    wx.request({
      url: 'https://api.yaohaodashi.com/v1.0//developer/options',
      success(res) {
        console.log("开发商", res)
        e.setData({
          developer: res.data.data
        })
      }
    })


  },
  // 重置
  handleReset: function (e) {
    console.log(e)
    this.setData({
      titleData: this.data.titleData,
      tab: [!0, !0, !0, !0],
      filterMask: !0,
      datalist: [],
      page_num: 1,
      show: !1
    })
  },
  // 确认
  handleConfirm: function (e) {
    console.log("确认", e)
    this.setData({
      titleData: this.data.titleData,
      tab: [!0, !0, !0, !0],
      filterMask: !0,
      datalist: [],
      page_num: 1,
      show: !1
    })
  },
  // 面积选中
  sizeSeleted: function (e) {
    let id = e.target.dataset.id
    this.setData({
      idx: id
    })
  },
  // 开发商选中
  devSeleted: function (e) {
    let id = e.target.dataset.id
    this.setData({
      idx: id
    })
  },
  // 价格选择
  priceSelect: function (e) {
    console.log("价格选择", e)
  },
  priceRegionSelect: function (e) {
    let id = e.target.dataset.id
    this.setData({
      idx: id
    })
  },
  selet: function (e) {
    var data = [true, true, true, true],
      index = e.currentTarget.dataset.index;
    data[index] = !this.data.tab[index];
    this.setData({
      tab: data
    })
  },
  typeSelect: function t(e, i) {
    i.id;
    this.active = e, this.region = this.area.find(function (e) {
      return e.id === i.id;
    }).children, this.regionData = this.region.length && this.region[0].children || [];
  },
  regionSelect: function (e, i) {
    this.actives = e, this.regionData = this.region.find(function (e) {
      return e.id == i;
    }).children;
  },
  rSelect: function (e, i) {
    this.activess = e;
  },
  init: function () {
    this.active = 0, this.actives = 0, this.activess = 0;
  },
  // },
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