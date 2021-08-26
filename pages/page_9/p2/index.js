// pages/page_9/p2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pictures:[
      'https://cdn.lottery.okgoes.com/fps/2021/3/1a79cdd70a4e494598dcb551f670a67b.jpg',
      'https://cdn.lottery.okgoes.com/fps/2021/4/f9f9b36b33f44cdbb3b727e9c23eca99.jpeg',
      'https://cdn.lottery.okgoes.com/fps/2021/4/10af0867a7164c3c89b9b04980627ed1.png',
      'https://cdn.lottery.okgoes.com/fps/2021/4/492a38fd8c094430b1cbe555c6da0f65.jpg'
    ]
  },
  preview_2: function (event) {
    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList = event.currentTarget.dataset.list;//获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  }
})