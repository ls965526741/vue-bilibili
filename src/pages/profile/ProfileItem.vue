<template>
  <div class="bar">
    <div class="bar_item" v-for="item in list" @click="$router.push(item.path)" :key="item.id">
      <i :class="['iconfont', item.icon]" :style="iconStyle"></i>
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconSize: {
      type: String,
      default: '24px'
    },
    iconColor: {
      type: String,
      default: '#fb759b'
    },
    list: []
  },
  data() {
    return {}
  },
  computed: {
    iconStyle() {
      return { 'font-size': this.iconSize, color: this.iconColor }
    }
  }
}
</script>

<style lang="less" scoped>
.bar {
  display: flex;
  flex-wrap: wrap;
  .bar_item {
    width: 25%;
    height: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
      font-size: 12px;
      color: @text1;
      padding-top: 3px;
    }
  }
}
</style>
