<template lang="html">
  <!-- 头部导航栏 -->
  <header>
    <van-row v-show="!isShow" type="flex" justify="space-between" class="navBar" v-bind:class="{navStyle: isNavStyle}">
      <van-col span="10">
        <router-link :to="'/'" class="embark-logo">有方教育</router-link>
      </van-col>
      <van-col span="2" class="navBar-menu">
        <van-icon :name="iconName || 'wap-nav'" @click="handleMenuShow()"></van-icon>
      </van-col>
    </van-row>

    <!-- 菜单页面 -->
    <van-popup v-model="isShow" position="top" :overlay-style="overlayStyle" :close-on-click-overlay="false" class="van-popup">
      <Menu></Menu>
    </van-popup>
  </header>
</template>

<script>
import Menu from '@/components/Menu'
import { mapMutations } from 'vuex'

export default {
  props: ['isNavStyle', 'iconName'],
  data () {
    return {
      overlayStyle: {
        backgroundColor: 'transparent'
      }
    }
  },
  methods: {
    ...mapMutations(['handleMenuShow'])
  },
  computed: {
    isShow: {
      get () {
        return this.$store.state.isShow
      },
      /* v-model绑定需设置set */
      set () {}
    }
  },
  components: {
    Menu
  }
}
</script>

<style scoped>
/* 头部导航栏 */

.navBar {
  position: fixed;
  height: 2.4rem;
  width: 15rem;
  padding: 0 1.2rem;
  font-size: 0.96rem;
  line-height: 2.4rem;
  color: #fff;
  background-color: rgba(74, 144, 226, .97);
  z-index: 999;
}

.navBar a {
  color: #fff;
}

.navStyle {
  color: #fff;
  background-color: transparent;
}

.navStyle a {
  color: #fff;
}

.embark-logo {
  font-family: 'PingFang-Bold';
  letter-spacing: 0.09rem;
}

.navBar-menu {
  line-height: 2.7rem;
}

.van-popup {
  opacity: 1;
  background-color: transparent;
}
</style>
