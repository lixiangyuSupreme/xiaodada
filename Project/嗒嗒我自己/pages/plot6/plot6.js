Page({
 data: {
  //轮播图
  　swiperH: '',//swiper高度
　　nowIdx: 0,//当前swiper索引
　　imgList: [//图片列表
       'https://pic2.zhimg.com/v2-8dd06a244e987c6d9a03fa0f5daefe15_b.png',
       'https://pic3.zhimg.com/v2-a76fc60f39d54111c6359fa2448e36e2_b.png',
       'https://pic4.zhimg.com/v2-1a0d2cf63f4edc930aaf96781ccfdcb3_b.png',
       'https://pic3.zhimg.com/v2-b3384a05f8e5a95d59b2451babd4f932_b.png',
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