// pages/page_9/p1/index.js
Page({
  data: {
    img:"https://cdn.lottery.okgoes.com/fps/2021/2/6962ac7eb3c94d56a2b9d37f18fcef4d.png"
  },
  preview_1(e){
    let img = e.currentTarget.dataset.src;
    let imgList = [];
    imgList.push(img);
    wx.previewImage({
      current: img, // 当前显示图片的http链接
      urls: imgList// 需要预览的图片http链接列表
    })
  }
})