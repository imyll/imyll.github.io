<template>
  <div class="recommend-section">
    <h3><slot></slot></h3>
    <ul>
      <BookItem
        v-for="book in item.books.slice(0, 5)"
        :key="book._id"
        :book="book"
      ></BookItem>
    </ul>
  </div>
</template>

<script>
  import BookItem from "../components/BookItem.vue"
export default {

  props:[ "item" ],
  components: { 
    BookItem,
   },

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>

</style>