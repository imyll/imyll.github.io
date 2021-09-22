// components/recommend-section/rexommend-section.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        item: Object,
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        navtomore:function(event){
            // console.log(event);
            // url:"/components/more-book/more-book"
            wx.navigateTo({
              url: '/pages/more-book/more-book',
            })
        }
    }
})
