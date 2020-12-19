//pages/woman/woman.js
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
  // switchRightTab:function(e){
  // let id = e.target.dataset.id;
  // console.log(id);
  // this.setData({
  // curNav: id
  // })
  // },
  switchRightTab:function(e){
    let id = e.target.dataset.id;
    console.log(id);
    this.setData({
    curNav: id
    })
    },
    get:function(e){
      console.log(e)
      wx.setStorageSync('id', e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../detail5/detail5',
    })
    },
    get1:function(e){
      console.log(e)
      wx.setStorageSync('id', e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../detail6/detail6',
    })
    },
    get2:function(e){
      console.log(e)
      wx.setStorageSync('id', e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../detail7/detail7',
    })
    },
    get3:function(e){
      console.log(e)
      wx.setStorageSync('id', e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../detail8/detail8',
    })
    },
    get4:function(e){
      console.log(e)
      wx.setStorageSync('id', e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../detail9/detail9',
    })
    },
    get5:function(e){
      console.log(e)
      wx.setStorageSync('id', e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../detail10/detail10',
    })
    },
    get6:function(e){
      console.log(e)
      wx.setStorageSync('id', e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../detail11/detail11',
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




onLoad:function(){
  var that =this
  //第一个
  wx.request({
    url:  'https://www.youlewazi.top:1234/womanjacket',
  
  data:{},
  header:{
    'content-type':'application/json'
  },
  success:function(res){
    console.log(res.data);
    that.setData({
      content:res.data,
    })
  },
  fail:function(err){
    console.log(err)
  }
  });
  //第二个
  wx.request({
    url:  'https://www.youlewazi.top:1234/womantrousers',
  
  data:{},
  header:{
    'content-type':'application/json'
  },
  success:function(res1){
    console.log(res1.data);
    that.setData({
      content1:res1.data,
    })
  },
  fail:function(err){
    console.log(err)
  }
  });
  //第三个
  wx.request({
    url:  'https://www.youlewazi.top:1234/womanloosecoat',
  
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
  //第四个
  wx.request({
    url:  'https://www.youlewazi.top:1234/skirt',
  
  data:{},
  header:{
    'content-type':'application/json'
  },
  success:function(res3){
    console.log(res3.data);
    that.setData({
      content3:res3.data,
    })
  },
  fail:function(err){
    console.log(err)
  }
  });
  //第五个连衣裙
  wx.request({
    url:  'https://www.youlewazi.top:1234/dress',
  
  data:{},
  header:{
    'content-type':'application/json'
  },
  success:function(res4){
    console.log(res4.data);
    that.setData({
      content4:res4.data,
    })
  },
  fail:function(err){
    console.log(err)
  }
  });
  //第六个头饰
  wx.request({
    url:  'https://www.youlewazi.top:1234/headwear',
    data:{},
  header:{
    'content-type':'application/json'
  },
  success:function(res5){
    console.log(res5.data);
    that.setData({
      content5:res5.data,
    })
  },
  fail:function(err){
    console.log(err)
  }
  });
  //第七个鞋子
  wx.request({
    url:  'https://www.youlewazi.top:1234/womanshoes',
    data:{},
  header:{
    'content-type':'application/json'
  },
  success:function(res6){
    console.log(res6.data);
    that.setData({
      content6:res6.data,
    })
  },
  fail:function(err){
    console.log(err)
  }
  });
},
// onLoad:function(){
//   var that =this
//   wx.request({
//     url:  'https://www.youlewazi.top:1234/womantrousers',
  
//   data:{},
//   header:{
//     'content-type':'application/json'
//   },
//   success:function(res){
//     console.log(res.data);
//     that.setData({
//       content1:res.data,
//     })
//   },
//   fail:function(err){
//     console.log(err)
//   }
//   })
// }
  

suo: function (e) {
  wx.navigateTo({
    url: '../detail5/detail5',
  })
},







 


});
