Page({
  data: {
    items: [
      { value: 'USA', name: '美国' },
      { value: 'CHN', name: '中国' },
      { value: 'BRA', name: '巴西' },
      { value: 'JPN', name: '日本' },
      { value: 'ENG', name: '英国' },
      { value: 'FRA', name: '法国' },
    ],

    checkboxItems: [
      { value: 'USA', name: '美国', id: 0 },
      { value: 'CHN', name: '中国', id: 1 },
      { value: 'BRA', name: '巴西', id: 2 },
      { value: 'JPN', name: '日本', id: 3 },
      { value: 'ENG', name: '英国', id: 4 },
      { value: 'FRA', name: '法国', id: 5 },
    ]    
  },

 
  radioChange: function (e) {
    var items = this.data.items;
    for (var i = 0; i < items.length; ++i) {
      items[i].checked = items[i].value == e.detail.value
    }
    console.log(items)

    this.setData({
      items: items
    });
  },


  checkboxChange: function (event) {
    var items = this.data.checkboxItems;
    var id = [];
    //获取标签id
    for (var i = 0; i < event.detail.value.length; i++) {
      var idNum = event.detail.value[i].split(','); 
      id = id.concat(idNum[1])
    }
    for (var y = 0; y < items.length; y++) {
      if (id.indexOf(y + "") != -1) {
        items[y].checked = true;
      } else {
        items[y].checked = false;
      }
    }
    this.setData({
      checkboxItems: items
    });
  }
})