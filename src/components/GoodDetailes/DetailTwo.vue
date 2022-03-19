<template>
  <div class="detail_two">
    <div class="detail_item" v-for="(item, index) in list" :key="index">
      <div class="goods_img">
        <img :src="item.img" alt="" />
        <div class="float">
          <div><van-icon name="browsing-history-o" /> {{ item.play_count | filterCount }}</div>
          <div><van-icon name="notes-o" /> {{ item.play_comment | filterCount }}</div>
          <div>{{ item.time | formatDate }}</div>
        </div>
      </div>
      <div class="title">{{ item.title }}</div>
      <div class="content"></div>
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
            title: '就发生的龙卷风收到货发生的',
            count: 5,
            play_count: 321435,
            play_comment: 382,
            time: 123453
          },
          {
            img: '/img/goods1.webp',
            title: '就发生的龙卷风收到货发生的 阿斯顿发计划书店里辅导书给客',
            count: 5,
            play_count: 321435,
            play_comment: 382371,
            time: 123453
          }
        ]
      }
    }
  },
  data() {
    return {}
  },
  filters: {
    filterCount(count) {
      return (count + '').length >= 5 ? (count / 10000).toFixed(1) + '万' : count
    },
    formatDate(date) {
      const timer = new Date(date)
      const h = (timer.getHours() + '').padStart(2, 0)
      const mm = (timer.getMinutes() + '').padStart(2, 0)
      const ss = (timer.getSeconds() + '').padStart(2, 0)
      return `${h}:${mm}:${ss}`
    }
  }
}
</script>

<style lang="less" scoped>
.detail_two {
  display: flex;
  justify-content: space-evenly;
  .detail_item {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding-bottom: 10px;
    background-color: #fff;
    .cardshow();
    overflow: hidden;
    width: 46vw;
    .goods_img {
      width: 100%;
      position: relative;
      img {
        width: 100%;
        height: 25vw;
      }
      .float {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        width: 46vw;
        padding: 5px;
        color: #fff;
        font-size: 12px;
        :nth-child(2) {
          flex: 1;
          padding-left: 3px;
        }
      }
    }
    .title {
      width: 100%;
      .line2();
      padding-left: 5px;
      font-size: 14px;
      box-sizing: border-box;
    }
  }
}
</style>
