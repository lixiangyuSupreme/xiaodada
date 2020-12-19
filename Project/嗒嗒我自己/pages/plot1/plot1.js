Page({
 data: {
  //轮播图
  　swiperH: '',//swiper高度
　　nowIdx: 0,//当前swiper索引
　　imgList: [//图片列表
       'https://pic2.zhimg.com/80/v2-3f6989506564a54d25fcb4c70e89f419_720w.jpg',
       'https://pic3.zhimg.com/80/v2-3e9acfb71483695703f88d448acc7102_720w.jpg',
       'https://pic1.zhimg.com/80/v2-5d7ba1ed0573c26a2c67929b4c761570_720w.jpg',
       'https://pic2.zhimg.com/80/v2-15ab01e9fa73ef1b3be3cc528b565a31_720w.jpg',
      ]
    //end
 },
 onLoad: function (option) {

  },

 onShareTap: function (event) {
  var itemList = [
   "分享给微信好友",
   "分享到朋友圈",
   "分享到QQ",
   "分享到微博"
  ];
  wx.showActionSheet({
   itemList: itemList,
   itemColor: "#405f80",
   success: function (res) {
    // res.cancel 用户是不是点击了取消按钮
    // res.tapIndex 数组元素的序号，从0开始
    wx.showModal({
     title: "用户 " + itemList[res.tapIndex],
     content: "用户是否取消？" + res.cancel + "现在无法实现分享功能，什么时候能支持呢"
    })
   }
  })
 },

 //轮播
 //获取swiper高度
getHeight: function (e) {
  　　var winWid = wx.getSystemInfoSync().windowWidth - 2 * 50;//获取当前屏幕的宽度
  　　var imgh = e.detail.height;//图片高度
  　　var imgw = e.detail.width;
  　　var sH = winWid * imgh / imgw + "px"
  　　this.setData({
  　　　　swiperH: sH//设置高度
  　　})
  },
  //swiper滑动事件
  swiperChange: function (e) {
  　　this.setData({
  　　　　nowIdx: e.detail.current
  　　})
  },



})