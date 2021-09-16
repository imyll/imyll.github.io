// pages/chapter/chapter.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        chapters:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.request({
          url: 'http://novel.kele8.cn/book-sources?view=summary&book=' + options.id,
          success: (res) => {
            var sourseId = res.data[0]._id
            wx.request({
              url: 'http://novel.kele8.cn/book-chapters/' + sourseId,
              success:(res2) => {
                // console.log(res2, this);
                // console.log(res2.data.chapters);
                this.setData({
                    chapters: res2.data.chapters
                })
              }
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