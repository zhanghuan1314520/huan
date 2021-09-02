// pages/page/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      {id:1,name:'分享',url:'/pages/page/p1/index'},
      {id:2,name:'自定义底部导航栏',url:'/pages/page/p2/index'},
      {id:3,name:'垂直列表联动分类',url:'/pages/page/p3/index'},
      {id:4,name:'滑动收起(一半)，停止显示',url:'/pages/page/p4/index'},
      {id:5,name:'(滑动)点击回顶部',url:'/pages/page/p5/index'},
      {id:6,name:'点击修改背景颜色',url:'/pages/page/p6/index'},
      {id:7,name:'水印',url:'/pages/page/p7/index'},
      {id:8,name:'web-view',url:'/pages/page/p8/index'},
      {id:9,name:'点击输入框框里的眼睛图标时密码显示与隐藏切换',url:'/pages/page/p9/index'},
      {id:10,name:'显示隐藏金额样式',url:'/pages/page/p10/index'},
      {id:11,name:'花式打印',url:'/pages/page/p11/index'},
      {id:12,name:'scroll-view(水平)',url:'/pages/page/p12/index'},
      {id:13,name:'删除列表某条内容的功能',url:'/pages/page/p13/index'},
      {id:14,name:'排行榜(图标显示,排序,上下箭头,颜色)',url:'/pages/page/1p4/index'},
      {id:15,name:'过滤器',url:'/pages/page/p5/index'},
      {id:16,name:'数据缓存(存取)',url:'/pages/page/p16/index'},
      {id:17,name:'反馈(内容,图片,上传,多项选择)',url:'/pages/page/p17/index'},
      {id:18,name:'模板',url:'/pages/page/p18/index'},
      {id:19,name:'模拟数据(单个和模板)',url:'/pages/page/p19/index'},
      {id:20,name:'video(视频列表1)(默认)',url:'/pages/page/p20/index'},
      {id:21,name:'video(视频列表2)(自定义暂停和播放,弹幕)',url:'/pages/page/p21/index'},
      {id:22,name:'video(视频列表3)',url:'/pages/page/p22/index'},
      {id:23,name:'js控制文本数量',url:'/pages/page/p23/index'},
      {id:24,name:'video(视频列表3)',url:'/pages/page/p24/index'},
      {id:25,name:'文本宽度自适应',url:'/pages/page/p25/index'},
      {id:26,name:'遮罩',url:'/pages/page/p26/index'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  getdata:function(e){
    var url = e.currentTarget.dataset.url
    console.log('url',url)
    wx.navigateTo({
      url: url
    })
  }
})