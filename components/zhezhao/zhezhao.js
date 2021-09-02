// components/zhezhao/zhezhao.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    top: {
      type: String,
      value: 'top'
    },
    height: {
      type: String,
      value: 'height'
    },
    onCancel: {
      type: String,
      value: '邀请好友'
    },
    onConfirm: {
      type: String,
      value: '马上开通会员'
    },
    showDialogBtn1: {
      type: String,
      value: '立即解锁'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 弹窗显示控制
    showModals: false,
    top:"",
    height:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
 /*
     * 公有方法
     */

    //隐藏弹框
    showDialogBtn1(){
      this.setData({
        showModals: !this.data.showModals
      })
    },
    //展示弹框
    showDialog(){
      this.setData({
        showModals: true
    })
    },
     /*
     * 内部私有方法建议以下划线开头
     * triggerEvent 用于触发事件
     */
    onCancel(){
      //触发取消回调
      this.triggerEvent("cancelEvent")
    },
    onConfirm(){
      //触发成功回调
      this.triggerEvent("confirmEvent");
    }
  }
})
