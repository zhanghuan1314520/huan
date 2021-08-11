
Page({
  /**
   * 页面的初始数据
   */
  data: {
    loading: !1,
    loaded: !1,
    statusBarHeight: 0,
    navheight: 0,
    pagetop: 0,
    scrollTop: 0,
    numop: 0,



    navbarInitTop: 0, //导航栏初始化距顶部的距离
    isFixedTop: false, //是否固定顶部


    tab: [
      { title: '文本1', id: 0 },
      { title: '文本2', id: 1 },
      { title: '文本3', id: 2 }
    ],
    idx: 0,
    page: 1,
    notice_type: "",
    bannerList:[],
    AdvertList: [
      { ImageUrl: "/images/bj.jpg", Title: "测试测试测试测试测试测试测试测试测试" },
      { ImageUrl: "/images/bj.jpg", Title: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试" },
      { ImageUrl: "/images/bj.jpg", Title: "测试测试测试测试测试测试测试测试测试" }
    ],
    list: [],//层楼专栏文章
    // 问题类型
    questionTypeList: [{
      id: "0-0",
      category: 0,
      name: "购房资格",
      isActived: !1,
      isConfirm: !1,
      canMultiple: !0,
      size: "mini"
    }, {
      id: "0-1",
      category: 0,
      name: "贷款须知",
      isActived: !1,
      isConfirm: !1,
      canMultiple: !0,
      size: "mini"
    }, {
      id: "0-2",
      category: 0,
      name: "买房困惑",
      isActived: !1,
      isConfirm: !1,
      canMultiple: !0,
      size: "mini"
    }, {
      id: "0-3",
      category: 0,
      name: "楼盘对比",
      isActived: !1,
      isConfirm: !1,
      canMultiple: !0,
      size: "mini"
    }, {
      id: "0-4",
      category: 0,
      name: "刚需",
      isActived: !1,
      isConfirm: !1,
      canMultiple: !0,
      size: "mini"
    }, {
      id: "0-5",
      category: 0,
      name: "摇号",
      isActived: !1,
      isConfirm: !1,
      canMultiple: !0,
      size: "mini"
    }, {
      id: "0-6",
      category: 0,
      name: "落户",
      isActived: !1,
      isConfirm: !1,
      canMultiple: !0,
      size: "mini"
    }, {
      id: "0-7",
      category: 0,
      name: "其他",
      isActived: !1,
      isConfirm: !1,
      canMultiple: !0,
      size: "mini"
    }],
    // 全部
    questionStatusList: [{
      id: "1-1",
      status: 0,
      category: 1,
      name: "未回答",
      isActived: !1,
      isConfirm: !1,
      canMultiple: !1,
      size: "default"
    }, {
      id: "1-2",
      status: 1,
      category: 1,
      name: "已回答",
      isActived: !1,
      isConfirm: !1,
      canMultiple: !1,
      size: "default"
    }, {
      id: "1-3",
      status: 2,
      category: 1,
      name: "已解决",
      isActived: !1,
      isConfirm: !1,
      canMultiple: !1,
      size: "default"
    }],
    questionStatusList1: [],
    // 分类
    dropdownMenuList: [{
      id: 0,
      name: "问题类型",
      type: "questionTypeList",
      isActived: !1,
      isSelected: !1,
      canMultiple: !0
    }, {
      id: 1,
      name: "全部",
      type: "questionStatusList",
      isActived: !1,
      isSelected: !1,
      canMultiple: !1,
      status: "",
      statusName: ""
    }],
    hasCheckedAudit: !1,
    navMenuList: [],
    userInfo: null,
    cityInfo: {},
    brokerMomentLimit: null,
    dropdownMenuAnimation: null,
    showAddMomentBtn: !0,
    showGoDetailBtn: !1,
    showMask: !1,
    questionList: [],
    consultantStatus: !1,
    qaInfo: {
      pageNo: 1,
      limit: 10,
      canLoadMore: !0
    },
    showQaListNormal: !0,
    hotCardinfo: [],
    // imageRoot: s.globalData.imgsPathInfo.rootPath,
    filterStatusFlag: !1,
    consultantBelongCurrentCity: !1,
    types: "",
    status: "",
    member:[],
    covers: [
      { id: 1, imgSrc: '/images/bj.jpg' },
      { id: 2, imgSrc: '/images/bj.jpg' },
      { id: 3, imgSrc: '/images/bj.jpg' },
      { id: 4, imgSrc: '/images/bj.jpg' },
      { id: 5, imgSrc: '/images/bj.jpg' },
      { id: 6, imgSrc: '/images/bj.jpg' },
    ]
  },
  onLoad: function (options) {
    this.setData({
      //状态栏的高度
      statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'] + 'px',
      //胶囊的高度 也就是自定导航栏的高度
      navheight: wx.getMenuButtonBoundingClientRect()['height'] + 'px',
      //状态栏加导航栏的高度 加上下的padding的高度 12
      pagetop: wx.getMenuButtonBoundingClientRect()['height'] + wx.getSystemInfoSync()['statusBarHeight'] + 12 + 'px',
    })
  },
  onShow: function () {
    var that = this;
    if (that.data.navbarInitTop == 0) {
      //获取节点距离顶部的距离
      wx.createSelectorQuery().select('#navbar').boundingClientRect(function(rect) {
        if (rect && rect.top > 0) {
          var navbarInitTop = parseInt(rect.top);
          that.setData({
            navbarInitTop: navbarInitTop
          });
        }
      }).exec();
    }
  },
  onPageScroll(e) { //页面滚动就会触发
    var that = this;
    var scrollTop = parseInt(e.scrollTop); //滚动条距离顶部高度
    // console.log(e.scrollTop) //滚动149rpx  //滚动条距离顶部高度
    //判断'滚动条'滚动的距离 和 '元素在初始时'距顶部的距离进行判断
    var isSatisfy = scrollTop >= (that.data.navbarInitTop) ? true : false;
    //为了防止不停的setData, 这儿做了一个等式判断。 只有处于吸顶的临界值才会不相等
    if (that.data.isFixedTop === isSatisfy) {
      this.setData({
        scrollTop: e.scrollTop
      })
      return false;
    }
    that.setData({
      isFixedTop: isSatisfy
    });
  },
  tab(e) {
    let t = this;
    let index = e.currentTarget.dataset.index;
    t.setData({
      idx: index,
    })
  },
  to:function(){
    wx.navigateBack({
      delta: 1,
    })
  }
})