Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuTapCurrent: 0,//1
    currentIndex: 0,//2
    "firstList": [{ name: 'w券1', money: '5.00' }, { name: 'w券2', money: '50.00'}],
    "secondList": [{ name: 'y券1', money: '10.00' }, { name: 'y券2', money: '20.00' }],
    "thirdList": [{ name: 'g券1', money: '30.00' }, { name: 'g券2', money: '40.00' }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
//1
menuTap: function (e) {
  var current = e.currentTarget.dataset.current; //获取到绑定的数据
  this.setData({
      menuTapCurrent: current,
  });
},
//2
//swiper切换时会调用
pagechange: function (e) {
  if ("touch" === e.detail.source) {
    let currentPageIndex = this.data.currentIndex
    currentPageIndex = (currentPageIndex + 1) % 3
    this.setData({
      currentIndex: currentPageIndex
    })
  }
},
//用户点击tab时调用
titleClick: function (e) {
  let currentPageIndex =
    this.setData({
      //拿到当前索引并动态改变
      currentIndex: e.currentTarget.dataset.idx
    })
}
})