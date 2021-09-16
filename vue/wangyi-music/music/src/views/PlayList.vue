<template>
  <div v-if="detail">
    <section class="playlist-header">
      <div class="pl-headerbg">
        <div
          class="mask"
          :style="{ backgroundImage: 'url(' + detail.coverImgUrl + ')' }"
        >
         <!-- <img :src="detail.coverImgUrl" alt=""> -->
        </div>
        <div class="content">
          <span class="return" @click="$router.go(-1)">
            <svg
              t="1630994806210"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1901"
              width="200"
              height="200"
            >
              <path
                d="M532.526499 904.817574L139.506311 511.797385 532.526499 118.777197c12.258185-12.258185 12.432147-32.892131-0.187265-45.51052-12.707416-12.707416-32.995485-12.703323-45.511543-0.187265L75.166957 484.739123c-7.120165 7.120165-10.163477 17.065677-8.990768 26.624381-1.500167 9.755178 1.5104 20.010753 8.990768 27.491121l411.660734 411.660734c12.258185 12.258185 32.892131 12.432147 45.511543-0.187265 12.707416-12.707416 12.7023-32.995485 0.187265-45.51052z"
                p-id="1902"
                fill="#2c2c2c"
              ></path>
            </svg>
          </span>
          <span class="play-count">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjIgMTYuNzc3YzAgMS4yMzMtMS4xMjEgMi4yMzMtMi41MDYgMi4yMzMtMS4zODQgMC0yLjUwNi0xLTIuNTA2LTIuMjMzdi0yLjU1M2MwLTEuMjM0IDEuMTIyLTIuMjMzIDIuNTA2LTIuMjMzLjE3NCAwIC4zNDMuMDE3LjUwNi4wNDZ2LTEuMzdoLS4wMzNjLjAxNy0uMjIuMDMzLS40NDEuMDMzLS42NjZhOCA4IDAgMCAwLTE2IDBjMCAuMjI1LjAxNi40NDYuMDM0LjY2Nkg0djEuMzdjLjE2My0uMDI5LjMzMy0uMDQ2LjUwNS0uMDQ2IDEuMzg0IDAgMi41MDYuOTk5IDIuNTA2IDIuMjMzdjIuNTUzYzAgMS4yMzMtMS4xMjIgMi4yMzMtMi41MDYgMi4yMzNTMiAxOC4wMTEgMiAxNi43Nzd2LTIuNTUzYzAtLjI1OC4wNTktLjUwMS4xNDgtLjczQS45ODIuOTgyIDAgMCAxIDIgMTMuMDAxdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHMxMCA0LjQ3NyAxMCAxMGMwIC4wOS0uMDA5LjE3OC0uMDE0LjI2Ni4wMDIuMDI0LjAxNC4wNDQuMDE0LjA2N3YyYS45ODguOTg4IDAgMCAxLS4zNi43NTNjLjIyNC4zMzQuMzYuNzIuMzYgMS4xMzh2Mi41NTIiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIgZD0iTTIwIDE2Ljc3N2MwIDEuMjMzLTEuMTIxIDIuMjMzLTIuNTA2IDIuMjMzLTEuMzg0IDAtMi41MDYtMS0yLjUwNi0yLjIzM3YtMi41NTNjMC0xLjIzNCAxLjEyMi0yLjIzMyAyLjUwNi0yLjIzMy4xNzQgMCAuMzQzLjAxNy41MDYuMDQ2di0xLjM3aC0uMDMzYy4wMTctLjIyLjAzMy0uNDQxLjAzMy0uNjY2YTggOCAwIDAgMC0xNiAwYzAgLjIyNS4wMTYuNDQ2LjAzNC42NjZIMnYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzUzAgMTguMDExIDAgMTYuNzc3di0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43M0EuOTgyLjk4MiAwIDAgMSAwIDEzLjAwMXYtMi42NjdjMC0uMDIzLjAxMi0uMDQzLjAxMy0uMDY3LS4wMDQtLjA4OC0uMDEzLS4xNzYtLjAxMy0uMjY2IDAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTBjMCAuMDktLjAwOS4xNzgtLjAxNC4yNjYuMDAyLjAyNC4wMTQuMDQ0LjAxNC4wNjd2MmEuOTg4Ljk4OCAwIDAgMS0uMzYuNzUzYy4yMjQuMzM0LjM2LjcyLjM2IDEuMTM4djIuNTUyIi8+PC9zdmc+" />
            {{ detail.playCount | parseCount }}
          </span>
          <img class="u-img" :src="detail.coverImgUrl" alt="">
          <h2 class="uname">{{ detail.name }}</h2>
          <div class="user">
            <img class="user-img" :src="detail.creator.avatarUrl" />
            <h3 class="unick-name">{{ detail.creator.nickname }}</h3>
          </div>
        </div>
      </div>
      <h3 class="song-list">歌曲列表</h3>
    </section>

    <ul>
      <SongListItem
        v-for="(item, index) in detail.tracks"
        :key="item.id"
        :item="item"
        @change-current-song="
          $emit('change-current-song', item);
          $emit('change-current-play-list', detail.tracks);
        "
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
  filters: {
    parseCount: function(value) {
      if (value > 100000000) {
        return (value / 100000000).toFixed(1) + "亿";
      } else if (value > 100000) {
        return (value / 10000).toFixed(1) + "万";
      } else {
        return value;
      }
    },
  },
  data: function () {
    return {
      detail: null,
      songsList: [],
    };
  },
  methods: {
    getPlayListDetail: function (id) {
      this.axios
        .get("http://apis.netstart.cn/music/playlist/detail", {
          params: {
            id,
          },
        })
        .then((res) => {
          // console.log(res);
          this.detail = res.data.playlist;
          console.log(res.data.playlist);
        });
    },
    getSongsList: function () {
      this.axios.get("/personalized?limit=6").then((res) => {
        console.log(res);
        this.songsList = res.result;
      });
    },
  },

  created: function () {
    // console.log( this.getPlayListDetail(this.$route.query.id));
    this.getPlayListDetail(this.$route.query.id);
  },
};
</script>

<style lang="less" scoped>
.playlist-header {
  .pl-headerbg {
    width: 100%;
    height: 180px;
    overflow: hidden;
    position: relative;
    .mask {
      width: 100%;
      height: 180px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      filter: blur(20px) brightness(0.8);
      transform: scale(1.5);
      z-index: -1;
    }
    .content{
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      .play-count{
        position: absolute;
        left: 0;
        display: inline-block;
        margin-left: 20px;
        width: 126px;
        background: rgba(196, 196, 196, 0.3);
        text-align: right;
        color: #fff;
        img{
          width: 12px;
        }

      }
      span.return {
        width: 30px;
        height: 30px;
        display: block;
        text-align: center;
        .icon {
          margin-top: 5px;
          width: 20px;
          height: 20px;
        }
      }
      .u-img{
        width: 126px;
        margin-left: 20px;
      }
      .uname{
        color: #fff;
        position: absolute;
        top: 30px;
        left: 155px;
        font-size: 18px;
      }
      .user{
        position: absolute;
        top: 90px;
        left: 155px;
        color: #fff;
        display: flex;
        align-items: center;
        .user-img{
          width: 30px;
          height: 30px;
          border-radius: 15px;
        }
        .unick-name{
          margin-left: 5px;
        }
      }

    }
  }
  .song-list{
    color: #666;
    background: #eeeff0;
    font-size: 12px;
    line-height: 2;
    padding-left: 5px;
  }
}
</style>
