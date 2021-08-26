// components/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {           
      type: String,
      value: '标题'
    },
    picture: {
      type: String,
      value: '图片'
    },
    addr: {
      type: String,
      value: '地址'
    },
    minPrice: {
      type: String,
      value: '价格'
    },
    num: {
      type: Number,
      value: 2 //排名
    },
    time:{
      type: String,
      value: '日期'
    },
    tabs:{
      type:Array,
      value:[]
    },
    m1:{
      type: String,
      value: '正在登记'
    },
    m2:{
      type: String,
      value: '开始和结束结束'
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

  }
})
