// pages/index_1/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  list:[
    {id:1,name:'功能',url:'/pages/page/index'},
    {id:2,name:'轮播图indicator-dots集合',url:'/pages/page_1/p/index'},
    {id:3,name:'筛选',url:'/pages/page_2/index'},
    {id:4,name:'排序',url:'/pages/page_3/index'},
    {id:5,name:'选择器',url:'/pages/page_4/index'},
    {id:6,name:'自定义页面',url:'/pages/page_5/index'},
    {id:7,name:'选项卡(吸顶)',url:'/pages/page_6/index'},
    {id:8,name:'时间',url:'/pages/page_7/index'},
    {id:9,name:'用户引导页面',url:'/pages/page_8/index'},
    {id:10,name:'图片',url:'/pages/page_9/index'},
    {id:11,name:'echarts图表',url:'/pages/page_10/index'},
    {id:12,name:'地图',url:'/pages/page_11/index'},
    {id:13,name:'弹窗/弹框/对话框/蒙层',url:'/pages/page_12/index'},
    {id:14,name:'单/复选框(样式及功能)',url:'/pages/page_13/index'},
    {id:15,name:'自定义组件',url:'/pages/page_14/index'},
    {id:16,name:'switch',url:'/pages/page_15/index'},
    {id:17,name:'进度条和流程',url:'/pages/page_16/index'},
    {id:18,name:'跑马灯',url:'/pages/page_17/index'},
    {id:19,name:'登录和注册',url:'/pages/page_18/index'},
    {id:20,name:'动画及特效',url:'/pages/page_19/index'},
    {id:21,name:'页面之间传值',url:'/pages/page_20/index'},
    {id:22,name:'房贷计算器',url:'/pages/page_21/index'},
    {id:23,name:'手风琴(折叠)',url:'/pages/page_22/index'},
    {id:24,name:'',url:'/pages/page_23/index'},
    {id:25,name:'',url:'/pages/page_24/index'},
    {id:26,name:'',url:'/pages/page_25/index'},
    {id:27,name:'',url:'/pages/page_26/index'},
    {id:28,name:'',url:'/pages/page_27/index'},
    {id:28,name:'',url:'/pages/page_28/index'},
    {id:29,name:'',url:'/pages/page_29/index'},
    {id:30,name:'',url:'/pages/page_30/index'}
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  onShow: function () {
    var t = this
    wx.setNavigationBarTitle({
      title: '这是'+ '-'+ t.data.title+'的标题',
  })
  },
  getdata:function(e){
    var url = e.currentTarget.dataset.url
    var title = e.currentTarget.dataset.title
    console.log('url',url)
    wx.navigateTo({
      url: url
    })
  }
})