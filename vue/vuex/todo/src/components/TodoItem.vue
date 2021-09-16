<template>
  <li>
    <input type="checkbox">
    <p>{{todo.text}}</p>
    <span>X</span>
  </li>
</template>

<script>

// import { mapMutations } from "vuex";

export default {
  props: ["todo"],
}
</script>

<style lang="less" scoped>
  li{
    display: flex;
    align-items: center;
    p{
      flex: 1;
    }
  }
</style>