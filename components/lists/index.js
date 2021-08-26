// components/newhouseList/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      value: {}
    },
    date: {
      type: String,
      value: ""
    },
    saleStatus: {
      type: String,
      value: ""
    }

  },

  /**
   * 组件的初始数据
   */
  data: {


  },

  /**
   * 组件的方法列表
   */
  methods: {
    tofloorDis(e) {
      wx.navigateTo({
        url:'/pages/page_14/p3/home?id='+e.currentTarget.dataset.id
      })
    }
  }
})
