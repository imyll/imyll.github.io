// pages/rank/rank.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:null,
        booklist:null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.request({
            url: 'https://novel.kele8.cn/rank-category',
            success: (result) => {
              //   console.log(result);
                var list = result.data.male;
                console.log(list);
                // console.log(list[0].shortTitle);
                this.setData({
                    list:result.data.male
                })
                wx.request({
                  url: 'http://novel.kele8.cn/rank/54d42d92321052167dfb75e3',
                  success: (result) => {
                    //   console.log(result);
                      this.setData({
                          booklist:result.data.ranking.books
                      })
                  },
                })
            },
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