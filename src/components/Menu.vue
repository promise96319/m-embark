<template>
<aside class="menu">
  <!-- 头部导航栏 -->
  <header class="navBar">
    <van-row type="flex" justify="space-between">
      <van-col span="10" class="navBar-logo">
        <router-link :to="'/'">
          <div @click="selectEvent">有方教育</div>
        </router-link>
      </van-col>
      <van-col span="2" class="navBar-menu">
        <img :src="menuX" @click="selectEvent" alt="x">
      </van-col>
    </van-row>
  </header>

  <section class="category">

    <router-link :to="'/'">
      <div @click="selectEvent">首页</div>
    </router-link>

    <router-link :to="'/project/science'">
      <div @click="selectEvent">科研项目</div>
    </router-link>

    <router-link :to="'/project/guide'">
      <div @click="selectEvent">竞赛指导</div>
    </router-link>

    <router-link :to="'/project/startai'">
      <div @click="selectEvent">AI入门</div>
    </router-link>

    <router-link :to="'/company'">
      <div @click="selectEvent">企业介绍 </div>
    </router-link>
  </section>
</aside>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['setHeight'],
  data() {
    return {
      menuX: require('@/assets/images/x.svg'),
    }
  },
  methods: {
    selectEvent(e) {
      this.handleMenuShow()
    },
    ...mapMutations(['handleMenuShow']),
    handleMenuFullPage() {
      let htmlHeight = document.body.clientHeight || document.documentElement.clientHeight
      let popupElement = document.querySelector('.menu')
      if (popupElement) {
        popupElement.style.height = htmlHeight + 'px'
      }
    }
  },
  mounted() {
    this.handleMenuFullPage()
    window.addEventListener('scroll', this.handleMenuFullPage)
  }
}
</script>

<style scoped>
/* 头部导航栏 */

.menu {
  /* opacity: 0.9; */
  background-color: rgba(255, 255, 255, 0.9);
  margin: 0 auto;
  height: 100%;
  width: 15rem;
  font-size: 0.84rem;
  position: relative;
  z-index: 99999;
}

.navBar {
  height: 2.4rem;
  width: 15rem;
  padding: 0 1.2rem;
  font-size: 0.96rem;
  line-height: 2.4rem;
  color: rgba(78, 78, 78, 1);
  z-index: 999;
}

.navBar a {
  color: rgba(78, 78, 78, 1);
}

.navBar img {
  width: 0.8rem;
}

.navBar-logo {
  font-family: 'PingFang-Bold';
  letter-spacing: 0.09rem;
}

.navBar-menu {
  line-height: 2.7rem;
}

.category {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
}

.category div {
  height: 2.8rem;
  font-size: 0.84rem;
  font-weight: 500;
  line-height: 2.8rem;
}
</style>
