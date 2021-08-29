Page({
  data: {
    ellipsis: true, // 文字是否收起，默认收起
  },
  /**
   * 收起/展开按钮点击事件
   */
  ellipsis: function () {  
    var value = !this.data.ellipsis;
    this.setData({
      ellipsis: value
    }) 
  }
})