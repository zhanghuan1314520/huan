Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled: true, //按钮状态
    username: "", //用户名
    password: "" //密码
  },



 //用户名事件
  username: function (e) {
    var val = e.detail.value;
    if (val != '') {
      this.setData({
        username: val
      });
      if(this.data.password != ''){
        this.setData({
          disabled:false
        })
      }
    }else{
      this.setData({
        disabled:true
      })
    }
  },
  //密码事件
  password: function (e) {
    var val = e.detail.value;
    if (val != '') {
      this.setData({
        password: val
      });
      if(this.data.username != ''){
        this.setData({
          disabled:false
        })
      }
    }else{
      this.setData({
        disabled:true
      })
    }
  },
})