Page({
  /**
   * 页面的初始数据
   */
  data: {
    login: true,  //登录注册切换
    phonenumber: "",  //手机号
    password: "", //密码
    passwordack: "",//确认密码
    // code: "",//验证码
    login_phone: "", //登录手机号
    login_password: "",//登录密码
    send: false,
    alreadySend: false,
    second: 60,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({ //输入框数据存储
      key: 'login_phone',
      success: function (res) {
        that.setData({ login_phone: res.data })
      },
    })
    wx.getStorage({
      key: 'login_password',
      success: function (res) {
        that.setData({ login_password: res.data })
      },
    })
  },

  // 注册
  regist: function (e) {
    //前台验证
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
      //后台接口数据(服务器代码)
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
        url: axiosurl + '/bcapi/api/ipad/padManageUserParent/register', //注册接口地址
        data: {
          localPhone: that.data.phonenumber,
          password: that.data.password,
          passwordAgain: that.data.passwordack,
          verifyCode: that.data.code
        },
        method: "POST",
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
              //title: '验证码为空或不正确',
              title: res.data.actionMessages[0],
              icon: "none",
              duration: 2000
            })
          }
          else if (res.data.code == 1204) {
            wx.showToast({
              title: '该号码已注册,请登录!',
              icon: "none",
              duration: 2000
            })
          } else if (res.data.code == 0) {
            wx.showToast({
              title: '注册成功!',
              icon: "none",
              duration: 4000,
              mask: true
            })

            that.setData({
              login: true,
              login_phone: that.data.phonenumber,
              login_password: that.data.password
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

  //登录
  logins: function (e) {
    var that = this;
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/
    //表单数据
    var objData = e.detail.value;
    if (objData.login_phone && objData.login_password) {
      //异步方式储存表单数据
      wx.setStorage({
        key: 'login_phone',
        data: objData.login_phone,
      })
      wx.setStorage({
        key: 'login_password',
        data: objData.login_password,
      })
    }

    if (that.data.login_phone == '') {
      wx.showToast({
        title: '请输入手机号！',
        icon: "none",
        duration: 2000
      })
    } else if (that.data.login_phone.length != 11) {
      wx.showToast({
        title: '手机号有误，请重新输入!',
        icon: "none",
        duration: 2000
      })
    } else if (!myreg.test(that.data.login_phone)) {
      wx.showToast({
        title: '请输入正确的手机号！',
        icon: "none",
        duration: 2000
      })
    }
    else if (that.data.login_password == '') {
      wx.showToast({
        title: '请输入密码!',
        icon: "none",
        duration: 2000
      })
      //   判断是同意协议开始
    } else if (that.data.if_rem_user == undefined) {
      that.data.if_rem_user = false;
      wx.showToast({
        title: '请阅读并同意勾选下方协议!',
        icon: "none",
        duration: 2000
      })
    } else if (that.data.if_rem_user == false) {
      wx.showToast({
        title: '请阅读并同意勾选下方协议!',
        icon: "none",
        duration: 2000,
        mask: true
      })
    }
    //   判断是同意结束
    else {
    //后台接口数据
      let version = __wxConfig.envVersion;
      let axiosurl;
      // 版本判断
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
        url: axiosurl + '/bcapi/api/ipad/padManageUserParent/login',//登录接口地址
        method: "POST",
        data: {
          localPhone: that.data.login_phone,
          password: that.data.login_password
        },
        header: { "content-type": "application/x-www-form-urlencoded" },
        success: function (res) {
          // 判断code的情况
          if (res.data.code == 101) {
            wx.showToast({
              title: '手机号不能为空!',
              icon: "none",
              duration: 2000,
              mask: true
            })
          } else if (res.data.code == 1603) {
            wx.showToast({
              title: '手机号错误!',
              icon: "none",
              duration: 2000,
              mask: true
            })
          } else if (res.data.code == 1101) {
            wx.showToast({
              title: '账号或密码不正确!',
              icon: "none",
              duration: 2000
            })
          }
          else if (res.data.code == 0) {
            wx.setStorageSync('phone', res.data.data.user.phone);
            wx.setStorageSync('localPhone', res.data.data.user.localPhone);
            wx.showToast({
              title: "登录成功！",
              icon: "none",
              duration: 2000,
              mask: true,
              success() {
                setTimeout(() => {
                  wx.switchTab({
                    url: '/pages/index/index',
                  })
                }, 2000)
              }
            })
          }
        },
        fail: function (res) {
          wx.showToast({
            title: '网络不在状态!',
            icon: "none",
            duration: 2000,
            mask: true
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
      url: axiosurl + "/bcapi/api/sms/sendVerifyCode",
      data: {
        mobile: localPhone,
        companyType: 2
      },
      header: { "content-type": "application/x-www-form-urlencoded" },
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



//短信发送时间  60秒
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

  //注册  input输入事件
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
  //切换事件
  login: function () {
    this.setData({
      login: true
    });
  },
  register: function () {
    this.setData({
      login: false
    });
  },
  // 忘记密码跳转事件
  forget: function () {
    wx.navigateTo({
      url: '/pages/a28/forget_password/forget_password',
    })
  },
   // 服务协议跳转事件
  service_agreement: function () {
    wx.navigateTo({
      url: '/pages/service_agreement/index',
    })
  },
  // checkbox是否选中
  niming: function (e) {
    // console.log("判断是否选中", e)
    var flag = e.detail.value[0];
    if (flag === undefined) {
      flag = false;
    } else {
      flag = true;
    }
    this.setData({
      if_rem_user: flag,
    })
  }
})