<template>
  <div class="main">
    <div class="left">
      <span :class="{ isactive: active }" @click="synopsis">简介</span>
    </div>
    <div class="center">
      <span :class="{ isactive: !active }" @click="commit">评论</span>
    </div>
    <div class="right">
      <div v-if="show" class="item1" @click="show = false">
        点我发弹幕
        <van-icon name="arrow" />
      </div>
      <div v-else class="item2" @click="show = true">
        <span><van-icon name="arrow-left" /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      active: true
    }
  },
  methods: {
    synopsis() {
      this.active = true
      this.$emit('currintClick', this.active)
    },
    commit() {
      this.active = false
      this.$emit('currintClick', this.active)
    }
  }
}
</script>

<style lang='less' scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  text-align: center;

  box-shadow: rgba(0, 0, 0, 0.6);
}
.left {
  flex: 3;
}
.center {
  flex: 3;
}
.right {
  flex: 4;
  display: flex;
  flex-direction: row-reverse;
  .item1 {
    display: flex;
    align-items: center;
  }
  .van-icon {
    padding: 0 5px;
  }
}
.isactive {
  border-bottom: 2px solid red;
}
</style>
