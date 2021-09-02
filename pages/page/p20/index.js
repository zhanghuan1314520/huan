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
          image: 'https://i.loli.net/2021/08/27/LQubGjwVMxh7JoB.png',
          name: '海燕说房产',
          introduce: '杭州知名自媒体',
          describe: '新政策后面对改善盘,无房不如有房',
          content: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
          cover: "https://i.loli.net/2021/08/27/anMIibBR7SkCTE4.png"
        },
        {
          id: 2,
          image: 'https://i.loli.net/2021/08/27/LQubGjwVMxh7JoB.png',
          name: '海燕说房产',
          introduce: '杭州知名自媒体',
          describe: '新政策后面对改善盘,无房不如有房',
          content: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
          cover: "https://aihome.aihome365.cn/2021/03/1536166d-68a1-4e6c-9250-87534aa3e11d.jpg?x-oss-process=style/P5"
        },
      ]
    });

  },
  getvideo: function (e) {
    let id = e.currentTarget.dataset.id;
    console.log("video", id)
    wx.navigateTo({
      url: '/house/columnists/detail?id=' + id,
    })
  }
})