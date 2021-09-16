// pages/detail/detail.js
const {
    request
  } = require('../../utils/util.js')
  
  Page({
  
    /**
     * 页面的初始数据
     */
    data: {
      detail: Object,
      count: "",
      flag:true,
      reviews: [],
      latelyFollower: Number
    },
  
   toggleShow: function(){
       var that = this;
       var sh = that.data.flag;
       this.setData({
           flag: !sh
       })
   },
   navToChapter:function(event){
    wx.navigateTo({
      url: '/pages/chapter/chapter?id=' + event.currentTarget.dataset.id,
    })
   },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    //   console.log(options);
      request({
        url: "http://novel.kele8.cn/book-info/" + options.id
      }).then(res => {
        // console.log(res);
        var num = res.data.wordCount;
        if(num > 10000){
          num = Math.round(num / 10000);
        }
        var value = res.data.latelyFollower;
        if(value > 10000){
          value = (value / 10000).toFixed(1)
        }
        // console.log(value);
        // console.log(num);
        // console.log(res.data.latelyFollower);
        this.setData({
          detail: res.data,
          count: num,
          latelyFollower: value
        })
      })
      request({
        url: "https://novel.kele8.cn/book/reviews?book=" + options.id
      }).then(res => {
        // console.log(res.data.reviews);
        var reviews = res.data.reviews.splice(0,7);
        console.log(reviews);
        this.setData({
          reviews: reviews,
        })
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