Page({
  onPageScroll: function(e) {
    console.log(e)
      this.setData({
          shopMoveRight: true,
          scrollTop: e.scrollTop,
      })
      let timer = setTimeout(() => {
          if (this.data.scrollTop === e.scrollTop) {
              this.setData({
                  scrollTop: e.scrollTop,
              })
              clearTimeout(timer);
              this.setData({
                  shopMoveRight: false,
                  shopMoveLeft: true
              })
          }
      }, 1500)
      this.setData({
          shopMoveLeft: false
      })
  },
})
