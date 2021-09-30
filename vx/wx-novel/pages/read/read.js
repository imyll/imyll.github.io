// pages/read/read.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id:"",
        bookid:'',
        order:'',
        content: {},
        show: false,
        config: wx.getStorageSync('config') || {
            size: 14,
            theme: "white"
        },
        themes: [{
            name: "默认",
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
    // 字体减小
    sizeReduce:function(){
        var num = this.data.config.size
        num -= 2;
        if(num < 12){
            num = 12
        }
        this.setData({
            "config.size":num
        },()=>{
            this.closeAndSyncConfig()
        })

    },
    // 字体变大
    sizePlus:function(){
        var num = this.data.config.size
        num += 2;
        if(num > 24 ){
            num = 24;
        }
        this.setData({
            "config.size":num
        },()=>{
            this.closeAndSyncConfig()
        })
    },
    // 返回上一个页面
    clickBack: function () {
        wx.navigateBack({})
    },
    // bar 的显示隐藏
    showPopup() {
        this.setData({ show: true });
    },
    onClose() {
        this.setData({ show: false });
    },
    // slider滑块的变化
    onChange(event) {
        this.setData({
            "config.size": event.detail
        },()=>{
            this.closeAndSyncConfig()
        })
    },
    // 主题切换
    changeTheme:function(event){
        // console.log(event);
        this.setData({
            "config.theme": event.currentTarget.dataset.theme,
            show:false,
        },()=>{
            this.closeAndSyncConfig()
        })
        // console.log(this.data.active);
    },
    // 设置config
    closeAndSyncConfig(){
        wx.setStorageSync('config', this.data.config)
    },
    goTop: function (e) { // 一键回到顶部
        if (wx.pageScrollTo) {
          wx.pageScrollTo({
            scrollTop: 0
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
          })
        }
      },
    // 下一章
    next:function(){
        wx.showLoading({
            title: '加载中',
        })
        let order = Number(this.data.order)+1;
        // console.log(order);
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
                this.goTop()
            },  
            complete: () => {
                wx.hideLoading()
            },
            
        });

    },
    // 上一章
    back:function(){
        wx.showLoading({
            title: '加载中',
        })
        let order = Number(this.data.order)-1;
        if(order === 0){
            order = 1
        }
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
                this.goTop()
            },
            complete: () => {
                wx.hideLoading()
            }
        });

    },
    // 目录
    navToChapter:function(){
        wx.navigateTo({
          url: '/pages/chapter/chapter?id='+this.data.id,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log(options.bookid);
        wx.showLoading({
            title: '加载中',
        })
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
            },
            complete: () => {
                wx.hideLoading()
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
        this.next()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})