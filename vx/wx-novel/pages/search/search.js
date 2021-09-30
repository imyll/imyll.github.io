// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        searchword: null,
        inputVal:'',
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
        // console.log(e.detail);
        this.setData({
            inputVal:e.detail
        })
        wx.request({
            url: 'https://novel.kele8.cn/auto-complete?query='+this.data.inputVal,
            success: (res) => {
                // console.log(res.data.keywords);
                this.setData({
                    searchBooks:res.data.keywords
                })
                
            },
        })
    },
    btnclick:function(e){
        // console.log(e.currentTarget.dataset.keyword);
        var oldhistory = wx.getStorageSync('history') || []
        // console.log(oldhistory);
        wx.setStorageSync('history', [...oldhistory,e.currentTarget.dataset.keyword])
        if(e.currentTarget.dataset.keyword.trim()){
            wx.navigateTo({
              url: '/pages/search-book/search-book?keyword='+e.currentTarget.dataset.keyword,
            })
        }
    },
    navToBook:function(e){
        // console.log(e.currentTarget.dataset.keyword);
        wx.navigateTo({
          url: '/pages/search-book/search-book?keyword='+e.currentTarget.dataset.keyword,
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.request({
          url: 'https://novel.kele8.cn/hot-books',
          success: (res) => {
            //   console.log(res);
              this.setData({
                  searchword:res.data.newHotWords
            })
          },
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