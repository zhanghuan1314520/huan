// house/columnists/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoPlay: null,
    tag: [
      { name:'房产'},
      { name:'杭州买房'},
      { name:'楼市'},
      { name:'杭州房产'}
    ],
    image: 'https://i.loli.net/2021/08/27/LQubGjwVMxh7JoB.png',
    name: '海燕说房产',
    introduce: '杭州知名自媒体',
    describe: '知足且坚定 温柔且上进',
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getdata();
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
  getdata:function(){
    this.setData({
      list: [
        {
          id: 1,
          num:8,
          title:'9月1号买房税会变吗？',
          videoSrc: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',  // 视频
          videoCoverImg: 'https://i.loli.net/2021/08/27/anMIibBR7SkCTE4.png',  // 视频封面图
        },
        {
          id: 2,
          num:18,
          title:'9月1号买房税会变吗？',
          videoSrc: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
          videoCoverImg: 'https://aihome.aihome365.cn/2020/06/46a28072-e823-4bc3-a295-94f8d821bed0.jpg?x-oss-process=style/P5'
        },
        {
          id: 3,
          num:188,
          title:'9月1号买房税会变吗测试测试测试？',
          videoSrc: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
          videoCoverImg: 'https://aihome.aihome365.cn/2021/03/1536166d-68a1-4e6c-9250-87534aa3e11d.jpg?x-oss-process=style/P5'
        },
        {
          id: 4,
          num:1888,
          title:'9月1号买房税会变吗？',
          videoSrc: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
          videoCoverImg: 'https://aihome.aihome365.cn/2021/03/1536166d-68a1-4e6c-9250-87534aa3e11d.jpg?x-oss-process=style/P5'
        }
      ]
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})