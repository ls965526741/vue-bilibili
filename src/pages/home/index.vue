<template>
  <div class="home">
    <search />
    <edit-category v-if="!iscategory" :category="category" @backClick="iscategory = !iscategory" />
    <div class="relation_parent" v-else>
      <div class="category_entr" @click="iscategory = !iscategory">
        <i class="iconfont">&#xe6bb;</i>
      </div>
      <van-tabs v-model="active" swipeable sticky>
        <van-tab v-for="(item, index) in category" :title="item.title" :key="index">
          <van-list
            :immediate-check="false"
            v-model="item.loading"
            :finished="item.finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <div class="detal-par">
              <home-detail v-for="(iex, inex) in item.list" :key="inex" :detailData="iex" class="detail" />
            </div>
          </van-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Search from '@/components/search'
import HomeDetail from '@/components/childComps/HomeDetail.vue'
import EditCategory from './EditCategory.vue'
export default {
  components: {
    Search,
    HomeDetail,
    EditCategory
  },
  data() {
    return {
      iscategory: true,
      page: 0,
      pagesize: 8,
      active: '',
      category: []
    }
  },
  methods: {
    onLoad() {
      const current = this.categoryItem()
      // console.log("page" + current.page);
      current.page += 1
      this.getHomeData()
      if (current.page >= 10) {
        current.finished = true
      }
    },
    getcategorydata() {
      if (!localStorage.getItem('category')) {
        this.$http.get('/category').then(res => {
          this.category = res.data
          localStorage.setItem('category', JSON.stringify(res.data, null))
          this.changeCategory()
        })
      } else {
        this.category = JSON.parse(localStorage.getItem('category'))
        this.changeCategory()
      }
    },
    getHomeData() {
      const current = this.categoryItem()
      // console.log(current);
      this.$http
        .get('/home/', {
          params: {
            id: current.id,
            page: current.page,
            pagesize: current.size
          }
        })
        .then(res => {
          // console.log(res.data);
          current.list.push(...res.data)
          current.loading = false
          this.category = JSON.parse(JSON.stringify(this.category))
        })
        .catch(err => {
          console.log(err)
        })
    },
    categoryItem() {
      const categoryitem = this.category[this.active]
      return categoryitem
    },
    categoryItem1() {
      const categoryitem = this.category[this.active - 1]
      return categoryitem
    },
    changeCategory() {
      this.category.forEach(item => {
        item.list = []
        item.page = 0
        item.size = 10
        item.loading = false
        item.finished = false
      })
      // console.log(this.category);
    }
  },
  created() {
    this.getcategorydata()
  },
  // mounted() {
  //   this.getHomeData();
  // },
  watch: {
    active() {
      this.getHomeData()
    },
    category() {}
  }
}
</script>
<style scoped>
.home {
  width: 100%;
  height: calc(100vh - 50px);
  overflow-y: scroll;
}
.detal-par {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.category_entr {
  position: absolute;
  right: 0;
  top: 12px;
  z-index: 1;
  background-color: #fff;
}
.relation_parent {
  position: relative;
}
.category_entr i {
  font-size: 18px;
  padding: 0 13px;
}
</style>
