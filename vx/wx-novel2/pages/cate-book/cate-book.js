// pages/cate-book/cate-book.js
const {
    request
} = require('../../utils/util.js')

Page({
    /**
     * 页面的初始数据
     */
    data: {
        data:null,
        bookData:null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var data = JSON.parse(options.data); 
        // console.log(data);
        this.setData({
            data:data
        });
        // console.log(data.major);
        // console.log(this.data.cates);
        request({
          url: `https://novel.kele8.cn/category-info?gender=male&type=hot&major=${data.major}&start=0&limit=20`
        }).then((res) => {
            console.log(res);
            this.setData({
                bookdata: res.data
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