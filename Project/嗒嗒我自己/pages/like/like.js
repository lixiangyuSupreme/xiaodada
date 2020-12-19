// pages/commodity/commodity-write-back/index.js
//var pingxin = require("../../../utils/pingxing.js")
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    status: true, //评价框显示隐藏
    content: "",
    repotList: [
      {
        users: "松鼠宝贝",
        img: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2863539634,4171564984&fm=26&gp=0.jpg",
        selected: "秋冬淑女",
        select: [],
        praise: 0,
        change: false,
        comment: "秋冬的第一杯奶茶，必须有秋冬的第一件大衣",
        picture: [
          "https://pic3.zhimg.com/80/v2-2c8af333eef999feb3d1f87f9f0916c2_720w.jpg",
          "https://pic1.zhimg.com/80/v2-58bdf1cbb43e94f35e4a090fee3136cc_720w.jpg",
          "https://pic3.zhimg.com/80/v2-876fd36cfbdc4fa1a45e1be71c2f09be_720w.jpg",
          "https://pic3.zhimg.com/80/v2-86cf245a7b62e8b467866fa231c3242e_720w.jpg",
          "https://pic2.zhimg.com/80/v2-419a7a3274ed363edd81db26293bb929_720w.jpg"
        ],
        time: "2020-05-29"
      },
    ],
    appraiseList: [
      {
        username: "太白子",
        img: "https://pic2.zhimg.com/80/v2-18fb1902be1be8483453d0e71d434219_720w.jpg",
        is_merchant: 0,
        isOpen: false,
        change: false,
        praise: 0,
        appraise_content: "大衣狂魔来了！秋冬值得推荐的除了棉服外套肯定就是大衣啊！颜色的选择也很多，温柔又显气质，今天就来安利大衣吧～ ",
        reply_list: [
          { nickname: "太白金星", img: "https://pic2.zhimg.com/v2-8dd06a244e987c6d9a03fa0f5daefe15_b.png", reply_content: "我也是这么觉得", changes: false, praise: 0, time: "05-25"},
          { nickname: "太白金星", img: "https://pic2.zhimg.com/v2-8dd06a244e987c6d9a03fa0f5daefe15_b.png", reply_content: "我也是这么觉得", changes: false, praise: 0, time: "05-25" },
          { nickname: "太白金星", img: "https://pic2.zhimg.com/v2-8dd06a244e987c6d9a03fa0f5daefe15_b.png", reply_content: "我也是这么觉得", changes: false, praise: 0, time: "05-25" },
          { nickname: "太白金星", img: "https://pic2.zhimg.com/v2-8dd06a244e987c6d9a03fa0f5daefe15_b.png", reply_content: "我也是这么觉得", changes: false, praise: 0, time: "05-25" },
        ],
        time: "今天 15:07",
      },
      {
        username: "太白子",
        img: "https://pic2.zhimg.com/80/v2-75829d6c804a57cc6c302eb889211075_720w.jpg",
        is_merchant: 1,
        isOpen: false,
        change: false,
        praise: 0,
        appraise_content: "小姐姐的推荐真的好好看",
        reply_list: [
          { nickname: "太白金星", img: "../../../img/00.jpg", reply_content: "我也是这么觉得", changes: false, time: "05-25", praise: 0, },
          { nickname: "太白金星", img: "../../../img/00.jpg", reply_content: "我也是这么觉得", changes: false, praise: 0, time: "05-25" },
          { nickname: "太白金星", img: "../../../img/00.jpg", reply_content: "我也是这么觉得", changes: false, praise: 0, time: "05-25" },
          { nickname: "太白金星", img: "../../../img/00.jpg", reply_content: "我也是这么觉得", changes: false, time: "05-25", praise: 0, },
          { nickname: "太白金星", img: "../../../img/00.jpg", reply_content: "我也是这么觉得", changes: false, praise: 0, time: "05-25" },
          { nickname: "太白金星", img: "../../../img/00.jpg", reply_content: "我也是这么觉得", changes: false, praise: 0, time: "05-25" }
        ],
        time: "今天 15:07",
      },
      
    ],
    userpingfen: [          // 用户评分
      { pingfen: 4 }
    ],
 
  },
  //失去焦点时获取里面评论内容
  bindTextAreaBlur: function (e) {
    this.setData({
      content: e.detail.value,
    })
  },
  //点击按钮时得到里面的值
  fabiao: function (e) {
    if(this.data.content == '') {
      wx.showToast({
        title: '内容不能为空',
        icon: "none",
        duration: 1500,
      })
    }else {
      this.setData({
        focus: 'false',
        concent1: this.data.content,
      })
      console.log(this.data.content)
    }
  },
  /**
   * 点击回复显示隐藏评价框
   */
  chengeStatusTop: function() {
    let status = this.data.status;
    this.setData({
      status: !status
    })
  },
  // 点赞功能逻辑
  praiseThis: function (e) {
    var index = e.currentTarget.dataset.curindex;
    if (this.data.repotList[index]) {
      var change = this.data.repotList[index].change;
      if (change !== undefined) {
        var num = this.data.repotList[index].praise;
        if (change) {
          this.data.repotList[index].praise = (num - 1);
          this.data.repotList[index].change = false;
        } else {
          this.data.repotList[index].praise = (num + 1);
          this.data.repotList[index].change = true;
        }
        this.setData({
          repotList: this.data.repotList
        })
      }
    }
  },
  // 点击展开
  chooseUnfold: function(e) {
    var key = e.currentTarget.dataset.key;
    var val = e.currentTarget.dataset.value;
    key = key + '.isOpen';
    this.setData({
      [key]: !val
    })
  },
  // 点赞功能逻辑s
  praiseThiss: function (e) {
    var index = e.currentTarget.dataset.curindex;
    if (this.data.appraiseList[index]) {
      var change = this.data.appraiseList[index].change;
      if (change !== undefined) {
        var num = this.data.appraiseList[index].praise;
        if (change) {
          this.data.appraiseList[index].praise = (num - 1);
          this.data.appraiseList[index].change = false;
        } else {
          this.data.appraiseList[index].praise = (num + 1);
          this.data.appraiseList[index].change = true;
        }
        this.setData({
          appraiseList: this.data.appraiseList
        })
      }
    }
  },
  // 点赞内层逻辑
  praiseThisss: function(e) {
    var index = e.currentTarget.dataset.curindex;
    var indexs = e.currentTarget.dataset.curindexs;
    console.log(indexs)
    if (this.data.appraiseList[index].reply_list[indexs]) {
      var change = this.data.appraiseList[index].reply_list[indexs].changes;
      if (change !== undefined) {
        var num = this.data.appraiseList[index].reply_list[indexs].praise;
        if (change) {
          this.data.appraiseList[index].reply_list[indexs].praise = (num - 1);
          this.data.appraiseList[index].reply_list[indexs].changes = false;
        } else {
          this.data.appraiseList[index].reply_list[indexs].praise = (num + 1);
          this.data.appraiseList[index].reply_list[indexs].changes = true;
        }
        this.setData({
          appraiseList: this.data.appraiseList
        })
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;
    var that = this;
    wx.request({
      url:  'https://www.youlewazi.top:1234/information/',
    
    data:{},
    header:{
      'content-type':'application/json'
    },
    
    success:function(res){
      console.log(res.data);
      that.setData({
        // note[0].src=res.data.src
        haveUrl:res.data,
      })
    },
  })
    var tiyan = this.data.userpingfen;
    for (var i = 0; i < tiyan.length; i++) {
      tiyan[i].pingfenpic = pingxin.pingfen(parseFloat(tiyan[i].pingfen));    //使用函数
    }
    _this.setData({
      userpingfen: tiyan
    })
    var that = this;
    wx.request({
      url:  'https://www.youlewazi.top:1234/information/'+ encodeURI(wx.getStorageSync('title')),
    
    data:{},
    header:{
      'content-type':'application/json'
    },
    
    success:function(res){
      console.log(res.data);
      that.setData({
        // note[0].src=res.data.src
        haveUrl:res.data,
      })
    },
  })
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
 
  },
 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    
  },
 
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
 
  },
 
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
 
  },
 
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
 
  },
 
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
 
  },
 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
 
  }
})

