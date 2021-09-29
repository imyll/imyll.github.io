// pages/read/read.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id:"",
        order:'',
        content: {},
        show: false,
        config: wx.getStorageSync('config') || {
            size: 14,
            theme: "white"
        },
        themes: [{
            name: "白天",
            text: "white",
            bg: "white"
        }, {
            name: "夜间",
            text: "dark",
            bg: "#161819"
        }, {
            name: "护眼",
            text: "eye",
            bg: "#c7edcc"
        }, {
            name: "复古",
            text: "retro",
            bg: "#9c8e66"
        }],
        x: 0
    },
    onClickLeft: function () {
        wx.navigateBack({

        })
    },
    showPopup() {
        this.setData({ show: true });
    },
    onClose() {
        this.setData({ show: false });
    },
    onChange(event) {
        this.setData({
            "config.size": event.detail
        },()=>{
            this.closeAndSyncConfig()
        })
    },
    changeTheme:function(event){
        // console.log(event);
        this.setData({
            "config.theme": event.currentTarget.dataset.theme,
            show:false
        },()=>{
            this.closeAndSyncConfig()
        })
    },
    closeAndSyncConfig(){
        wx.setStorageSync('config', this.data.config)
    },

    next:function(){
        let order = String(Number(this.data.order)+1)
        this.setData({
            order:"order"
        })
        // console.log(order);
        wx.request({
            url: 'http://novel.kele8.cn/chapters2/56a8303e2aefdf397cbbf831/' + order,
            success: (res) => {
                this.setData({
                    content: {
                        ...res.data,
                        cpContent: res.data.cpContent
                            .match(/<p>(.+?)<\/p>/gim)
                            .map((item) => item.replace(/(<p>|<\/p>)/gim, ""))
                    }
                })
            }
        });

    },
    back:function(){
        let order = String(Number(this.data.order)-1)
        this.setData({
            order:order
        })
        // console.log(order);
        wx.request({
            url: 'http://novel.kele8.cn/chapters2/56a8303e2aefdf397cbbf831/' + order,
            success: (res) => {
                this.setData({
                    content: {
                        ...res.data,
                        cpContent: res.data.cpContent
                            .match(/<p>(.+?)<\/p>/gim)
                            .map((item) => item.replace(/(<p>|<\/p>)/gim, ""))
                    }
                })
            }
        });

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log(options);
        this.setData({
            order:options.order,
            id:options.bookid
        })
        wx.request({
            url: 'http://novel.kele8.cn/chapters2/56a8303e2aefdf397cbbf831/' + options.order,
            success: (res) => {
                // console.log(res);
                this.setData({
                    content: {
                        ...res.data,
                        // cpContent: res.data.cpContent.replaceAll('<p>', '<p style="text-indent: 2em;">')
                        cpContent: res.data.cpContent
                            .match(/<p>(.+?)<\/p>/gim)
                            .map((item) => item.replace(/(<p>|<\/p>)/gim, ""))

                    }
                })
            }
        });

        const old = wx.getStorageSync("readHistory") || {};
        old[options.bookid] = options.order
        wx.setStorageSync('readHistory' , old)
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