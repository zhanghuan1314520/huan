// pages/a30/index.js
Page({

      /**
       * 页面的初始数据
       */
      data: {
        longitude: '',
        latitude: '',
        markers: [
          {
            id: 1,
            iconPath: "/images/gyuan.png",
            latitude: 30.23077,
            longitude: 120.187995,
            width: 20, //图片显示宽度
            height: 20, //图片显示高度
            //气泡callout
            callout: {
              content: '这是文本1的标题', //文本
              color: '#FF0202', //文本颜色
              borderRadius: 3, //边框圆角
              borderWidth: 1, //边框宽度
              borderColor: '#FF0202', //边框颜色
              bgColor: '#ffffff', //背景色
              padding: 5, //文本边缘留白
              textAlign: 'center', //文本对齐方式。有效值: left, right, center
              display: 'ALWAYS'
            }
          },
          {
            id: 2,
            iconPath: "/images/wc.png",
            latitude: 30.223655,
            longitude: 120.134097,
            width: 20, //图片显示宽度
            height: 20, //图片显示高度
            //气泡callout
            callout: {
              content: '这是文本2的标题', //文本
              color: '#FF0202', //文本颜色
              borderRadius: 3, //边框圆角
              borderWidth: 1, //边框宽度
              borderColor: '#FF0202', //边框颜色
              bgColor: '#ffffff', //背景色
              padding: 5, //文本边缘留白
              textAlign: 'center', //文本对齐方式。有效值: left, right, center
              display: 'ALWAYS'
            }
          },
          {
            id: 3,
            iconPath: "/images/shu.png",
            latitude:30.266335,
            longitude: 120.073156,
            width: 20, //图片显示宽度
            height: 20, //图片显示高度
            //气泡callout
            callout: {
              content: '这是文本3的标题', //文本
              color: '#FF0202', //文本颜色
              borderRadius: 3, //边框圆角
              borderWidth: 1, //边框宽度
              borderColor: '#FF0202', //边框颜色
              bgColor: '#ffffff', //背景色
              padding: 5, //文本边缘留白
              textAlign: 'center', //文本对齐方式。有效值: left, right, center
              display: 'ALWAYS'
            }
          },
          {
            id: 4,
            iconPath: "/images/ljx.png",
            latitude: 30.309745,
            longitude: 120.1134,
            width: 20, //图片显示宽度
            height: 20, //图片显示高度
            //气泡callout
            callout: {
              content: '这是文本4的标题', //文本
              color: '#FF0202', //文本颜色
              borderRadius: 3, //边框圆角
              borderWidth: 1, //边框宽度
              borderColor: '#FF0202', //边框颜色
              bgColor: '#ffffff', //背景色
              padding: 5, //文本边缘留白
              textAlign: 'center', //文本对齐方式。有效值: left, right, center
              display: 'ALWAYS'
            }
          },
          {
            id: 5,
            iconPath: "/images/xuexiao.png",
            latitude: 30.233391,
            longitude:120.168017,
            width: 20, //图片显示宽度
            height: 20, //图片显示高度
            //气泡callout
            callout: {
              content: '这是文本5的标题', //文本
              color: '#FF0202', //文本颜色
              borderRadius: 3, //边框圆角
              borderWidth: 1, //边框宽度
              borderColor: '#FF0202', //边框颜色
              bgColor: '#ffffff', //背景色
              padding: 5, //文本边缘留白
              textAlign: 'center', //文本对齐方式。有效值: left, right, center
              display: 'ALWAYS'
            }
          }
        ]
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function () {
          var that = this;
          wx.getLocation({
            type: "wgs84",
            success: function (res) {
              var latitude = res.latitude;
              var longitude = res.longitude;
              //console.log(res.latitude);
              that.setData({
                latitude: res.latitude,
                longitude: res.longitude,
              })
            }
          })
        },

        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady: function () {

        },

        /**
         * 生命周期函数--监听页面显示
         */
        onShow: function () {

        },

        /**
         * 生命周期函数--监听页面隐藏
         */
        onHide: function () {

        },

        /**
         * 生命周期函数--监听页面卸载
         */
        onUnload: function () {

        },

        /**
         * 页面相关事件处理函数--监听用户下拉动作
         */
        onPullDownRefresh: function () {

        },

        /**
         * 页面上拉触底事件的处理函数
         */
        onReachBottom: function () {

        },

        /**
         * 用户点击右上角分享
         */
        onShareAppMessage: function () {

        }
      })