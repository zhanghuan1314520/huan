// pages/a1/page13.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav: [
      { id: 1, title: "人气红盘" },
      { id: 2, title: "现房" },
      { id: 3, title: "低首付" },
      { id: 4, title: "热门公寓" }
    ],
    active: 0,//默认选中
    list: [],
    ss:1 //当前选中第一个
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
  },
  changeNav(e) {
    console.log("e", e)
    let ss = e.currentTarget.dataset.id;// 全局定义的变量  ss
    console.log(ss)
    let index = e.currentTarget.dataset.index;//当前切换选中的下标 0 1 2 3 4
    console.log("index",index)
    this.setData({
        active: index,
        ss: ss
    })
    this.getList();
},
  getList: function () {
    var t = this;
    var url = 'https://sbmf.ww2ss.com/app/ewei_shopv2_api.php?i=1&r=noticeApi.get_indexlist'
    wx.request({
      url: url,
      data: {
        notice_type: t.data.ss  //notice_type  后台定义  ss 动态改变
      },
      success (res) {
        console.log(res.data)
       t.setData({
         list:res.data.data
       })
      }
    })
  },
})