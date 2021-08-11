
var total_micro_second = 10 * 1000;//这是10秒倒计时

Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    second: 60,
    clock: ''
  },
 
  // 小程序实现简单的倒计时效果
  // 基本实现功能:1，从60到0的倒计时效果2，倒计时完毕后会有提示
  countdown1: function () {
    var that = this
    var second = this.data.second
    if (second == 0) {
      that.setData({
        second: 60
      })
      return
    }
    var time = setTimeout(function () {
      that.setData({
        second: second - 1
      })
      that.countdown(that)
    }, 1000)
  },

  /* 毫秒级秒杀倒计时 */
  countdown: function () {
    var that = this
 
    // 定义一个总毫秒数，以一天为例
    // var total_micro_second = 3600 * 1000*24;//这是一天倒计时
    
    console.log('countdown=')
     
    // 渲染倒计时时钟
    var clock = this.dateformat(total_micro_second)//格式化时间
    console.log('clock=' + clock)
    that.setData({
      clock: clock
    });
 
    if (total_micro_second <= 0) {
      that.setData({
        clock: "秒杀结束"
      });
      // timeout则跳出递归
      return
    }
    // settimeout实现倒计时效果
    setTimeout(function () {
      // 放在最后--
      total_micro_second -= 10
      that.countdown()
    }, 10)//注意毫秒的步长受限于系统的时间频率，于是我们精确到0.01s即10ms
  },
 
 
  // 时间格式化输出，如1天天23时时12分分12秒秒12 。每10ms都会调用一次
  dateformat: function (micro_second) {
    // 总秒数
    var second = Math.floor(micro_second / 1000);
    // 天数
    var day = Math.floor(second / 3600 / 24);
    // 总小时
    var hr = Math.floor(second / 3600);
    // 小时位
    var hr2 = hr % 24;
    // 分钟位
    var min = Math.floor((second - hr * 3600) / 60);
    // 秒位
    var sec = (second - hr * 3600 - min * 60);// equal to => var sec = second % 60;
    // 毫秒位，保留2位
    var micro_sec = Math.floor((micro_second % 1000) / 10);
    return day + "天" + hr2 + "时" + min + "分" + sec + "秒" + micro_sec;
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
  },
 
})