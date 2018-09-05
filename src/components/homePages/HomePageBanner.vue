<template>
  <section class="carousel">
    <van-swipe :autoplay="3000" :duration="300">
      <van-swipe-item v-for="(item, index) in bannerImg" :key="index">
        <router-link :to="{ name: transId(item.routePath).name, params: {projectId: transId(item.routePath).id }}">
          <img v-lazy="item.mobile_picture" alt="加载失败...">
        </router-link>
      </van-swipe-item>
    </van-swipe>
    <img :src="plusImg" class="plus-img">
  </section>
</template>

<script>
import axios from 'axios'
import { URL } from '@/globalConfig.js'

export default {
  data () {
    return {
      plusImg: require('@/assets/images/plus.png'),
      bannerImg: []
    }
  },
  methods: {
    transId (urlPath) {
      let tempUrl = urlPath.split('/')
      if (tempUrl[0] === 'projectList' || tempUrl[0] === 'categoryProject') {
        return {
          name: 'Project',
          id: ''
        }
      } else if (tempUrl[0] === 'projectDetail'){
        return {
          name: 'ProjectDetailIntro',
          id: tempUrl[1]
        }
      } else {
        return {
          name: '',
          id: ''
        }
      }
    }
  },
  mounted () {
    axios.get(URL.banners)
      .then((res) => {
        this.bannerImg = res.data.value.reverse()
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
</script>

<style scoped>
/* 轮播图 */

.carousel {
  width: 100%;
  height: 9.7rem;
  position: relative;
}

.carousel >>> .van-swipe__indicators {
  bottom: .6rem;
}

.carousel img {
  width: 100%;
  height: 9.7rem;
}

.carousel .plus-img {
  position: absolute;
  width: 4.4rem;
  height: 5.2rem;
  bottom: -4rem;
  right: 1.3rem;
}
</style>
