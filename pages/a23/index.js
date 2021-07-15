const debounce = (fn, delay=300) => {
  let ctx,
      args;
  let timer = null;
  const later = function(){
    fn.apply(ctx, args)
    timer = null;
  }
  return function(){
    ctx = this
    args = arguments;
    if(timer){
      clearTimeout(timer)
      timer = null
    }
  }
  timer = setTimeout(later, delay )  
}
Page({
  data: {
    height: '', // 获取当前页面的可视高度
    group: [
      {
        src: "https://csdnimg.cn/feed/20180914/c67d9521db939fc8beb9a27b046ef1a3.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://csdnimg.cn/feed/20180914/02e62ee6cb44213c51976d00e4d21ab2.png",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://csdnimg.cn/feed/20180913/8770caaf4959d5be0e6891c9f57efade.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://csdnimg.cn/feed/20180914/c67d9521db939fc8beb9a27b046ef1a3.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://csdnimg.cn/feed/20180914/02e62ee6cb44213c51976d00e4d21ab2.png",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://csdnimg.cn/feed/20180913/8770caaf4959d5be0e6891c9f57efade.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://csdnimg.cn/feed/20180914/c67d9521db939fc8beb9a27b046ef1a3.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://csdnimg.cn/feed/20180914/02e62ee6cb44213c51976d00e4d21ab2.png",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://csdnimg.cn/feed/20180913/8770caaf4959d5be0e6891c9f57efade.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://csdnimg.cn/feed/20180914/c67d9521db939fc8beb9a27b046ef1a3.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://csdnimg.cn/feed/20180914/02e62ee6cb44213c51976d00e4d21ab2.png",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://csdnimg.cn/feed/20180913/8770caaf4959d5be0e6891c9f57efade.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://csdnimg.cn/feed/20180914/c67d9521db939fc8beb9a27b046ef1a3.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://csdnimg.cn/feed/20180914/02e62ee6cb44213c51976d00e4d21ab2.png",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://csdnimg.cn/feed/20180913/8770caaf4959d5be0e6891c9f57efade.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://csdnimg.cn/feed/20180914/c67d9521db939fc8beb9a27b046ef1a3.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://csdnimg.cn/feed/20180914/02e62ee6cb44213c51976d00e4d21ab2.png",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      },
      {
        src: "https://csdnimg.cn/feed/20180913/8770caaf4959d5be0e6891c9f57efade.jpg",
        show: false,
        def: "https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif"
      }
    ]
  },
  onLoad: function () {
    wx.getSystemInfo({  // 获取页面可视区域的高度
      success: (res) =>{
        this.setData({
          height: res.screenHeight
        })
      },
    })
    this.showImg()
  },
  onPageScroll:function() {  // 调用showImg函数
    debounce(this.showImg())
  },
 
  showImg() {  // 判断高度是否需要加载
    // wx.createSelectorQuery()支持的最低库版本是1.4
    // selectAll作用是查询元素，boundingClientRect获取元素的相关信息
    wx.createSelectorQuery().selectAll('.loadImg').boundingClientRect((ret) => {
      const group = this.data.group     // 获取原数据
      const height = this.data.height   // 获取可视区域高度
      ret.forEach((item, index) => {
        // console.log(item)
        // 这里top值获取的是元素相对于可视区域左上角(0,0)的垂直坐标值,超过(0,0)，top值为负数
        // 一旦元素进入可视区域,top值小于可视区域高度height
        if (item.top < height) {
          group[index].show = true
        }
      })
      this.setData({
        group
      })
    }).exec()
  }
})
 