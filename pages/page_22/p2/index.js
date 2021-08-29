Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    nowText: '120000',
    homelistkey: [{
        id: 0,
        homeName: '小海',
        homeId: '120000',
        onClick: false,
        isMain: 1,
        dataList: [{
          id: 10,
          userPhone: 11111111111,
          userNickname: '用户名',
          onClick: false,
          listItem: [{
            id: 100,
            userPhone: '1-1-1689-1-1-1-',
            userNickname: '12-91用户名',
          }]
        }, {
          id: 11,
          userPhone: 12121212121,
          userNickname: '用户名_22',
            onClick: false,
          listItem: [{
            id: 101,
            userPhone: '1-1-19031-1-1-1-',
            userNickname: '1-0231用户名',
          }]
        }]
      },
      {
        id: 1,
        homeName: '张三',
        homeId: '1223400',
        onClick: false,
        isMain: 0,
        dataList: [{
          id: 12,
          userPhone: 232323232323,
          userNickname: '用户名_57',
          onClick: false,
          listItem: [{
            id: 102,
            userPhone: '1-1-1594-1-1-1-',
            userNickname: '167用户名',
          }]
        }, {
          id: 13,
          userPhone: 45454545454,
          userNickname: '用户名_231',
            onClick: false,
          listItem: [{
            id: 103,
            userPhone: '1-1-156-1-1-1-',
            userNickname: '1-561用户名',
          }]
        }]
      },
      {
        id: 2,
        homeName: '李四',
        homeId: '230000',
        onClick: false,
        isMain: 0,
        dataList: [{
          id: 14,
          userPhone: 16767676767,
          userNickname: '用户名',
          onClick: false,
          listItem: [{
            id: 104,
            userPhone: '1-1-1331-1-1-1-',
            userNickname: '1331用户名',
          }]
        }, {
          id:15,
          userPhone: 13434556789,
          userNickname: '用户名_21',
            onClick: false,
          listItem: [{
            id: 105,
            userPhone: '1-1-1-22-1-1-1-',
            userNickname: '1-22用户名',
          }]
        }]
      }
    ]
  },
  homepasswordInput: function(e) {
    this.setData({
      homePassword: e.detail.value
    })
  },
  //家庭新增人员
  nickNameInput: function(e) {
    this.setData({
      nickName: e.detail.value
    })
  },
  //新的成员名称
  updatenickNameInput: function(e) {
    this.setData({
      updatenickName: e.detail.value
    })
  },
  /**
   * cell绑定事件,删除触发(删除家庭成员以及家庭)
   */
  deleteAction: function(e) {},
  /**
   * cell绑定事件,滑动触发
   */
  slideAction: function(e) {
    //拿到角标
    var row = e.detail.row;
    //获取角标cell
    var slideSender = this.selectComponent("#slideitem-" + row);
    //在data中定义lastSlideSender 属性,用户记录上一个打开的cell
    var lastSlideSender = this.data.lastSlideSender;
    //如果存在已经打开的cell则关闭
    if (lastSlideSender != null && lastSlideSender != slideSender) {
      lastSlideSender.restoreSalid();
    }
    this.setData({
      lastSlideSender: slideSender
    })
  },
  //查询每个家庭的家庭成员
  onTap: function(e) {
    var range = [];
    var range1 = [];
    var r;
    var key = e.currentTarget.dataset.ide;
    let homelistkey = this.data.homelistkey;
    var homeid = e.currentTarget.dataset.homeid;
    var userphone = e.currentTarget.dataset.userphone;
    homelistkey[key].onClick = !homelistkey[key].onClick;
    this.setData({
      homelistkey
    });
  },
  clickItem(e) {
    console.log("这里是子集");
    let that=this;
    const{homelistkey}=that.data;
    var id = e.currentTarget.dataset.id;   
    homelistkey.forEach(item=>{
      item.dataList.forEach(ite => {
        if (ite.id == id) {
          ite.onClick = !ite.onClick;
        }
      })
    })
    console.log(homelistkey);
    that.setData({
      homelistkey
    });
  },
 
  alertMessage: function() {
    this.setData({
      showModal: true
    })
  },
  bindPickerChange: function(e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
 
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
 
  },
 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
 
  },
  addHomePersion(e) {
    var globalId = e.currentTarget.dataset.globalid;
    //console.log(globalId);
    this.setData({
      showModal: true,
      globalId
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
 
  },
 
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
 
  },
 
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
 
  },
 
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
 
  },
 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
 
  }
})