<template>
  <div class="detail">
    <div class="header">
      <div class="nav-bar">
        <van-nav-bar left-arrow @click-left="$router.push('/home')" />
      </div>
      <div class="video">
        <video controls="controls" width="100%" autoplay="autoplay" loop="loop" muted>
          <source :src="videoSrc[Math.floor(Math.random() * 3 + 1)]" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="detail-main">
      <article-item />
      <detail-bar @currintClick="currintClick"></detail-bar>
      <div class="recommend" v-if="active">
        <van-list
          :immediate-check="false"
          v-model="loading"
          :finished="finished"
          finished-text="没有跟多了"
          @load="onLoad"
        >
          <div class="detal-par">
            <home-detail v-for="(iex, inex) in modul" :key="inex" :detailData="iex" class="detaitem" />
          </div>
        </van-list>
      </div>
      <div class="commit" v-else>
        <commit :servecommit="conmmitData" @replyCommot="replyCommot" />
        <div class="height"></div>
        <commit-title @submitCommit="submitCommit" ref="focusTitle" class="title" />
      </div>
    </div>
  </div>
</template>

<script>
import DetailBar from './DetailBar.vue'
import HomeDetail from '@/components/childComps/HomeDetail.vue'
import CommitTitle from './CommitTitle.vue'
import Commit from './Commit.vue'
import ArticleItem from './ArticleItem.vue'
const publicPath = process.env.BASE_URL
export default {
  components: {
    DetailBar,
    HomeDetail,
    CommitTitle,
    Commit,
    ArticleItem
  },
  data() {
    return {
      videoSrc: [`${publicPath}/mp4/m1.mp4`, `${publicPath}/mp4/m2.mp4`, `${publicPath}/mp4/m3.mp4`, `${publicPath}/mp4/m4.mp4`],
      active: true,
      parent_id: '',
      subCommitData: {
        commit_id: '',
        user_id: '',
        commit_data: '',
        commit_content: '',
        user_name: ''
      },
      conmmitData: [],
      orginalCommit: [],
      modul: [],
      loading: false,
      finished: false,
      page: 0
    }
  },
  methods: {
    currintClick(active) {
      this.active = active
    },
    Parent(a, b, d, e, f) {
      const time = new Date()
      const day = time.getDate() > 10 ? time.getDate() : '0' + time.getDate()
      let month = time.getMonth() + 1
      month = month > 10 ? month : '0' + month
      const s = `${month}-${day}`
      this.parent_id = a
      this.user_id = b
      this.commit_data = s
      this.commit_content = d
      this.user_name = e
      this.commit_id = f
      this.image = localStorage.getItem('userimg')
    },
    replyCommot(res) {
      this.parent_id = res
      this.$refs.focusTitle.getfocus()
    },
    submitCommit(res) {
      const i = localStorage.getItem('id')
      const id = this.parent_id ? this.parent_id : null
      const name = localStorage.getItem('name')
      const o = new this.Parent(id, i, res, name, this.orginalCommit.length)
      this.orginalCommit.push(o)
      this.conmmitData = this.changemissage(this.orginalCommit, null)
      this.id = ' '
    },
    onLoad() {
      this.page++
      if (this.page < 4) this.getData()
      else this.finished = true
    },
    getData() {
      this.$http.get('/detail/' + this.$route.params.id).then(res => {
        // console.log(res.data);
        this.modul.push(...res.data)
        this.loading = false
      })
    },
    getCommot() {
      this.$http.get('/commit/' + this.$route.params.id).then(res => {
        this.orginalCommit = res.data
        this.conmmitData = this.changemissage(this.orginalCommit, null)
      })
    },
    changemissage(res, id) {
      const o = []
      for (var i = 0; i < res.length; i++) {
        if (res[i].parent_id === id) {
          o.push(res[i])
          res[i].child = this.changemissage(res, res[i].commit_id)
          res[i].child.forEach(item => {
            item.reply_name = res[i].user_name
          })
        }
      }
      return o
    }
  },
  computed: {
    imgurl() {
      return '/img/bl' + Math.floor(Math.random() * 10) + '.webp'
    }
  },
  created() {
    this.getData()
    this.getCommot()
  },
  watch: {
    $route() {
      this.modul = []
      this.page = 0
      this.getData()
    }
  }
}
</script>

<style lang='less' scoped>
.detail {
  width: 100vw;
  background-color: #fff;
  .header {
    width: 100%;
    height: 256px;
  }
  .detail-main {
    height: calc(100vh - 256px);
    overflow-y: scroll;
  }
  .nav-bar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 46px;
    z-index: 2;
  }
}
.cleartop {
  height: 256px;
}
.detaitem {
  width: 48vw;
}
video {
  position: fixed;
  top: 46px;
  z-index: 1;
}
img {
  width: 100%;
}
.video {
  width: 100%;
}
.detal-par {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.title {
  position: fixed;
  bottom: -2px;
  background-color: #fff;
}
.height {
  height: 44px;
}
</style>
