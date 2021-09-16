<template>
  <div class="hots">
    <div class="hots-nav">
      <div class="bgimg"></div>
    </div>

    <ul>
      <li @click="$emit('change-current-song', item)" v-for="(item, index) in hotsongs" :key="item.id" class="item-list">
        <span class="serial-num">{{index+1}}</span>
        <div class="left">
          <div class="song-name">{{ item.name }}</div>
          <div class="info">
            <div class="hot-list-img"></div>
            <span class="song-singer">{{ item.ar[0].name }}</span>
            <span class="album"> - {{ item.al.name }}</span>
          </div>
        </div>
        <div class="right"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      hotsongs: [],
    };
  },
  created() {
    this.axios
      .get("http://apis.netstart.cn/music/playlist/detail?id=3778678")
      .then((res) => {
        this.hotsongs = res.data.playlist.tracks;
      });
  },
};
</script>


<style lang="less" scoped>
.hots {
  .hots-nav {
    width: 100%;
    height: 140px;
    overflow: hidden;
    background-image: url(https://s3.music.126.net/mobile-new/img/hot_music_bg_3x.jpg?2bfefd3ba37eaffbd66b7d108b9de26a=);
    background-size: 100%;
    .bgimg {
      margin-top: 30px;
      margin-left: 20px;
      width: 142px;
      height: 67px;
      background-image: url(https://s3.music.126.net/mobile-new/img/index_icon_2x.png);
      background-position: -16px -23px;
      background-repeat: no-repeat;
      background-size: 147px;
    }
  }
  ul {
    .item-list {
      margin: 0 10px;
      font-size: 14px;
      border-bottom: 1px solid rgba(224, 224, 224, 0.2);
      display: flex;
      align-items: center;
      padding: 5px 0;
      .serial-num{
        display: inline-block;
        width: 30px;
        font-size: 18px;
        text-align: center;
        // color: #999999;
      }
      &.lt3 {
        .serial-num {
          color: #d43c33;
        }
      }
      .left {
        margin-left: 5px;
        flex: 1;
        .info{
          .hot-list-img{
            display: inline-block;
            width: 15px;
            height: 15px;
            background-image: url("https://s3.music.126.net/mobile-new/img/index_icon_2x.png");
            background-repeat: no-repeat;
            background-size: 166px auto;
            background-position: 0 7px;
          }
        }
      }
      .right{
        width: 30px;
        height: 30px;
        background-image: url("https://s3.music.126.net/mobile-new/img/index_icon_2x.png");
        background-repeat: no-repeat;
        background-size: 166px auto;
        background-position: -20px 5px;
      }
    }
  }
}
</style>