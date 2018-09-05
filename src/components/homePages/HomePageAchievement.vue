<template>
<section class="achievement">
  <router-link :to="'/achievement'">
    <h2 class="achievement-title">学员成果</h2>
    <figure class="achievement-contain">
      <img v-lazy="learningImg" alt="加载失败...">
    </figure>
  </router-link>
</section>
</template>

<script>
export default {
  data () {
    return {
      learningImg: require('@/assets/images/member/13.jpg')
    }
  }
}
</script>

<style scoped>
/* 学习成果 */

.achievement {
  width: 15rem;
  padding-top: 1.6rem;
}

h2.achievement-title {
  font-family: 'SourceHanSansCN-Bold';
  line-height: 2.4rem;
  font-size: 0.96rem;
  letter-spacing: 0.09rem;
}

.achievement-title {
  margin-left: 1.2rem;
}

.achievement-contain {
  margin: 1.2rem 0 0;
  width: 15rem;
  font-size: 0;
}

.achievement-contain img {
  width: 100%;
}
</style>
