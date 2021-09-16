<template>
  <div class="top-nav">
    <van-nav-bar>
      <template #left>
        <div class="goback" @click="$router.go(-1)">返回</div>
      </template>
      <template #title>
        <div class="nav-title"><slot></slot></div>
      </template>
      <template #right> </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.top-nav {
    .van-nav-bar {
      background: #b93321;
      .goback {
        color: #fff;
      }
      .nav-title {
        color: #fff;
      }
    }
  }
</style>