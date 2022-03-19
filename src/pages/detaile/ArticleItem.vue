<template>
  <div class="artivee">
    <div class="header">
      <div class="item">打开App， 流畅又高清</div>
      <div class="item1">
        这么可爱，不好吧
        <span @click="isshow" v-if="show"><van-icon name="arrow-up" /></span>
        <span @click="isshow" v-else><van-icon name="arrow-down" /></span>
      </div>
    </div>
    <div class="main">
      <div class="mainItem" v-if="!show">
        <div>
          <img v-if="isuserImage" :src="isuserImage" alt="" />
          <img v-else src="/img/common/noface.jpg" alt="" />
          <span>欣小萌</span>
        </div>
        <div class="child1">
          <span>56万观看</span>
          <span :class="{ active: praise }" @click="praise = !praise"><van-icon name="good-job" />3.5万</span>
          <span :class="{ active: isactive }" @click="countClick"><van-icon name="star" />{{ count }}</span>
        </div>
      </div>
      <div class="mainItem2" v-else>
        <div class="top">
          <div class="img">
            <img v-if="isuserImage" :src="isuserImage" alt="" />
            <img v-else src="/img/common/noface.jpg" alt="" />
          </div>
          <div class="user_name"><span>欣小萌</span><span>345万粉丝</span></div>
          <div class="attention" @click="attentionClick">
            <span v-if="isattention">+ &nbsp; 关注</span>
            <span v-else>- &nbsp; 取消关注</span>
          </div>
        </div>
        <div class="center">
          <span>56万观看</span>
          <span>1183弹幕</span>is
          <span>09-14</span>
          <span>dsnklgnsopig</span>
        </div>
        <div class="bottom">
          <span><van-icon name="warning-o" class="van-icon1" /> &nbsp; 未经作者授权禁止转载</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isactive: false,
      isattention: true,
      show: false,
      praise: false,
      count: 7789
    }
  },
  methods: {
    isshow() {
      this.show = !this.show
    },
    countClick() {
      this.isactive = !this.isactive
      if (this.isactive) {
        this.count++
      } else {
        this.count--
      }
    },
    attentionClick() {
      this.isattention = !this.isattention
    }
  },
  computed: {
    isuserImage() {
      return localStorage.getItem('userimg')
    },
    getUsername() {
      return localStorage.getItem('name')
    }
  }
}
</script>

<style scoped>
.artivee {
  width: 100%;
  margin-top: 10px;
  padding: 0 10px;
  box-sizing: border-box;
}
.item {
  background-color: #fb7299;
  text-align: center;
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  color: #fff;
}
.main {
  font-size: 14px;
  color: #757575;
}
.active {
  color: #fb7299;
}
.img img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.mainItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mainItem div img {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  vertical-align: bottom;
}
.center span {
  padding: 0 3px;
}
.top {
  display: flex;
  align-items: center;
}
.img {
  flex: 1;
}
.user_name {
  padding-left: 5px;
  flex: 7;
  display: flex;
  flex-direction: column;
}
.user_name span:nth-child(1) {
  color: #212121;
}
.attention {
  flex: 3;
  text-align: center;
  border: 1px solid #fb7299;
  color: #fb7299;
  padding: 3px 0;
  border-radius: 5px;
}
.child1 span {
  padding: 0 5px;
}
.bottom {
  padding-top: 5px;
}
.van-icon1 {
  color: #fb7299;
}
</style>
