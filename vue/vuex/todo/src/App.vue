<template>
  <div id="app">
    <TodoAdd></TodoAdd>
    <TodoList></TodoList>
    <TodoFilter></TodoFilter>
  </div>
</template>

<script>
import TodoAdd from './components/TodoAdd.vue';
import TodoList from './components/TodoList.vue';
import TodoFilter from './components/TodoFilter.vue';

export default {
  name: 'App',
  components: {
    TodoAdd,
    TodoList,
    TodoFilter,
  }
}
</script>

<style lang="less">

</style>
