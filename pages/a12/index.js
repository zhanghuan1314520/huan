// pages/a12/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      plot: '继曼谷、纽约之后，东京再出大案。唐人街神探唐仁（王宝强 饰）、秦风（刘昊然 饰）受侦探野田昊（妻夫木聪 饰）的邀请前往破案。“CRIMASTER世界侦探排行榜”中的侦探们闻讯后也齐聚东京，加入挑战，而排名第一Q的现身，让这个大案更加扑朔迷离，一场亚洲最强神探之间的较量即将爆笑展开……'
    }, ],
    list1: [{
        tite: "文本一",
        plot: '继曼谷、纽约之后，东京再出大案。唐人街神探唐仁（王宝强 饰）、秦风（刘昊然 饰）受侦探野田昊（妻夫木聪 饰）的邀请前往破案'
      },
      {
        tite: "文本二",
        plot: '继曼谷、纽约之后，东京再出大案。唐人街神探唐仁（王宝强 饰）、秦风（刘昊然 饰）受侦探野田昊（妻夫木聪 饰）的邀请前往破案'
      },
      {
        tite: "文本三",
        plot: '继曼谷、纽约之后，东京再出大案。唐人街神探唐仁（王宝强 饰）、秦风（刘昊然 饰）受侦探野田昊（妻夫木聪 饰）的邀请前往破案'
      },
    ],
    // item3
    ellipsis: true, // 文字是否收起，默认收起
    //item7
    ellipsis: true, // 文字是否收起，默认收起
    selected: true,
    selected1: false,
    //item8
    type: 'expend',
    accountlist: {
      // 通过初始化一个目标对象
      account: "文本1",
      encourtitle: '标题1',
    },
    listData: [
      // 循环遍历的list数据
      {
        account: "文本1",
        encourtitle: '标题1',
      },
      {
        account: "文本2",
        encourtitle: '标题2',
      },
      {
        account: "文本3",
        encourtitle: '标题3',
      },
      {
        account: "文本4",
        encourtitle: '标题4',
      },
      {
        account: "文本5",
        encourtitle: '标题5',
      },
      {
        account: "文本6",
        encourtitle: '标题6',
      },
    ],
    //item9
    ips: [{
        id: "1",
        title: "年统计",
        isSelect: true
      },
      {
        id: "2",
        title: "月统计",
        isSelect: false
      },
      {
        id: "3",
        title: "日统计",
        isSelect: false
      },
      {
        id: "4",
        title: "时统计",
        isSelect: false
      },
      {
        id: "5",
        title: "分统计",
        isSelect: false
      },
    ],
    content: "全部",
    // item10
    currentTab: 0,
    //item11
    currentTabIndex: 0,
    //item12
    topNav: ['文本0', '文本1', '文本2'],
    activetop: 0,
    //item13
    radioChange: [{
        name: "文本1",
        checked: 'true'
      },
      {
        name: "文本2",
      },
      {
        name: "文本3",
      }
    ],
    // item14
    list2: [{
        id: 0,
        name: "文本1",
        value: "文本1"
      },
      {
        id: 1,
        name: "文本2",
        value: "文本2"
      },
      {
        id: 2,
        name: "文本3",
        value: "文本3"
      }
    ],
    checkedList: [],
    // item15
    items: [{
        value: '文本1',
        checked: ''
      },
      {
        value: '文本2',
        checked: ''
      },
      {
        value: '文本3',
        checked: ''
      },
      {
        value: '文本4',
        checked: ''
      },
      {
        value: '文本5',
        checked: ''
      },
      {
        value: '文本6',
        checked: ''
      },
      {
        value: '文本7',
        checked: ''
      },
      {
        value: '文本8',
        checked: ''
      },
    ],
    selVal: '', //选中的值
    // item16
    checkboxArr: [{
        checked: false, //是否选中
        id: "1",
        name: "文本1",
      },
      {
        checked: false,
        id: "2",
        name: "文本2",
      },
      {
        checked: false,
        id: "3",
        name: "文本3",
      },
      {
        checked: false,
        id: "4",
        name: "文本4",
      },
      {
        checked: false,
        id: "5",
        name: "文本5",
      },
      {
        checked: false,
        id: "6",
        name: "文本6",
      },
    ],
    //item17
    arr: [],
    items2: [{
        value: '文本1',
        checked: ''
      },
      {
        value: '文本2',
        checked: ''
      },
      {
        value: '文本3',
        checked: ''
      },
      {
        value: '文本4',
        checked: ''
      },
      {
        value: '文本5',
        checked: ''
      },
      {
        value: '文本6',
        checked: ''
      },
      {
        value: '文本7',
        checked: ''
      },
    ],
    // item18
    shows: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    selectDatas: ['文本1', '文本2', '文本3', '文本4', '文本5', '文本6'], //下拉列表的数据
    indexs: 0, //选择的下拉列 表下标,
    //item19
    phone: "18112345678",
    //item21
    price: 100,
    //item22
    list3: {
      aa: 20,
      bb: 30
    },
    //itewm23
    list4: {
      cj_junjia: "33740",
      cj_junjia_hb: "33872",
      cj_num: "8079",
      cj_num_hb: "8941",
      gp_junjia: "37878",
      gp_junjia_hb: "38424",
      gp_num: "49501",
      kucun: "135252",
      kucun_hb: "134753",
      looksum: "293749",
      looksum_hb: "343276"
    },
    //item24
    //标签云
    labArr: ['文本1', '文本2', '文本3', '文本4', '文本5', '文本6', '文本7', '文本8', '文本9', '文本10'],
    // 自定义自己喜欢的颜色
    colorArr: ["#EE2C2C", "#ff7070", "#EEC900", "#4876FF", "#ff6100",
      "#7DC67D", "#E17572", "#7898AA", "#C35CFF", "#33BCBA", "#C28F5C",
      "#FF8533", "#6E6E6E", "#428BCA", "#5cb85c", "#FF674F", "#E9967A",
      "#66CDAA", "#00CED1", "#9F79EE", "#CD3333", "#FFC125", "#32CD32",
      "#00BFFF", "#68A2D5", "#FF69B4", "#DB7093", "#CD3278", "#607B8B"
    ],
    // 存储随机颜色
    randomColorArr: [],
    //item25
    arr11: [{
        id: '1',
        name: 1,
        age: '12'
      },
      {
        id: '5',
        name: 2,
        age: '24'
      },
      {
        id: '3',
        name: 3,
        age: '28'
      },
      {
        id: '4',
        name: 4,
        age: '18'
      },
      {
        id: '2',
        name: 5,
        age: '36'
      },
    ],
    //item26
    method: '寄付',
    //item27
    listData: [{
      type: 1,
      content: [{
        url: 'http://img0.imgtn.bdimg.com/it/u=1424239015,525755483&fm=26&gp=0.jpg'
      }]
    }, {
      type: 2,
      content: [{
        url: 'http://img2.imgtn.bdimg.com/it/u=3984473917,238095211&fm=26&gp=0.jpg'
      }, {
        url: 'http://img2.imgtn.bdimg.com/it/u=3984473917,238095211&fm=26&gp=0.jpg'
      }]
    }, {
      type: 3,
      content: [{
        url: 'http://img4.imgtn.bdimg.com/it/u=2229864841,4232235061&fm=26&gp=0.jpg',
      }, {
        url: 'http://img5.imgtn.bdimg.com/it/u=3053840139,4109911854&fm=26&gp=0.jpg',
      }, {
        url: 'http://img5.imgtn.bdimg.com/it/u=3053840139,4109911854&fm=26&gp=0.jpg',
      }]
    }, {
      type: 4,
      content: [{
        url: 'http://img4.imgtn.bdimg.com/it/u=3360834600,1404834512&fm=26&gp=0.jpg'
      }, {
        url: 'http://img4.imgtn.bdimg.com/it/u=3360834600,1404834512&fm=26&gp=0.jpg'
      }, {
        url: 'http://img4.imgtn.bdimg.com/it/u=3360834600,1404834512&fm=26&gp=0.jpg'
      }, {
        url: 'http://img4.imgtn.bdimg.com/it/u=3360834600,1404834512&fm=26&gp=0.jpg'
      }]
    }],
    //item28
    news: [{
        id: 1,
        title: "参数参数测试 测试参数参数测试 测试参数参数测试 测试"
      },
      {
        id: 2,
        title: "参数参数测试 测试"
      }
    ],
    //item30
    processData: [{
        name: '提交工单',
        start: '#fff',
        end: '#EFF3F6',
        icon: '/images/process_1.png'
      },
      {
        name: '已接单',
        start: '#EFF3F6',
        end: '#EFF3F6',
        icon: '/images/process_1.png'
      },
      {
        name: '开始维修',
        start: '#EFF3F6',
        end: '#EFF3F6',
        icon: '/images/process_1.png'
      },
      {
        name: '维修结束',
        start: '#EFF3F6',
        end: '#EFF3F6',
        icon: '/images/process_1.png'
      },
      {
        name: '已确认',
        start: '#EFF3F6',
        end: '#fff',
        icon: '/images/process_1.png'
      }
    ],
    //item31
    whether: false,
    flop: '点击翻牌',
    really: '',
    implement: 0,
    surplus: false,
    biutin: '点击翻牌',
    //item33
    carWidth: '', //卡片宽度
    number: 10,
    cardData: [{
        animationData: {},
        front: '/images/img_01.jpg',
        back: '/images/img_01.jpg',
        id: '1',
        showClass: false, // 控制翻转
        opacity: false, // 控制翻转过来以后的 opacity
        money: 1,
        disabled: false, // disabled 属性，控制手速点击过快，导致多个牌被翻开, 默认为false 可以点击
      },
      {
        animationData: {},
        front: '/images/img_01.jpg',
        back: '/images/img_01.jpg',
        id: '2',
        showClass: false,
        opacity: false,
        money: 2,
        disabled: false,
      },
      {
        animationData: {},
        front: '/images/img_01.jpg',
        back: '/images/img_01.jpg',
        id: '3',
        showClass: false,
        opacity: false,
        money: 3,
        disabled: false,
      },
      {
        animationData: {},
        front: '/images/img_01.jpg',
        back: '/images/img_01.jpg',
        id: '4',
        showClass: false,
        opacity: false,
        money: 4,
        disabled: false,
      },
      {
        animationData: {},
        front: '/images/img_01.jpg',
        back: '/images/img_01.jpg',
        id: '5',
        showClass: false,
        opacity: false,
        money: 5,
        disabled: false,
      },
      {
        animationData: {},
        front: '/images/img_01.jpg',
        back: '/images/img_01.jpg',
        id: '6',
        showClass: false,
        opacity: false,
        money: 6,
        disabled: false,
      },
      {
        animationData: {},
        front: '/images/img_01.jpg',
        back: '/images/img_01.jpg',
        id: '7',
        showClass: false,
        opacity: false,
        money: 7,
        disabled: false,
      },
      {
        animationData: {},
        front: '/images/img_01.jpg',
        back: '/images/img_01.jpg',
        id: '8',
        showClass: false,
        opacity: false,
        money: 8,
        disabled: false,
      },
      {
        animationData: {},
        front: '/images/img_01.jpg',
        back: '/images/img_01.jpg',
        id: '9',
        showClass: false,
        opacity: false,
        money: 9,
        disabled: false,
      },
    ],
    picList:[],
    // banner 轮播图 
    banner_list: [
      { type: 1, video: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4", img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b51889744910df7979a2f672434da84e.jpg?thumb=1&w=720&h=360" },
      { type: 0, url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b51889744910df7979a2f672434da84e.jpg?thumb=1&w=720&h=360" },
      { type: 0, url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b51889744910df7979a2f672434da84e.jpg?thumb=1&w=720&h=360" },
      { type: 0, url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b51889744910df7979a2f672434da84e.jpg?thumb=1&w=720&h=360" },
      { type: 0, url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b51889744910df7979a2f672434da84e.jpg?thumb=1&w=720&h=360" }
    ],
    indicatorDots: true,
    autoplay: false, // 自动播放
    interval: 5000, //轮播时间
    duration: 300, // 滑动速度越大越慢
    circular: true, //是否循环
    beforeColor: "lightgray", //指示点颜色
    afterColor: "red", //当前选中的指示点颜色
    // 轮播数据 + 效果 E
    controls: false,
    //item36
    editTrue: false,
    showModalStatus: false,
    editText: '编辑'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var picList = []
    picList.push("https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b51889744910df7979a2f672434da84e.jpg?thumb=1&w=720&h=360")
    picList.push("https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360")
    picList.push("https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0ff3dc30027f3b615bfe03f1d306ee5.jpg?thumb=1&w=720&h=360")
    this.setData({
      picList: picList,
    })
    let carWidth = 0;
    const {
      cardData
    } = this.data;
    this.addPosition(cardData); // 数组添加移动坐标位置
    wx.getSystemInfo({
      success(res) {
        carWidth = parseInt((res.windowWidth - 40) / 3);

      }
    })
    this.setData({
      carWidth
    })
    this.defaultSelected();
    let that = this,
      //item24
      labLen = that.data.labArr.length,
      colorArr = that.data.colorArr,
      colorLen = colorArr.length,
      randomColorArr = [];
    //判断执行
    do {
      let random = colorArr[Math.floor(Math.random() * colorLen)];
      randomColorArr.push(random);
      labLen--;
    } while (labLen > 0)

    that.setData({
      randomColorArr: randomColorArr
    });
  },
  // item3
  ellipsis: function () {  
    var value = !this.data.ellipsis;
    this.setData({
      ellipsis: value
    }) 
  },
  
  // 多个展开
  showPlot1(e) {
    let index = e.currentTarget.dataset.index
    this.data.list1[index].flag = !this.data.list1[index].flag
    this.setData({
      list1: this.data.list1
    })
  },
  // 收起/展开按钮点击事件
  ellipsis() {
    var t = this;
    let value = !this.data.ellipsis;
    t.setData({
      ellipsis: value
    })
  },
  // item7
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true
    })
  },
  // item9
  handleType(event) {
    const type = event.currentTarget.dataset.type;
    this.setData({
      type: type,
    });
  },
  // 列表切换
  handleList(event) {
    // console.log(event);
    this.setData({
      // 给accountList对象重新赋值
      accountlist: event.currentTarget.dataset.item,
    });
  },
  //item9
  onIpItemClick: function (event) {
    console.log(event);
    var id = event.currentTarget.dataset.item.id;
    var curIndex = 0;
    for (var i = 0; i < this.data.ips.length; i++) {
      if (id == this.data.ips[i].id) {
        this.data.ips[i].isSelect = true;
        curIndex = i;
      } else {
        this.data.ips[i].isSelect = false;
      }
    }

    this.setData({
      content: this.data.ips[curIndex].title,
      ips: this.data.ips,
    });
  },
  // item10
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  // item11
  //点击切换
  onTabsItemTap: function (event) {
    let index = event.currentTarget.dataset.index;
    this.setData({
      currentTabIndex: index
    })
  },
  //item12
  //点击切换
  changeIndex(e) {
    let activetop = e.currentTarget.dataset.index
    this.setData({
      activetop
    })
  },
  // item13
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  // item14
  HandelItemChange(e) {
    // 1 获取被选中的复选框的值
    const checkedList = e.detail.value;
    // 2 进行赋值
    this.setData({
      checkedList
    })
  },
  // item15
  // 单选操作
  selSingle: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,
      items = that.data.items,
      selVal = that.data.selVal;
    items.forEach(function (v, i) {
      if (index == i) {
        items[index].checked = true;
        var selVal = items[index].value
        that.setData({
          selVal: selVal
        })
      } else {
        items[i].checked = false;
      }
    })
    that.setData({
      items: items,
    })
  },
  //默认选中第一个
  defaultSelected() {
    var that = this;
    that.data.items[0].checked = true;
    that.setData({
      items: that.data.items,
      selVal: that.data.items[0].value,
    })
  },
  // item16
  checkbox: function (e) {
    var index = e.currentTarget.dataset.index; //获取当前点击的下标
    var checkboxArr = this.data.checkboxArr; //选项集合
    checkboxArr[index].checked = !checkboxArr[index].checked; //改变当前选中的checked值

    this.setData({
      checkboxArr: checkboxArr
    });
  },
  checkboxChange: function (e) {
    var checkValue = e.detail.value;
    console.log(e.detail.value)
    this.setData({
      checkValue: checkValue
    });
  },
  //  item17
  checkLabs(e) {
    var that = this,
      index = e.currentTarget.dataset.index,
      value = e.currentTarget.dataset.value,
      items2 = that.data.items2,
      arr = that.data.arr,
      val = items2[index].checked, //点击前的值
      limitNum = 7 - this.data.num,
      curNum = 0; //已选择数量

    //选中累加
    for (var i in items2) {
      if (items2[i].checked) {
        curNum += 1;
      }
      that.setData({
        curr: curNum + 1
      })
    }
    if (!val) {
      if (curNum == limitNum) {
        wx.showModal({
          content: '选择数量不能超过' + (limitNum) + '个',
          showCancel: false
        })
        return;
      }
      arr.push(value);
    } else {
      for (var i in arr) {
        if (arr[i] == value) {
          arr.splice(i, 1);
        }
      }
    }
    items2[index].checked = !val;
    that.setData({
      items2: items2,
      arr: arr
    })
  },
  // item18
  // 点击下拉显示框
  selectTaps() {
    this.setData({
      shows: !this.data.shows,
    });
  },
  // 点击下拉列表
  optionTaps(e) {
    let Indexs = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    console.log(Indexs)
    this.setData({
      indexs: Indexs,
      shows: !this.data.shows
    });

  },
  //item19
  copywxtap: function () {
    wx.showToast({
      title: '复制成功',
    })
    wx.setClipboardData({
      data: this.data.phone,
      success: function (res) {
        wx.getClipboardData({
          //这个api是把拿到的数据放到电脑系统中的
          success: function (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  // item25
  mySort: function (e) {
    console.log("333", e)
    //property 根据什么排序
    var property = e.currentTarget.dataset.property;
    var self = this;
    var arr11 = self.data.arr11;
    var sortRule = true; // 正序倒序
    self.setData({
      arr11: arr11.sort(self.compare(property, sortRule))
    })
    //console.log(arr)
  },
  compare: function (property, bol) {
    return function (a, b) {
      var value1 = a[property];
      var value2 = b[property];
      console.log("value1", value1)
      console.log("value2", value2)
      if (bol) {
        return value1 - value2;
      } else {
        return value2 - value1;
      }
    }
  },
  //item26
  // 选择付钱方式
  selectMethod() {
    let that = this;
    wx.showActionSheet({
      itemList: ['寄付', '到付'],
      success(e) {
        that.setData({
          method: e.tapIndex == 0 ? '寄付' : '到付'
        })
      }
    })
  },

  //item28
  newsId: function (e) {
    var that = this
    var item = e.detail.current;
    this.setData({
      newsId: that.data.news[item].id
    })
  },
  //item30
  //进度条的状态
  setPeocessIcon: function () {
    var index = 0 //记录状态为1的最后的位置
    var processArr = this.data.processData
    console.log("progress", this.data.detailData.progress)
    for (var i = 0; i < this.data.detailData.progress.length; i++) {
      var item = this.data.detailData.progress[i]
      processArr[i].name = item.word
      if (item.state == 1) {
        index = i
        processArr[i].icon = "/images/process_3.png"
        processArr[i].start = "#45B2FE"
        processArr[i].end = "#45B2FE"
      } else {
        processArr[i].icon = "/images/process_1.png"
        processArr[i].start = "#EFF3F6"
        processArr[i].end = "#EFF3F6"
      }
    }
    processArr[index].icon = "/images/process_2.png"
    processArr[index].end = "#EFF3F6"
    processArr[0].start = "#fff"
    processArr[this.data.detailData.progress.length - 1].end = "#fff"
    this.setData({
      processData: processArr
    })
  },
  //item31
  again: function (e) {
    if (this.data.implement == 3 || this.data.implement == 0) {
      this.setData({
        whether: false,
        flop: '点击翻牌',
        really: '',
        implement: 0,
        surplus: false,
        biutin: '点击翻牌',
      })
    } else {
      wx.showToast({
        title: '正在执行抽奖中...',
        icon: 'none',
        duration: 2000
      })
      return false
    }
  },
  tamin: function (e) {
    let that = this
    let index = e.currentTarget.dataset.index
    that.setData({
      whether: true,
      really: index,
      implement: 1,
    })
    setTimeout(function () {
      that.setData({
        flop: '',
      })
    }, 500)
    setTimeout(function () {
      that.setData({
        flop: '有奖品',
        surplus: true,
        implement: 2,
      })
    }, 1200)
    setTimeout(function () {
      that.setData({
        biutin: '',
      })
    }, 1700)
    setTimeout(function () {
      that.setData({
        biutin: '没有奖品',
        implement: 3,
      })
    }, 2500)
  },
  //item33
  // 数组添加移动坐标值 并且把所有的disabled 状态还原会false 
  addPosition(cardData) {
    const lineTotal = 3 // 单行数
    cardData.map((item, index) => {
      let x = index % lineTotal
      let y = parseInt(index / lineTotal)
      item.twoArry = {
        x,
        y
      }
      item.disabled = false; // 还原所有的disabled 状态
    })
    this.setData({
      cardData
    })
  },

  //全部翻转
  allChange() {
    const {
      cardData
    } = this.data
    cardData.map(item => {
      if (!item.showClass) {
        item.showClass = true;
      }
    })
    this.setData({
      cardData
    })
  },

  //洗牌
  allMove() {
    const {
      carWidth,
      cardData
    } = this.data;
    // 110 是卡牌宽度加边距
    this.shuffle(carWidth) //移动到中心,  110 是牌的宽度，加上外边距边框
    let timer = setTimeout(() => {
      // 每次移动到中心位置以后，先打乱数组顺序，给数组每一项重新添加移动坐标值，setData({cardData}) 然后在散开
      cardData.sort(this.randomsort);
      this.addPosition(cardData)
      clearTimeout(timer)
      this.shuffle(0) // 间隔1秒钟，移动到原来位置
    }, 1000)
  },
  // 洗牌函数
  shuffle(translateUnit) {
    let {
      cardData
    } = this.data;
    console.log(cardData)
    cardData.map((item, index) => {
      let animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease'
      })
      animation.export()
      const translateUnitX = translateUnit * (1 - item.twoArry.x)
      const translateUnitY = translateUnit * (1 - item.twoArry.y)
      animation.translate(translateUnitX, translateUnitY).step()
      item.animationData = animation.export()
      item.opacity = false;
      if (item.showClass) {
        item.showClass = false;
      }
    })
    this.setData({
      cardData
    })
  },

  // 打乱数组顺序
  randomsort(a, b) {
    return Math.random() > .5 ? -1 : 1;
    //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
  },

  // 处理单个点击翻转
  handleCurClick(event) {
    let curId = event.currentTarget.dataset.id;
    // 每次点击时获取被点击拍的disable 属性，
    let disabled = event.currentTarget.dataset.disabled;
    //如果为true 就返回不继续向下执行
    if (disabled) {
      return;
    }
    let {
      cardData,
      number,
      carWidth
    } = this.data;
    let money = '';
    cardData.forEach(item => {
      item.disabled = true; // 点击一张拍以后，把所有的牌的disabled 属性改成true ，
      if (item.id === curId) {
        item.showClass = true;
        money = item.money;
      } else {
        item.opacity = true
      }
    })
    number -= 1;
    this.setData({
      cardData,
      number
    })
    setTimeout(() => {
      this.allChange()
    }, 1000);
    let _this = this;
    setTimeout(() => {
      wx.showModal({
        title: '提示',
        content: '恭喜您中奖' + money + '元！',
        cancelText: '去看看',
        confirmText: '再翻一次',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
            _this.shuffle(carWidth) //移动到中心,  110 是牌的宽度，加上外边距边框
            wx.showLoading({
              title: '获取数据中...',
            })
            // 这里去请求接口重新获取数据，获取成功以后调用 this.shuffle(0) 这里用
            setTimeout(() => {
              wx.hideLoading()
              // 每次移动到中心位置以后，先打乱数组顺序，给数组每一项重新添加移动坐标值，setData({cardData}) 然后在散开
              cardData.sort(_this.randomsort);
              _this.addPosition(cardData)
              _this.shuffle(0)
            }, 3000)
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }, 3000);
  },
    // item34
  //预览图片
  previewImg: function (e) {
    var currentUrl = e.currentTarget.dataset.currenturl
    var previewUrls = e.currentTarget.dataset.previewurl
    wx.previewImage({
      current: currentUrl, //必须是http图片，本地图片无效
      urls: previewUrls, //必须是http图片，本地图片无效
    })
  },
  //item35
  //预览图片
  previewImage: function(e) {
    console.log(e.target.dataset.src)
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.banner_list
      // urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },
// 播放
  videoPlay: function() {
    console.log("开始播放")
    var videoplay = wx.createVideoContext("video");
    videoplay.play()
    this.setData({
      controls: true,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},
  onShow: function () {
    this.data.list1.forEach((item) => {
      item.flag = false
    })
    this.setData({
      list1: this.data.list1
    })
  },
  //item36
  // 编辑
showedit: function() {
  var that = this;
  if (that.data.editTrue == true) {
    that.setData({
      editTrue: false,
      editText: '编辑'
    })

  } else {
    that.setData({
      editTrue: true,
      editText: '完成',
    })
  }
},
  onHide: function () {},
})