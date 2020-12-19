// pages/info/info.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentTab:0,
        content:[
            {
                url:'../../icon/avatar_businessman_male_man_88.861538461538px_1212477_easyicon.net.png',
                index:0,
                username:'这是测试1号', 
                time_num:'9:36',
                dialog:'这套搭配很好看！！',
                bubble_num:2
            },
            {
                url:'https://b267.photo.store.qq.com/psb?/V13v0ZyH3zvYu7/9Ne*obpt0tAkfi3fZZij7.1VF4qT363gGq021zfYWQ0!/b/dAsBAAAAAAAA&bo=bgFuAQAAAAAFByQ!&rf=viewer_4',
                index:1,
                username:'这是测试2号',
                time_num:'8:16',
                dialog:'这件衣服是什么牌子的？',
                bubble_num:1
            },
            {
                url:'../../icon/avatar_female_girl_1212475.png',
                index:2,
                username:'这是测试3号',
                time_num:'8:38',
                dialog:'你好',
                bubble_num:5
            }
        ]
    },
    clickTab:function(){
        this.setData({
            currentTab:0
        })
    },
    clickTab1:function(){
        this.setData({
            currentTab:1
        }) 
    },
    goTocontactPage:function(e){
      let a = e.currentTarget.dataset.index;
      wx.navigateTo({
        url: '/pages/contact/contact?a='+a,
      })
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
  
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