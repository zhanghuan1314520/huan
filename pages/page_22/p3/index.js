Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    showIndex: 0,
    maskData:[
      {
        title:'标题',
        text:'我是抽屉'
      },{
        title:'标题',
        text:'我是抽屉',
      },{
        title:'标题',
        text:'我是抽屉',
      }
    ]
  },
  panel: function (e) {
    if (e.currentTarget.dataset.index != this.data.showIndex) {
      this.setData({
        showIndex: e.currentTarget.dataset.index
      })
    } else {
      this.setData({
        showIndex: 0
      })
    }
  }
})
