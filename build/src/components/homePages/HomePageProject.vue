<template>
<!-- 课程体系 -->
<section class="tutorial">
  <h2 class="tutorial-title">课程体系</h2>

  <section>
    <router-link :to="'/project'" v-for="(item, index) in  tuorials" :key="index" @click.native="changeProjectCate(item.title)">
      <van-row type="flex" class="tutorial-module">
        <van-col span="7"><img :src="item.url" class="tutorial-img" alt="加载失败..." /></van-col>
        <van-col span="17" class="tutorial-info">
          <h4 class="tuorial-item-title">
              {{item.title}}
            </h4>
          <h6 class="tutorial-contain">
              {{item.enTitle1}}
            </h6>
          <h6 class="tutorial-contain">
              {{item.enTitle2}}
            </h6>
        </van-col>
      </van-row>
    </router-link>
  </section>
</section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      tuorials: [{
        url: require('@/assets/images/project/science.png'),
        title: '科研项目',
        enTitle1: '美国名校导师带教 成果保障',
        enTitle2: '理工经社全学科覆盖'
      },
      {
        url: require('@/assets/images/project/competition.png'),
        title: '竞赛指导',
        enTitle1: '美国HiMCM高中生数学建模竞赛',
        enTitle2: '谷歌旗下Kaggle数据科学竞赛'
      },
      {
        url: require('@/assets/images/project/AI.png'),
        title: 'AI入门',
        enTitle1: '专门针对零基础中学生设计',
        enTitle2: '「有方AI云」专属学习平台'
      },
      {
        url: require('@/assets/images/project/add.svg'),
        title: '更多内容'
      }]
    }
  },
  methods: {
    ...mapMutations(['changeProjectCate'])
  }
}
</script>

<style scoped>
/* 课程体系 */

.tutorial {
  padding: 1.6rem 1.2rem 0 1.2rem;
  position: relative;
}

.tutorial-module {
  margin-top: 0.4rem;
  padding: 0.56rem 1rem 0.36rem;
  background-color: #fff;
}

.tutorial a:nth-child(4) .tutorial-module .tutorial-info{
  padding-top: 0.8rem;
}

h2.tutorial-title {
  font-family: 'SourceHanSansCN-Bold';
  line-height: 2.4rem;
  font-size: 0.96rem;
  letter-spacing: 0.09rem;
}

.tutorial-img {
  width: 3.2rem;
}

.tutorial-info {
  text-align: center;
  padding-top: 0.1rem;
  font-family: 'SourceHanSansCN-Normal';
}

.tutorial-item-title {
  font-size: 0.8rem;
  letter-spacing: 0.008rem;
}

.tutorial-contain {
  line-height: 0.6rem;
  font-size: 0.5rem;
  margin-top: 0.2rem;
  color: rgba(179,179,179,1);
}
</style>
