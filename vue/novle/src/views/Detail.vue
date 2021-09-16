<template>
  <div class="detail">
    <Top-nav>书籍详情</Top-nav>
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
  },
};
</script>

<style lang="less" scoped>
.detail {
  .card {
    display: flex;
  }
  .btn {
    display: flex;
    justify-content: space-around;
    button {
      width: 150px;
    }
  }
}
</style>