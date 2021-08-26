Page({
  data: {
    index: 0,
    multiArray: [['杭州'], ['西湖', '余杭', '富阳', '滨江', '萧山'], ['北山', '学军','文教','文新','留下','蒋村','西湖','西溪','转塘']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '杭州'
        }
      ], [
        {
          id: 0,
          name: '西湖'
        },
        {
          id: 1,
          name: '余杭'
        },
        {
          id: 2,
          name: '富阳'
        },
        {
          id: 3,
          name: '滨江'
        },
        {
          id: 4,
          name: '萧山'
        }
      ], [
        {
          id: 0,
          name: '北山'
        },
        {
          id: 1,
          name: '学军'
        },
        {
          id: 2,
          name: '文教'
        },
        {
          id: 3,
          name: '文新'
        },
        {
          id: 4,
          name: '留下'
        },
        {
          id: 5,
          name: '蒋村'
        },
        {
          id: 6,
          name: '西湖'
        },
        {
          id: 7,
          name: '西溪'
        },
        {
          id: 8,
          name: '转塘'
        }
      ]
    ],
    multiIndex: [0, 0, 0],
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['西湖', '余杭', '富阳', '滨江', '萧山'];
            data.multiArray[2] = ['北山', '学军','文教','文新','留下','蒋村','西湖','西溪','转塘'];
            break;
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
            data.multiArray[2] = ['鲫鱼', '带鱼'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['北山', '学军','文教','文新','留下','蒋村','西湖','西溪','转塘'];
                break;
              case 1:
                data.multiArray[2] = ['五常街道','仁和','仓前','勾庄','径山','未来科技城','瓶窑','百丈镇','老余杭','良渚','闲林','鸬鸟镇','黄湖镇'];
                break;
              case 2:
                data.multiArray[2] = ['东洲', '富春','富阳','银湖'];
                break;
              case 3:
                data.multiArray[2] = ['奥体', '浦沿', '滨盛','西兴','钱江湾','长河'];
                break;
              case 4:
                data.multiArray[2] = ['其他', '新鱼', '新街', '湘湖','蜀山','南阳','钱江世纪城','开发区'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼'];
                break;
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        break;
    }
    console.log(data.multiIndex);
    this.setData(data);
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
})