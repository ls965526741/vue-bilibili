<template>
  <div class="search">
    <div class="left">
      <img :src="`${publicPath}/img/common/logo.png`" alt="" @click="$router.push('/home')" />
    </div>
    <div class="center">
      <input type="search" class="se" placeholder="请输入搜索内容" />
    </div>
    <div class="img" @click="$router.push('/profile')">
      <img v-if="userimg" :src="userimg" alt="" />
      <img v-else :src="`${publicPath}/img/common/noface.jpg`" alt="" />
    </div>
    <div class="right"><div class="load">下载app</div></div>
  </div>
</template>

<script>
export default {
  computed: {
    userimg() {
      return localStorage.getItem('userimg')
    }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style scoped>
.search {
  width: 100%;
  height: 49px;
  display: flex;
  background-color: #fff;
  text-align: center;
  line-height: 49px;
}
.right {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15vw;
  font-size: 12px;
}
.left {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}
.center {
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: center;
}
.load {
  background-color: pink;
  height: 30px;
  line-height: 30px;
}
.se {
  width: 80%;
  height: 30px;
  border-radius: 15px;
  background-color: #f4f4f4;
  outline: none;
  border: none;
  padding-left: 30px;
}
.img {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  height: 32px;
}
.img img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
