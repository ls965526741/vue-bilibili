<template>
  <div id="app">
    <loading v-show="LOADING"></loading>
    <div v-if="!this.$route.meta.keepalive">
      <router-view />
    </div>
    <div v-else>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <tab-bar v-if="this.$route.meta.isTabbar" />
  </div>
</template>
<script>
import Loading from './components/common/loading/Loading.vue'
import TabBar from '@/components/Tabbar'
import { mapState } from 'vuex'
export default {
  components: {
    Loading,
    TabBar
  },
  computed: {
    ...mapState(['LOADING'])
  }
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  box-sizing: border-box;
}
#app {
  height: 100%;
}
</style>
