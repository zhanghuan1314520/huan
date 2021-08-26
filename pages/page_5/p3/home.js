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
    data: {
        // 状态栏
        statusBarHeight: 0,
        navheight: 0,
        pagetop: 0,
        scrollTop: 0,
        numop: 0,

        index: '',
        color: '',
        currentTab: 0,

        diytitle: '',//标题
        id: '',//ID


        list: [
            { id: 1, title: '杭州成交套数榜', color: '#04C2FE', bgcolor: '#3b90e2', bgcolor2: '#60a8f0', bgcolor3: '#60a8f0', bgcolor4: '#74afe8', bgcolor5: '#74afe8', activebgc: '#0fb6f8', activebgc2: '#bdcaf8', nunbgcolor: "#04c2fe", tip: '30天内二手房成交套数数据', name: '楼盘', name2: '区域', name3: '套数', name4: '成交金额', name5: '均价', unit: '', unit2: '万元', unit3: '元/m²' },


            { id: 2, title: '杭州热点学区榜', color: '#04B38A', bgcolor: '#029b8b', bgcolor2: '#03ac8d', bgcolor3: '#03ac8d', bgcolor4: '#03a283', bgcolor5: '#03a283', activebgc: '#01aca4', activebgc2: '#04b48a', nunbgcolor: "#04b38a", tip: '30天内热点学区房数据', name: '重点学区', name2: '区域', name3: '套数', name4: '成交金额', name5: '均价', unit: '', unit2: '万元', unit3: '元/m²' },


            { id: 3, title: '杭州成交均价榜', color: '#EE825A', bgcolor: '#dc5949', bgcolor2: '#ed7756', bgcolor3: '#ed7756', bgcolor4: '#ed7755', bgcolor5: '#ed7755', activebgc: '#ce9390', activebgc2: '#e47b5c', nunbgcolor: "#ee825a", tip: '30天内二手房成交均价数据', name: '楼盘', name2: '区域', name3: '套数', name4: '成交金额', name5: '均价', unit: '', unit2: '万元', unit3: '元/m²' },


            { id: 4, title: '杭州成交库存榜', color: '#009DD4', bgcolor: '#45b3d8', bgcolor2: '#008ab8', bgcolor3: '#008dbe', bgcolor4: '#008aba', bgcolor5: '#008aba', activebgc: '#31aed8', activebgc2: '#369cc1', nunbgcolor: "#009dd4", tip: '30天内二手房成交库存数据', name: '区域', name2: '挂牌套数', name3: '挂牌均价', name4: '总金额', name5: '挂牌面积', unit: '(元/m²)', unit2: '亿元', unit3: '万/m²' },


            { id: 5, title: '杭州带看热度榜', color: '#FCA741', bgcolor: '#ef832a', bgcolor2: '#d78440', bgcolor3: '#f49035', bgcolor4: '#d98a43', bgcolor5: '#d98a43', activebgc: '#d8bea3', activebgc2: '#f2a544', nunbgcolor: "#fcab43", tip: '30天内二手房带看成交数据', name: '楼盘', name2: '带看', name3: '均价', name4: '套均面积', name5: '套均总价', unit: '(万元)', unit2: 'm²', unit3: '万元' },


            { id: 6, title: '杭州区域成交榜', color: '#BB7FFE', bgcolor: '#673df9', bgcolor2: '#8a5bfc', bgcolor3: '#9562fe', bgcolor4: '#905dfe', bgcolor5: '#905dfe', activebgc: '#9991bb', activebgc2: '#a770fc', nunbgcolor: "#bb7ffe", tip: '30天内二手房区域数据', name: '区域', name2: '成交套数', name3: '成交金额', name4: '成交均价', name5: '成交面积', unit: '(万元)', unit2: '元/m²', unit3: 'm²' },


            { id: 7, title: '杭州热点板块榜', color: '#FEB591', bgcolor: '#d76763', bgcolor2: '#f6907a', bgcolor3: '#f6907a', bgcolor4: '#f8987f', bgcolor5: '#f8977f', activebgc: '#ec898a', activebgc2: '#ef7144', nunbgcolor: "#feb591", name: '30天内二手房热点板块数据', name: '板块', name2: '成交套数', name3: '成交金额', name4: '成交均价', name5: '成交面积', unit: '(万元)', unit2: '元/m²', unit3: 'm²' },
        ],
      
        deallist: [
            {areaname:'钱塘ONE'},
            {areaname:'流水西苑'},
            {areaname:'龙湖紫金上城'},
            {areaname:'中南君奥时代'},
            {areaname:'钱塘ONE'},
            {areaname:'流水西苑'},
            {areaname:'龙湖紫金上城'},
            {areaname:'中南君奥时代'},
            {areaname:'钱塘ONE'},
            {areaname:'流水西苑'},
            {areaname:'龙湖紫金上城'},
            {areaname:'中南君奥时代'},
            {areaname:'钱塘ONE'},
            {areaname:'流水西苑'},
            {areaname:'龙湖紫金上城'},
            {areaname:'中南君奥时代'},
        ],
        items: [],

        time: '',
        multiArray: [years, months],
        multiIndex: [0, 9],
        choose_year: '',
        multiArray1: [],
        multiIndex1: 0,
        date: '2021-06', //默认结束时间 
        styleInd: 1
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (t) {
        var st = this;
        console.log("333", t)
        var id = t.id
        var ss = t.index
        var diytitle = st.data.list[ss].title
        var items = st.data.list[ss];//重点
        this.setData({
            // 状态栏的高度
            statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'] + 'px',
            // 胶囊的高度 也就是自定导航栏的高度
            navheight: wx.getMenuButtonBoundingClientRect()['height'] + 'px',
            // 状态栏加导航栏的高度 加上下的padding的高度 12
            pagetop: wx.getMenuButtonBoundingClientRect()['height'] + wx.getSystemInfoSync()['statusBarHeight'] + 12 + 'px',
        })
        this.getTimer()
        st.setData({
            show: 0,
            mid: t.mid,
            choose_year: st.data.multiArray[0][0], // //设置默认的年份
            index: ss,
            items: items,
            id: id,
            diytitle: diytitle
        })
    },
    onShow: function () {
        var t = this
        // 动态修改顶部状态栏标题
        wx.setNavigationBarTitle({
            title: t.data.diytitle
        })
    },
    getDateTimes: function (dt) {
        var st = this;
        st.setData({
            styleInd: 0,
            sdate: dt.detail.value,
            rankList: [],
            show: 0
        });
        st.listSwitch();

    },
    getDateTimee: function (dt) {
        var st = this;

        st.setData({
            styleInd: 0,
            edate: dt.detail.value,
            rankList: [],
            show: 0
        });
        st.listSwitch();
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
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        var st = this;
        var diytitle = st.data.diytitle
        var id = st.data.id
        console.log("diytitle", diytitle, "id", id)
        st.setData({
            diytitle: diytitle
        });
        var t = null, at = null;
        return diytitle && (t = '/house/rank_top/show/index?id=' + id, at = diytitle),
            a.onShareAppMessage(t, at);
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
    //返回
    back: function () {
        wx.navigateBack({
            delta: 1,
        })
    },
    onPageScroll(e) {//页面滚动就会触发
        this.setData({
            scrollTop: e.scrollTop
        })
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
})