Page({

  /**
   * 页面的初始数据
   */
  data: {
    phonenumber: "",  //手机号
    password: "", //密码
    passwordack: "",//确认密码
    send: false,
    code:"",
    alreadySend: false,
    second: 60,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
  },

  // 修改密码
  ForgetPassword: function (e) {
    var that = this;
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/
    if (that.data.phonenumber == '') {
      wx.showToast({
        title: '请输入手机号!',
        icon: "none",
        duration: 2000,
        mask: true
      })
    } else if (that.data.phonenumber.length != 11) {
      wx.showToast({
        title: '手机号不正确，请重新输入!',
        icon: "none",
        duration: 2000,
        mask: true
      })
    } else if (!myreg.test(that.data.phonenumber)) {
      wx.showToast({
        title: '请输入正确的手机号!',
        icon: "none",
        duration: 2000,
        mask: true
      })
    } else if (that.data.code == '') {
      wx.showToast({
        title: '请输入验证码',
        icon: "none",
        duration: 2000,
        mask: true
      })
    }
    else if (that.data.password == '') {
      wx.showToast({
        title: '请输入密码!',
        icon: "none",
        duration: 2000,
        mask: true
      })
    } else if (that.data.passwordack == '') {
      wx.showToast({
        title: '请再次输入密码',
        icon: "none",
        duration: 2000,
        mask: true
      })
    } else if (that.data.password != that.data.passwordack) {
      wx.showToast({
        title: '两次密码输入不一致，请重新输入！',
        icon: "none",
        duration: 2000,
        mask: true
      })
    }
    else {

      let version = __wxConfig.envVersion;
      let axiosurl;
      switch (version) {
        case "develop": //开发预览版
          axiosurl = "https://1z74t80660.51mypc.cn";
          break;
        case 'trial': //体验版
          axiosurl = "https://1z74t80660.51mypc.cn";
          break;
        // break;
        case 'release': //正式版
          axiosurl = "https://wx.bucuonet.com";
          break;
        default: //未知,默认调用正式版
          axiosurl = "https://wx.bucuonet.com";
          break;
      }

      //服务器代码
      console.log("----------------", that.data)
      wx.request({
        url: axiosurl + '/bcapi/api/ipad/padManageUserParent/forgetPassword',
        method: "POST",
        data:{
          localPhone:that.data.phonenumber,
          newPassword:that.data.password,
          passwordAgain:that.data.passwordack,
          verifyCode:that.data.code
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          console.log("数据", res.data)
          // 判断code的情况
          if (res.data.code == 101) {
            wx.showToast({
              title: '该账号不存在!',
              icon: "none",
              duration: 2000
            })
          } else if (res.data.code == 1603) {
            wx.showToast({
              title: '手机号错误!',

              icon: "none",
              duration: 2000
            })
          } else if (res.data.code == 1308) {
            wx.showToast({
              title: '两次密码输入不一致，请重新输入！',
              icon: "none",
              duration: 2000
            })
            } else if (res.data.code == 1605) {
              wx.showToast({
                title: res.data.actionMessages[0],
                icon: "none",
                duration: 2000
              })
          }
          else if (res.data.code == 1610) {
            wx.showToast({
              title: '该账号未注册!',
              icon: "none",
              duration: 2000
            })
          } else if (res.data.code == 0) {
            wx.showToast({
              title: '修改成功!',
              icon: "none",
              duration: 4000,
              mask: true,
              success: function () {
                setTimeout(function () {
                  wx.navigateBack({
                    delta: 1,
                  })
                }, 2000)
              }
            })

            that.setData({
              login: true
            })

          }
        },
        fail: function (res) {
          wx.showToast({
            title: '网络不在状态!',
            icon: "none",
            duration: 2000
          })
        }
      })
    }
  },

  showSendMsg: function () {
    if (!this.data.alreadySend) {
      this.setData({
        send: true
      })
    }
  },

  hideSendMsg: function () {
    this.setData({
      send: false,
      disabled: true,
      buttonType: 'default'
    })
  },

  //发送验证码
  sendMsg: function () {
    var localPhone = wx.getStorageSync('localPhone');
    let version = __wxConfig.envVersion;
    let axiosurl;
    switch (version) {
      case "develop": //开发预览版
        axiosurl = "https://1z74t80660.51mypc.cn";
        break;
      case 'trial': //体验版
        axiosurl = "https://1z74t80660.51mypc.cn";
        break;
      // break;
      case 'release': //正式版
        axiosurl = "https://wx.bucuonet.com";
        break;
      default: //未知,默认调用正式版
        axiosurl = "https://wx.bucuonet.com";
        break;
    }
    wx.request({
      url: axiosurl + "/bcapi/api/sms/sendVerifyCode?mobile=" + localPhone + "&companyType=2",
      method: 'POST',
      success: function (res) {
        console.log(res)
      }
    })
    this.setData({
      alreadySend: true,
      send: false
    })
    this.timer()
  },

  timer: function () {
    let promise = new Promise((resolve, reject) => {
      let setTimer = setInterval(
        () => {
          this.setData({
            second: this.data.second - 1
          })
          if (this.data.second <= 0) {
            this.setData({
              second: 60,
              alreadySend: false,
              send: true
            })
            resolve(setTimer)
          }
        }
        , 1000)
    })
    promise.then((setTimer) => {
      clearInterval(setTimer)
    })
  },

  //注册
  phonenumberInput: function (e) {
    this.data.phonenumber = e.detail.value
    if (this.data.phonenumber.length === 11) {
      let checkedNum = this.checkPhoneNum(this.data.phonenumber)
      if (checkedNum) {
        this.setData({
          phonenumber: this.data.phonenumber
        })
        console.log('========phonenumber=====' + this.data.phonenumber)
        this.showSendMsg()
      }
    } else {
      this.setData({
        phonenumber: ''
      })
      this.hideSendMsg()
    }
  },
  checkPhoneNum: function (phonenumber) {
    let str = /^1\d{10}$/
    if (str.test(phonenumber)) {
      return true
    } else {
      wx.showToast({
        title: '手机号不正确',
        icon: "none"
      })
      return false
    }
  },


  passwordInput: function (e) {
    this.data.password = e.detail.value
  },
  passwordInputAck: function (e) {
    this.data.passwordack = e.detail.value
  },
  addCode: function (e) {
    this.data.code = e.detail.value
  },
  //登录
  phoneInput: function (e) {
    this.data.login_phone = e.detail.value
  },
  pswInput: function (e) {
    this.data.login_password = e.detail.value
  },
})