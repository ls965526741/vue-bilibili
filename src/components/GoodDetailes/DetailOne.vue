<template>
  <div class="detail_one">
    <div class="detail_item" v-for="(item, index) in list" :key="index">
      <div class="goods_img">
        <img :src="item.img" alt="" />
        <van-icon name="browsing-history-o" />
      </div>
      <div class="title">
        {{ item.title }}
      </div>
      <div class="content">
        <span>{{ item.count }}个类容.{{ item.show ? '公开' : '私有' }}</span>
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
        return [
          {
            img: '/img/goods1.webp',
            title: 123,
            count: 5,
            show: false
          },
          {
            img: '/img/goods1.webp',
            title: 123,
            count: 5,
            show: false
          }
        ]
      }
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.detail_one {
  display: flex;
  justify-content: space-evenly;

  .detail_item {
    .cardshow;
    display: flex;
    width: 46vw;
    flex-direction: column;
    background-color: #fff;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    .goods_img {
      padding-bottom: 5px;
      width: 100%;
      position: relative;
      .van-icon {
        position: absolute;
        bottom: 15px;
        right: 5px;
        display: block;
        width: 24px;
        height: 24px;
        background-color: rgba(0, 0, 0, 0.3);
        color: #fff;
        border-radius: 3px;
        text-align: center;
        line-height: 24px;
      }
      img {
        width: 100%;
        height: 25vw;
      }
    }
    .title {
      padding-left: 5px;
    }
    .content {
      padding: 5px;
      color: @text2;
    }
  }
}
</style>
