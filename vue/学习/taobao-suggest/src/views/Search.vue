<template>
  <div>
    <SearchInput />
    <ul>
      <SearchSuggest
        v-for="(item, index) in suggests"
        :key="index"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import SearchInput from "../components/SearchInput.vue";
import SearchSuggest from "../components/SearchSuggest.vue";
export default {
  components: {
    SearchInput,
    SearchSuggest,
  },
  data: function() {
    return {
      suggests: [],
    };
  },
  methods: {
    translateValue: function(v) {
      this.axios
        .get("http://api.kele8.cn/agent/https://suggest.taobao.com/sug", {
          params: {
            code: "utf-8",
            q: v,
          },
        })
        .then((res) => {
          this.suggests = res.data.result;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
    created: function(){
        console.log( typeof window.axios);
    }
};
</script>

<style lang="less" scoped></style>
