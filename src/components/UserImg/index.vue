<template>
  <div>
    <div class="user_image" :style="boxSize">
      <img @click="show = true" :src="userImage" alt="" />
    </div>
    <van-popup closeable close-icon-position="top-left" :overlay-style="{ 'background-color': '#fff' }" v-model="show">
      <div class="content" @click.self="show = false">
        <img :src="userImage" alt="" />
        <div>更换头像挂件</div>
        <div>更换头像</div>
        <div>保存图片</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  props: {
    userImage: String,
    size: {
      type: String,
      default: '85px'
    }
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    boxSize() {
      const size = this.size.endsWith('px') ? this.size : `${this.size}px`
      return `width:${size};height:${size};`
    }
  }
}
</script>

<style lang="less" scoped>
.user_image {
  overflow: hidden;
  display: inline-block;
  border: 2px solid #fff;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
  }
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  text-align: center;
  width: 100vw;
  height: 100vh;
  img {
    width: 95vw;
    margin-top: 90px;
  }
  div {
    width: 70vw;
    color: #fff;
    background-color: #ccc;
    border-radius: 5px;
    padding: 10px 0;
    margin-top: 10px;
    opacity: 0.4;
  }
}
</style>
