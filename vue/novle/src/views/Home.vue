<template>
  <div class="home">
    <van-nav-bar>
      <template #left>
        <img
          class="logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAToAAABIBAMAAACU8SQRAAAALVBMVEVHcEz////////////////////////////////////////////////////////NXt0CAAAADnRSTlMA4fGcFXjOJ7Q7WmlLh+5Ft9UAAAOBSURBVGje5ZpNaxNBGMfHJmnaWEPxIl5CDl68hIIHPZUIS/VUetBrqSAeQw5CPYUcRDwF8SaI5Oyh5C7I4lmkX0AwSV82L93PYLKZzO48u7M7MztP3OJz6TJMpj/+O/O8zRKytIYbtiPC2Q06PCYkx0+8IPH2fT6pTfStE0HXzgydGe344a6Ybs2bMFqnM89Jwfs73KID/WtAt3humnqzaekcAV22tUOh241Y1K0G6AjZ4OkI2bx+dBIWoBNZWjon03S42gH7T+iiTsXCtldI5+jTPaYDE2thT44DhqtdJ46u7CZZX3wqTn1v3EJ5s8l0Tqbpzs3QOTh0UxTtQAbV48a+yNOdZZqummm6Nsq+M0V3mmntuuHFbOqNY+gCR74Q6T8N0TVR6IBHEdCJ4ixbckAQ6eqadBuCghaJTjFHWRYt892sRidn6ejYfpxg0hFNutZyzkgxc19LPGaD9HQnyzl/EOnmTxUdukNYW2aKrgN7Grh0PbWqh22HA0S6vi4dW8vOIF2RrVVXrbb95o9nL2M8yoUmXSkUs5XobsGqRJMuOQugiEHXbsdVjHwz2Mu/8r5T65mnG9LlmpJ0ey6INDkXBkYmbCVd1UPLsijtBJGsyP7jwIbu031rnG4q0E5A95H98C7bxzWW89RN010qaRci4Ynv+3RDI3RVJe1Cb9F72+xgDLqG6Y5UtAufAM+e8s0FNqGWmm5HQbu8700eWpYV1bXaCdM981pfGlUP9Uay2u25CZn7Yjt6D1eMTrsmm9kHee02K8l07h1ZOmHvM7hmXV67H64E3cwNsh2oR5cDVZScdjddGbpZCElJtw76i9Jndl++uzjRpgvkaVdExd+1VkHX8unGJrRzjNL94gMZinbjJG8spPPj0aJolM7v9ldBtwsuJKXzOwW6qTZdgw9kqbVzjNIFfnWApd0oVK9I0hUD02ysfadNtwUCGYp2c2fg38e9tgIWX20XotqBpvfdpVw3LUyXgxdl0tqV1bTTolsHgUxeOwW6M126MghkKNrJ3TLF9T6X3U+gnfhrmbLCHaMu3QkIZFA7ZTqj2h2CQJZaO6N0HXiNh6FdX5euAQIZvBFI+kpL6jblXkeTDgYyFLrtUk2Lrii6xjNLR95o0ZVAmxeLjnz++u357weP3r96cbsm/2ZjPyK103+Vyt2FUMtbx59+Utp3M9p/RvcXlN2FjxlfktkAAAAASUVORK5CYII="
          @click="$router.push('/')"
        />
      </template>
      <template #title>
        <div class="btn">
          <span
            :class="{ active: gender === 'male' }"
            @click="$router.replace({ path: '/', query: { gender: 'male' } })"
            >男生</span
          >
          <span
            :class="{ active: gender === 'female' }"
            @click="$router.replace({ path: '/', query: { gender: 'female' } })"
            >女生</span
          >
        </div>
      </template>
      <template #right>
        <van-icon
          size="24"
          name="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAKlBMVEVHcEz///////////////////////////////////////////////////+LBpLMAAAADXRSTlMApSzS4boSaI048EtBf5mWRgAAANhJREFUOMvV0z0KwjAYxvGItVqK4AWEro6CqyDSVRB3wQsI7iLoAQQv4OxBvIDgt/DexTchjX3gOYDN8ELz69D+Q4ypwornIicqLdG1YFKzkv2F9H57ySDPZ17S3VA6Qeq6dffS1TEK0tanq5eJjgcVTSRvKnsdTyobHS8qR/c1TJY6blQiOIuyNOw8MHHnt2LStHPLJLFzyiSWcriyGAgHAuFAIBwIhAOBcCAQDgTCgUA4EAgHAuFAIBwIhANx4S5eIvdzxZ3TcJ/iC1J9bRzu6bm/zkxl1xfJoE8h5ybMjAAAAABJRU5ErkJggg=="
          @click="$router.push('/mybook')"
        />
        <van-icon
          size="24"
          name="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJ1BMVEVHcEz///////////////////////////////////////////////8NopmKAAAADHRSTlMA1sQO8CSnQW6ZWoSHROfVAAABhklEQVRYw+2Yr0+DMRCGl8HGwELAfGLJFGRi4AADCUFNoAgkiJGAmwCHQGAIZoJAcAgCFofFdCnj1/1RJGRhtGt7710yBPke/+Tr3bXvLSsUcnJcdvabdvZcYtzTNwu4cUx95lBjmX64xoyx+kDpNiBlkX4xLf0I+JlJcrgElFNXeQWUzFUMb0yRxx2rFH2lyip7vvLCKh1feWOVtq/0pA1DWtb0FcsqNMQoFMXBFOUrmqwYpeLCKK6l4vIrnpjmISviQhFKiuhzPmMao4pxzbLQrCTN4vtXnFzNbKzPX+DCykF/LpsPoLE7CCZ7AxnbzuU/BIxVN/zsE2uU/OwzW+IcY4OsPBzj1BK8YugxL1GIWkqpB5WusBKmmk5EiTdtgmIcQQlGUJzdRpV38bmiJysmlCq0JpCdkSUUIy4lUkw5qbSg9c3v8uek8imtPlx/idIEIqDCKGey2UfmP84oa9IeB7v8yCgf0rEEB9NmlB6aR8lkyhjFyBUL/KbmFeLI/2zI+TO+AHPambLIoiO3AAAAAElFTkSuQmCC"
          @click="$router.push('/mylogin')"
        />
      </template>
    </van-nav-bar>
    <section class="search">
      <van-search v-model="value" right-icon="search" left-icon="">
        <template></template>
      </van-search>
      <van-swipe
        class="search-swipe"
        :autoplay="3000"
        :show-indicators="false"
        vertical
        height="34"
      >
        <van-swipe-item v-for="s in hotSearch" :key="s">{{ s }}</van-swipe-item>
      </van-swipe>
    </section>
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banners[gender]" :key="index">
        <img style="width: 100%" :src="item.url" />
      </van-swipe-item>
    </van-swipe>

    <RecommendSection
      v-for="item in recommend[gender]"
      :key="item.id"
      :item="item"
    >
      {{ item.title }}
    </RecommendSection>
  </div>
</template>

<script>
import RecommendSection from "../components/RecommendSection.vue";
import { getHomeMale, getHomeFemale } from "../apis/index";

export default {
  name: "Home",
  components: {
    RecommendSection,
  },
  data: function () {
    return {
      gender: "male",
      value: "",
      hotSearch: [
        "我可以爆修为",
        "不装了我就是大佬",
        "大唐之镇世武神",
        "穿越成舔狗他爸，我才是天命主角",
      ],
      banners: {
        male: [
          {
            bookid: "",
            url: "https://plf-new.zhuishushenqi.com/management/images/20210209/d55ce1e6f7584005820dff309b388917.png",
          },
          {
            bookid: "",
            url: "https://plf-new.zhuishushenqi.com/management/images/20210209/d57b17f1f3f7478ba1879fb631005e1a.jpg",
          },
          {
            bookid: "",
            url: "https://plf-new.zhuishushenqi.com/management/images/20201218/12ddcc817cdf49f787959bb53e21b584.png",
          },
        ],
        female: [
          {
            bookid: "",
            url: "https://plf-new.zhuishushenqi.com/management/images/20210209/2b5e4d4b08d9479db00720a486444994.jpg",
          },
          {
            bookid: "",
            url: "https://plf-new.zhuishushenqi.com/management/images/20201204/c48aa5482db346e9837df790c6cf6116.jpg",
          },
          {
            bookid: "",
            url: "https://plf-new.zhuishushenqi.com/management/images/20201127/2b8b5e6886ba472c9d6baea14de138b4.png",
          },
        ],
      },
      recommend: {
        male: [],
        female: [],
      },
    };
  },
  created() {
    getHomeMale().then((res) => {
      // console.log(res);
      this.recommend.male = res.map((item) => item.data.ranking);
    });
    getHomeFemale().then((res) => {
      // console.log(res);
      this.recommend.female = res.map((item) => item.data.ranking);
    });
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.gender = to.query.gender || "male";
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.gender = to.query.gender || "male";
    next();
  },
};
</script>

<style lang="less" scoped>
.home {
  .van-nav-bar {
    background: #b83320;
    .logo {
      height: 18px;
    }
    .btn {
      span {
        font-size: 14px;
        color: #fff;
        border: 1px solid #fff;
        line-height: 24px;
        display: inline-block;
        padding: 0 5px;
        &:first-child {
          padding: 0 5px 0 8px;
          border-radius: 12px 0 0 12px;
        }
        &:last-child {
          padding: 0 8px 0 5px;
          border-radius: 0 12px 12px 0;
        }
        &.active {
          background: #fff;
          color: #333;
        }
      }
    }
    .van-nav-bar__right {
      .van-icon {
        margin: 3px;
      }
    }
  }
  .search {
    position: relative;
    .van-search {
      padding: 5px 10px;
      .van-search__content {
        background: rgb(247, 247, 247);
      }
    }
    .search-swipe {
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 34px;
      margin-left: 20px;
      margin-top: 5px;
      text-align: left;
      .van-swipe-item {
        line-height: 34px;
        font-size: 12px;
      }
    }
  }
}
</style>
