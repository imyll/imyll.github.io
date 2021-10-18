<template>
  <div>
    <div class="user" @toggle="clickHandle">
      <div class="userinfo">
        <img
          class="header"
          src="https://img0.baidu.com/it/u=1077360284,2857506492&fm=26&fmt=auto"
          alt=""
        />
        <div class="info">
          <div class="username">Jesica Alba</div>
          <div class="details">
            <div class="address">Los Angeles, CA</div>
            <div class="time">2m</div>
          </div>
        </div>
      </div>
      <div class="sidebar" v-if="false">
        12312313131
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      flag:true
      }
      
  },
  methods:{
    clickHandle: function(){
      // this.flag = !flag
    }
  }
};
</script>

<style scoped>
.user {
  width: 100%;
  height: 100%;
  height: 200px;
  background-image: url("https://img2.baidu.com/it/u=3358288789,1656074261&fm=26&fmt=auto");
  color: #fff;
  overflow: hidden;
  margin-bottom: 10px;
  position: relative;
}
.user .userinfo {
  width: 100%;
  position: absolute;
  bottom: 10px;  
  display: flex;
  align-items: center;
}
.user .userinfo .header {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 0 20px;
}
.user .userinfo .info {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.user .userinfo .info .username {
  font-size: 18px;
}
.user .userinfo .info .details {
  width: 100%;
  color: rgb(223, 223, 223);
}
.user .userinfo .info .details .address {
  float: left;
}
.user .userinfo .info .details .time {
  margin-right: 10px;
  float: right;
}
.user .sidebar{
  width: 80px;
  height: 100%;
  background: #fff;
  float: right;
  z-index: 999;
}
</style>