Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    tabs_block: {
      type: null,
      value: [{
          text: '首页',
          style: 1,
          icon: '/images/tab/tab_1.png',
          iconed: '/images/tab/tab_1_ed.png',
          fn: 'gotoIndex'
        },
        {
          text: '发现',
          style: 0,
          icon: '/images/tab/tab_2.png',
          iconed: '/images/tab/tab_2_ed.png',
          fn: 'gotoFind'
        },
        {
          text: '',
          style: 3,
          icon: '',
          fn: 'gotoScan'
        },
        {
          text: '圈子',
          style: 0,
          icon: '/images/tab/tab_4.png',
          iconed: '/images/tab/tab_4_ed.png',
          fn: 'gotoFriends'
        },
        {
          text: '我的',
          style: 0,
          icon: '/images/tab/tab_5.png',
          iconed: '/images/tab/tab_5_ed.png',
          fn: 'gotoMy'
        }
      ],
    },
    activeIndex: {
      type: Number,
      value: 0,
      observer: function(newVal, oldVal) {}
    }
  },

  methods: {
    tabClick: function(e) {
      this.setData({
        activeIndex: e.currentTarget.id,
      });
      if (e.currentTarget.id == 2){
        wx.scanCode({
          success(res) {
            console.log(res)
            wx.navigateTo({
              url: '/pages/scansuccess/scansuccess?result=' + res.result
            })
          }
        })
      }
    }
  }
})