// pages/rank/rank.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        gender: "male",
        rankcate: null,
        list: null,
        booklist: null,
    },
    changeGender: function (e) {
        // console.log(e);
        this.setData({
            gender: e.currentTarget.dataset.gender || 'male',
        })
        wx.showLoading({
            title: '加载中',
        })
        wx.request({
            url: 'http://novel.kele8.cn/rank/'+e.currentTarget.dataset.id,
            success: (result) => {
                //   console.log(result);
                this.setData({
                    booklist: result.data.ranking.books
                })
            },
            complete: () => {
                wx.hideLoading()
            }
        })
    },
    getRankBook: function (e) {
        console.log(e);
        wx.showLoading({
            title: '加载中',
        })
        // console.log(e.currentTarget.dataset.id);
        // this.setData({
        //     booklist:null
        // })
        wx.request({
            url: 'http://novel.kele8.cn/rank/' + e.currentTarget.dataset.id,
            success: (res) => {
                // console.log(res);
                this.setData({
                    booklist: res.data.ranking.books
                })
            },
            complete: () => {
                wx.hideLoading()
            }
        })
    },
    navToDetail:function(e){
        console.log(e);
        wx.navigateTo({
          url: '/pages/detail/detail?id='+e.currentTarget.dataset.id,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log(options);
        wx.request({
            url: 'https://novel.kele8.cn/rank-category',
            success: (result) => {
                // console.log(result.data);
                this.setData({
                    rankcate: result.data
                })
            },
        });
        wx.request({
            url: 'http://novel.kele8.cn/rank/54d42d92321052167dfb75e3',
            success: (result) => {
                //   console.log(result.data.ranking.books);
                this.setData({
                    booklist: result.data.ranking.books
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