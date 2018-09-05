<template>
<main class="HomePage">
  <!-- 头部导航栏 -->
  <navBar :isNavStyle="isNavStyle" :iconName="'wap-nav'"></navBar>

  <!-- 轮播图 -->
  <HomePageBanner></HomePageBanner>

  <!-- 课程体系 -->
  <HomePageProject></HomePageProject>

  <!-- 关于我们 -->
  <HomePageAbout></HomePageAbout>

  <!-- 学生成果 -->
  <HomePageAchievement></HomePageAchievement>

  <!-- 师资力量 -->
  <HomePageTeacher></HomePageTeacher>

</main>
</template>

<script>
import NavBar from '@/components/NavBar'
import HomePageBanner from '@/components/homePages/HomePageBanner'
import HomePageAbout from '@/components/homePages/HomePageAbout'
import HomePageProject from '@/components/homePages/HomePageProject'
import HomePageAchievement from '@/components/homePages/HomePageAchievement'
import HomePageTeacher from '@/components/homePages/HomePageTeacher'

export default {
  data () {
    return {
      isNavStyle: true
    }
  },
  methods: {
    handleScroll () {
      /* 隔一定时间再执行 */
      let flag = true
      if (flag) {
        flag = false
        setTimeout(()=>{
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
          // this.$emit('testy')
          if (scrollTop > htmlWidth / 15 * 0.6) {
            this.isNavStyle = false
          } else {
            this.isNavStyle = true
          }
          flag = true
        }, 16.7)
      }
    }
  },
  components: {
    NavBar,
    HomePageBanner,
    HomePageAbout,
    HomePageProject,
    HomePageAchievement,
    HomePageTeacher
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
</style>
