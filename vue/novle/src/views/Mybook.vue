<template>
  <div class="mybook">
    <van-nav-bar
      title="我的书架"
      left-text="返回"
      left-arrow
    >
      <template #left>
        <van-icon name="arrow-left" @click="$router.go(-1)">
          <span>返回</span>
        </van-icon>
      </template>
      <template #title>
        <span>我的书架</span>
      </template>
      <template #right>
        <van-icon
          size="24"
          name="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAKlBMVEVHcEz///////////////////////////////////////////////////+LBpLMAAAADXRSTlMApSzS4boSaI048EtBf5mWRgAAANhJREFUOMvV0z0KwjAYxvGItVqK4AWEro6CqyDSVRB3wQsI7iLoAQQv4OxBvIDgt/DexTchjX3gOYDN8ELz69D+Q4ypwornIicqLdG1YFKzkv2F9H57ySDPZ17S3VA6Qeq6dffS1TEK0tanq5eJjgcVTSRvKnsdTyobHS8qR/c1TJY6blQiOIuyNOw8MHHnt2LStHPLJLFzyiSWcriyGAgHAuFAIBwIhAOBcCAQDgTCgUA4EAgHAuFAIBwIhANx4S5eIvdzxZ3TcJ/iC1J9bRzu6bm/zkxl1xfJoE8h5ybMjAAAAABJRU5ErkJggg=="
        />
        <van-icon
          size="24"
          name="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJ1BMVEVHcEz///////////////////////////////////////////////8NopmKAAAADHRSTlMA1sQO8CSnQW6ZWoSHROfVAAABhklEQVRYw+2Yr0+DMRCGl8HGwELAfGLJFGRi4AADCUFNoAgkiJGAmwCHQGAIZoJAcAgCFofFdCnj1/1RJGRhtGt7710yBPke/+Tr3bXvLSsUcnJcdvabdvZcYtzTNwu4cUx95lBjmX64xoyx+kDpNiBlkX4xLf0I+JlJcrgElFNXeQWUzFUMb0yRxx2rFH2lyip7vvLCKh1feWOVtq/0pA1DWtb0FcsqNMQoFMXBFOUrmqwYpeLCKK6l4vIrnpjmISviQhFKiuhzPmMao4pxzbLQrCTN4vtXnFzNbKzPX+DCykF/LpsPoLE7CCZ7AxnbzuU/BIxVN/zsE2uU/OwzW+IcY4OsPBzj1BK8YugxL1GIWkqpB5WusBKmmk5EiTdtgmIcQQlGUJzdRpV38bmiJysmlCq0JpCdkSUUIy4lUkw5qbSg9c3v8uek8imtPlx/idIEIqDCKGey2UfmP84oa9IeB7v8yCgf0rEEB9NmlB6aR8lkyhjFyBUL/KbmFeLI/2zI+TO+AHPambLIoiO3AAAAAElFTkSuQmCC"
          @click="$router.push('/mylogin')"
        />
      </template>
    </van-nav-bar>
    <ul>
      <li v-for="book in mybooks" :key="book._id" >
        <div class="title">{{book.title}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {  
  computed: {
    ...mapState(['mybooks']),
  }
};
</script>

<style lang="less" scoped>
.mybook{
  .van-nav-bar{
    background: #b93321;
    .van-nav-bar__left{
      .van-icon-arrow-left{
        color: #fff;
      }
      span{
        color: #fff;
      }
    }
    .van-nav-bar__title{
      span{
        color: #FFF;
      }
    }
    .van-nav-bar__right{
      .van-icon{
        margin: 3px;
      }
    }
  }
}
</style>