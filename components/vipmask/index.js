// components/zhezhao/zhezhao.js

// var t = getApp(),
//   a = t.requirejs("core");


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
    showDialogBtn1: {
      type: String,
      value: ''
    },
    member: {
      type: Object,
      value: null
    },
    vipShowed: {
      type: Boolean,
      value: ''
    },
    typeid: {
      type: String,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 弹窗显示控制里面
    showModals: false,
    top: "",
    height: "",
    vipShowed: false, //控制遮罩层是否显示
    typeid: '',
    list: {},
    member: {},
    status:''
  },
  ready: function () {
  //   this.getVipmask();
  //  this.getInfo();
   console.log("this.data",this.data)
  },
  lifetimes: {
    attached: function () {
    }
  },
  methods: {
    // getInfo: function () {
    //   var e = this;
    //   a.get("member", {
    //     mid: this.data.mid
    //   }, function (a) {
    //     console.log("信息",a);
    //     1 == a.isblack && wx.showModal({
    //       title: "无法访问",
    //       content: "系统升级中，不能访问！",
    //       success: function (a) {
    //         a.confirm && e.close(), a.cancel && e.close();
    //       }
    //     }), e.setData({ member: a });
    //   });
    // },
    // 会员权限查询
    // getVipmask: function () {
    //   var t = this;
    //   a.get("member.Vipmask_log.get_look", {
    //     typeid: this.data.typeid
    //   }, function (e) {
    //     console.log("查询会员权限", e)
    //     if (e.islook > 0) {
    //       t.setData({
    //         vipShowed: true
    //       })
    //     } else {
    //       t.setData({
    //         vipShowed: false
    //       })
    //       t.setData({
    //         list: e.list
    //       })
    //     }
    //   });
  
    // },
    //消费余额
    // getPay: function (e) {
    //   var t = this;
    //   a.get("member.Vipmask_log.pay", {
    //     typeid: this.data.typeid
    //   }, function (e) {
    //     console.log("消费余额", e)
    //     t.setData({
    //       status:e.status
    //     })
    //       t.getVipmask();
    //   });
    // },
    //隐藏弹框
    showDialogBtn1() {
      this.setData({
        showModals: !this.data.showModals
      })
    },
    //展示弹框
    showDialog() {
      this.setData({
        showModals: true
      })
    },
    onCancel() {
      //触发取消回调
      this.triggerEvent("cancelEvent")
    },
    onConfirm() {
      //触发成功回调
      this.triggerEvent("confirmEvent");
    }
  }
})
