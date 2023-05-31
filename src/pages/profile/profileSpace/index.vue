<template>
  <div class="space">
    <van-nav-bar class="nav_bar1" @click-left="$router.go(-1)" :border="false" fixed :title="isShow ? '' : name">
      <template #left>
        <van-icon :class="{ show: isShow }" name="arrow-left" size="18" />
      </template>
      <template #right>
        <van-icon :class="{ show: isShow }" class="icon2" name="search" size="18" />
        <van-icon :class="{ show: isShow }" name="ellipsis" size="18" />
      </template>
    </van-nav-bar>
    <div class="header_img">
      <van-icon class="pro_theme" name="contact" size="24" />
    </div>
    <div class="user_info" :class="{ white_screen: !isShow }">
      <div class="user_img">
        <user-img class="img" :userImage="userImage" />
      </div>
      <div class="info_item">
        <div class="user_active">
          <div>
            <div>1</div>
            <div>粉丝</div>
          </div>
          <span>|</span>
          <div>
            <div>1</div>
            <div>关注</div>
          </div>
          <span>|</span>
          <div>
            <div>1</div>
            <div>获赞</div>
          </div>
        </div>
        <div class="edit_info">编辑资料</div>
      </div>
      <div class="user_name">
        <span>{{ name }}</span>
        <span>大会员</span>
        <span>粉丝勋章</span>
        <span class="hexagon">+</span>
        <span>成就勋章</span>
      </div>
      <div class="grade">
        <span>
          <span>LV</span>
          <span>{{ grade }}</span>
        </span>
        <span>{{ count + '/' + allCount }}</span>
        <van-progress :show-pivot="false" color="#84bf96" :percentage="formatCount" stroke-width="2" />
      </div>
      <div class="school">
        <div>+ 添加学校信息</div>
        <div @click="recommendShow = !recommendShow">{{ recommendShow ? '收起' : '详情' }}</div>
      </div>
      <div class="uid" v-if="recommendShow">
        <div>{{ content ? content : '这个人很神秘什么都没写' }}</div>
        <span>UID:{{ uid }}</span>
      </div>
    </div>
    <van-tabs v-model="active" title-active-color="#fa7198" color="#fa7198" border>
      <van-tab title="主页">
        <div class="content">
          <profile-home />
        </div>
      </van-tab>
      <van-tab title="动态">
        <dynamic />
      </van-tab>
      <van-tab title="收藏">
        <collect />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import UserImg from '@/components/UserImg/index'
import ProfileHome from './ProHome.vue'
import Dynamic from './Dynamic.vue'
import Collect from './Collect.vue'
const publicPath = process.env.BASE_URL
export default {
  components: {
    UserImg,
    ProfileHome,
    Dynamic,
    Collect
  },
  data() {
    return {
      name: 'liaoshuai',
      userImage: `${publicPath}/img/user.png`,
      isShow: true,
      count: 1300,
      allCount: 1500,
      grade: 2,
      recommendShow: false,
      content: '',
      uid: 123,
      active: 0
    }
  },
  methods: {
    screenChange() {
      addEventListener(
        'scroll',
        () => {
          const clientWidth = window.pageYOffset
          if (clientWidth < 150) return (this.isShow = true)
          this.isShow = false
        },
        true
      )
    }
  },
  computed: {
    formatCount() {
      return (this.count / this.allCount) * 100
    }
  },
  created() {
    this.screenChange()
  }
}
</script>

<style lang="less" scoped>
.space {
  ::-webkit-scrollbar {
    display: none;
  }
  .nav_bar1 {
    background-color: transparent;
    z-index: 2;
    ::v-deep .van-nav-bar__left,
    ::v-deep .van-nav-bar__right {
      padding: 0 10px;
    }
    .icon2 {
      margin-right: 5px;
    }
  }
  .header_img {
    position: relative;
    width: 100%;
    height: 30vw;
    background: url('/img/bannerTop_new.png');
    background-size: cover;
    background-position: 50%;
    overflow: hidden;
    .pro_theme {
      position: absolute;
      bottom: 3px;
      right: 3px;
      display: inline-block;
      width: 40px;
      height: 40px;
      color: #fffef9;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 5px;
      line-height: 40px;
      text-align: center;
    }
  }
  .user_info {
    .user_img {
      position: relative;
      .img {
        position: absolute;
        top: -10px;
        left: 5px;
      }
    }
    .info_item {
      margin-left: 110px;
      .user_active {
        display: flex;
        align-items: center;
        padding: 10px 0px;
        > div {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          :last-child {
            color: @text2;
            font-size: 14px;
          }
        }
        span {
          font-size: 20px;
          color: @text2;
        }
      }
      .edit_info {
        .harfborder(@logoColor, 5px);
        text-align: center;
        color: @logoColor;
        padding: 5px 0;
        margin: 0 16px;
      }
    }
    .user_name {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: @text2;
      :nth-child(1) {
        color: #000;
        font-weight: 600;
        font-size: 18px;
        margin: 0 5px;
      }
      :nth-child(2) {
        background-color: #f2eada;
        padding: 2px;
      }
      :nth-child(3)::before {
        content: '+';
        display: inline-block;
        width: 16px;
        text-align: center;
        border: 1px dashed @text1;
        background-color: #f2eada;
        margin: 0 5px;
      }
      .hexagon {
        width: 16px;
        height: 16px;
        display: block;
        margin-left: 5px;
        background-color: #f2eada;
        border: 1px dashed @text1;
        line-height: 16px;
        text-align: center;
        clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
        -weblit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
      }
      :last-child {
        padding-left: 5px;
      }
    }
    .grade {
      padding-left: 5px;
      :nth-child(1) {
        color: #fff;
        font-weight: 700;
        :first-child {
          font-size: 12px;
          background-color: #84bf96;
          padding-right: 3px;
        }
        :last-child {
          font-size: 16px;
          background-color: #84bf96;
        }
      }
      > :nth-child(2) {
        color: @text2;
        font-size: 12px;
        padding-left: 5px;
      }
      .van-progress {
        margin-top: 5px;
        width: 30vw;
      }
    }
    .school {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      margin-top: 10px;
      :nth-child(1) {
        border: 1px dashed @text1;
        background-color: @text2;
        border-radius: 3px;
        padding: 1px 3px;
        margin-left: 6px;
        margin-bottom: 1px;
        color: @text1;
      }
      :nth-child(2) {
        color: #1a89ee;
        padding-right: 6px;
      }
    }
    .uid {
      padding-left: 6px;
      :nth-child(1) {
        color: @text1;
        font-size: 14px;
        padding: 5px 0;
      }
      :last-child {
        background-color: #f2eada;
        font-size: 12px;
      }
    }
  }
}

/* navbar 样式切换 start */
.show {
  display: inline-block;
  width: 30px;
  height: 30px;
  color: #fffef9;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  line-height: 30px;
  text-align: center;
}
.white_screen {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 1;
    animation: transformColor 0.5s linear;
  }
}
@keyframes transformColor {
  from {
    background-color: transparent;
  }
  to {
    background-color: #fff;
  }
}
/* navbar 样式切换 end */
</style>
