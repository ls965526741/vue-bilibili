<template>
  <van-tabbar v-model="active" :border="false">
    <van-tabbar-item :name="item.path" :to="item.path" v-for="item in tabberList" :key="item.path">
      <span>{{ item.title }}</span>
      <template #icon="props">
        <van-icon :name="item.icon" :class="props.active ? 'icon-active-color' : ''" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: '/home',
      tabberList: [
        {
          path: '/home',
          title: '主页',
          icon: 'setting-o'
        },
        {
          path: '/profile',
          title: '我的',
          icon: 'setting-o'
        }
      ]
    }
  },
  watch: {
    '$route.path': {
      handler() {
        const path = this.$route.path === '/' ? '/home' : this.$route.path
        this.active = `/${path.split('/')[1]}`
      },
      immediate: true
    }
  }
}
</script>

<style lang="less" scoped>
.icon-active-color {
  background-color: #fb799e;
  padding: 3px;
  border-radius: 50%;
  color: #fff;
}
span {
  user-select: none;
}
.van-tabbar-item--active {
  color: #fb799e;
}
</style>
