// pages/cate-book/cate-book.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cateBooks:null,
        data:[{
            text:"热门",
            type:"hot"
        },{
            text:"新书",
            type:"new"
        },{
            text:"好评",
            type:"reputation"
        },{
            text:"完结",
            type:"over"
        },{
            text:"包月",
            type:"monthly"
        }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options.major);
        wx.request({
          url: 'http://novel.kele8.cn/sub-categories',
          success: (result) => {
              console.log(result);
          },
          fail: (res) => {},
          complete: (res) => {},
        })
        wx.request({
          url: 'https://novel.kele8.cn/category-info?gender=male&type=hot&major='+options.major+'&minor=&start=0&limit=20',
          success: (res) =>{
            console.log(res);
            this.setData({
                cateBooks: res.data.books
            })
          }
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