<template>
    <div class="">
        <div class="box boxa"></div>
        <div class="box boxb"></div>
        <hr>
        <button @click="bool = !bool">toggle</button>
        <transition name="fade">
            <div class="box boxc" v-if="bool"></div>
        </transition>
        <transition name="bounce">
            <div class="box boxd" v-if="bool"></div>
        </transition>
    </div>
    
</template>

<script>
    export default {
        componets: {},
        data: function() {
            return{
                bool: true,
            };
        },
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
      transition: all .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
      transform: translateX(50px);
    }
    .box{
        width: 100px;
        height: 100px;
        background: red;
        margin: 10px;
    }
    .boxa:hover{
        width: 150px;
    }
</style>