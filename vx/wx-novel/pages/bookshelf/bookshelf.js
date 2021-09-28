// pages/bookshelf/bookshelf.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        books: []
    },

    click: function (event) {
        // console.log(event.currentTarget.dataset.id);
        if(event.detail == "right"){
            var old = wx.getStorageSync('shelf') || []
            var newShelf = old.filter(item => item._id !== event.currentTarget.dataset.id)
            this.setData({
                books: newShelf
            })
            wx.setStorageSync('shelf', newShelf)
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            books: wx.getStorageSync('shelf') || []
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
        this.setData({
            books: wx.getStorageSync('shelf') || []
        })
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