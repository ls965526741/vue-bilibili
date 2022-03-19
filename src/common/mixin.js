// 混入的文件
import { debounce } from './utils'
import BackTop from 'components/content/backTop/BackTop.vue'
export const itemListerMixin = {
  data() {
    return {
      itemImageLister: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100)
    if (this.$route.path.indexOf('/im9p4u')) {
      this.itemImageLister = () => {
        this.newRefresh()
      }
    }
    this.$bus.$on('goodsImgLoad', this.itemImageLister)
  }
}
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    pageBackTop() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    listernShowBackTop(pos) {
      this.isShowBackTop = -pos.y > 1000
    }
  }
}
