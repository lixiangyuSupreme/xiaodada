const app = getApp()

Page({
  data: {
    array:[]
  },
  onLoad:function(){
    var array = this.iniData();
    this.setData({array:array});
  },
  yy:function(){
    wx.showToast({
      title: '预约成功',
      icon: 'success',
      duration: 2000
    })
  },
  iniData:function(){
    var array=[];
    var object1 = new Object();
    object1.img="../../icon/1.jpg";
    object1.title="Designer Xiang";
    object1.type="便宜实惠";
    object1.liulan="￥0.1/次";
    object1.pinglun = "2次搭配经验"
    var object2 = new Object();
    object2.img="../../icon/2.jpg";
    object2.title="Designer Zhang";
    object2.type="百挑不出错";
    object2.liulan="￥0.2/次";
    object2.pinglun = "3次搭配经验"
    var object3 = new Object();
    object3.img="../../icon/3.jpg";
    object3.title="Designer Fang";
    object3.type="最爱运动休闲";
    object3.liulan="￥0.3/次";
    object3.pinglun = "4次搭配经验"
    var object4 = new Object();
    object4.img="../../icon/4.jpg";
    object4.title="Designer Lin";
    object4.type="休闲无敌舒适";
    object4.liulan="￥0.4/次";
    object4.pinglun = "5次搭配经验"
    var object5 = new Object();
    object5.img="../../icon/1.jpg";
    object5.title="Designer Liu";
    object5.type="时尚平台前沿";
    object5.liulan="￥0.5/次";
    object5.pinglun = "6次搭配经验"
    var object6= new Object();
    object6.img="../../icon/2.jpg";
    object6.title="Designer Lee";
    object6.type="简洁大方亮眼";
    object6.liulan="￥0.6/次";
    object6.pinglun = "7次搭配经验"

    array[0] =object1;
    array[1] =object2;
    array[2] = object3;
    array[3] = object4;
    array[4] = object5;
    array[5] = object6;
    return array;
  }
 
})
