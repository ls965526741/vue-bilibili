<template>
  <div class="character_set">
    <div class="header">
      <i @click="$router.go(-1)" class="iconfont icon-arrow-left-bold"></i>
      <div class="flex">个性设置</div>
      <div @click="$router.push('/darkmode')">深色设置</div>
    </div>
    <div class="header_view">
      <div class="title">首页视图 （也可以直接在设置中切换）</div>
      <div></div>
    </div>
    <div class="profile_set">
      <div class="title">个性设置</div>
      <div class="theme">单色主题</div>
      <div class="main">
        <div
          class="main_item"
          @click="
            currentId = item.id
            item.checked = true
          "
          v-for="item in themeList"
          :key="item.id"
        >
          <div :class="{ isActive: filterColor(item.id) }">
            <div class="select_color" :style="'background-color:' + item.color"></div>
          </div>
          <div class="main_title">
            <van-checkbox checked-color="#fa7198" v-if="filterColor(item.id)" v-model="item.checked"></van-checkbox>
            <span>&nbsp;{{ item.title }}</span>
          </div>
          <div class="main_pic">{{ item.pic }}</div>
        </div>
      </div>
      <div class="recommend">
        <van-cell title="更多装扮推荐" is-link value="查看全部100+" to="/" />
        <div class="recommend_item">
          <div class="goods" v-for="item in recommendList" :key="item.id">
            <img :src="item.image" alt="" />
            <div class="name">{{ item.title }}</div>
            <div class="pic">{{ item.pic }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const publicPath = process.env.BASE_URL
export default {
  data() {
    return {
      currentId: false,
      themeList: [
        { id: '0', checked: false, color: '#ffffff', title: '简洁白', pic: '免费' },
        { id: '1', checked: false, color: '#ccc', title: '少女粉', pic: '免费' },
        { id: '2', checked: false, color: '#ccc', title: '主题黑', pic: '免费' },
        { id: '3', checked: false, color: '#ccc', title: '高能红', pic: '5硬币/月' },
        { id: '4', checked: false, color: '#ccc', title: '咸蛋黄', pic: '5硬币/月' },
        { id: '5', checked: false, color: '#ccc', title: '早苗绿', pic: '5硬币/月' },
        { id: '6', checked: false, color: '#ccc', title: '宝石蓝', pic: '5硬币/月' },
        { id: '7', checked: false, color: '#ccc', title: '罗兰紫', pic: '5硬币/月' }
      ],
      recommendList: [
        { id: 1, image: `${publicPath}/img/goods1.webp`, title: '雪狐桑', pic: '48B|永久' },
        { id: 2, image: `${publicPath}/img/goods1.webp`, title: '伊万', pic: '46B|永久' },
        { id: 3, image: `${publicPath}/img/goods1.webp`, title: 'EDG.LPL出征', pic: '55B|永久' }
      ]
    }
  },
  computed: {
    filterColor() {
      return function(id) {
        return this.currentId === id
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.character_set {
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    padding: 0 16px;
    text-align: center;

    .flex {
      flex: 1;
    }
    :last-child {
      font-size: 14px;
      color: @text1;
    }
  }
  .profile_set {
    .theme {
      height: 44px;
      line-height: 44px;
      padding-left: 16px;
    }
    .main {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;
      .main_item {
        width: 90px;
        > div {
          padding: 5px 0;
          .select_color {
            width: 80px;
            height: 40px;
            border-radius: 5px;
            margin-left: 5px;
          }
        }
        .main_title {
          display: flex;
          justify-content: center;
        }
        .main_pic {
          padding-top: 5px;
          margin-bottom: 10px;
          color: @text2;
          font-size: 12px;
        }
      }
      .main_item:first-child {
        .select_color {
          .harfborder(#ccc, 5px);
        }
      }
    }
  }
  .recommend {
    border-top: 10px solid @bgc1;
    .recommend_item {
      .flex();
      justify-content: space-evenly;
      .goods {
        display: flex;
        flex-direction: column;
        width: 30%;
        overflow: hidden;
        border-radius: 5px;
        background-color: @bgc1;
        img {
          width: 100%;
        }
        .name {
          padding: 5px;
          font-size: 14px;
        }
        .pic {
          color: @text2;
          font-size: 12px;
          padding: 0 0 10px 5px;
        }
      }
    }
  }
}
.title {
  background-color: @bgc1;
  color: @text2;
  font-size: 12px;
  line-height: 30px;
  height: 30px;
  padding-left: 16px;
}
.isActive {
  .harfborder(@logoColor, 5px);
}
</style>
