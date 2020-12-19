Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:'',
    img_url:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({content:decodeURIComponent(options.content)});
    console.log(this.data.content);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  // onShow: function (e) {
  //   var txt = wx.getStorageSync('txt')
  //   var txt1 = wx.getStorageSync('txt1')
  //   this.setData({
  //     txt,
  //     txt1
  //   })
  // },

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

  },
  //写动态
  dy:function(event){
    wx.navigateTo({
      url:'../dynamic/dynamic',
    })
  },
})