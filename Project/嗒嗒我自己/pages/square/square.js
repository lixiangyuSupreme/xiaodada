 // pages/square/square.js
 var app = getApp();
 Page({
 
   /**
    * 页面的初始数据
    */ 
   data: {
     up_show:false,//置顶按钮开始时处于隐藏状态
     inputShowed: false,  //初始文本框不显示内容
     key:'',
     note: [
      {
        name: '大脸猫爱吃鱼',
        index:'1',
        heart_num: '15',
        comment_num:'40',
        position:'河北省石家庄市裕华区',
        title: '优雅',
        url: '../../icon/a3.jpg',
        avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3184253852,937291099&fm=26&gp=0.jpg'
      },
       {
         name: '大脸猫爱吃鱼',
         index:'1',
         heart_num: '15',
         comment_num:'40',
         position:'河北省石家庄市裕华区',
         title: '你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识',
         url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3184253852,937291099&fm=26&gp=0.jpg',
         avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3184253852,937291099&fm=26&gp=0.jpg'
       },
       {
         name: '大脸猫爱吃鱼',
         index:'2',
         heart_num: '21',
         comment_num:'25',
         position:'福建省厦门市海沧区',
         title: '你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识',
         url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3709082463,117500551&fm=26&gp=0.jpg',
         avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3709082463,117500551&fm=26&gp=0.jpg'
       },
       {
         name: '大脸猫爱吃鱼',
         index:'3',
         heart_num: '32',
         comment_num:'38',
         position:'安徽省合肥市瑶海区',
         title: '你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识',
         url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1518042440,446726747&fm=11&gp=0.jpg',//http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg 
         avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1518042440,446726747&fm=11&gp=0.jpg'
       }, {
         name: '大脸猫爱吃鱼',
         index:'4',
         heart_num: '43',
         comment_num:'78',
         position:'浙江省杭州市上城区',
         title: '你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识',
         url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2465906470,3937835239&fm=26&gp=0.jpg',
         avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2465906470,3937835239&fm=26&gp=0.jpg'
       },
       {
         name: '大脸猫爱吃鱼',
         index:'5',
         heart_num: '54',
         comment_num:'89',
         position:'江苏省无锡市惠山区',
         title: '你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识',
         url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1732327503,543681949&fm=26&gp=0.jpg',
         avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1732327503,543681949&fm=26&gp=0.jpg'
       },
       {
         name: '大脸猫爱吃鱼',
         heart_num: '65',
         comment_num:'48',
         index:'6',
         position:'吉林省长春市宽城区',
         title: '你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识',
         url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3702173483,2365370423&fm=26&gp=0.jpg',
         avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3702173483,2365370423&fm=26&gp=0.jpg'
       },
       {
         name: '大脸猫爱吃鱼',
         index:'7',
         heart_num: '76',
         comment_num:'41',
         position:'辽宁省大连市中山区',
         title: '你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识',
         url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1911932488,2443488649&fm=26&gp=0.jpg',
         avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1911932488,2443488649&fm=26&gp=0.jpg'
       },
       {
         name: '大脸猫爱吃鱼',
         index:'8',
         heart_num: '87',
         comment_num:'15',
         position:'山西省大同市平城区',
         title: '你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识',
         url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1581110585,1993814658&fm=26&gp=0.jpg',
         avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1581110585,1993814658&fm=26&gp=0.jpg'
       }
     ]
     
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
 
   // 跳转到详情页
   goToDetailPage:function(e){
     let i = e.currentTarget.dataset.index;
     wx.navigateTo({
       url: '/pages/like/like',
     })
   },
 
   //跳转到消息页面
   info_jump: function () {
     wx.navigateTo({
       url: '/pages/info/info',
     })
   },
 
 
   //监听页面滑动
   onPageScroll:function(e){
     //当滑动条位置大于50时显示，小于50时隐藏
     if(e.scrollTop > 50){
       this.setData({
         up_show:true//显示
       })
     }
     if(e.scrollTop < 50){
       this.setData({
         up_show:false//隐藏
       })
     }
   },
   //点击置顶函数
   goToAction:function(res){
     var that =this;
     if(wx.pageScrollTo){
       wx.pageScrollTo({
         scrollTop: 0
       })
     }else{
       wx.showModal({
         title: '提示',
         content:'当前微信版本过低，无法使用该功能'
       })
     }
     wx.getStorage({ 
      key: 'title',

      data:{},
      success: function (res) {
        console.log(that.data.note[0])
        
        that.setData({
          'note[0].title':res.data,
        })
        console.log(that.data.note[0])
      }
    })
     
   },
   add_jump:function(){
      wx.navigateTo({
        url: '/pages/dynamic/dynamic',
      })
   },
 
 
 
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (res) {
    
    // var note = this.iniData();
    // this.setData({note:note});
    var that = this;
    wx.request({
      url:  'https://www.youlewazi.top:1234/information/',
    
    data:{},
    header:{
      'content-type':'application/json'
    },
    
    success:function(res){
      // console.log(res.data);
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
   onReady: function () {
 
   },
 
   /**
    * 生命周期函数--监听页面显示
    */
   onshow:function(res){
    console.log(res.data)
    // var note=res.data;
    // console.log(note)
    // console.log(note[0])
    // note[0].url=wx.getStorageSync('src')
   },
   iniData: function () {
    // {
    //   name: '大脸猫爱吃鱼',
    //   index:'1',
    //   heart_num: '15',
    //   comment_num:'40',
    //   position:'河北省石家庄市裕华区',
    //   title: '你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识',
    //   url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3184253852,937291099&fm=26&gp=0.jpg',
    //   avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3184253852,937291099&fm=26&gp=0.jpg'
    // },
    var note=[];
    var object1 = new Object();
    object1.name='大脸猫爱吃鱼';
    object1.index='1';
    object1.heart_num='15';
    object1.title=wx.getStorageSync('title');
    object1.url=wx.getStorageSync('src')
    note[0] =object1;
    return note;
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