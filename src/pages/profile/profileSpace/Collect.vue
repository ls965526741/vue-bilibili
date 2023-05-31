/* 收藏 */
<template>
  <div class="collect">
    <van-collapse v-model="activeNames">
      <van-collapse-item title="我创建的收藏夹" name="1">
        <div v-if="list">
          <div class="collect_item" @click="$router.push('/')" v-for="(item, index) in list" :key="index">
            <div>
              <img :src="item.img" alt="" />
            </div>
            <div>
              <div class="collectible">{{ item.name }}</div>
              <div>{{ item.count + '个内容.公开' }}</div>
            </div>
          </div>
        </div>
      </van-collapse-item>
      <van-collapse-item title="我的收藏与订阅" name="2">
        <div v-if="subscription">
          <div class="collect_item" @click="$router.push('/')" v-for="(item, index) in subscription" :key="index">
            <div>
              <img :src="item.img" alt="" />
            </div>
            <div>
              <div class="collectible">{{ item.name }}</div>
              <div>{{ item.count + '个内容.公开' }}</div>
            </div>
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
const publicPath = process.env.BASE_URL
export default {
  data() {
    return {
      activeNames: ['1'],
      list: [
        { img: `${publicPath}/img/goods1.webp`, name: '默认收藏夹', count: 6 },
        { img: `${publicPath}/img/goods1.webp`, name: 'ed', count: 6 },
        { img: `${publicPath}/img/goods1.webp`, name: 'ing', count: 6 }
      ],
      subscription: []
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.collect {
  .collect_item {
    display: flex;
    > :first-child {
      width: 25vw;
      height: 15vw;
      img {
        width: 100%;
        height: 100%;
      }
    }
    > :last-child {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 10px;
      .collectible {
        color: #000;
      }
    }
  }
  .collect_item:nth-child(n + 2) {
    padding-top: 10px;
  }
}
</style>
