// watermark.js
Component({
  data: {
    // 这里是一些组件内部数据
    watermarkText: 'zhanghuan'
  },
  attached() {
    // 在组件实例进入页面节点树时执行
    // this.drowsyUserinfo()
    this.setData({
      watermarkText: 'zhanghuan'
    })
  }
})
