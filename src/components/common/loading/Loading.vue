<template>
  <div class="loading">
    <van-loading color="#1989fa" />
  </div>
</template>

<script>
export default {
  name: 'LOADING',
  data() {
    return {}
  }
}
</script>
<style scoped>
.loading {
  position: absolute;
  display: flex;
  z-index: 121;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
}
</style>
