var util = require('../../utils/util.js');
var app = getApp();
 
Page({
    data: {
      currentData:0,
      type: 'expend',
    currentTab: 0,
        avatarUrl : "",
        nickName:"",
        userImg: "../../images/pic_160.png", // 头像图片路径
        actionSheetHidden: true, // 是否显示底部可选菜单
        actionSheetItems: [
            // { bindtap: 'changeImage', txt: '修改头像' },
            { bindtap: 'viewImage', txt: '查看头像' }
        ] ,// 底部可选菜单
        haveUrl:[
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1234432596,2589864223&fm=26&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1234432596,2589864223&fm=26&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1234432596,2589864223&fm=26&gp=0.jpg"
        ]
    },
    changeTab: function(e){
      const that = this;
      console.log(e.currentTarget.dataset.current);
      this.setData({
        currentData:e.currentTarget.dataset.current
      })
    },
    
  
    showUserInfoTap:function(){
        var that = this;
        wx.getUserInfo({
          success: function(res) {
            console.log(res);
            
            var userInfo = res.userInfo
            console.log(userInfo);
            var avatarUrl = userInfo.avatarUrl
            var nickName = userInfo.nickName
            that.setData({
              avatarUrl : avatarUrl,
              nickName:nickName
            })
          }
        })
      },
    // 初始化加载获取设备长宽
    onLoad: function (options) {
      
        var that = this;
        // console.log(1)
          wx.request({
      url:  'https://www.youlewazi.top:1234/like/',
    
    data:{},
    header:{
      'content-type':'application/json'
    },
 
    success:function(res){
      console.log(res)
      that.setData({
        haveUrl:res.data,
      })
    },
  });
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
      content:res.data,
    })
  },
})

        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    windowHeight: res.windowHeight,
                    windowWidth: res.windowWidth
                })
            }
        });
    },
    // 点击头像 显示底部菜单
    clickImage: function () {
        var that = this;
        that.setData({
            actionSheetHidden: !that.data.actionSheetHidden
        })
    },
    // 点击其他区域 隐藏底部菜单
    actionSheetbindchange: function () {
        var that = this;
        that.setData({
            actionSheetHidden: !that.data.actionSheetHidden
        })
    },
  
    // 查看原图
    viewImage: function () {
        var that = this;
        wx.previewImage({
            current: '', // 当前显示图片的http链接
            urls: [that.data.userImg] // 需要预览的图片http链接列表
        })
    },
    //编辑资料
   
    jumpToMyPage: function()
    {
      wx.navigateTo({
        url: '../content/content'
      })
    },
    haveImage: function()
    {
      wx.navigateTo({
        url: '../detail5/detail5'
      })
    },
    // onLoad: function (options) {
    //     /** 
    //     * 获取系统信息 
    //     */
    //     wx.getSystemInfo({
    //       success: (res) => {
    //         this.setData({
    //           winWidth: res.windowWidth,
    //           winHeight: res.windowHeight
    //         });
    //       }
    //     });
    //   },
      bindChange: function (e) {
        this.setData({ currentTab: e.detail.current });
      },
      /** 
       * 点击tab切换 
       */
      swichNav: function (e) {
        var that = this;
        if(this.data.currentTab===0){
            
        }
        if (this.data.currentTab === e.target.dataset.current) {
            this.setData({
                color:'red'
            })
          return false;
          
        } else {
          that.setData({
            currentTab: e.target.dataset.current
          })
        }

      },
    
});