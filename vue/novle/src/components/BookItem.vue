<template>
  <li class="book=item" @click="$router.push('detail?id=' + book._id)">
    <section class="info">
      <van-image
        width="60"
        height="80"
        :src="book.cover | parseImageUrl  "
      />
      <div class="right">
        <div class="title">{{ book.title }}</div>
        <div class="desc">{{ book.shortIntro }}</div>
        <div class="info2">
          <div class="box">
            <span class="cate">{{ book.minorCate }} | </span>
            <span class="pop">{{ book.retentionRatio }}万人气</span>
          </div>
          <div class="tag">{{ book.majorCate }}</div>
        </div>
      </div>
    </section>
  </li>
</template>

<script>
export default {
  props: ["book"],
  filters: {
    parseImageUrl: function(n){
      return decodeURIComponent(n.replace(/\/agent\//gi, ""));
      
    }
  },
  components: {},

  directives: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
li {
  .info {
    display: flex;
    padding: 15px;
    justify-content: space-between;
    .img {
      width: 60px;
      height: 80px;
      background: pink;
    }
  }
  .right {
    width: 80%;
    .title {
      text-align: left;
      color: #333;
      font-size: 14px;
    }
    .desc {
      color: #999;
      font-size: 12px;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .info2 {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #666;
      .tag {
        border: 1px solid #ff8400;
        border-radius: 2px;
        color: #ff8400;
        font-size: 12px;
        border-radius: 2px;
        transform: scale(0.8);
      }
    }
  }
}
</style>