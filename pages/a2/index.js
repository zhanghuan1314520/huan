Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图的数组
    backgroundArr: ['red', 'green', 'blue'],
    //轮播图当前的下标
    current: 0,
    //是否自动播放轮播图
    autoplay: false,
    // 轮播图自动切换时间间隔
    interval: 5000,
    //轮播图进度条的计时器
    progressNumInterval: null,
    //轮播图进度条的进度
    progressNum: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //开启轮播图
    this.setData({
      autoplay: true
    })
    // 初次执行顶部轮播图的进度条的进度点
    this.progressLineInterval();
  },

  //监听轮播图的下标
  monitorCurrent: function (e) {
    // console.log(e.detail.current)
    let current = e.detail.current;
    this.setData({
      current: current
    })
    // 二次执行顶部轮播图的小圆点的进度点
    this.progressLineInterval();
  },

  //封装轮播图进度条计时器的方法
  progressLineInterval: function () {
    // 清理小圆点的计时器
    clearInterval(this.data.progressNumInterval)
    // 清理小圆点的进度
    this.setData({
      progressNum: 0,
    })
    /**
     * 轮播图的切换时间为5秒，进度条的进度为1-100%，
     * 因为5000/100=50毫秒，所以每50毫秒就要执行1个进度点
     * 另外需要把计时器寄存在data{}对象上，否则会清理不掉上一个计时器
     * */
    this.data.progressNumInterval = setInterval(() => {
      let progressNum = this.data.progressNum;
      // console.log(progressNum)
      if (progressNum < 100) {
        progressNum++;
      } else {
        progressNum = 0;
        // 清理进度条的计时器
        clearInterval(this.data.progressNumInterval)
      }
      this.setData({
        progressNum: progressNum
      })
    }, 50)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //关闭轮播图
    this.setData({
      autoplay: false
    })
    // 清理进度条的计时器
    clearInterval(this.data.progressNumInterval)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //关闭轮播图
    this.setData({
      autoplay: false
    })
    // 清理进度条的计时器
    clearInterval(this.data.progressNumInterval)
  }
})
