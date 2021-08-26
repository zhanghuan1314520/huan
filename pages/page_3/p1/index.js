
Page({
  data: {
      arr: [
        {
          img: 'https://sbmf.ww2ss.com/attachment/images/1/2021/07/x2t4CrFJ32crYVfF2WxzTNRn3N3W11.jpg',
          prix: '100',
          area: '128',
          price: '30000',
          chanquan: '产权',
          title: '测试文本1',
          world: [
            {
              message: '独卫',
            },
            {
              message: '朝南'
            }
          ]
        },
        {
          img: 'https://sbmf.ww2ss.com/attachment/images/1/2021/08/O9n4la4LOL4iKOyo9IEaTlOA9wCcWC.jpg',
          prix: '800',
          area: '100',
          price: '10000',
          chanquan: '产权',
          title: '测试文本2',
          world: [
            {
              message: '独卫',
            },
            {
              message: '朝南'
            }
          ]
        },
        {
          img: 'https://sbmf.ww2ss.com/attachment/images/1/2021/08/WIcuYlab6igIRaCt69bUyARLIiL61r.jpg',
          prix: '300',
          area: '300',
          price: '5000',
          chanquan: '产权',
          title: '测试文本3',
          world: [
            {
              message: '独卫',
            },
            {
              message: '朝北'
            }
          ]
        },
        {
          img: 'https://sbmf.ww2ss.com/attachment/images/1/2021/08/OG3S1UVk1v4KBguMf0z4038KdgXvs3.jpg',
          prix: '500',
          area: '2000',
          price: '500',
          chanquan: '产权',
          title: '测试文本4',
          world: [
            {
              message: '独卫',
            },
            {
              message: '朝北'
            }
          ]
        },
        {
          img: 'https://sbmf.ww2ss.com/attachment/images/1/2021/08/WFWP23Y6SIzInmSNHIpWIi2m6M8e4G.jpg',
          prix: '30000',
          area: '30',
          price: '3000',
          chanquan: '产权',
          title: '测试文本5',
          world: [
            {
              message: '独卫',
            },
            {
              message: '朝北'
            }
          ]
        },
        {
          img: 'https://sbmf.ww2ss.com/attachment/images/1/2021/08/PA9og9DX9xD7d9NPnjjdkGjZkgPZpg.jpg',
          prix: '600',
          area: '300',
          price: '5500',
          chanquan: '产权',
          title: '测试文本6',
          world: [
            {
              message: '独卫',
            },
            {
              message: '朝北'
            }
          ]
        }
      ],
      currentTab: 0
  },
  mySort: function (e) {
    console.log("4444",e)
      //property 根据什么排序
      // var index = e.currentTarget.dataset.index;
      var property = e.currentTarget.dataset.property;
      console.log("property",property)
      var self = this;
      var arr = self.data.arr;
      var sortRule = true; // 正序倒序
      self.setData({
        arr: arr.sort(self.compare(property, sortRule)),
        currentTab: e.target.dataset.current  
      })
      //console.log(arr)
    },
  compare: function (property, bol) {
      return function (a, b) {
      var value1 = a[property];
      var value2 = b[property];
      if(bol){
        return value1 - value2;
      }else {
        return value2 - value1;
      }
    }
  }
})