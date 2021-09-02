Page({
  data: {
    linheight: 20,//行高
    top: 197,
    view2: {
      Width: 22,
      Height: 20
    },
    count3: 0,//进度条百分比
    timer3: '',//定时器名字
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.bb();
  },
  bb: function () {
    var that = this;
    var top = that.data.top;//获取动态的top定位
    var count2 = that.data.count3;//获取倒计时初始值
    var count = that.data.view2.Height;//获取倒计时初始值
    //如果将定时器设置在外面，那么用户就看不到countDownNum的数值动态变化，所以要把定时器存进data里面
    that.setData({
      timer3: setInterval(function () {//这里把setInterval赋值给变量名为timer2的变量
        count++;
        count2++;
        top--;
        // 获取元素高度
        //创建节点选择器
        var query = wx.createSelectorQuery();
        //选择id
        query.select('#mjltest').boundingClientRect()
        query.exec(function (res) {
          //res就是 所有标签为mjltest的元素的信息 的数组
          console.log('获取节点信息', res);
          //取高度
          console.log('打印元素高度', res[0].height);
          that.setData({
            linheight: res[0].height
          })
        })
        that.setData({
          view2: {
            Width: 22,
            Height: count
          },
          count3: count2,
          top: top
        })
        //在倒计时还未到0时，这中间可以做其他的事情，按项目需求来
        if (count == 100) {
          //这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
          //因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭
          clearInterval(that.data.timer3);
          //关闭定时器之后，可作其他处理codes go here
        }
      }, 1000)
    })
  }
})
