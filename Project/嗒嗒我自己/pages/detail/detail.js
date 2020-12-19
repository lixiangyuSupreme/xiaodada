// pages/detail/detail.js
Page({

    data: {
        fHidden:false,
        mHidden:true,
        note: [
            {
                name: '大脸猫爱吃鱼',
                index: '1',
                heart_num: '15',
                comment_num: '40',
                position: '河北省石家庄市裕华区',
                title: '你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识',
                url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3184253852,937291099&fm=26&gp=0.jpg',
                avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3184253852,937291099&fm=26&gp=0.jpg'
            },
            {
                name: '大脸猫爱吃鱼',
                index: '2',
                heart_num: '21',
                comment_num: '25', 
                position: '福建省厦门市海沧区',
                title: '你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识',
                url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3709082463,117500551&fm=26&gp=0.jpg',
                avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3709082463,117500551&fm=26&gp=0.jpg'
            },
            {
                name: '大脸猫爱吃鱼',
                index: '3',
                heart_num: '32',
                comment_num: '38',
                position: '安徽省合肥市瑶海区',
                title: '你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识',
                url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1518042440,446726747&fm=11&gp=0.jpg',//http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg 
                avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1518042440,446726747&fm=11&gp=0.jpg'
            }, {
                name: '大脸猫爱吃鱼',
                index: '4',
                heart_num: '43',
                comment_num: '78',
                position: '浙江省杭州市上城区',
                title: '你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识',
                url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2465906470,3937835239&fm=26&gp=0.jpg',
                avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2465906470,3937835239&fm=26&gp=0.jpg'
            },
            {
                name: '大脸猫爱吃鱼',
                index: '5',
                heart_num: '54',
                comment_num: '89',
                position: '江苏省无锡市惠山区',
                title: '你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识',
                url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1732327503,543681949&fm=26&gp=0.jpg',
                avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1732327503,543681949&fm=26&gp=0.jpg'
            },
            {
                name: '大脸猫爱吃鱼',
                heart_num: '65',
                comment_num: '48',
                index: '6',
                position: '吉林省长春市宽城区',
                title: '你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识',
                url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3702173483,2365370423&fm=26&gp=0.jpg',
                avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3702173483,2365370423&fm=26&gp=0.jpg'
            },
            {
                name: '大脸猫爱吃鱼',
                index: '7',
                heart_num: '76',
                comment_num: '41',
                position: '辽宁省大连市中山区',
                title: '你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识',
                url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1911932488,2443488649&fm=26&gp=0.jpg',
                avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1911932488,2443488649&fm=26&gp=0.jpg'
            },
            {
                name: '大脸猫爱吃鱼',
                index: '8',
                heart_num: '87',
                comment_num: '15',
                position: '山西省大同市平城区',
                title: '你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识你所不知道的穿搭知识',
                url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1581110585,1993814658&fm=26&gp=0.jpg',
                avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1581110585,1993814658&fm=26&gp=0.jpg'
            }
        ]
    },
    look: function () {
        console.log(key)
    },

    follow:function(){
        this.setData({
            fHidden:true,
            mHidden:false
        })
    },

    changeModel:function(){
        this.setData({
            mHidden:true
        })
    },

    cancelModel:function(){
        this.setData({
            mHidden:true
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let i = options.i;
        this.setData({
            datailData: this.data.note[i - 1]
        }); 
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