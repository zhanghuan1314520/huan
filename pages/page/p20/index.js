
Page({
  data: {
    videoPlay: null,
    dataList: [],
  },
  onLoad: function () {
    this.getData();
    wx.hideShareMenu();
  },
  // 点击cover播放，其它视频结束
  videoPlay: function (e) {
    var _index = e.currentTarget.dataset.id
    this.setData({
      _index: _index
    })
    //停止正在播放的视频
    var videoContextPrev = wx.createVideoContext(_index + "")
    videoContextPrev.stop();

    setTimeout(function () {
      //将点击视频进行播放
      var videoContext = wx.createVideoContext(_index + "")
      videoContext.play();
    }, 500)
  },
  // 模拟数据加载
  getData: function () {
    this.setData({
      dataList: [
        {
          id: 1,
          title: "这是测试视频内容",
          content: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
          cover: "https://i.loli.net/2021/08/29/6jFDLX3mzeOb41P.jpg"
        },
        {
          id: 2,
          title: "这是测试视频内容2",
          content: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
          cover: "https://i.loli.net/2021/08/29/6jFDLX3mzeOb41P.jpg"
        },
        {
          id: 3,
          title: "这是测试视频内容3",
          content: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
          cover: "https://i.loli.net/2021/08/29/6jFDLX3mzeOb41P.jpg"
        }
      ]
    });

  }
})