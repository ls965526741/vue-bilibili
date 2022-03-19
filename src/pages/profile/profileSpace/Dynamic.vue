<template>
  <div class="dynamic">
    <div class="dynamic_item" v-for="(item, index) in list" :key="index">
      <div class="header">
        <img :src="userImage" alt="" />
        <div class="name">
          <div>{{ item.name }}</div>
          <div>{{ item.date }}</div>
        </div>
        <div @click="$router.push('/')">
          <van-icon name="ellipsis" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [{ name: 123, date: 123124324 }]
      }
    }
  },
  data() {
    return {
      userImage: '/img/goods1.webp'
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.dynamic {
  .dynamic_item {
    .header {
      display: flex;
      padding: 16px 10px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .name {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
        box-sizing: border-box;
        > :first-child {
          font-size: 16px;
        }
        > :last-child {
          color: @text2;
          font-size: 12px;
        }
      }
      > :last-child {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
