<template>
  <div class="search" @scroll="scroll">
    <!-- 输入框 -->
    <div class="search-case">
      <svg
        t="1630409169525"
        class="icon icon-sousuo"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2789"
        width="200"
        height="200"
      >
        <path
          d="M990.980258 969.944422l-185.094554-185.094554c83.911344-83.23135 135.990938-198.518449 135.990938-325.781454C941.876642 205.950391 735.934251 0 482.824228 0 229.698205 0 23.747814 205.950391 23.747814 459.076413c0 253.142022 205.950391 459.060414 459.076414 459.060414 103.079195 0 198.334451-34.167733 275.037851-91.759283l188.342529 188.342528c6.183952 6.183952 14.279888 9.271928 22.383825 9.271928s16.199873-3.087976 22.391825-9.271928a31.655753 31.655753 0 0 0 0-44.77565zM87.06732 459.076413c0-218.222295 177.534613-395.748908 395.756908-395.748908 218.206295 0 395.732908 177.526613 395.732908 395.748908 0 218.198295-177.526613 395.740908-395.732908 395.740909-218.222295 0-395.756908-177.542613-395.756908-395.740909z"
          fill="#838384"
          p-id="2790"
        ></path>
      </svg>
      <input
        type="text"
        placeholder="搜素歌曲、歌手、专辑"
        v-model.trim="value"
        @keyup.enter="value && (searching = true)"
        @focus="inputing = true"
        @blur="inputing = false"
      />
      <!-- <span class="input-del" @click="clickDel">×</span> -->
    </div>

    <div class="line"></div>
    <!-- 热门搜索 -->
    <section class="hots" v-if="!value && !searching">
      <h5>热门搜索</h5>
      <ul>
        <li
          v-for="hot in hots"
          :key="hot.first"
          @click="
            searching = true;
            value = hot.first;
          "
        >
          {{ hot.first }}
        </li>
      </ul>
      <ol>
        <li
          class="history"
          v-for="(h , index) in history"
          :key="h"
          
        >
          <div @click="
            searching = true;
            value = h;
          ">
            <img class="history-img" src="../images/历史.png" />
            <span class="history-search">{{ h }}</span>
          </div>
          <span class="del" @click="deleteItem(index)">×</span>
        </li>
      </ol>
    </section>
    <!-- 搜索 -->
    <section class="suggests" v-if="value && !searching">
      <h5 class="h5-sousuo">搜索"{{ value }}"</h5>
      <ul>
        <li
          v-for="(item, index) in suggests"
          class="sousuo-suggest"
          :key="index"
          @click="
            searching = true;
            value = item.keyword;
          "
        >
          <svg
            t="1630409169525"
            class="icon icon-sousuo"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2789"
            width="200"
            height="200"
          >
            <path
              d="M990.980258 969.944422l-185.094554-185.094554c83.911344-83.23135 135.990938-198.518449 135.990938-325.781454C941.876642 205.950391 735.934251 0 482.824228 0 229.698205 0 23.747814 205.950391 23.747814 459.076413c0 253.142022 205.950391 459.060414 459.076414 459.060414 103.079195 0 198.334451-34.167733 275.037851-91.759283l188.342529 188.342528c6.183952 6.183952 14.279888 9.271928 22.383825 9.271928s16.199873-3.087976 22.391825-9.271928a31.655753 31.655753 0 0 0 0-44.77565zM87.06732 459.076413c0-218.222295 177.534613-395.748908 395.756908-395.748908 218.206295 0 395.732908 177.526613 395.732908 395.748908 0 218.198295-177.526613 395.740908-395.732908 395.740909-218.222295 0-395.756908-177.542613-395.756908-395.740909z"
              fill="#838384"
              p-id="2790"
            ></path>
          </svg>
          {{ item.keyword }}
        </li>
      </ul>
    </section>
    <!-- 最佳匹配 -->
    <section class="suggests" v-if="searching">
      <h5 class="h5-best">最佳匹配</h5>
      <ul>
        <li
          @click="$emit('change-current-song', item)"
          v-for="(item, index) in searchResults"
          :key="index"
          class="search-result"
        >
          <div class="left">
            <div class="song-name">{{ item.name }}</div>
            <div class="info">
              <div class="sqplay-img"></div>
              <span class="song-singer">{{ item.artists[0].name }}</span>
              <span class="album"> - {{ item.album.name }}</span>
            </div>
          </div>
          <!-- <div class="play-img" v-if="playing"></div> -->
        </li>
      </ul>
      <p v-if="!hasMore">没有更多了</p>
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      hots: [],
      suggests: [],
      searchResults: [],
      value: "",
      searching: false,
      inputing: false,
      page: 0,
      hasMore: false,
      history: JSON.parse(window.localStorage.getItem("history")) || [],
      // history:[1,2,3],
      playing: false,
    };
  },
  methods: {
    inputFocus: function () {
      this.inputing = true;
    },
    scroll: function (event) {
      //   console.log(event);
      if (this.hasMore) {
        if (
          event.target.offsetHeight + event.target.scrollTop ===
          event.target.scrollHeight
        ) {
          this.getSearch();
        }
      }
    },
    getSearch: function () {
      this.axios
        .get("http://apis.netstart.cn/music/search", {
          params: {
            keywords: this.value,
            limit: 30,
            offset: this.page * 30,
          },
        })
        .then((res) => {
          this.searchResults.push(...res.data.result.songs);
          this.page++;
          this.hasMore = res.data.result.hasMore;
        });

      this.history = [...new Set([...this.history, this.value])];
      window.localStorage.setItem("history", JSON.stringify(this.history));
    },
    // clickDel: function(){
    //   this.value = "";
    // },
    deleteItem: function (index) {
      // window.localStorage.getItem("history")
      // console.log(index);
      // for(var i = 0; i < this.history.length; i++){
      //   if(this.history[i]){}
      // }
        this.history.splice(index,1);
        localStorage.setItem("history", JSON.stringify(this.history))
    },
  },
  created: function () {
    this.axios.get("http://apis.netstart.cn/music/search/hot").then((res) => {
      this.hots = res.data.result.hots;
      // console.log(res);
    });
  },
  watch: {
    value: function (n) {
      if (this.inputing) {
        this.searching = false;
      }
      if (n && !this.searching) {
        this.axios
          .get("http://apis.netstart.cn/music/search/suggest", {
            params: {
              keywords: n,
              type: "mobile",
            },
          })
          .then((res) => {
            this.suggests = res.data.result.allMatch;
          });
      } else {
        this.suggests = [];
      }
    },

    searching: function (n) {
      if (n && this.value) {
        this.getSearch();
      } else {
        this.searchResults = [];
      }
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  .search-case {
    position: relative;
    .icon-sousuo {
      position: absolute;
      top: 24px;
      left: 28px;
      width: 12px;
      height: 12px;
    }
    input {
      width: 90%;
      height: 30px;
      border: 1px solid rgba(160, 159, 159, 0.2);
      border-radius: 25px;
      text-indent: 32px;
      background: rgba(174, 177, 177, 0.15);
      outline: none;
      margin-top: 15px;
      margin-bottom: 15px;
      margin-left: 18px;
    }
    input::placeholder {
      color: rgb(190, 190, 190);
    }
    .input-del {
      position: absolute;
      right: 30px;
      top: 20px;
      &.cative {
        display: none;
      }
    }
  }
  .line {
    width: 100%;
    height: 1px;
    background: rgba(141, 140, 140, 0.15);
  }
  .hots {
    h5 {
      font-size: 12px;
      margin: 15px 0 5px 10px;
    }
    ul {
      overflow: hidden;
      li {
        float: left;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        padding: 0 10px;
        border: 1px solid rgba(160, 159, 159, 0.2);
        border-radius: 30px;
        margin: 5px;
      }
    }
    ol {
      margin-top: 10px;
      img {
        width: 15px;
        height: 15px;
      }
      .history {
        display: flex;
        height: 40px;
        border-bottom: 1px solid rgba(173, 173, 173, 0.1);
        div {
          display: flex;
          width: 90%;
          align-items: center;
          height: 100%;
          .history-img {
            margin-left: 10px;
          }
          .history-search {
            margin-left: 10px;
          }
        }
        .del {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          position: absolute;right: 0;
          color: rgba(141, 140, 140, 0.4);
        }
      }
    }
  }

  .suggests {
    h5 {
      font-size: 14px;
      margin-top: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(226, 226, 226, 0.2);
      margin-left: 10px;
      &.h5-sousuo {
        color: #507daf;
      }
      &.h5-best {
        color: #333;
        font-size: 12px;
      }
    }
    li {
      margin: 0 10px;
      font-size: 14px;
      border-bottom: 1px solid rgba(224, 224, 224, 0.2);
      &.sousuo-suggest {
        line-height: 40px;
      }
      &.search-result {
        padding: 5px 0;
        display: flex;
        align-items: center;
        .song-name {
          display: flex;
          color: #333;
          font-size: 18px;
        }
        .left {
          flex: 1;
          .sqplay-img {
            display: inline-block;
            width: 15px;
            height: 15px;
            background-image: url("https://s3.music.126.net/mobile-new/img/index_icon_2x.png");
            background-repeat: no-repeat;
            background-size: 166px auto;
            background-position: 0 7px;
          }
          .song-singer {
            font-size: 12px;
            color: #507daf;
          }
          .album {
            font-size: 12px;
            color: #888;
          }
        }
        .play-img {
          width: 30px;
          height: 30px;
          background-image: url("https://s3.music.126.net/mobile-new/img/index_icon_2x.png");
          background-position: -22px 4px;
          background-repeat: no-repeat;
          background-size: 166px auto;
        }
        .play {
          width: 15px;
          height: 15px;
          background: red;
          background: none;
          display: flex;
          justify-content: space-around;
          i {
            width: 2px;
            height: 100%;
            background: #d43c33;
            transform-origin: bottom;
            animation: playing 0.8s linear 0s infinite alternate;
            animation-play-state: paused;
            &:nth-child(1) {
              animation-delay: -0.6s;
            }
            &:nth-child(2) {
              animation-delay: -0.4s;
            }
            &:nth-child(3) {
              animation-delay: -0.2s;
            }
          }
          &.playing {
            i {
              animation-play-state: running;
            }
          }
        }
      }
      .icon-sousuo {
        width: 12px;
        height: 12px;
        margin-right: 5px;
      }
    }
  }
}
</style>
