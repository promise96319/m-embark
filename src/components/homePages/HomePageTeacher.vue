<template>
<section class="teacher">
  <router-link :to="'/teacher'">
    <h2 class="teacher-title">师资力量</h2>

    <van-row>
      <router-link :to="'/teacher#' + person.id" v-for="(person, index) in teachers" :key="index">
        <van-col span="12" class="teacher-info">
          <img :src="person.imgUrl" class="teacher-img" alt="加载失败...">
          <p class="teacher-name">{{ person.name }}</p>
          <p class="teacher-job">{{ person.job }}</p>
        </van-col>
      </router-link>
    </van-row>
  </router-link>
</section>
</template>

<script>
export default {
  data () {
    return {
      teachers: [
      //   {
      //   id: 'chen',
      //   imgUrl: require('@/assets/images/teacher/chen.jpg'),
      //   name: 'Albert Chen',
      //   job: '海外学术总监'
      // },
      {
        id: 'wu',
        imgUrl: require('@/assets/images/teacher/wu.jpg'),
        name: '吴蔚闳博士',
        job: '学术总监'
      },
      {
        id: 'li',
        imgUrl: require('@/assets/images/teacher/li.jpg'),
        name: 'Evan Li',
        job: '学术顾问'
      }]
    }
  }
}
</script>

<style scoped>
/* 师资力量 */

.teacher {
  padding: 1.6rem 1.2rem 0 1.2rem;
  color: rgba(78, 78, 78, 1);
  font-family: 'PingFang-Regular';
}

h2.teacher-title {
  font-family: 'SourceHanSansCN-Bold';
  line-height: 2.4rem;
  font-size: 0.96rem;
  letter-spacing: 0.09rem;
}

.teacher-info {
  text-align: center;
  padding-top: 1.4rem;
  letter-spacing: 0;
}

.teacher-img {
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
}

.teacher-name {
  font-family: 'PingFang-Bold';
  font-size: 0.64rem;
  line-height: 0.88rem;
}

.teacher-job {
  font-size: 0.48rem;
  line-height: 0.68rem;
  color: rgba(118, 118, 118, 1);
}
</style>
