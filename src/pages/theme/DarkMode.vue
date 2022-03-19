<template>
  <div class="dark_mode">
    <div class="header">
      <i @click="$router.go(-1)" class="iconfont icon-arrow-left-bold"></i>
      <div>深色模式</div>
    </div>
    <div class="main">
      <van-cell center title="深色跟随系统" label="随系统设置开启深色模式">
        <template #right-icon>
          <van-switch inactive-color="#dcdee0" active-color="#fb82a4" v-model="checked" size="20" />
        </template>
      </van-cell>
      <van-cell center title="深色模式">
        <template #right-icon>
          <van-switch inactive-color="#dcdee0" active-color="#fb82a4" v-model="checked1" size="20" />
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      checked1: false
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  border-bottom: 10px solid @bgc1;
  div {
    flex: 1;
    padding-left: 20px;
  }
}
</style>
