Page({
  data: {
    motto: '在实际的开发中,疑或是页面的预览中,或多或少都碰到过这样的情景,那就是文本的折叠与展开!近期在做一个小程序项目，也遇到此情况，就将此顺便总结下来~',
    isF: true
  },

  aa: function() {
    this.setData({
      isF: !this.data.isF
    })
  }
})