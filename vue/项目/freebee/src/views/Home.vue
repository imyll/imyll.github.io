<template>
  <div class="home">
    <div id="header">标题</div>

    <User v-for="(item,index) in 5" :key="index"></User>
    <!-- <HelloWorld></HelloWorld> -->
  </div>
</template>

<script>
// @ is an alias to /src
import User from "@/components/User.vue";
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    User,
    // HelloWorld
  },
};
</script>
<style>

#header {
  width: 100%;
  position: fixed;
  top: 0;
  text-align: center;
  height: 66px;
  line-height: 66px;
  color: #fff;
  background: rgba(255, 166, 0, 0.8);
  z-index: 999;
}
</style>
