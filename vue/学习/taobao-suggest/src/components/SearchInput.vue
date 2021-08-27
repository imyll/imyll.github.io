<template>
  <div>
    <input type="text" v-model="value" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      value: "",
    };
  },

  watch: {
      value: function(n) {
          this.$emit("translate-value", n)
      }
  }
};
</script>

<style lang="less" scoped></style>
