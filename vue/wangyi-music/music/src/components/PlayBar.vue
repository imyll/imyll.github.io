<template>
  <section
    class="playbar"
    :class="{ playing: playing }"
    @click="$emit('toggle-show-play-page', true)"
  >
    <img
      :src="`${
        currentSong.song
          ? currentSong.picUrl
          : currentSong.al
          ? currentSong.al.picUrl
          : currentSong.album.artist.img1v1Url
      }?imageView=1&type=webp&thumbnail=60x0`"
      alt=""
    />
    <h3>
      {{ currentSong.name
      }}<span>
        -
        {{
          currentSong.song
            ? currentSong.song.artists[0].name
            : currentSong.al
            ? currentSong.ar[0].name
            : currentSong.artists[0].name
        }}</span
      >
    </h3>

    <div class="progress" @click.stop="$emit('toggle-playing-state')">
      <canvas width="40" height="40" ref="canvas"></canvas>
      <div class="icon" :class="[playing ? 'pause' : 'play']"></div>
    </div>
    <div class="list" @click.stop="$emit('toggle-show-play-list', true)">
      <svg
        t="1630412221595"
        class="icon icon-list"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="10047"
        width="200"
        height="200"
      >
        <path
          d="M832 832a32 32 0 0 1 3.744 63.776L832 896H192a32 32 0 0 1-3.744-63.776L192 832h640z m0-304a32 32 0 0 1 3.744 63.776L832 592H192a32 32 0 0 1-3.744-63.776L192 528h640zM224.256 128.544a64 64 0 0 1 26.816 5.888L256 136.96l127.488 72.832a64 64 0 0 1 4.832 108.096l-4.8 3.04L256 393.824a64 64 0 0 1-95.52-50.016l-0.224-5.568V192.544a64 64 0 0 1 64-64z m0 64v145.696l127.488-72.864-127.488-72.832zM832 224a32 32 0 0 1 3.744 63.776L832 288H496a32 32 0 0 1-3.744-63.776L496 224H832z"
          p-id="10048"
          fill="#8a8a8a"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    currentSong: Object,
    playing: Boolean,
    duration: Number,
    currentTime: Number,
    currentPlayList: Array,
  },

  mounted: function () {
    // console.log(this.$refs.canvas);
  },
  computed: {
    percentage: function () {
      return this.currentTime / this.duration;
    },
  },
  watch: {
    percentage: function (n) {
      // console.log(n);
      var context = this.$refs.canvas.getContext("2d");
      context.clearRect(0, 0, 40, 40);
      context.beginPath();
      context.arc(
        20,
        20,
        16,
        (Math.PI / 180) * (0 - 90),
        (Math.PI / 180) * (360 * n - 90)
      );
      context.strokeStyle = "#000";
      context.lineWidth = 1;
      context.stroke();

      context.beginPath();
      context.arc(
        20,
        20,
        16,
        (Math.PI / 180) * (360 * n - 90),
        (Math.PI / 180) * (360 - 90)
      );
      context.strokeStyle = "gray";
      context.lineWidth = 1;
      context.stroke();
    },
  },
};
</script>

<style lang="less" scoped>
.playbar {
  width: 100%;
  height: 50px;
  padding-bottom: 10px;
  background: white;
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  padding: 0 12px;

  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;

    animation: rotate 8s linear infinite;
    animation-play-state: paused;
  }
  h3 {
    padding: 0 10px;
    flex: 1;
    font-size: 14px;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    span {
      color: rgb(151, 151, 151);
      font-size: 10px;
    }
  }

  .progress {
    width: 30px;
    height: 30px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    canvas {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .icon {
      width: 12px;
      height: 12px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      &.play {
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-left: 10px solid rgb(0, 0, 0);
        transform: translateX(3px);
      }
      &.pause {
        &::before,
        &::after {
          content: "";
          display: block;
          height: 80%;
          width: 20%;
          background: #000;
        }
      }
    }
  }
  &.playing {
    img {
      animation-play-state: running;
    }
  }
  .list {
    width: 30px;
    height: 30px;
    text-align: center;
    padding-top: 2px;
    .icon-list {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
