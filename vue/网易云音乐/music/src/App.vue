<template>
  <div id="app">
    <ul id="nav" v-if="$route.meta.showNavBar">
      <li>
        <router-link to="/">推荐音乐</router-link>
      </li>
      <li>
        <router-link to="/hot">热歌榜</router-link>
      </li>
      <li>
        <router-link to="/search">搜索</router-link>
      </li>
    </ul>

    <router-view
      @change-current-song="changeCurrentSong"
      :currentSongId="currentSong ? currentSong.id : null"
      :playing="playing"
    />
    <audio
      :src="currentSongUrl"
      controls
      style="height:40px"
      autoplay
      @playing="playing = true"
      @pause="playing = false"
    ></audio>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      currentSong: null,
      playing: false,
    };
  },
  computed: {
    currentSongUrl: function() {
      if (this.currentSong) {
        return `https://music.163.com/song/media/outer/url?id=${this.currentSong.id}.mp3`;
      } else {
        return null;
      }
    },
  },
  methods: {
    changeCurrentSong: function(song) {
      // console.log(song);
      this.currentSong = song;
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  // padding: 30px;
  display: flex;
  // height: 50px;
  // border-bottom: 1px solid blue;
  box-shadow: 0 -1px 3px 0px rgb(231, 231, 231) inset;

  li {
    flex: 1;
    text-align: center;

    // background-color: lightblue;
    a {
      // font-weight: bold;
      color: #2c3e50;
      line-height: 40px;
      display: inline-block;
      text-decoration: none;
      font-size: 15px;
      padding: 0 5px;

      &.router-link-exact-active {
        color: #d43c33;
        border-bottom: 2px solid #d43c33;
      }
    }
  }
}
</style>
