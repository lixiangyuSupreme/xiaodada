// pages/contact/contact.js
const app = getApp();
var inputVal = '';
var msgList = [];
var windowWidth = wx.getSystemInfoSync().windowWidth;
var windowHeight = wx.getSystemInfoSync().windowHeight;
var keyHeight = 0;

/**
 * 初始化数据
 */
function initData(that) {
  inputVal = '';

  msgList = that.data.msg;
  that.setData({
    msgList,
    inputVal
  })
}





Page({
  data: {
    scrollHeight: '100vh',
    inputBottom: 0,
    left_images:['../../icon/avatar_businessman_male_man_88.861538461538px_1212477_easyicon.net.png','https://b267.photo.store.qq.com/psb?/V13v0ZyH3zvYu7/9Ne*obpt0tAkfi3fZZij7.1VF4qT363gGq021zfYWQ0!/b/dAsBAAAAAAAA&bo=bgFuAQAAAAAFByQ!&rf=viewer_4','../../icon/avatar_female_girl_1212475.png'],
    content: [
      [
        {
          speaker: 'server',
          contentType: 'text',
          content: '这套搭配很好看！！'
        },
        {
          speaker: 'customer',
          contentType: 'text',
          content: '谢谢'
        }
      ],
      [
        {
          speaker: 'server',
          contentType: 'text',
          content: '这件衣服是什么牌子的？'
        },
        {
          speaker: 'customer',
          contentType: 'text',
          content: 'NIKE'
        }
      ],
      [
        {
          speaker: 'server',
          contentType: 'text',
          content: '你好'
        },
        {
          speaker: 'customer',
          contentType: 'text',
          content: '很高兴认识你'
        }
      ]
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // let a = options.a;
    // this.setData({
    //   inputVal:'',
    //   msgList:this.data.content[a],
    //   cusHeadIcon: app.globalData.userInfo.avatarUrl,
    //   left_icon:this.data.left_images[a],
    // })
    let a = options.a;
    this.setData({
      msg : this.data.content[a]
    })
    initData(this);
        this.setData({
            cusHeadIcon: app.globalData.userInfo.avatarUrl,
            left_icon:this.data.left_images[a],
        });
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

  },

  /**
 * 获取聚焦
 */
  focus: function (e) {
    keyHeight = e.detail.height;
    this.setData({
      scrollHeight: (windowHeight - keyHeight) + 'px'
    });
    this.setData({
      toView: 'msg-' + (msgList.length - 1),
      inputBottom: keyHeight + 'px'
    })
    //计算msg高度
    // calScrollHeight(this, keyHeight);

  },

  //失去聚焦(软键盘消失)
  blur: function (e) {
    this.setData({
      scrollHeight: '100vh',
      inputBottom: 0
    })
    this.setData({
      toView: 'msg-' + (msgList.length - 1)
    })

  },

  /**
   * 发送点击监听
   */
  sendClick: function (e) {
    msgList.push({
      speaker: 'customer',
      contentType: 'text',
      content: e.detail.value
    })
    inputVal = '';
    this.setData({
      msgList,
      inputVal
    });
  },

  /**
   * 退回上一页
   */
  toBackClick: function () {
    wx.navigateBack({})
  }


})