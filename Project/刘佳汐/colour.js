var animation = wx.createAnimation({})
var i = 1;  
Page({
  data: {
    donghua: true,
    YmodalHidden: true,
    RmodalHidden: true,
    BLmodalHidden: true,
    BRmodalHidden: true,
    Adjacent:true,
    Homochromatic:true,
    Complementary:true,
    Colourless:true,
    left1: Math.floor(Math.random() * 305 + 1),
    left2: Math.floor(Math.random() * 305 + 1),
    left3: Math.floor(Math.random() * 305 + 1),
    left4: Math.floor(Math.random() * 305 + 1),
    left5: Math.floor(Math.random() * 305 + 1),
    left6: Math.floor(Math.random() * 305 + 1),
    
  },
  onShow: function () {
    this.donghua()
  },
  yellow:function(){
    this.setData({
      YmodalHidden: false
    })
  },
  red:function(){
    this.setData({
      RmodalHidden: false
    })
  },
  blue:function(){
    this.setData({
      BLmodalHidden: false
    })
  },
  brown:function(){
    this.setData({
      BRmodalHidden: false
    })
  },
  YmodalCandel: function() {
    // do something
    this.setData({
      YmodalHidden: true
    })
  },
  YmodalConfirm: function() {
    // do something
    this.setData({
      YmodalHidden: true
    })
  },
  RmodalCandel: function() {
    // do something
    this.setData({
      RmodalHidden: true
    })
  },
  RmodalConfirm: function() {
    // do something
    this.setData({
      RmodalHidden: true
    })
  },
  BLmodalCandel: function() {
    // do something
    this.setData({
      BLmodalHidden: true
    })
  },
  BLmodalConfirm: function() {
    // do something
    this.setData({
      BLmodalHidden: true
    })
  },
  BRmodalCandel: function() {
    // do something
    this.setData({
      BRmodalHidden: true
    })
  },
  BRmodalConfirm: function() {
    // do something
    this.setData({
      BRmodalHidden: true
    })
  },
  donghua: function () {
    setTimeout(function () {
      animation.translateY(604).step({ duration: 4000 })
      this.setData({
        ["animationData" + i]: animation.export()
      })
      i++;
    }.bind(this), 500)
    if (i < 7) {
      setTimeout(function () {
        this.donghua()
      }.bind(this), 500)
    } else {
      setTimeout(function () {
        this.setData({
          donghua: false
        })
      }.bind(this), 4500)
    }
  },
  adjacent:function(){
    this.setData({
      Adjacent: false
    })
  },
  Adjacent: function() {
    // do something
    this.setData({
      Adjacent: true
    })
  },
  Adjacent: function() {
    // do something
    this.setData({
      Adjacent: true
    })
  },
  complementary:function(){
    this.setData({
      Complementary: false
    })
  },
  Complementary: function() {
    // do something
    this.setData({
      Complementary: true
    })
  },
  Complementary: function() {
    // do something
    this.setData({
      Complementary: true
    })
  },
  homochromatic:function(){
    this.setData({
      Homochromatic: false
    })
  },
  Homochromatic: function() {
    // do something
    this.setData({
      Homochromatic: true
    })
  },
  Homochromatic: function() {
    // do something
    this.setData({
      Homochromatic: true
    })
  },
  colourless:function(){
    this.setData({
      Colourless: false
    })
  },
  Colourless: function() {
    // do something
    this.setData({
      Colourless: true
    })
  },
  Colourless: function() {
    // do something
    this.setData({
      Colourless: true
    })
  },
})