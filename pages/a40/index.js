Page({
  data: {
  progressWidth:0,
  progressTime:60,
  mark:true,
  playPausetips:"开始"
  },
  playbtn() {
  let that = this;
  let mark = that.data.mark;
  if (mark){
   that.timer = setInterval(that.run, 1000); //that.timer关键点
   wx.showToast({
   title: '开始',
   })
   that.setData({
   mark:false,
   playPausetips:"暂停"
   })
  }else{
   clearInterval(that.timer);
   wx.showToast({
   title: '暂停',
   })
   that.setData({
   mark: true,
   playPausetips: "开始"
   })
  }
  },
  run(){
  let that = this;
  let totalProgressTime = 60 //秒
  let progressWidth = that.data.progressWidth; //显示进度
  let progressTime = that.data.progressTime; //时间
  
  if (progressWidth === 100) {
   wx.showToast({
   title: '结束回调处理',
   })
   clearInterval(that.timer);
   that.setData({
   progressTime: totalProgressTime, //进度条需要总时间s
   progressWidth: 100, //进度100%
   progressTime: 60
   })
   return;
  }
  progressTime--;
  progressWidth = (totalProgressTime - progressTime) * (100 / 60)
  that.setData({
   progressWidth: progressWidth,
   progressTime: progressTime
  })
  }
  
 })