Page({
  data: {
    isLike: true,
    imgUrls: [
      "../../GL.png",
      "../../MY0.jpg",
      "../../MY5.jpg",
      "../../四.jpg",
      "../../五.jpg"
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //	滑动动画时长1s

    // 商品详情介绍
    detailImg: [
      "../../GL.png",
      "../../GL1.png",
    ],
    detailImg1: [
      "../../MY0.jpg",
      "../../DY1.jpg",
    ],
    detailImg2: [
      "../../MY5.jpg",
      "../../XF1.png",
    ],
  },
  cat:function(props){
    wx.navigateTo({
      url: '../plot/plot',
    })
  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  }
})