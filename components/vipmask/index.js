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
    showDialogBtn2: {
      type: String,
      value: ''
    },
    member: {
      type: Object,
      value: null
    },
    vipShowed: {
      type: Boolean,
      value: false
    },
    typeid: {
      type: String,
      value: ''
    },
    typename: {
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
    showModalss: false,
    top: "",
    height: "",
    vipShowed: false, //控制遮罩层是否显示
    typeid: '',
    list: {},
    // member: {},
    status: ''
  },
  // ready: function () {
  //   var t = this
  //   console.log("this.data", t.data)
  // },
  // observers: {
  //   'typeid': function (typeid) {
  //     console.log("====typeid===", typeid)
  //     var t = this
  //     t.getVipmask();
     
  //   },
  // },
  // pageLifetimes: {
  //   show: function () {
  //     this.getVipmask();
  //     console.log("community.id", this.data.typeid)
  //   },
  // },
  methods: {
    // getInfo: function () {
    //   var e = this;
    //   a.get("member", {
    //     mid: this.data.mid
    //   }, function (a) {
    //     console.log("信息", a);
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
    //     typeid: this.data.typeid,
    //     typename: this.data.typename
    //   }, function (e) {
    //     console.log("查询会员权限", e)
    //     if (e.islook > 0) {
    //       t.setData({
    //         vipShowed: true,
    //         showModals: false,
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

    //   if (t.data.member.viplevel < 1) {

    //   }

    // },
    //消费余额
    // getPay: function (e) {
    //   var t = this;
    //   a.get("member.Vipmask_log.pay", {
    //     typeid: this.data.typeid,
    //     typename: this.data.typename
    //   }, function (e) {
    //     console.log("消费余额", e)
    //     t.setData({
    //       status: e.result.status
    //     })
    //     wx.showToast({
    //       title: e.result.message,
    //       icon: 'none'
    //     })
    //     t.getVipmask();
    //     t.getInfo();
    //   });
    // },
    // 余额不足
    getPay1: function () {
      var t = this;
      wx.showToast({
        title: '余额不足,邀请好友赚金币',
        icon: 'none'
      })
      this.setData({
        showModals: true
      })
    },
    //隐藏弹框
    showDialogBtn1() {
      this.setData({
        showModals: !this.data.showModals
      })
    },
 //隐藏弹框
 showDialogBtn2() {
  this.setData({
    showModalss: !this.data.showModalss
  })
},

    //展示弹框
    showDialog() {
      this.setData({
        showModals: true
      })
    },
    showDialog() {
      this.setData({
        showModalss: true
      })
    },
    onCancel() {
      //触发取消回调
      this.triggerEvent("cancelEvent")
    },
    onConfirm() {
      //触发成功回调
      this.triggerEvent("confirmEvent");
    },
    ok:function () {
      this.setData({
        showModalss:false
      })
    },
    ok1:function () {
      this.setData({
        showModals:false
      })
    }
  },
})
