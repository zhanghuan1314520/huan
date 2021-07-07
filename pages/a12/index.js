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
        plot: '继曼谷、纽约之后，东京再出大案。唐人街神探唐仁（王宝强 饰）、秦风（刘昊然 饰）受侦探野田昊（妻夫木聪 饰）的邀请前往破案。“CRIMASTER世界侦探排行榜”中的侦探们闻讯后也齐聚东京，加入挑战，而排名第一Q的现身，让这个大案更加扑朔迷离，一场亚洲最强神探之间的较量即将爆笑展开……'
      },
      {
        tite: "文本二",
        plot: '继曼谷、纽约之后，东京再出大案。唐人街神探唐仁（王宝强 饰）、秦风（刘昊然 饰）受侦探野田昊（妻夫木聪 饰）的邀请前往破案。“CRIMASTER世界侦探排行榜”中的侦探们闻讯后也齐聚东京，加入挑战，而排名第一Q的现身，让这个大案更加扑朔迷离，一场亚洲最强神探之间的较量即将爆笑展开……'
      },
      {
        tite: "文本三",
        plot: '继曼谷、纽约之后，东京再出大案。唐人街神探唐仁（王宝强 饰）、秦风（刘昊然 饰）受侦探野田昊（妻夫木聪 饰）的邀请前往破案。“CRIMASTER世界侦探排行榜”中的侦探们闻讯后也齐聚东京，加入挑战，而排名第一Q的现身，让这个大案更加扑朔迷离，一场亚洲最强神探之间的较量即将爆笑展开……'
      },
    ],
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
    phone:"18112345678"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.defaultSelected();
  },
  // 展开
  showPlot(e) {
    let index = e.currentTarget.dataset.index
    this.data.list[index].flag = !this.data.list[index].flag
    this.setData({
      list: this.data.list
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
  // item20
  reg:function(e){
    console.log(e.detail.value);
    wx.showToast({
        title: e.detail.value["cb"].join(","),//把cb的每一个原始转化为字符串,用,连接起来
        icon: "success",
        duration:2000
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