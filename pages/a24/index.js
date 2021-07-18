// pages/a19/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarInitTop: 0, //导航栏初始化距顶部的距离
    isFixedTop: false, //是否固定顶部
    msgList: [{
        url: "url",
        title: "多地首套房贷利率上浮 热点城市渐迎零折扣时代"
      },
      {
        url: "url",
        title: "交了20多年的国内漫游费将取消 你能省多少话费？"
      },
      {
        url: "url",
        title: "北大教工合唱团出国演出遇尴尬:被要求给他人伴唱"
      }
    ],
    imgUrls: [
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b51889744910df7979a2f672434da84e.jpg?thumb=1&w=720&h=360',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0ff3dc30027f3b615bfe03f1d306ee5.jpg?thumb=1&w=720&h=360',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2320573b3be643e29f5270a97e1a9c1d.jpg?thumb=1&w=720&h=360'
    ],
    current: 0,
    imgUrls1: [
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b51889744910df7979a2f672434da84e.jpg?thumb=1&w=720&h=360',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0ff3dc30027f3b615bfe03f1d306ee5.jpg?thumb=1&w=720&h=360',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2320573b3be643e29f5270a97e1a9c1d.jpg?thumb=1&w=720&h=360'
    ],
    autoplay: true,
    interval: 5000,
    duration: 1000,
    swiperCurrent: 0,
    // 九宫格
    routers: [{
        name: '文本1',
        url: '/pages/Course/course',
        icon: '/images/img_01.jpg',
        code: '10'
      },
      {
        name: '文本2',
        url: '/pages/Course/course',
        icon: '/images/img_01.jpg',
        code: '11'
      },
      {
        name: '文本3',
        url: '/pages/Course/course',
        icon: '/images/img_01.jpg',
        code: '10'
      },
      {
        name: '文本4',
        icon: '/images/img_01.jpg',
        code: '11'
      },
      {
        name: '文本5',
        url: '/pages/Course/course',
        icon: '/images/img_01.jpg',
        code: '10'
      },
      {
        name: '文本6',
        icon: '/images/img_01.jpg',
        code: '11'
      },
      {
        name: '文本7',
        url: '/pages/Course/course',
        icon: '/images/img_01.jpg',
        code: '10'
      },
      {
        name: '文本8',
        icon: '/images/img_01.jpg',
        code: '11'
      },
      {
        name: '文本9',
        url: '/pages/Course/course',
        icon: '/images/img_01.jpg',
        code: '10'
      }
    ],
    teachNav: [{
        tit: '文本1',
        techClass: 'tech-two'
      },
      {
        tit: '文本2',
        techClass: 'tech-two'
      },
      {
        tit: '文本3',
        techClass: 'tech-two'
      },
      {
        tit: '文本4',
        techClass: 'tech-thr'
      },
      {
        tit: '文本5',
        techClass: 'tech-thr'
      }
    ],
    nav:[
      {id:0,name:"文本1"},
      {id:1,name:"文本2"},
      {id:2,name:"文本3"},
      {id:3,name:"文本4"}
    ],
    id:0,
    box_list:[
      {id:0,name:"测试1"},
      {id:2,name:"测试1"},
      {id:3,name:"测试1"},
      {id:4,name:"测试1"},
      {id:5,name:"测试1"},
      {id:6,name:"测试1"},
      {id:7,name:"测试1"},
      {id:8,name:"测试1"},
      {id:9,name:"测试1"},
      {id:10,name:"测试1"},
      {id:11,name:"测试1"},
      {id:12,name:"测试1"},
      {id:13,name:"测试1"},
      {id:14,name:"测试1"},
    ]
  },

  //生命周期函数--监听页面加载
  onLoad: function (options) {

  },
  //生命周期函数--监听页面显示
  onShow: function () {
    var that = this;
    if (that.data.navbarInitTop == 0) {
      //获取节点距离顶部的距离
      wx.createSelectorQuery().select('#navbar').boundingClientRect(function (rect) {
        if (rect && rect.top > 0) {
          var navbarInitTop = parseInt(rect.top);
          that.setData({
            navbarInitTop: navbarInitTop
          });
        }
      }).exec();
    }
  },
  //监听页面滑动事件
  onPageScroll: function (e) {
    var that = this;
    var scrollTop = parseInt(e.scrollTop); //滚动条距离顶部高度
    //判断'滚动条'滚动的距离 和 '元素在初始时'距顶部的距离进行判断
    var isSatisfy = scrollTop >= that.data.navbarInitTop ? true : false;
    //为了防止不停的setData, 这儿做了一个等式判断。 只有处于吸顶的临界值才会不相等
    if (that.data.isFixedTop === isSatisfy) {
      return false;
    }
    that.setData({
      isFixedTop: isSatisfy
    });
  },
  swiperChange: function (e) {
    var that = this;
    if (e.detail.source == 'touch') {
      that.setData({
        current: e.detail.current,

      })
    }
  },
  swiperChange1: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  changeNav(e) {
        console.log("e", e)
        let id = e.currentTarget.dataset.id;
        let index = e.currentTarget.dataset.index;
        this.setData({
            id:index
        })
    },
})