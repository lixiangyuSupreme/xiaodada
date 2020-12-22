//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputValue: '', //搜索的内容
    // motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    
  },
  data: {
    autoplay:true,
    indicatorDots: true,
    interval:3000,
    duration: 800,
    circular:true,
      // 轮播图
    imgUrls: [
      {
        link:'/pages/plot/plot',
        url: 'https://pic.rmb.bdstatic.com/af64869d43edd853d2b31eea850d2735.jpeg'
      },
      {
        link:'/pages/plot1/plot1',
        url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3230923203,2838395372&fm=15&gp=0.jpg'
      },
      {
        link:'/pages/plot2/plot2',
        url:  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3243861651,340644124&fm=15&gp=0.jpg'
      },{
        link:'/pages/plot3/plot3',
        url:  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3290476983,1984158070&fm=26&gp=0.jpg'
      },{
        link:'/pages/plot6/plot6',
        url:  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2511785197,3113180638&fm=26&gp=0.jpg'
      },{
        link:'/pages/plot5/plot5',
        url:  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=329779893,2406869762&fm=26&gp=0.jpg'
      },
    ],
   
    // 图片列表
    contentImgUrls:[
      {
        title:'今日气质名媛',
        url1:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2551571791,3046075703&fm=26&gp=0.jpg',
        link1:"/pages/plot/plot",
        
      },{
        title:'今日清爽干净',
        link1:"/pages/plot1/plot1",
        url1:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3835379339,1211638504&fm=26&gp=0.jpg'
      },{
        title:'今日复古文艺',
        link1:"/pages/plot2/plot2",
        url1:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3859968389,2868525022&fm=26&gp=0.jpg'
      },{
        title:'今日休闲工装',
        link1:"/pages/plot3/plot3",
        url1:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2013152267,3915759176&fm=26&gp=0.jpg'
      },{
        title:'今日灵动俏皮',
        link1:"/pages/plot6/plot6",
        url1:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=776860355,1904698069&fm=15&gp=0.jpg'
      },{
        title:'今日酷帅潮流',
        link1:"/pages/plot5/plot5",
        url1:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2244089265,872159088&fm=26&gp=0.jpg'
      }
    ],
  },
  // 搜索框
  find:function(e){
    console.log(e)
    wx.setStorageSync('val', e.detail.value)
  },
  click:function(e){
    wx.navigateTo({
      url: '../result/result',
    })
    
},
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  
  onLoad: function () {
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //  //搜索框
  //  //搜索框文本内容显示
  //  inputBind: function(event) {
  //   this.setData({
  //       inputValue: event.detail.value
  //   })
  //   console.log( this.data.inputValue)
  // },
  // query:function(){
  //   console.log("搜索")
  // },
  // 男女按钮跳转
  jumpTo1:function(){
    console.log('女生穿搭')
    wx.navigateTo({
      url: '/pages/woman/woman',
    })
  },
  jumpTo2:function(){
    console.log('男生穿搭')
    wx.navigateTo({
      url: '/pages/man/man',
    })
  },
  // 轮播图
  jumpages:function(){ 
    wx.navigateTo({
      url: '/pages/man/man',
    })
  },

})
