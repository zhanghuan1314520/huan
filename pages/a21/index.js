Page({
  data: {
    backgroundColor: '',
    color: "#fadbd9",
    ColorList: [{
        title: '嫣红',
        name: 'red',
        color: '#fadbd9'
      },
      {
        title: '桔橙',
        name: 'orange',
        color: '#fde6d2'
      },
      {
        title: '明黄',
        name: 'yellow',
        color: '#fef2ce'
      },
      {
        title: '橄榄',
        name: 'olive',
        color: '#e8f4d9'
      },
      {
        title: '森绿',
        name: 'green',
        color: '#d7f0db'
      },
      {
        title: '天青',
        name: 'cyan',
        color: '#d2f1f0'
      },
      {
        title: '海蓝',
        name: 'blue',
        color: '#cce6ff'
      },
      {
        title: '姹紫',
        name: 'purple',
        color: '#e1d7f0'
      },
      {
        title: '木槿',
        name: 'mauve',
        color: '#ebd4ef'
      },
      {
        title: '桃粉',
        name: 'pink',
        color: '#f9d7ea'
      },
      {
        title: '棕褐',
        name: 'brown',
        color: '#ede1d9'
      },
      {
        title: '玄灰',
        name: 'grey',
        color: '#e7ebed'
      },
      {
        title: '草灰',
        name: 'gray',
        color: '#aaaaaa'
      },
      {
        title: '墨黑',
        name: 'black',
        color: '#333333'
      },
      {
        title: '雅白',
        name: 'white',
        color: '#ffffff'
      },
    ],
  },

  //更换背景颜色
  changeBackgroungcolor: function (e) {
    var that = this;
    const id = e.currentTarget.dataset.index;
    this.setData({
      // backgroundColor: '#ec008c'
      // backgroundColor: "#ebd4ef"
      backgroundColor: this.data.ColorList[id].color
    })
    console.log(id)
  }
})