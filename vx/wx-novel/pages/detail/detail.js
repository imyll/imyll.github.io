// pages/detail/detail.js
const {
  request
} = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    detail: Object,
    count: "",
    isExit: false,
    reviews: null,
    latelyFollower: Number,
    recommendbooks: null
  },

  navToChapter: function (event) {
    wx.navigateTo({
      url: '/pages/chapter/chapter?id=' + event.currentTarget.dataset.id,
    })
  },
  //  跳转至阅读页面
  navToRead: function (event) {
    // console.log(event);
    wx.navigateTo({
      url: '/pages/read/read?order=' + event.currentTarget.dataset.order,
    })
  },
  //  加入书架
  addShelf: function () {
    if (!this.getIsExit()) {
      var old = wx.getStorageSync('shelf') || []
      wx.setStorageSync('shelf', [...old, { ...this.data.detail }])
    }
    this.setData({
      isExit: this.getIsExit(this.data.id)
    })

  },
  // 移出书架
  removeShelf: function () {
    // console.log(this.data.id);
    var old = wx.getStorageSync('shelf') || [];
    // console.log(old);
    var newShelf = old.filter(item => item._id !== this.data.id)
    this.setData({
      books: newShelf,
      isExit: false
    })
    wx.setStorageSync('shelf', newShelf)
  },

  
  getIsExit: function (id) {
    var old = wx.getStorageSync('shelf') || [];
    var isExit = old.find(item => item._id === id);
    return isExit
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id);
    this.setData({
      id: options.id
    })
    wx.showLoading({
      title: '加载中',
    })
    //   console.log(options);
    request({
      url: "http://novel.kele8.cn/book-info/" + options.id
    }).then(res => {
      // console.log(res);
      var num = res.data.wordCount;
      if (num > 10000) {
        num = Math.round(num / 10000);
      }
      var value = res.data.latelyFollower;
      if (value > 10000) {
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
    });
    request({
      url: "https://novel.kele8.cn/book/reviews?book=" + options.id + "&limit=7"
    }).then(res => {
      // console.log(res.data.reviews);
      // console.log(res.data.reviews[0].author.avatar);
      // for(var i = 0; i < 7; i++){
      //   console.log(res.data.reviews[i].author.avatar);
      // }
      this.setData({
        reviews: res.data.reviews,
      })
    });
    wx.request({
      url: 'http://novel.kele8.cn/recommend/' + options.id,
      success: (res) => {
        // console.log(res);
        this.setData({
          recommendbooks: res.data.books
        })
      },
      complete: () => {
        wx.hideLoading()
      }
    })

    var isExit = this.getIsExit(options.id)
    this.setData({
      isExit: isExit
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