<template>
<div id="app">
    <router-view/>
  <Consult></Consult>
</div>
</template>

<script>
import Consult from '@/components/Consult.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    Consult
  },
  methods: {
    ...mapMutations([
      'saveScrollPostion'
    ])
  },
  watch: {
    $route (to, from) {
      let scrollTopDistance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

      switch (from.path) {
        case '/project':
         this.saveScrollPostion({
           currentCate: 'total',
           scrollTop: scrollTopDistance
         })
         break
        case '/project/science':
         this.saveScrollPostion({
           currentCate: 'science',
           scrollTop: scrollTopDistance
         })
         break
        case '/project/guide':
         this.saveScrollPostion({
           currentCate: 'guide',
           scrollTop: scrollTopDistance
         })
         break
        case '/project/startai':
         this.saveScrollPostion({
           currentCate: 'startai',
           scrollTop: scrollTopDistance
         })
         break
        default:
         break
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'PingFang-Regular', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(78, 78, 78, 1);
  width: 15rem;
  margin: 0 auto;
}

html,
body {
  height: 100%;
  background-color: rgb(245, 245, 245);
}
</style>
