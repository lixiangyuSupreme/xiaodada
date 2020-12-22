// pages/person/pe
Page({
  data: {
    // 表单
    content:'',
    sex:['男','女'],
    sexIndex:0,
    sexHidden: true,
    
    ipt:{
      sex:'',
    },

    // 列表
    dataList:[{
      kcbh:"1",
      kc:"肩宽",
      cj:168,
      show:false
    },
    {
      kcbh:"2",
      kc:"胸围",
      cj:168,
      show:false
    },
    {
      kcbh:"3",
      kc:"腰围",
      cj:168,
      show:false
    },
    {
      kcbh:"4",
      kc:"臀围",
      cj:168,
      show:false
    },
  ],
  },
  formSubmit:function(e){  
    console.log(e.detail.value);  
    if (e.detail.value.num1 == '') {
      wx.showToast({
        title: '请选择性别',
        icon: 'none'
      })
    } else if (e.detail.value.num2 == ''){
      wx.showToast({
        title: '请输入身高',
        icon: 'none'
      })
    } else if (e.detail.value.num3 == '') {
      wx.showToast({
        title: '请输入体重',
        icon: 'none'
      })
    } else if (e.detail.value.num4 == '') {
      wx.showToast({
        title: '请输入肩宽',
        icon: 'none'
      })
    
    } else {
      console.log(e.detail.value)
    }
    let list=this.data.dataList;
   list[0].cj=e.detail.value.num1*1
   list[1].cj=e.detail.value.num2*1
   list[2].cj=e.detail.value.num3*1
   list[3].cj=e.detail.value.num4*1
    let judge1= "您是 H 型身材";
    let judge2="您是 A 型身材";
    let judge3="您是 Y 型身材";
    let judge4="您是 X 型身材";
    let judge5="您是 O 型身材";
    // let sum =0;
    // sum=sum+list[0].cj+list[1].cj;
    if(list[1].cj-list[2].cj < 1 && list[3].cj-list[2].cj < 5){
      this.setData({
        content:judge1
      })
    }else if(list[0].cj<=list[3].cj){
      this.setData({
        content:judge2
      })
    }else if(list[0].cj>list[3].cj){
      this.setData({
        content:judge3
      })
    }else if(list[4].cj>list[1].cj && list[2].cj<list[1].cj){
      this.setData({
        content:judge4
      })
    }else if(list[2].cj>list[3].cj){
      this.setData({
        content:judge5
      })
    }else if(list[2].cj=='0'||list[3].cj=='0'||list[1].cj=='0'||list[0]=='0'){
      this.setData({
        content:judge6
      })
    }
    // this.setData({
    //   sum:sum
    // })
    },
     
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  
  bindinput: function (e) {
    let that = this
    
    let sexIndex = that.data.sexIndex
    let sexHidden = that.data.sexHidden

    let ipt = that.data.ipt
    let key_ = e.currentTarget.dataset.key
    let value = e.detail.value
    console.log(e.currentTarget.dataset.key)
    // height=value
    ipt[key_] = value

    if (key_ == 'sex'){
      sexIndex = value
      sexHidden = false
    }
    if (sexIndex == 0) {
      ipt.sex = '男'
    }else{
      ipt.sex = '女'
    }
    that.setData({
      sexIndex: sexIndex,
      sexHidden: sexHidden
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
    var that = this;
      wx.getStorage({
       key: '',
       success: function(res) {
         console.log(res.data)
         that.setData({
    content:res.data
         })
       } 
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

  }
})