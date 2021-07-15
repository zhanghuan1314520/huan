Page({
  data:{
    goodsArray: [
      {
        img:'/images/img_01.jpg',
        title: '测试1',
        desc: '黑点 M码',
        price: '￥999.0',
        num: '2'
      },
      {
        img:'/images/img_01.jpg',
        title: '测试2',
        desc: '黑点 M码',
        price: '￥999.0',
        num: '2'
      }
    ]
  },
/**
* 生命周期函数--监听页面初次渲染完成
*/
onReady: function () {
  //获得dialog组件
  this.dialog = this.selectComponent("#dialog");
  this.goodsList = this.selectComponent("#goodsList");
},
showDialog(){
  this.dialog.showDialog();
},
 //取消事件
_cancelEvent(){
  console.log('你点击了取消');
  this.dialog.hideDialog();
},
//确认事件
_confirmEvent(){
  console.log('你点击了确定');
  this.dialog.hideDialog();
},
canvasIdErrorCallback: function (e) {
  console.error(e.detail.errMsg)
},
})