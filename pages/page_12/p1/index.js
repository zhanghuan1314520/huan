const app = getApp()

Page({
  data: {
    checkboxArr: [
      {
        checked: false,//是否选中
        id: "1",//部门能id
        name: "部门1",
      },
      {
        checked: false,//是否选中
        id: "2",//部门能id
        name: "部门2",
      },
      {
        checked: false,//是否选中
        id: "3",//部门能id
        name: "部门3",
      },
      {
        checked: false,//是否选中
        id: "4",//部门能id
        name: "部门4",
      },
      {
        checked: false,//是否选中
        id: "5",//部门能id
        name: "部门5",
      },
      {
        checked: false,//是否选中
        id: "6",//部门能id
        name: "部门6",
      },
      {
        checked: false,//是否选中
        id: "7",//部门能id
        name: "部门7",
      },
      {
        checked: false,//是否选中
        id: "8",//部门能id
        name: "部门8",
      },
      {
        checked: false,//是否选中
        id: "9",//部门能id
        name: "部门9",
      },
      {
        checked: false,//是否选中
        id: "10",//部门能id
        name: "部门10",
      },
      {
        checked: false,//是否选中
        id: "11",//部门能id
        name: "部门11",
      },
      {
        checked: false,//是否选中
        id: "12",//部门能id
        name: "部门12",
      },
      {
        checked: false,//是否选中
        id: "13",//部门能id
        name: "部门13",
      },
      {
        checked: false,//是否选中
        id: "14",//部门能id
        name: "部门14",
      },
      {
        checked: false,//是否选中
        id: "15",//部门能id
        name: "部门15",
      },
    ],//部门列表
    personnelArr: null,//人员列表
    checkValue: [],//部门
    depValue: [],//部门
    isDep: false,//部门显隐
    isPer: false,//成员显隐
    d_id: [],//部门id集合
    u_id: [],//人员集合
    words: null,//成员名称的手写字母
  },

  //控制部门的显隐
  isDep: function () {
    this.setData({
      isDep: true,
    })
  },
  
  //控制人员显隐
  isPer: function () {
    this.setData({
      isPer: true,
    })
  },

  //取消按钮
  cancel: function () {
    this.setData({
      isDep: false,
      isPer: false
    })
  },

  //人员
  checkPer: function (e) {
    var index = e.currentTarget.dataset.index;//获取当前点击的下标
    var ind = e.currentTarget.dataset.itemnameind;//获取当前点击的下标
    var personnelArr = this.data.personnelArr;//选项集合
    personnelArr[ind].a[index].checked = !personnelArr[ind].a[index].checked;//改变当前选中的checked值

    // var u_id = this.data.u_id;//获取data中的成员id集合
    // var id = personnelArr[ind].a[index].id;//获取选中的成员id
    //  //判断，当前选中的这个值的checked是不是已经选中，如果是则将id放入选中成员id集合，反之则移除
    // if (personnelArr[ind].a[index].checked) {
    //   u_id.push(id);
    // } else {
    //   this.removeByValue(u_id, id);
    // }

    this.setData({
      personnelArr: personnelArr
    });
  },
  checkBoxPer: function (e) {
    var depValue = e.detail.value;
    this.setData({
      depValue: depValue
    });
  },
  confirmPer: function () {// 提交
    this.setData({
      isPer: false,
    })
  },

  //部门
  checkbox: function (e) {
    var index = e.currentTarget.dataset.index;//获取当前点击的下标
    var checkboxArr = this.data.checkboxArr;//选项集合
    checkboxArr[index].checked = !checkboxArr[index].checked;//改变当前选中的checked值

    //如果需要部门联动成员
    // var d_id = this.data.d_id;//获取data中的部门id集合
    // var id = checkboxArr[index].id;//获取选中的部门id
    // //判断，当前选中的这个值的checked是不是已经选中，如果是则将id放入选中部门id集合，反之则移除
    // if (checkboxArr[index].checked) {
    //   d_id.push(id);
    // } else {
    //   this.removeByValue(d_id, id);
    // }

    this.setData({
      checkboxArr: checkboxArr
    });
  },
  checkboxChange: function (e) {
    var checkValue = e.detail.value;
    this.setData({
      checkValue: checkValue
    });
  },
  confirm: function () {// 确定
    this.setData({
      isDep: false,
      // depValue: []如果是联动，选中部门后需要清除选中的成员
    })
    // this.getUser();//通过选中部门来获取不通的部门成员，将获取到的数据存入checkboxArr中
  },

  
  onLoad: function () {
    //模拟测试人员数据
    var arr = {
      data: [
        {
          checked: false,
          id: "83",
          name: "张三",
          word: "Z",
        }, {
          checked: false,
          id: "22",
          name: "张三丰",
          word: "Z",
        }, {
          checked: false,
          id: "23",
          name: "张无忌",
          word: "Z",
        }, {
          checked: false,
          id: "83",
          name: "李四",
          word: "L",
        }, {
          checked: false,
          id: "83",
          name: "王五",
          word: "W",
        }, {
          checked: false,
          id: "83",
          name: "测试",
          word: "C",
        },
      ],//成员数组
      words: ["C", "L", "W", "Z"],//成员字母集合
    };
    this.setData({
      words: arr.words,
    })
    this.integration(arr)
  },


  // 整合人员字母
  integration: function (list) {
    // console.log(list)
    var arr = [];
    for (var j = 0; j < list.words.length; j++) {
      var aa = {
        name: null,
        a: []
      };
      aa.name = list.words[j];
      for (var k = 0; k < list.data.length; k++) {
        if (list.words[j] == list.data[k].word) {
          aa.a.push(list.data[k]);
        }
      }
      arr.push(aa)
    }
    this.setData({
      personnelArr: arr,
    })
    // console.log(arr)
  },
})