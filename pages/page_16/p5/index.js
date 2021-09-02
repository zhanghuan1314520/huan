

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    list2: [],
    title: '测试菜市场测试测试菜市场删除测试测试',
    timer: "",
    deflautWidth: 0,
    inmoney: 400.00,
    cost: 1000.00,
    little: -200.00,
    row1: "",
    row2: "",
    row3: "",
    // 33
    linheight: 20,//行高
    top: 197,
    view2: {
      Width: 22,
      Height: 20
    },
    count3: 0,//进度条百分比
    timer3: '',//定时器名字
    // 4
    rotateIndex: '',
    animationData: {},
    statusImage: 'https://i.loli.net/2021/08/31/lGOZgpaXPQ7xSh9.png',
    statusClass: 'load'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

    let index = 0;
    this.data.timer = setInterval(() => { //注意箭头函数！！
      index += 1;
      this.setData({
        deflautWidth: index
      })
      if (this.data.deflautWidth == 100) {
        clearInterval(this.data.timer);
      }
    }, 1000);
  }
})
