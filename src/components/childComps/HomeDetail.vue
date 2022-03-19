<template>
  <div class="detail" @click="detailback">
    <div class="center">
      <img :src="detailData.image" alt="" />
      <div class="count"><van-icon name="play-circle-o" size="12" />{{ detailData.count }}</div>
      <div class="favour">{{ detailData.favour }}<van-icon name="other-pay" /></div>
    </div>
    <div class="title">{{ detailData.title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    detailData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    detailback() {
      if (this.$route.path !== '/detail/' + this.detailData.id) {
        this.$router.push('/detail/' + this.detailData.id + '')
      }
    }
  }
}
</script>

<style scoped>
.detail {
  width: 45vw;
  overflow: hidden;
}
img {
  width: 100%;
}
.center {
  position: relative;
  color: #fff;
  font-size: 12px;
}
.count {
  position: absolute;
  bottom: 7px;
  left: 7px;
}
.favour {
  position: absolute;
  bottom: 7px;
  right: 7px;
}
.title {
  font-size: 14px;
  color: #323233;
}
</style>
