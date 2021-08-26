// pages/page_6/p1/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuTapCurrent: 0
  },
  menuTap: function (e) {
    var current = e.currentTarget.dataset.current; //获取到绑定的数据
    this.setData({
        menuTapCurrent: current,
    });
  }
})