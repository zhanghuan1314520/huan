Page({
    data: {
        indicatorColor: 'white',
        indicatorActivecolor: 'red',
        slider: [{
                picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000rVobR3xG73f.jpg'
            },
            {
                picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000j6Tax0WLWhD.jpg'
            },
            {
                picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000a4LLK2VXxvj.jpg'
            },
        ],
        swiperCurrent: 0,
        current: 0,
    },
    swiperChange: function (e) {
        this.setData({
            swiperCurrent: e.detail.current
        })
    },
    swiperChange1: function (e) {
        var that = this;
        if (e.detail.source == 'touch') {
            that.setData({
                current: e.detail.current
            })
        }
    },
    //点击指示点切换 
    chuangEvent: function (e) {
        this.setData({
            swiperCurrent: e.currentTarget.id
        })
    }
})