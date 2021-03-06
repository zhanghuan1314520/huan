Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabTxt: ['品牌', '价格', '销量'], //分类
    tab: [true, true, true],
    pinpaiList: [{
        id: 1,
        title: '品牌1'
      },
      {
        id: 2,
        title: '品牌2'
      },
      {
        id: 3,
        title: '品牌3'
      },
      {
        id: 4,
        title: '品牌4'
      }
    ],
    pinpai_id: 0, //品牌
    pinpai_txt: '',
    jiage_id: 0, //价格
    jiage_txt: '',
    xiaoliang_id: 0, //销量
    xiaoliang_txt: '',
    dataList: [{
      goods_id: 1,
      goods_title: '商品标题1',
      goods_img: '/images/img_01.jpg',
      goods_xiaoliang: '0',
      goods_price: '60'
    }, {
      goods_id: 1,
      goods_title: '商品标题2',
      goods_img: '/images/img_01.jpg',
      goods_xiaoliang: '0',
      goods_price: '70'
    }, {
      goods_id: 1,
      goods_title: '商品标题3',
      goods_img: '/images/img_01.jpg',
      goods_xiaoliang: '0',
      goods_price: '80'
    }, {
      goods_id: 1,
      goods_title: '商品标题4',
      goods_img: '/images/img_01.jpg',
      goods_xiaoliang: '0',
      goods_price: '90'
    }, {
      goods_id: 1,
      goods_title: '商品标题5',
      goods_img: '/images/img_01.jpg',
      goods_xiaoliang: '0',
      goods_price: '110'
    }],
  },

  // 选项卡
  filterTab: function (e) {
    var data = [true, true, true],
      index = e.currentTarget.dataset.index;
    data[index] = !this.data.tab[index];
    this.setData({
      tab: data
    })
  },

  //筛选项点击操作
  filter: function (e) {
    var self = this,
      id = e.currentTarget.dataset.id,
      txt = e.currentTarget.dataset.txt,
      tabTxt = this.data.tabTxt;
    switch (e.currentTarget.dataset.index) {
      case '0':
        tabTxt[0] = txt;
        self.setData({
          tab: [true, true, true],
          tabTxt: tabTxt,
          pinpai_id: id,
          pinpai_txt: txt
        });
        break;
      case '1':
        tabTxt[1] = txt;
        self.setData({
          tab: [true, true, true],
          tabTxt: tabTxt,
          jiage_id: id,
          jiage_txt: txt
        });
        break;
      case '2':
        tabTxt[2] = txt;
        self.setData({
          tab: [true, true, true],
          tabTxt: tabTxt,
          xiaoliang_id: id,
          xiaoliang_txt: txt
        });
        break;
    }
    //数据筛选
    self.getDataList();
  },

  //加载数据
  getDataList: function () {
    //调用数据接口，获取数据


  }

})