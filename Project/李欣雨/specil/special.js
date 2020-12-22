
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    
  },
 do1:function(){
  wx.navigateTo({
    url: '../person/person',
  })
 },
 do2:function(){
  wx.navigateTo({
    url: '../colour/colour',
  })
 },
 do3:function(){
  wx.navigateTo({
    url: '../designer/designer',
  })
 },
 getHeight: function (e) {
  　　var winWid = wx.getSystemInfoSync().windowWidth - 2 * 50;//获取当前屏幕的宽度
  　　var imgh = e.detail.height;//图片高度
  　　var imgw = e.detail.width;
  　　var sH = winWid * imgh / imgw + "px"
  　　this.setData({
  　　　　swiperH: sH//设置高度
  　　})
  },

})


// Page({
//   data: {
//       currentTab: 0
//   },
//   onLoad: function (options) {
//       // 页面初始化 options为页面跳转所带来的参数
//   },

//   //滑动切换
//   swiperTab: function (e) {

//       this.setData({
//           currentTab: e.detail.current
//       }); 
//   },

//   //点击切换
//   clickTab: function (e) {
//       if (this.data.currentTab === e.target.dataset.current) {
//           return false;
//       } else {
//           this.setData({
//               currentTab: e.target.dataset.current
//           })
//       }
//   }
// })