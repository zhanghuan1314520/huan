Page({
  data: {
    chooseImgs: [],
    textVal: '', // 文本域内容
    UploadImgs: [],// 外网的图片的路径数组
    showLoading: !1,
    questionId: "",
    items: [
      { value:'购房资格', checked: '' },
      { value:'贷款须知', checked: '' },
      { value:'买房困惑', checked: '' },
      { value:'刚需', checked: '' },
      { value:'摇号', checked: '' },
      { value:'落户', checked: '' },
      { value:'其他', checked: '' },
    ],
    arr: [], //标签数组：用来存储选中的值
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  // 预览图片
  previewImage: function (t) {
    var e = t.currentTarget.dataset || null, a = this.data.uploadImgs, n = a.filter(function (t) {
      return t.id == e.id;
    })[0] || null;
    if (n) {
      var i = a.map(function (t) {
        return t.imgUrl;
      });
      wx.previewImage({
        urls: i,
        current: n.imgUrl,
        fail: function (t) {
          console.error("预览图片时失败: ", t);
        }
      });
    }
  },
  // 问题类型选择
  //选择标签方法
  checkLabs(e) {
    var that = this,
      index = e.currentTarget.dataset.index,
      value = e.currentTarget.dataset.value,
      items = that.data.items,
      arr = that.data.arr,
      val = items[index].checked, //点击前的值
      limitNum = 3,
      curNum = 0; //已选择数量
    //选中累加
    for (var i in items) {
      if (items[i].checked) {
        curNum += 1;
      }
    }
    if (!val) {
      if (curNum == limitNum) {
        // wx.showModal({
        //   content: '选择数量不能超过' + limitNum + '个',
        //   showCancel: false
        // })
        wx.showToast({
          title: '选择数量不能超过' + limitNum + '个',
          icon: "none"
        })
        return;
      }
      arr.push(value);
    } else {
      for (var i in arr) {
        if (arr[i] == value) {
          arr.splice(i, 1);
        }
      }
    }
    items[index].checked = !val;
    that.setData({
      items: items,
      arr: arr
    })

  },
  // 选择照片
  handleChooseImg() {
    var t = this, e = this.data.chooseImgs;
    if (e.length >= 6) {
      wx.showToast({
        title: '最多可上传6张哦',
        icon: "none"
      })
    } else {
      // 调用小程序内部原则图片 api
      wx.chooseImage({
        // 同时选中图片的数量
        count: 9,
        // 图片的格式 原图 压缩
        sizeType: ['original', 'compressed'],
        // 图片的来源 相册 照相机
        sourceType: ['album', 'camera'],
        success: (result) => {
          console.log("result", result)
          this.setData({
            chooseImgs: [...this.data.chooseImgs, ...result.tempFilePaths]
          })
        }
      });
    }
  },
  // 点击删除图片
  handleRemoveImg(e) {
    console.log(e)
    // 获取被点击的组件索引
    const { index } = e.currentTarget.dataset;
    // 获取data中的图片数组
    let { chooseImgs } = this.data;
    // 删除元素
    chooseImgs.splice(index, 1);
    this.setData({
      chooseImgs
    })
  },
  // 文本域的输入事件
  handleTextInput(e) {
    console.log("输入的值", e)
    console.log("输入的值", e.detail.value)
    this.setData({
      textVal: e.detail.value
    })
  },
  // 提交事件
  handleFormSubmit: function () {
    var url = 'https://sbmf.ww2ss.com/app/ewei_shopv2_api.php?i=1&r=zhuanlan.ask.toggle';
    var textVal = this.data.textVal;
    var arr = this.data.arr;
    var chooseImgs = this.data.chooseImgs
    console.log("textVal", textVal)
    console.log("arr", arr)
    wx.request({
      url: url,
      data: {
        TypeTags:arr,
        Content: textVal,
        imgs:chooseImgs
      },
      success(res) {
        console.log("提交问题", res);
        wx.navigateTo({
          url: '/pages/page/p17/home'
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},
})