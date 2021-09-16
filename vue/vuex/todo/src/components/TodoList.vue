<template>
  <ul>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"></TodoItem>
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
import { mapState, } from "vuex";

export default {
  components: {
    TodoItem,
  },
  computed: {
    ...mapState(["todos"]),
  }
};
</script>

<style lang="less" scoped>
</style>