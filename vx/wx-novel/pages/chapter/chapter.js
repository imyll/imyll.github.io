// pages/chapter/chapter.js
var cs = [];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // chapters: [],
    reversed: false,
    page: 0,
    content:{}
  },
  reverse: function () {
    // console.log(132);
    // console.log(this.data.chapters);
    this.setData({
      chapters: cs && cs.reverse().slice(0, 100),
      reversed: !this.data.reversed
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      bookid: options.id
    })
    wx.request({
      url: 'http://novel.kele8.cn/book-sources?view=summary&book=' + options.id,
      success: (res) => {
        var sourseId = res.data[0]._id
        wx.request({
          url: 'http://novel.kele8.cn/book-chapters/' + sourseId,
          success: (res2) => {
            // console.log(res2, this);
            // console.log(res2.data.chapters);
            // this.setData({
            //   chapters: res2.data.chapters.slice(0, 100);
            // })
            // console.log(sourseId);
            cs = res2.data.chapters;
            this.setData({
              chapters: cs.slice(0, 100)
            })
          }
        })
      }
    })
  },
  navtoread:function(event){
    wx.navigateTo({
      url:`/pages/read/read?bookid=${this.data.bookid}&order=${event.currentTarget.dataset.order}`,
      success:(res) => {
        content:res.data
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
    console.log(cs);
    this.setData({
      page: this.data.page + 1
    }, () => {
      this.setData({
        chapters: [...this.data.chapters, ...cs.slice(this.data.page * 100, (this.data.page + 1) * 100)]
      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})