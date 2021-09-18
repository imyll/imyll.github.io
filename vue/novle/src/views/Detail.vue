<template>
  <div class="detail">
    <Top-nav>书籍详情</Top-nav>
    <!-- 书籍详情 -->
    <div class="card">
      <!-- <img :src="derail.cover" alt=""> -->
      <van-image width="60" height="80" :src="detail.cover | parseImageUrl" />
      <div class="right">
        <div class="right-title">{{ detail.title }}</div>
        <div class="sku">
          <div class="uname">{{ detail.author }}</div>
          <div class="uname">{{ detail.cat }}</div>
        </div>
      </div>
    </div>
    <!-- 加入书架  开始阅读按钮 -->
    <div class="btn">
      <van-button
        plain
        type="primary"
        color="#b93321"
        @click="addMybooks(detail)"
        v-if="!isExit"
        >加入书架</van-button
      >
      <van-button
        type="default"
        color="#999"
        v-else
        @click="removeMybooks(detail._id)"
        >撤出书架</van-button
      >
      <van-button type="primary" color="#b93321">开始阅读</van-button>
    </div>
    <!-- 书籍人气 -->
    <div class="read-data">
      <p class="item">
        <span class="key">追人气</span>
        <span>{{ detail.latelyFollower }}</span>
      </p>
      <p class="item">
        <span class="key">读者留存率</span>
        <span>{{ detail.retentionRatio }}</span>
      </p>
      <p class="item">
        <span class="key">日更字数/天</span>
        <span>{{ detail.serializeWordCount }}</span>
      </p>
    </div>
    <!-- 书籍描述 -->
    <div class="desc">
      <p>{{ detail.longIntro }}</p>
      <span>></span>
    </div>
    <!-- 书籍目录 -->
    <div class="inner" @click="navToChapter">
      <i>></i>
      <span>{{ detail.lastChapter }}</span>
    </div>
    <!-- 热门书评 -->
    <div class="hot-comment">
      <div class="hot-comment-top">
        <h2>热门书评</h2>
      </div>
      <ul class="c-comment-list">
        <li>
          <div class="c-inner">
            <img src="" alt="" />
            <div class="right">
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getDetail } from "@/apis/index.js";
import { mapMutations, mapState } from "vuex";
import TopNav from "../components/Top-nav.vue";
export default {
  components: { TopNav },

  directives: {},

  data() {
    return {
      detail: Object,
    };
  },
  filters: {
    parseImageUrl: function (n) {
      return decodeURIComponent(n.replace(/\/agent\//gi, ""));
    },
  },
  computed: {
    ...mapState(["mybooks"]),
    isExit: function () {
      return this.mybooks.some((item) => item._id === this.detail._id);
    },
  },
  created() {
    getDetail(this.$route.query.id).then((res) => (this.detail = res.data));
  },

  mounted() {},

  methods: {
    ...mapMutations(["addMybooks", "removeMybooks"]),
    navToChapter() {
      this.$router.push({ path: "./chapter" });
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.detail {
  .card {
    display: flex;
    padding: 20px;
  }
  .btn {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    padding-top: 0;
    border-bottom: 1px solid #ebebeb;
    button {
      width: 150px;
    }
  }
  .read-data {
    border-bottom: 1px solid #ebebeb;
    display: flex;
    justify-content: space-around;
    .item {
      display: 1;
      width: 33%;
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 20px 0;
      span {
        color: #222;
        margin-top: 5px;
        width: 100%;
        text-align: center;
        &.key {
          color: #999;
          font-size: 12px;
          margin-top: 0;
        }
      }
    }
  }
  .desc {
    padding: 20px;
    position: relative;
    border-bottom: 1px solid #ebebeb;
    p {
      color: #222;
      font-size: 13px;
      line-height: 1.9;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      text-align: center;
      font-family: "宋体";
      position: absolute;
      right: 12px;
      bottom: 20px;
      font-weight: 600;
      transform: rotate(90deg);
    }
  }
  .inner {
    border-bottom: 1px solid #ebebeb;
    padding: 20px;
    &::before {
      content: "目录";
    }
    i {
      width: 20px;
      height: 20px;
      text-align: center;
      font-family: "宋体";
      font-style: normal;
      position: absolute;
      right: 6px;
      font-weight: 600;
    }
    span {
      float: right;
      max-width: 60%;
      color: #999;
      font-size: 12px;
      word-break: break-all;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin-right: 5px;
    }
  }
}
</style>