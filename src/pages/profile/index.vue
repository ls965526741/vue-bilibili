<template>
  <div class="profile">
    <div class="header">
      <i class="iconfont icon-saoma" @click="$router.push('/')"></i>
      <i class="iconfont icon-clothes" @click="$router.push('/characterset')"></i>
      <i class="iconfont icon-yueliang" @click="$router.push('/')"></i>
    </div>
    <div class="user">
      <div class="user_info">
        <div class="user_img">
          <van-badge content="大" color="#fb7299">
            <van-image v-if="!isLogin" round width="50px" height="50px" src="/img/bilibili-line.png" />
            <van-image v-else round width="50px" height="50px" src="/img/bilibili-line.png" />
          </van-badge>
        </div>
        <div class="user_name">
          <strong v-if="!isLogin" @click="$router.push('/login')">点击登录</strong>
          <div v-else>
            <div class="name">name<van-tag color="#1bc8a4">LV2</van-tag></div>
            <div>
              <van-tag plain color="#fc87a8">正式会员</van-tag>
            </div>
            <div>
              <span>B币：</span>
              <span>硬币：</span>
            </div>
          </div>
        </div>
        <div @click="$router.push('/profilespace')">
          <span>空间</span>
          <i class="iconfont icon-arrow-right-bold"></i>
        </div>
      </div>
      <div class="user_active">
        <div>
          <div>1</div>
          <div>动态</div>
        </div>
        <span>|</span>
        <div>
          <div>1</div>
          <div>关注</div>
        </div>
        <span>|</span>
        <div>
          <div>1</div>
          <div>粉丝</div>
        </div>
      </div>
      <div class="banner"></div>
    </div>
    <div class="main">
      <profile-item :list="list" iconColor="#2eb1e0" />
      <div class="video_publication">
        <div class="pub_item">
          <span>UP</span>
          <strong>&nbsp; 发布你的第一个视频</strong>
          <p>领限定头像挂件，赢活动奖金</p>
        </div>
        <div class="award_winning">
          <van-badge dot>
            <div class="award_item">
              <i class="iconfont icon-direction-up"></i>
              有奖发布
            </div>
          </van-badge>
        </div>
      </div>
      <strong>推荐服务</strong>
      <profile-item :list="recommendList" />
      <strong>更多服务</strong>
      <van-cell :to="item.path" v-for="item in moreList" :key="item.id" :icon="item.icon" is-link>
        <template #title>
          <i :class="['iconfont', item.icon]" style="color: #fb7299; font-size: 24px"></i>
          <span class="custom-title"> &nbsp;{{ item.title }}</span>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api'
import ProfileItem from './ProfileItem.vue'
export default {
  components: {
    ProfileItem
  },
  data() {
    return {
      isLogin: false,
      list: [
        { id: 1, path: '/', title: '离线缓存', icon: 'icon-cangchucangku' },
        { id: 2, path: '/', title: '历史纪录', icon: 'icon-quanlingyuguimo-copy' },
        { id: 3, path: '/', title: '我的收藏', icon: 'icon-maijiagouwuche' },
        { id: 4, path: '/', title: '稍后再看', icon: 'icon-gouwu' }
      ],
      recommendList: [
        { id: 1, path: '/', title: '我的课程', icon: 'icon-icon' },
        { id: 2, path: '/', title: '免流量服务', icon: 'icon-simqia' },
        { id: 3, path: '/', title: '个性装扮', icon: 'icon-clothes' },
        { id: 4, path: '/', title: '我的钱包', icon: 'icon-qianbao' },
        { id: 5, path: '/', title: '会员购中心', icon: 'icon-gouwu' },
        { id: 6, path: '/', title: '直播中心', icon: 'icon-15' },
        { id: 7, path: '/', title: '创作中心', icon: 'icon-dengpaotishi' },
        { id: 8, path: '/', title: '反馈论坛', icon: 'icon-bumenfankui' },
        { id: 9, path: '/', title: '充能领福利', icon: 'icon-fuli' }
      ],
      moreList: [
        { id: 1, path: '/', title: '联系客服', icon: 'icon-kefu' },
        { id: 2, path: '/', title: '课堂模式', icon: 'icon-icon' },
        { id: 3, path: '/', title: '青少年模式', icon: 'icon-san' },
        { id: 4, path: '/', title: '设置', icon: 'icon-shezhi1' }
      ]
    }
  },
  methods: {
    async getUserInfo() {
      const { data } = await getUserInfo()
      if (data.meta.status !== 200) return this.$toast(data.meta.msg)
      console.log(data)
    }
  },
  created() {
    // this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
.profile {
  width: 100vw;
  height: calc(100vh - 49px);
  overflow: hidden;
  .header {
    display: flex;
    justify-content: flex-end;
    i {
      padding: 10px;
      font-size: 20px;
      color: @text1;
    }
  }
  .user {
    .user_info {
      display: flex;
      align-items: center;
      .user_img {
        padding: 0 16px;
      }
      .user_name {
        > div {
          .name {
            font-weight: 600;
            font-size: 18px;
          }
          > div:nth-child(2) {
            padding: 5px 0;
          }
          :last-child {
            color: @text1;
            font-size: 12px;
          }
        }
      }
      > div:last-child {
        flex: 1;
        color: @text1;
        direction: rtl;
        padding-right: 16px;
        font-size: 12px;
      }
    }
    .user_active {
      display: flex;
      align-items: center;
      margin: 10px 0px;
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
    .banner {
      width: 100%;
      height: 24vw;
      background: url('/img/bannerTop_new.png');
      background-size: cover;
      background-position: 50%;
      overflow: hidden;
    }
  }
  .main {
    .scrolly;
    width: 100%;
    height: calc(100% - 243px);
    > strong {
      padding-left: 16px;
      font-size: 14px;
    }
    .video_publication {
      .harfborder(#fb789e, 5px);
      display: flex;
      align-items: center;
      background-image: linear-gradient(to right, #fff 40%, #fedee7 100%);
      margin: 10px;
      .pub_item {
        padding: 10px;
        span {
          display: inline-block;
          border-radius: 2px;
          background-color: #fb789e;
          color: #fff;
        }
        p {
          color: @text2;
          font-size: 10px;
        }
      }
      .award_winning {
        flex: 1;
        display: flex;
        justify-content: center;
        .award_item {
          background-color: #fb7299;
          border-radius: 30px;
          color: #fff;
          padding: 3px 5px;
        }
      }
    }
    .more_serve {
      display: flex;
      padding: 16px;
      font-size: 14px;
      span {
        flex: 1;
        padding-left: 10px;
        color: @text1;
      }
      > :last-child {
        color: @text1;
      }
    }
  }
}
</style>
