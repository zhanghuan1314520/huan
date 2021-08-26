
const date = new Date();
const years = [];
const months = [];
//获取年
for (let i = 2018; i <= date.getFullYear() + 3; i++) {
  years.push("" + i);
}
//获取月份
for (let i = 1; i <= 12; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  months.push("" + i);
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    deallist: [],
    rankSwitch: '',
    sendList: [],
    ArrayColumnList: [{
      //套数列
      columnList: [{
        label: "排行",
        width: 60,
        render: function render(value, index) {
          console.log();
        }
      }, {
        label: "楼盘",
        value: "n",
        width: 200,
        showOverflowTooltip: true
      }, {
        label: "区域",
        value: "district_name",
        width: 170,
        showOverflowTooltip: true
      }, {
        label: "套数",
        value: "d_cnt",
        width: 120
      }, {
        label: "成交金额",
        subLabel: "(万元)",
        value: "s_tprice",
        width: 120
      }, {
        label: "均价",
        subLabel: "(元/㎡)",
        value: "d_cnt",
        width: 120
      }]
    }, {
      //学区列
      columnList: [{
        label: "排行",
        width: 60,
        render: function render(value, index) {
          console.log();
        }
      }, {
        label: "重点学区",
        value: "n",
        width: 200,
        showOverflowTooltip: true
      }, {
        label: "区域",
        value: "district_name",
        width: 170,
        showOverflowTooltip: true
      }, {
        label: "套数",
        value: "d_cnt",
        width: 120
      }, {
        label: "成交金额",
        subLabel: "(万元)",
        value: "s_tprice",
        width: 120
      }, {
        label: "均价",
        subLabel: "(元/㎡)",
        value: "d_cnt",
        width: 120
      }]
    }, {
      //均价列
      columnList: [{
        label: "排行",
        width: 60,
        render: function render(value, index) {
          console.log();
        }
      }, {
        label: "楼盘",
        value: "n",
        width: 200,
        showOverflowTooltip: true
      }, {
        label: "区域",
        value: "district_name",
        width: 170,
        showOverflowTooltip: true
      }, {
        label: "套数",
        value: "d_cnt",
        width: 120
      }, {
        label: "成交金额",
        subLabel: "(万元)",
        value: "s_tprice",
        width: 120
      }, {
        label: "均价",
        subLabel: "(元/㎡)",
        value: "d_cnt",
        width: 120
      }]
    }, {
      //库存
      columnList: [{
        label: "排行",
        width: 60
      }, {
        label: "区域",
        value: "n",
        width: 200,
        showOverflowTooltip: true
      }, {
        label: "挂牌套数",
        value: "d_cnt",
        width: 120
      }, {
        label: "挂牌均价",
        subLabel: "(元/㎡)",
        value: "avg_price",
        width: 120
      }, {
        label: "总金额",
        subLabel: "(亿元)",
        value: "s_tprice",
        width: 120
      }, {
        label: "挂牌面积",
        subLabel: "(万㎡)",
        value: "s_area",
        width: 120
      }]
    }, {
      //带看
      columnList: [{
        label: "排行",
        width: 60
      }, {
        label: "楼盘",
        value: "n",
        width: 200,
        showOverflowTooltip: true
      }, {
        label: "带看",
        value: "d_cnt",
        width: 120
      }, {
        label: "均价",
        subLabel: "(万元)",
        value: "s_tprice",
        width: 120
      }, {
        label: "套均面积",
        subLabel: "(㎡)",
        value: "avg_price",
        width: 120
      }, {
        label: "套均总价",
        subLabel: "(万元)",
        value: "s_area",
        width: 120
      }]
    }, {
      //区域成交
      columnList: [{
        label: "排行",
        width: 60
      }, {
        label: "区域",
        value: "n",
        width: 200,
        showOverflowTooltip: true
      }, {
        label: "成交套数",
        value: "d_cnt",
        width: 120
      }, {
        label: "成交金额",
        subLabel: "(万元)",
        value: "s_tprice",
        width: 120
      }, {
        label: "成交均价",
        subLabel: "(元/㎡)",
        value: "avg_price",
        width: 120
      }, {
        label: "成交面积",
        subLabel: "(㎡)",
        value: "s_area",
        width: 120
      }]
    }, {
      //板块成交
      columnList: [{
        label: "排行",
        width: 60
      }, {
        label: "板块",
        value: "n",
        width: 200,
        showOverflowTooltip: true
      }, {
        label: "成交套数",
        value: "d_cnt",
        width: 120
      }, {
        label: "成交金额",
        subLabel: "(万元)",
        value: "s_tprice",
        width: 120
      }, {
        label: "成交均价",
        subLabel: "(元/㎡)",
        value: "avg_price",
        width: 120
      }, {
        label: "成交面积",
        subLabel: "(㎡)",
        value: "s_area",
        width: 120
      }]
    }],
    //暂时没用---区域板块环线价格段面积段的详细楼盘列
    rankList: [],
    sdate: '2019-06-01',
    edate: '2019-07-31',
    onswitch: 0,
    islogin: 'no',
    show: 0,
    member: {},
    mid: 0,


    time: '',
    multiArray: [years, months],
    multiIndex: [0, 9],
    choose_year: '',

    multiArray1: [],
    multiIndex1: 0,

    date: '2021-06', //默认结束时间 

    styleInd: 1
  },

  onClick: function (dt) {
    var st = this;
    var onswitch = dt.detail.key;

    st.setData({
      rankList: st.data.ArrayColumnList[onswitch].columnList,
      deallist: [],
      onswitch: onswitch,
      show: 0
    });
    st.listSwitch();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (t) {
    var st = this;
    this.listSwitch();
    this.getTimer();
    st.setData({
      mid: t.mid,
      choose_year: st.data.multiArray[0][0] // //设置默认的年份
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
  onClick: function (dt) {
    var st = this;
    var onswitch = dt.detail.key;

    st.setData({
      rankList: st.data.ArrayColumnList[onswitch].columnList,
      deallist: [],
      onswitch: onswitch,
      show: 0
    });
    st.listSwitch();
  },
  listSwitch: function () {
    var t = this;
    t.setData({
      rankList: t.data.ArrayColumnList[t.data.onswitch].columnList
    });
    var url = 'https://sbmf.ww2ss.com/app/ewei_shopv2_api.php?i=1&r=datafang.get_rankSwitch';
    wx.request({
      url: url,
      data: {
        sdate: t.data.sdate,
        edate: t.data.edate,
        // onswitch: t.data.onswitch,
        // onswitch: 0,
        // sdate: '2021-08-02',
        // edate: '2021-08-08',
        onswitch: 2,
        weekDate: t.data.multiArray1[t.data.multiIndex1],
        monthDate: t.data.monthDate
      },
      success(res) {
        console.log(res)
        t.setData({
          deallist: res.data.list
        })
      }
    })


  },
  getDateTimes: function (dt) {
    var st = this;

    if (st.data.islogin == 'no') {
      wx.showToast({
        title: '不能查询哦!',
        duration: 3000
      })
      wx.navigateTo({
        url: "../../pages/member/membercard/index"
      });
    } else {
      if (dt.detail.value > st.data.edate) {
        wx.showToast({
          title: '日期错了!',
          duration: 3000
        })
        return;
      }
      st.setData({
        styleInd: 0,
        sdate: dt.detail.value,
        rankList: [],
        show: 0
      });
      st.listSwitch();
    }

  },
  getDateTimee: function (dt) {
    var st = this;
    //console.log(st.data.member);
    if (st.data.member.error == 10003 || parseInt(st.data.member.viplevel) < 4) {
      e.vipmsgbox("手边层楼豪华版(年卡)");
      return;
    }

    if (st.data.islogin == 'no') {
      wx.showToast({
        title: '不能查询哦!',
        duration: 3000
      })
      wx.navigateTo({
        url: "../../pages/member/membercard/index"
      });
    } else {
      if (dt.detail.value < st.data.sdate) {
        wx.showToast({
          title: '日期错了!',
          duration: 3000
        })
        return;
      }
      st.setData({
        styleInd: 0,
        edate: dt.detail.value,
        rankList: [],
        show: 0
      });

      st.listSwitch();
    }
  },
  getDay: function (day) {
    var t = this;
    var today = new Date();
    var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
    today.setTime(targetday_milliseconds); //注意，这行是关键代码
    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();
    tMonth = t.doHandleMonth(tMonth + 1);
    tDate = t.doHandleMonth(tDate);
    return tYear + "-" + tMonth + "-" + tDate;
  },
  doHandleMonth: function (month) {
    var m = month;
    if (month.toString().length == 1) {
      m = "0" + month;
    }
    return m;
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
  goCommunity: function goPage(dt) {
    var sobj = dt.currentTarget.dataset.sobj;
    if (sobj.cid) {
      wx.navigateTo({
        url: "/house/community/index?cid=" + sobj.cid
      });
    } else if (sobj.schoolid) {
      var dc = {
        id: sobj.schoolid,
        title: sobj.title,
        ftype: "4",
        loanCount: ""
      };
      getApp().globalData.dtsearch = dc;
      wx.switchTab({
        url: "/house/market/index"
      });
    } else {
      return;
    }

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
    var st = this;

    st.setData({
      diytitle: '杭州二手房上周成交套数排行榜'
    });

    var t = null,
      at = null;
    return this.data.diytitle && (t = '/house/rank/index', at = this.data.diytitle),
      a.onShareAppMessage(t, at); // onShareAppMessage -->  e.requirejs("core"),


  },
  close: function () {
    e.globalDataClose.flag = !0, wx.reLaunch({
      url: "/pages/message/auth/index"
    });
  },

  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value,
    })

  },
  // 月开始
  //获取时间日期
  bindMultiPickerChange: function (e) {

  },
  //监听picker的滚动事件
  bindMultiPickerColumnChange: function (e) {
    //获取年份
    if (e.detail.column == 0) {
      let choose_year = this.data.multiArray[e.detail.column][e.detail.value];
      console.log(choose_year);
      this.setData({
        choose_year
      })
    }

    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    if (e.detail.column == 1) {
      let num = parseInt(this.data.multiArray[e.detail.column][e.detail.value]);
      let temp = [];
      if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12) { //判断31天的月份
        for (let i = 1; i <= 31; i++) {
          if (i < 10) {
            i = "0" + i;
          }
          temp.push("" + i);
        }
        this.setData({
          ['multiArray[2]']: temp
        });
      } else if (num == 4 || num == 6 || num == 9 || num == 11) { //判断30天的月份
        for (let i = 1; i <= 30; i++) {
          if (i < 10) {
            i = "0" + i;
          }
          temp.push("" + i);
        }
        this.setData({
          ['multiArray[2]']: temp
        });
      } else if (num == 2) { //判断2月份天数
        let year = parseInt(this.data.choose_year);
        console.log(year);
        if (((year % 400 == 0) || (year % 100 != 0)) && (year % 4 == 0)) {
          for (let i = 1; i <= 29; i++) {
            if (i < 10) {
              i = "0" + i;
            }
            temp.push("" + i);
          }
          this.setData({
            ['multiArray[2]']: temp
          });
        } else {
          for (let i = 1; i <= 28; i++) {
            if (i < 10) {
              i = "0" + i;
            }
            temp.push("" + i);
          }
          this.setData({
            ['multiArray[2]']: temp
          });
        }
      }
      console.log(this.data.multiArray[2]);
    }
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    this.setData(data);
  },

  // 月开始 
  bindDateChange(d) {
    var t = this;
    var val = d.detail.value


    //console.log(st.data.member);
    if (t.data.member.error == 10003 || parseInt(t.data.member.viplevel) < 2) {
      e.vipmsgbox("专业版年卡");
      return;
    }

    const arr = val.split("-");
    const days = (new Date(arr[0], arr[1], 0)).getDate(); //获取当月天数
    const dateArr = [`${arr[0]}-${arr[1]}-1`, `${arr[0]}-${arr[1]}-${days}`]
    t.setData({
      styleInd: 2,
      date: val,
      sdate: dateArr[0],
      edate: dateArr[1]
    }, () => {
      this.listSwitch()
    })
  },
  //月结束
  // 周开始
  getTimer() {
    let time = new Date() // 获取当前时间
    let nowTime = time.getTime()
    let month = time.getMonth()
    console.log("month", month, nowTime)
    let day = time.getDay()
    console.log("day", day)
    let oneDayTime = 24 * 60 * 60 * 1000; // 一天的时间
    let MondayTime = nowTime - (day - 1) * oneDayTime; //显示当前周一
    let SundayTime = nowTime + (7 - day) * oneDayTime; //显示当前周日
    let list = [] // 初始化一个空数组
    for (let i = 1; i < 40; i++) {

      list.push(this.setTime(MondayTime - 7 * i * oneDayTime) + '-' + this.setTime(SundayTime - 7 * i * oneDayTime))
    }
    let arr = (list[0]).split("-")
    arr.forEach((item, index) => {
      let arr1 = item.split(/[\u4e00-\u9fa5]/g)
      arr[index] = `${arr1[0]}-${arr1[1]}-${arr1[2]}`
    })
    this.setData({
      sdate: arr[0],
      edate: arr[1],
      multiArray1: list
    })
  },
  setTime(time) {
    // 将time时间戳 先格式化一下
    let date = new Date(time)
    let yy = date.getFullYear()
    let m = date.getMonth() + 1
    let day = date.getDate()
    let str = yy + '年' + (m < 10 ? '0' + m : m) + '月' + (day < 10 ? '0' + day : day) + '日'
    // let str = (m < 10 ? '0' + m : m) + '月' + (day < 10 ? '0' + day : day) + '日'
    return str
  },
  bindMultiPickerChange1: function (d) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    var st = this
    if (st.data.member.error == 10003 || parseInt(st.data.member.viplevel) < 2) {
      e.vipmsgbox("专业版年卡");
      return;
    }
    this.setData({
      multiIndex1: d.detail.value
    }, () => {
      //yyyy年mm月dd日转换为yyyy-mm-dd
      let arr = (this.data.multiArray1[this.data.multiIndex1]).split("-")
      arr.forEach((item, index) => {
        let arr1 = item.split(/[\u4e00-\u9fa5]/g)
        arr[index] = `${arr1[0]}-${arr1[1]}-${arr1[2]}`
      })
      console.log(arr)
      this.setData({
        styleInd: 1,
        sdate: arr[0],
        edate: arr[1]
      }, () => {
        this.listSwitch()
      })
    })

  },
  // 周结束
})