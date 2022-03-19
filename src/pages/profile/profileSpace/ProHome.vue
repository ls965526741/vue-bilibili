<template>
  <div class="profile_home">
    <van-nav-bar :border="false">
      <template #left>
        <span>收藏</span>
        <span class="count">3</span>
      </template>
      <template #right>
        <span class="look_more">查看更多</span>
        <van-icon name="arrow" color="#ccc" size="18" />
      </template>
    </van-nav-bar>
    <detail-one />
    <van-nav-bar :border="false">
      <template #left>
        <span>最近投币的视频</span>
        <span class="count">3</span>
      </template>
      <template #right>
        <span class="look_more">查看更多</span>
        <van-icon name="arrow" color="#ccc" size="18" />
      </template>
    </van-nav-bar>
    <detail-two />
    <van-nav-bar :border="false">
      <template #left>
        <span>最近点赞的视频</span>
        <span class="count">3</span>
      </template>
      <template #right>
        <span class="look_more">查看更多</span>
        <van-icon name="arrow" color="#ccc" size="18" />
      </template>
    </van-nav-bar>
    <detail-two />
  </div>
</template>

<script>
import DetailOne from '@/components/GoodDetailes/DetailOne'
import DetailTwo from '@/components/GoodDetailes/DetailTwo'
export default {
  components: {
    DetailOne,
    DetailTwo
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.count {
  color: @text2;
  padding-left: 5px;
}
.look_more {
  color: @text2;
}
.profile_home {
  background-color: #f8f9f9;
  padding-bottom: 5px;
  .van-nav-bar {
    background-color: transparent;
  }
}
</style>
