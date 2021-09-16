// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        searchword: [ 
        "我可以爆修为",
        "不装了我就是大佬",
        "大唐之镇世武魂",
        "穿越成添狗他爸，我才是天命主角"
    ]
    },
    randomSearch: function () {
        var arr = [
            "不装了我就是大佬",
            "大唐之镇世武魂",
            "穿越成添狗他爸，我才是天命主角",
            "我可以爆修为"
        ];
        arr = arr.sort()
        this.setData({
            searchword: arr
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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