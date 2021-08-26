// pages/a1/p6/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { id: 1, name: '测试', pic: 100 },
      { id: 4, name: '测试2', pic: 1000 }
    ],
    list2: [
      { url:'/pages/page_20/p1/index', name: '测试', pic: 100 },
      { url:'/pages/page_20/p2/index', name: '测试2', pic: 1000 }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  a1: function (e) {
    console.log(e)
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url:'/pages/page_20/p1/index?id='+id
    })
  },
  a2: function (e) {
    console.log(e)
    var index = e.currentTarget.dataset.index
    wx.navigateTo({
      url:'/pages/page_20/p1/index?index='+index
    })
  },
  a3: function (e) {
    console.log(e)
    var url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: url
    })
  },
  a4: function (e) {
    var t = e.currentTarget.dataset.go;
    wx.navigateTo({
        url: t
    });
}
})