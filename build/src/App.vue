<template>
<div id="app">
  <router-view/>
  <Consult></Consult>
</div>
</template>

<script>
import Consult from '@/components/Consult.vue'
export default {
  name: 'App',
  components: {
    Consult
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
