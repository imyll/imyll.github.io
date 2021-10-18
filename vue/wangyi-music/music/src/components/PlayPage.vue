<template>
  <section class="play-page">
    <div
      class="mask"
      :style="{
        backgroundImage: `url(${
          currentSong.song ? currentSong.picUrl : currentSong.al.picUrl
        }?imageView=1&type=webp&thumbnail=246x0)`,
      }"
    ></div>
    <div @click="$emit('toggle-show-play-page', false)">
      <svg
        t="1630485734693"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3055"
        width="200"
        height="200"
      >
        <path
          d="M407.00928 512l286.00832-286.00832a35.84 35.84 0 0 0-50.68288-50.68288L330.9824 486.656a35.84 35.84 0 0 0 0 50.68288l311.35744 311.35232a35.84 35.84 0 0 0 50.68288-50.68288L407.00928 512z"
          fill="#707070"
          p-id="3056"
        ></path>
      </svg>
    </div>

    <section class="rotate" v-if="showLyric" @click="showLyric = false">
      <img
        class="needle"
        :class="{ paused: !playing }"
        src="https://s3.music.126.net/mobile-new/img/needle-ab.png"
        alt=""
      />
      <section class="record" :class="{ playing: playing }">
        <img
          class="thumb"
          :src="currentSong.song ? currentSong.picUrl : currentSong.al.picUrl"
          alt=""
        />
        <img
          class="disc"
          src="https://s3.music.126.net/mobile-new/img/disc.png"
          alt=""
        />
      </section>
    </section>

    <section class="lyric" v-else @click="showLyric = true" ref="lyric">
      <ul
        class="content"
        ref="lyricContent"
        v-if="parsedLyric.length"
        :style="{ marginTop: -scrollH + 'px' }"
      >
        <li v-for="(l, i) in parsedLyric" :key="i">
          <span
            :style="{
              animationDuration: parsedLyric[i + 1]
                ? parsedLyric[i + 1].time - l.time - 0.5 + 's'
                : '3s',
            }"
            :class="{
              active: currentLyricIndex === i,
              playing: playing && currentLyricIndex === i,
            }"
            >{{ l.text }}</span
          >
        </li>
      </ul>
    </section>
    <section class="singer">
      <h2 @click="$emit('toggle-show-play-page', true)">
        歌名：{{ currentSong.name }}
      </h2>
      <h3>
        歌手：{{
          currentSong.song
            ? currentSong.song.artists[0].name
            : currentSong.al
            ? currentSong.ar[0].name
            : currentSong.artists[0].anme
        }}
      </h3>
    </section>
    <section class="progress">
      <input
        type="range"
        :max="duration"
        step="0.5"
        v-model="value"
        @change="progressChange"
        @input="progressInput"
      />
      <span
        class="bar"
        :style="{ width: (value / duration) * 100 + '%' }"
      ></span>
    </section>

    <section class="controls">
      <span @click="$emit('toggle-play-model')"
        ><svg
          t="1630926911533"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="10372"
          width="200"
          height="200"
        >
          <path
            d="M694.4 854.4H195.2l48 44.8c9.6 6.4 16 16 16 28.8-3.2 19.2-19.2 32-38.4 32-9.6 0-22.4-6.4-28.8-12.8l-108.8-96c-12.8-12.8-16-35.2 0-48L192 704c6.4-6.4 19.2-9.6 28.8-9.6 19.2 0 35.2 16 35.2 35.2 0 9.6-6.4 19.2-12.8 25.6l-41.6 38.4h496c112 0 198.4-89.6 198.4-198.4v-86.4c0-19.2 12.8-32 32-32s32 12.8 32 32v86.4c0 140.8-118.4 259.2-265.6 259.2zM329.6 169.6h496l-48-44.8c-9.6-6.4-16-16-16-28.8 3.2-19.2 19.2-32 38.4-32 9.6 0 22.4 6.4 28.8 12.8l108.8 96c12.8 12.8 16 35.2 0 48L832 320c-6.4 6.4-19.2 9.6-28.8 9.6-19.2 0-35.2-16-35.2-35.2 0-9.6 6.4-19.2 12.8-25.6l41.6-38.4H326.4C217.6 233.6 128 323.2 128 435.2v89.6c0 19.2-12.8 32-32 32s-32-12.8-32-32v-86.4C64 288 182.4 169.6 329.6 169.6z"
            p-id="10373"
            fill="#ffffff"
          ></path></svg
      ></span>
      <span @click="$emit('prev-song')"
        ><svg
          t="1630926321492"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4784"
          width="200"
          height="200"
        >
          <path
            d="M362.3 512l445-332.3v664.5L362.3 512zM216.7 179.7h80v664.5h-80V179.7z"
            fill="#ffffff"
            p-id="4785"
          ></path></svg
      ></span>
      <span @click="$emit('toggle-playing-state')">
        <span class="play-runing" v-if="playing">
          <svg
            t="1630926799590"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8708"
            width="200"
            height="200"
          >
            <path
              d="M512 1024C228.266667 1024 0 795.733333 0 512S228.266667 0 512 0s512 228.266667 512 512-228.266667 512-512 512z m0-42.666667c260.266667 0 469.333333-209.066667 469.333333-469.333333S772.266667 42.666667 512 42.666667 42.666667 251.733333 42.666667 512s209.066667 469.333333 469.333333 469.333333z m-106.666667-682.666666c12.8 0 21.333333 8.533333 21.333334 21.333333v384c0 12.8-8.533333 21.333333-21.333334 21.333333s-21.333333-8.533333-21.333333-21.333333V320c0-12.8 8.533333-21.333333 21.333333-21.333333z m213.333334 0c12.8 0 21.333333 8.533333 21.333333 21.333333v384c0 12.8-8.533333 21.333333-21.333333 21.333333s-21.333333-8.533333-21.333334-21.333333V320c0-12.8 8.533333-21.333333 21.333334-21.333333z"
              p-id="8709"
              fill="#ffffff"
            ></path>
          </svg>
        </span>
        <span class="play-pauseing" v-else>
          <svg
            t="1630926699470"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7842"
            width="200"
            height="200"
          >
            <path
              d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"
              p-id="7843"
              fill="#ffffff"
            ></path>
            <path
              d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z"
              p-id="7844"
              fill="#ffffff"
            ></path>
          </svg>
        </span>
      </span>
      <span @click="$emit('next-song')"
        ><svg
          t="1630926420824"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5163"
          width="200"
          height="200"
        >
          <path
            d="M216.7 844.3V179.7l445 332.3-445 332.3z m590.6 0h-80V179.7h80v664.6z"
            fill="#ffffff"
            p-id="5164"
          ></path></svg
      ></span>
      <span @click.stop="$emit('toggle-show-play-list', true)"
        ><svg
          t="1630926563229"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6871"
          width="200"
          height="200"
        >
          <path
            d="M832 832a32 32 0 0 1 3.744 63.776L832 896H192a32 32 0 0 1-3.744-63.776L192 832h640z m0-304a32 32 0 0 1 3.744 63.776L832 592H192a32 32 0 0 1-3.744-63.776L192 528h640zM224.256 128.544a64 64 0 0 1 26.816 5.888L256 136.96l127.488 72.832a64 64 0 0 1 4.832 108.096l-4.8 3.04L256 393.824a64 64 0 0 1-95.52-50.016l-0.224-5.568V192.544a64 64 0 0 1 64-64z m0 64v145.696l127.488-72.864-127.488-72.832zM832 224a32 32 0 0 1 3.744 63.776L832 288H496a32 32 0 0 1-3.744-63.776L496 224H832z"
            p-id="6872"
            fill="#ffffff"
          ></path></svg
      ></span>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    currentSong: Object,
    playing: Boolean,
    duration: Number,
    currentTime: Number,
  },
  data: function () {
    return {
      value: this.currentTime,
      inputing: false,
      showLyric: true,
      lyric: null,
      lisH: [],
      scrollH: 0,
    };
  },
  watch: {
    currentTime: function (n) {
      if (!this.inputinf) {
        this.value = n;
      }
    },
    "currentSong.id": function (id) {
      this.getLyric(id);
    },
    currentLyricIndex: function (index) {
      // 当前歌词前面所有歌词的高度
      var h = this.lisH.slice(0, index).reduce(function (total, item) {
        return total + item;
      }, 0);
      console.log(h);
      h = h > 200 ? h - 200 : 0;
      h = h > 1928 ? 1928 : h;
      this.scrollH = h;
      // var lis = this.$refs.lyricContent ? this.$refs.lyricContent.querySelectorAll("li") : null
      // console.log(index);
    },
    parsedLyric: function () {
      this.$nextTick(() => {
        console.log(this.$refs);

        var lis = this.$refs.lyricContent.querySelectorAll("li");

        this.lisH = [...lis].map((item) => item.offsetHeight);
        console.log(this.lisH);
      });
    },
  },
  computed: {
    parsedLyric: function () {
      if (this.lyric) {
        return this.lyric
          .split("\n")
          .filter((s) => s)
          .map((s) => {
            var text = s.replace(/^\[\d{2}:\d{2}\.\d{2,3}\]/i, "");
            var timeStr = s.replace(text, "").replace(/(^\[|\]$)/g, "");
            var timeArr = timeStr.split(":").map((item) => Number(item));
            var time = timeArr[0] * 60 + timeArr[1];
            return { text, time };
          });
      } else {
        return [];
      }
    },
    currentLyricIndex: function () {
      var i = this.parsedLyric.findIndex(
        (item) => item.time > this.currentTime
      );
      var currentLyricIndex = i !== -1 ? i - 1 : this.parsedLyric.length - 1;
      return currentLyricIndex;
    },
  },
  created: function () {
    this.getLyric(this.currentSong.id);
  },
  methods: {
    progressChange: function (event) {
      this.inputing = false;
      this.$emit("current-time-change", event.target.value);
    },
    progressInput: function () {
      this.inputing = true;
    },
    getLyric: function (id) {
      this.axios
        .get("/lyric", {
          params: { id },
        })
        .then((res) => (this.lyric = res.data.lrc.lyric));
    },
  },
};
</script>

<style lang="less" scoped>
@keyframes gradual {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -100%;
  }
}
.pos-ab() {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.play-page {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;

  overflow: hidden;
  &::before {
    content: "";
    display: block;
    .pos-ab();
    z-index: -2;
    background-color: #333;
  }
  .icon {
    width: 30px;
    height: 30px;
    margin-top: 10px;
  }
  .mask {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(30px) brightness(0.8);
    .pos-ab();
    z-index: -1;
    transform: scale(1.5);
    transition: all 0.3s;
  }
  .rotate {
    position: relative;
    padding-top: 25vw;
    img.needle {
      height: 40vw;
      position: absolute;
      top: 0;
      left: 50%;
      z-index: 9;
      margin-left: -15px;
      transform-origin: 15px 15px;
      transform: rotate(0deg);
      transition: all 0.3s;
      &.paused {
        transform: rotate(-20deg);
      }
    }
    .record {
      position: relative;
      width: 80vw;
      height: 80vw;
      margin: 0 auto;
      img {
        .pos-ab();
        border-radius: 50%;
        &.thumb {
          transform: scale(0.8);
        }
      }
      animation: rotate 8s linear infinite;
      animation-play-state: paused;
      &.playing {
        animation-play-state: running;
      }
    }
  }
  .lyric {
    height: 59vh;
    color: #fff;
    text-align: center;
    overflow: hidden;
    ul {
      transition: all 0.3s;
      li {
        line-height: 1.8;
        // font-size: 24px;
        span {
          &.active {
            animation-name: gradual;
            animation-timing-function: linear;
            animation-duration: 3s;
            background-image: linear-gradient(
              to right,
              rgb(238, 20, 111) 50%,
              rgb(28, 96, 255) 50%
            );
            background-size: 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation-play-state: paused;
            &.playing {
              animation-play-state: running;
            }
          }
        }
      }
    }
  }
  .singer{
    color: #fff;
    text-align: center;
  }
  .progress {
    width: 80vw;
    height: 4px;
    margin: 20px auto;
    background: rgb(199, 199, 199);
    position: relative;
    border-radius: 10px;
    input {
      width: 100%;
      height: 100%;
      opacity: 0;
      position: absolute;
      z-index: 1;
    }
    .bar {
      .pos-ab();
      background: #333;

      &::after {
        content: "";
        width: 15px;
        height: 15px;
        border: 1px solid black;
        border-radius: 50%;
        background: #fff;
        position: absolute;
        top: -5px;
        right: -5px;
      }
    }
  }

  .controls {
    padding: 10%;
    display: flex;
    justify-content: space-around;
    color: white;
    span {
      .icon {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>
