// pages/cate-book/cate-book.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        gender: '',
        cateBooks: null,
        subCategories: null,
        filter: [{
            text: "热门",
            type: "hot"
        }, {
            text: "新书",
            type: "new"
        }, {
            text: "好评",
            type: "reputation"
        }, {
            text: "完结",
            type: "over"
        }, {
            text: "包月",
            type: "monthly"
        }],
        subs: [],
        major: null,
        currentFilter: null,
        currentSubs: '',
        page: 0,
        hasMore: false
    },
    changeFilter(e) {
        // console.log(e.currentTarget.dataset.filter);
        this.setData({
            currentFilter: e.currentTarget.dataset.filter,
            page: 0
        }, () => {
            this.getBooks()
        })
    },
    changeSub(e) {
        // console.log(e.currentTarget.dataset.subs);
        this.setData({
            currentSubs: e.currentTarget.dataset.subs,
            page: 0
        }, () => {
            this.getBooks()
        })
    },
    getBooks() {
        wx.showLoading({
            title: '加载中',
        })
        wx.request({
            url: 'http://novel.kele8.cn/category-info',
            data: {
                gender: this.data.gender,
                type: this.data.currentFilter.type,
                major: this.data.major,
                minor: this.data.currentSubs,
                start: this.data.page,
                limit: 20,
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: (result) => {
                // console.log(result);
                if (this.data.page) {
                    this.setData({
                        cateBooks: [...this.data.cateBooks, ...result.data.books]
                    })
                } else {
                    this.setData({
                        cateBooks: result.data.books
                    })
                }

                if (result.data.books.length === 0) {
                    this.setData({
                        hasMore: true
                    })
                } else {
                    this.setData({
                        hasMore: false
                    })
                }
            },
            complete: () => {
                wx.hideLoading()
            }
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options.major);
        // console.log(options.gender);
        this.setData({
            gender: options.gender,
            major: options.major,
            currentFilter: this.data.filter[0]
        })
        wx.request({
            url: 'http://novel.kele8.cn/sub-categories',
            success: (result) => {
                // console.log(result);
                this.setData({
                    subCategories: result.data,
                    subs: result.data[options.gender].find(item => item.major === options.major).mins,
                    currentSubs: result.data[options.gender].find(item => item.major === options.major).mins[0]
                })
            },
        })
        this.getBooks()

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
        this.getBooks();
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        this.setData({
            page: this.data.page + 1
        }, () => {
            this.getBooks()
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})