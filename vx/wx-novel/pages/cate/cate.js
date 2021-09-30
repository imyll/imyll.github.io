// pages/cate/cate.js
const {
    request
} = require('../../utils/util.js')

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // cates: null,
        flag: true
    },
    navToCatebook: function (event) {
        //    console.log(event.currentTarget.dataset.name);
        // console.log(event.currentTarget.dataset.gender);
        wx.navigateTo({
          url: '/pages/cate-book/cate-book?major='+event.currentTarget.dataset.name + '&gender='+event.currentTarget.dataset.gender,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        request({
            url: "http://novel.kele8.cn/categories"
        }).then(res => {
            // console.log(res);
            this.setData({
                cates: res.data
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