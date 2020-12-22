Page({
  data: {
    // 下拉列表
    select: false,
    grade_name: '--请选择--',
    grades: ['#今日气质名媛#', '#今日清爽干净#', '#今日复古文艺#','#今日休闲工装#','#今日灵动俏皮#','#今日酷帅潮流#','#其他#' ],

    img_url: [],
    content:'',
    region: ['河北省', '石家庄市', '裕华区'],
    customItem: '全部',
    txt: "",
    txt1:[],
    actionSheetHidden: true   //作为开关控制弹窗是否从底部弹出
  },
  // 下拉列表
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    console.log(e)
    var name = e.currentTarget.dataset.name
    this.setData({
      grade_name: name,
      select: false
    })
  },




  listenerActionSheet:function() {
  this.setData({
    actionSheetHidden: !this.data.actionSheetHidden
  })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
     multiArray: this.data.multiArray,
     multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = [''];
            data.multiArray[2] = [''];
            break;
          case 1:
            data.multiArray[1] = [''];
            data.multiArray[2] = [''];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = [''];
                break;
              case 1:
                data.multiArray[2] = [''];
                break;
              case 2:
                data.multiArray[2] = [''];
                break;
              case 3:
                data.multiArray[2] = [''];
                break;
              case 4:
                data.multiArray[2] = [''];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = [''];
                break;
              case 1:
                data.multiArray[2] = [''];
                break;
              case 2:
                data.multiArray[2] = [''];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        break;
    }
    console.log(data.multiIndex);
    this.setData(data);
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
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
  onShow: function (e) {
    var txt = wx.getStorageSync('txt')
    var txt1 = wx.getStorageSync('txt1')
    this.setData({
      txt,
      txt1
    })
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
  changeInput: function(e) {
    console.log(e);
    this.data.txt = e.detail.value
  },
  confirmInput:function(e){
    var txt = this.data.txt
    var txt1 = this.data.txt1
    wx.setStorageSync('txt', txt)
    // wx.setStorageSync('txt1', txt1)
    wx.getImageInfo(txt1)
    wx.setStorageSync('txt1', txt1)
    wx:wx.switchTab({
      url: '../square/square',
    });
    // this.setData({
    //   content:e.detail.value
    // });
  },
  chooseimage:function(){
    var that = this;
    wx.chooseImage({
      count: 9, // 默认9 
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有 
      success: function (res) {
        if (res.tempFilePaths.length>0){
          //图如果满了9张，不显示加图
          if (res.tempFilePaths.length == 9){
            that.setData({
              hideAdd:1
            })
            
          }else{
            that.setData({
              hideAdd: 0
            })
          }
          //把每次选择的图push进数组
          let img_url = that.data.img_url;
          for (let i = 0; i < res.tempFilePaths.length; i++) {
            img_url.push(res.tempFilePaths[i])
          }
        that.setData({
          img_url: img_url
        })
        console.log(img_url)
        // wx.setStorageSync('src', e.detail.src)
      }
    }
    }) 
    },
    //发表按钮事件
    send:function(event){
      // wx.switchTab({
      //   url: '../square/square?content='+this.data.content,
      // })
      

    //   var that = this;
    //   var user_id = wx.getStorageSync('userid')
    //   wx.showLoading({
    //     title: '上传中',
    //   })
    //   that.img_upload();
    //   wx.clearStorageSync("txt");
    // },
    // //返回按钮事件
    // return:function(event){
    //   this.setData({
    //     actionSheetHidden: !this.data.actionSheetHidden
    //   });
    // },
    // show:function(){
    //   wx:wx.switchTab({
    //     url: '../square/square',
    //   });
    //   wx:wx.clearStorageSync("txt");
    // },
    // //图片上传
    // img_upload: function () {
    //   let that = this;
    //   let img_url = that.data.img_url;
    //   let img_url_ok = [];
    //   //由于图片只能一张一张地上传，所以用循环
    //   for (let i = 0; i < img_url.length; i++) {
    //     wx.uploadFile({
    //     //路径填你上传图片方法的地址
    //       url: 'https://www.youlewazi.top:1234/releasenews/',
    //       filePath: img_url[i],
    //       name: 'file',
    //       formData: {
    //         'user': 'test'
    //       },
    //       success: function (res) {
    //         console.log('上传成功');
    //         //把上传成功的图片的地址放入数组中
    //         img_url_ok.push(res.data)
    //         //如果全部传完，则可以将图片路径保存到数据库
    //         if (img_url_ok.length == img_url.length) {
    //           var userid = wx.getStorageSync('userid');
    //           var content = that.data.content;
    //           wx.request({
    //             url: 'https://www.youlewazi.top:1234/releasenews/',
    //             data: {
    //               user_id: userid,
    //               images: img_url_ok,
    //               content: content,
    //             },
    //             success: function (res) {
    //               if (res.data.status == 1) {
    //                 wx.hideLoading()
    //                 wx.showModal({
    //                   title: '提交成功',
    //                   showCancel: false,
    //                   success: function (res) {
    //                     if (res.confirm) {
    //                       wx.navigateTo({
    //                         url: '/pages/my_moments/my_moments',
    //                       })
    //                     }
    //                   }
    //                 })
    //               }
    //             }
    //           })
    //         }
    //       },
    //       fail: function (res) {
    //         console.log('上传失败')
    //       }
    //     })
    //   }
    } 
  })