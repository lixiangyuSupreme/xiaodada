// pages/man/man.js
Page({
  // 页面的初始数据
  data: {
    inputShowed: false,  //初始文本框不显示内容
    curNav:1
  },
  // 使文本框进入可编辑状态
  showInput: function () {
    this.setData({
      inputShowed: true   //设置文本框可以输入内容
    });
  },
  // 取消搜索
  hideInput: function () {
    this.setData({
      inputShowed: false
    });
  },


// pages/stock/stock_main.js

  /* 把点击到的某一项 设为当前curNav */
  switchRightTab:function(e){
  let id = e.target.dataset.id;
  console.log(id);
  this.setData({
  curNav: id
  })
  },
  find:function(e){
    console.log(e)
    wx.setStorageSync('val', e.detail.value)
  },
  click:function(e){
    // if(e.currentTarget.dataset.value==)
    
    wx.navigateTo({
      url: '../result/result',
    })
    
},

  get:function(e){
    console.log(e)
    wx.setStorageSync('id', e.currentTarget.dataset.id)
  wx.navigateTo({
    url: '../detail1/detail1',
  })
  },
  get2:function(e){
    console.log(e)
    wx.setStorageSync('id', e.currentTarget.dataset.id)
  wx.navigateTo({
    url: '../detail2/detail2',
  })
  },
  get3:function(e){
    console.log(e)
    wx.setStorageSync('id', e.currentTarget.dataset.id)
  wx.navigateTo({
    url: '../detail3/detail3',
  })
  },
  get4:function(e){
    console.log(e)
    wx.setStorageSync('id', e.currentTarget.dataset.id)
  wx.navigateTo({
    url: '../detail4/detail4',
  })
  },
  onLoad:function(){
    var that =this
    wx.request({
      url:  'https://www.youlewazi.top:1234/manjacket',
    
    data:{},
    header:{
      'content-type':'application/json'
    },
    
    success:function(res){
      
      console.log(res.data);
      // console.log(res.data[1]);
      // var arr=res.data[1];
      // console.log(arr)
      that.setData({
        content:res.data,
      })
      
    },
    fail:function(err){
      console.log(err)
    }
    });
    wx.request({
      url:  'https://www.youlewazi.top:1234/mantrousers',
    
    data:{},
    header:{
      'content-type':'application/json'
    },
    
    success:function(res1){
      console.log(res1.data);
      // console.log(res.data[1]);
      // var arr=res.data[1];
      // console.log(arr)
      that.setData({
        content1:res1.data,
      })
      
    },
    fail:function(err){
      console.log(err)
    }
    });
    wx.request({
      url:  'https://www.youlewazi.top:1234/mancoat',
    
    data:{},
    header:{
      'content-type':'application/json'
    },
    
    success:function(res2){
      console.log(res2.data);
      that.setData({
        content2:res2.data,
      })
      
    },
    fail:function(err){
      console.log(err)
    }
    });
    wx.request({
      url:  'https://www.youlewazi.top:1234/manshoes',
    
    data:{},
    header:{
      'content-type':'application/json'
    },
    
    success:function(res3){
      console.log(res3.data);
      // console.log(res.data[1]);
      // var arr=res.data[1];
      // console.log(arr)
      that.setData({
        content3:res3.data,
      })
      
    },
    fail:function(err){
      console.log(err)
    }
    })
  }
 


});
  
