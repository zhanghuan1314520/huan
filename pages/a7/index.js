Page({
  data: {
    list: [
      {
        name: '唐人街探案3',
        subtitle: 'Detective Chinatown 3',
        type: '喜剧 悬疑',
        duration: '136',
        producePlace: '中国大陆',
        releaseDate: '2020-10-01',
        releasePlace: '中国大陆上映',
        img: ['https://p0.meituan.net/movie/b0e0d6ce9914f37e7f9f6ade13e096342721150.jpg@464w_644h_1e_1c'],
        plot: '继曼谷、纽约之后，东京再出大案。唐人街神探唐仁（王宝强 饰）、秦风（刘昊然 饰）受侦探野田昊（妻夫木聪 饰）的邀请前往破案。“CRIMASTER世界侦探排行榜”中的侦探们闻讯后也齐聚东京，加入挑战，而排名第一Q的现身，让这个大案更加扑朔迷离，一场亚洲最强神探之间的较量即将爆笑展开……'
      },
      {
        name: '我在时间尽头等你',
        subtitle: 'Love You Forever',
        type: '爱情 奇幻 喜剧',
        duration: '115',
        producePlace: '中国大陆',
        releaseDate: '2020-08-25',
        releasePlace: '中国大陆上映',
        img: ['https://p0.meituan.net/moviemachine/7e6118993dbf0f304ac1dad4667fddda207318.jpg@218w_300h_1e_1c'],
        plot: '林格（李鸿其 饰）一次次重启时空，只为与恋人邱倩（李一桐 饰）再次相遇。一生只爱一个人，希望开头是你，结尾也是你。2020年七夕最深情的告白: 我在时间尽头等你。'
      },
      {
        name: '我和我的家乡',
        subtitle: 'My Hometown And I',
        type: '剧情 喜剧',
        duration: '120',
        producePlace: '中国大陆',
        releaseDate: '2020-10-01',
        releasePlace: '中国大陆上映',
        img: ['https://p0.meituan.net/movie/3e9c5b91940cd5c75a12916e66528a404269063.jpg@464w_644h_1e_1c'],
        plot: ''
      },
      {
        name: '八佰',
        subtitle: 'The Eight Hundred',
        type: '剧情 战争 历史',
        duration: '147',
        producePlace: '中国大陆',
        releaseDate: '2020-08-21',
        releasePlace: '中国大陆上映',
        img: ['https://p1.meituan.net/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg@464w_644h_1e_1c'],
        plot: '1937年淞沪会战的最后一役，“八百壮士”奉命坚守上海四行仓库，以少敌多顽强抵抗四天四夜。电影《八佰》由管虎导演，是亚洲首部全片使用IMAX摄影机拍摄的商业电影，将于2020年8月21日全国影院上映。'
      },
      {
        name: '姜子牙',
        subtitle: 'JIANG ZIYA：Legend Of Deification',
        type: '动画 动作 冒险',
        duration: '110',
        producePlace: '中国大陆',
        releaseDate: '2020-10-01',
        releasePlace: '中国大陆上映',
        img: ['https://p0.meituan.net/movie/3dc44919f0917b5823c867813f29fba42625689.jpg@464w_644h_1e_1c'],
        plot: '昆仑弟子姜子牙（郑希 配音）率领众神伐纣，赢得封神大战胜利。即将受封成为众神之长的他，却因一时过失引得昆仑大乱，从此被贬北海，为世人所唾弃。十年后，因一个契机，姜子牙踏上重回昆仑的旅途。在战后的废墟之上，他重新找到自我，也洞悉了十年前的一切真相。'
      },
      {
        name: '小妇人',
        subtitle: 'Little Women',
        type: '爱情 剧情',
        duration: '135',
        producePlace: '美国',
        releaseDate: '2020-08-25',
        releasePlace: '中国大陆上映',
        img: ['https://p0.meituan.net/movie/cdb164c203fc0c2465278ddd165e91c84503798.jpg@464w_644h_1e_1c'],
        plot: '马奇夫人和四个多才多艺但性格各异的女儿一起过着平凡又温馨的生活。梅格贤惠温柔，是为爱痴狂的浪漫主义者；贝丝聪慧娴静，擅长钢琴；艾米年纪最小，有漂亮的外表和现实的头脑；而最特立独行的是乔，她有些男孩子气，热爱写作，在女孩都以嫁人为目标的年代，她立志成为一名独立女性。富有又帅气的青年劳里和乔青梅竹马两小无猜，对乔一见钟情，但乔面对劳里的表白却心烦意乱，决定独自前往纽约追求写作事业。经历了现实的洗礼后，乔逐渐明白了自己对于劳里的心意，却发现劳里即将迎娶妹妹艾米……'
      }
    ],
 ellipsis: true, // 文字是否收起，默认收起
  },
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  	this.data.list.forEach((item) => {
      item.flag = false
    })
    this.setData({
      list: this.data.list
    })
  },
  showPlot(e) {
    let index = e.currentTarget.dataset.index
    this.data.list[index].flag = !this.data.list[index].flag
    this.setData({
      list: this.data.list
    })
  },
   // 查看大图
   previewImage(e) {
    var current = e.target.dataset.src
    var srclist = e.target.dataset.srclist
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: srclist // 需要预览的图片http链接列表
    })
  }
})
