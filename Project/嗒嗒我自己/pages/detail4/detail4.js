// pages/index/index.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:2,
    currentIndex:0,
    cardRightIn:false,
    cardLeftIn:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let list=[
      {
        _id: "dvhhicWM83uNxzrby",
        tag: '小清新',
        author: "春季穿搭",
        // cover: "http://www.runoob.com/try/demo_source/paris.jpg",
        createtime: 1522210221679,
        time: "2020年03月28日 ",
        title: "春天的小心机",
        agree:false,
        agreeNum: 293,
        commentNum: 56,
        comment: [{
          logo: 'http://thirdwx.qlogo.cn/mmopen/PDS4yGhkWYlEPmXoZW82KTj7U8HTURpVP7eh5DOibW3hGgFLJK4C5YGK13vYO5JhibevicDMdeysHQce4dSEKUAcIRSAicCS06qV/132',
          name: '用户1',
          txt: 'good',
          fromNow: '1天前'
        }, {
          logo: 'http://thirdwx.qlogo.cn/mmopen/PDS4yGhkWYlEPmXoZW82KTj7U8HTURpVP7eh5DOibW3hGgFLJK4C5YGK13vYO5JhibevicDMdeysHQce4dSEKUAcIRSAicCS06qV/132',
          name: '用户2',
          txt: '喜欢',
          fromNow: '3天前'
        }, {
          logo: 'http://thirdwx.qlogo.cn/mmopen/PDS4yGhkWYlEPmXoZW82KTj7U8HTURpVP7eh5DOibW3hGgFLJK4C5YGK13vYO5JhibevicDMdeysHQce4dSEKUAcIRSAicCS06qV/132',
          name: '用户3',
          txt: '好看',
          fromNow: '3天前'
        }, {
          logo: 'http://thirdwx.qlogo.cn/mmopen/PDS4yGhkWYlEPmXoZW82KTj7U8HTURpVP7eh5DOibW3hGgFLJK4C5YGK13vYO5JhibevicDMdeysHQce4dSEKUAcIRSAicCS06qV/132',
          name: '用户9',
          txt: '啊啊啊啊啊啊啊啊',
          fromNow: '3天前'
        }]
      },
      {
        _id: "M8WuXptrDfvNWiDxt",
        tag: '炫酷',
        author: "喜爱运动",
        cover: "http://www.runoob.com/try/demo_source/paris.jpg",
        createtime: 1522026765222,
        time: "2020年03月26日 ",
        title: "不想循规蹈矩，想变成新的自己",
        agree: false,
        agreeNum: 525,
        commentNum: 16,
        comment: [{
          logo: 'http://thirdwx.qlogo.cn/mmopen/PDS4yGhkWYlEPmXoZW82KTj7U8HTURpVP7eh5DOibW3hGgFLJK4C5YGK13vYO5JhibevicDMdeysHQce4dSEKUAcIRSAicCS06qV/132',
          name: '用户',
          txt: '期待,待期,待期,期,待期,期待,期待,期期待期,期待期期,待期期',
          fromNow: '3天前'
        }, {
          logo: 'http://thirdwx.qlogo.cn/mmopen/PDS4yGhkWYlEPmXoZW82KTj7U8HTURpVP7eh5DOibW3hGgFLJK4C5YGK13vYO5JhibevicDMdeysHQce4dSEKUAcIRSAicCS06qV/132',
          name: '用户',
          txt: '小姐姐太飒了吧',
          fromNow: '3天前'
        }]     
      },
      {
        _id: "zHNuZ6cqq6D8XN6nT",
        tag: '保暖',
        author: "平均",
        cover: "http://www.runoob.com/try/demo_source/paris.jpg",
        createtime: 1521872204815,
        link: "https://xidong360.com/newInfo/365fe48f923c4ba7a343448f8a4bfbd7",
        time: "2020年03月24日",
        title: "平价必看",
        agree: false,
        agreeNum: 93,
        commentNum: 0 
      }
    ]
    // for(let i of list){
    //   i.fromNow = util.fromNow(i.createtime)
    // }
    
    this.setData({
      list
    })
    var that = this;
    wx.request({
      url:  'https://www.youlewazi.top:1234/detailspage10/'+wx.getStorageSync('id'),
    
    data:{},
    header:{
      'content-type':'application/json'
    },
    
    success:function(res){
      console.log(list)
      console.log(res.data);
      that.setData({
        contain:res.data,
      })
    },
  })
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
  toAgree:function(e){
    let id = e.currentTarget.dataset.id;
    let list = this.data.list
    for(let i of list){
      if(i._id == id){
        i.agree = !i.agree
      }
      if (i._id == id && i.agree){
        i.agreeNum = i.agreeNum + 1        
      } else if (i._id == id && !i.agree){
        i.agreeNum = i.agreeNum - 1   
      }  
      this.setData({ list })       
    }
  },
  toComment:function(){
    console.log('comment')
  },
  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY
    })
  },
  //滑动事件处理
  touchmove: function (e) {
    let idx = e.currentTarget.dataset.index;
    let startX = this.data.startX,//开始X坐标
        startY = this.data.startY,//开始Y坐标
        touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
        touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
    //获取滑动角度
    angle = this.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });

    //滑动超过45度角 return
    if (Math.abs(angle) > 45) return;

    if (touchMoveX > startX) { //右滑
      this.setData({
        currentIndex: idx == 0 ? 0 : idx-1,
        cardRightIn: false,          
        cardLeftIn: true
      })
    }else{
      this.setData({
        currentIndex: idx == this.data.list.length - 1 ? idx : idx + 1,
        cardRightIn:true,
        cardLeftIn: false
      })
    }
    wx.pageScrollTo({
      scrollTop: 0
    })
        
  },
  /**
 * 计算滑动角度
 * @param {Object} start 起点坐标
 * @param {Object} end 终点坐标
 */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI)
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