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
        ],
        inputVal:null,
        flag:true,
        searchBooks:null
    },
    // 热搜随机排序
    randomSearch: function () {
        var arr = this.data.searchword;
        arr.sort(function () {
            return Math.random() - 0.5;
        });
        this.setData({
            searchword: arr
        })
    },
    // 获取搜索框的value值
    getValue: function (e) {
        console.log(e.detail);
            this.setData({
                flag:!this.data.flag,
                inputVal:e.detail
            })
            wx.request({
                url: 'https://novel.kele8.cn/auto-complete?query='+this.data.inputVal,
                success: (res) => {
                    console.log(res.data.keywords);
                    this.setData({
                        searchBooks:res.data.keywords
                    })
                    
                },
            })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.request({
          url: 'https://novel.kele8.cn/auto-complete?query='+this.data.inputVal,
          success: (result) => {
              console.log(result);
          },
          fail: (res) => {},
          complete: (res) => {},
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