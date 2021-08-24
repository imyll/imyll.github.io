<template>
  <div v-if="detail">
    <h3>PlayList {{ $route.query.id }}</h3>

    <ul>
      <!-- <li v-for="item in detail.tracks" :key="item.id">{{ item.name }}</li> -->
      <SongListItem
        v-for="(item, index) in detail.tracks"
        :key="item.id"
        :item="item"
        @change-current-song="$emit('change-current-song', item)"
        :currentSongId="currentSongId"
        :playing="playing"
        :class="{ lt3: index < 3 }"
        >{{ index + 1 }}</SongListItem
      >
    </ul>
  </div>
</template>

<script>
import SongListItem from "@/components/SongListItem.vue";
export default {
  components: {
    SongListItem,
  },
  props: {
    currentSongId: {
      type: Number,
    },
    playing: Boolean,
  },
  data: function() {
    return {
      detail: null,
    };
  },
  methods: {
    getPlayListDetail: function(id) {
      this.axios
        .get("http://apis.netstart.cn/music/playlist/detail", {
          params: {
            id,
          },
        })
        .then((res) => {
          console.log(res);
          this.detail = res.data.playlist;
        });
    },
  },

  created: function() {
    this.getPlayListDetail(this.$route.query.id);
  },
};
</script>

<style lang="less" scoped></style>
