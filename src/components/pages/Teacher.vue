<template>
<section class="teacher">
  <navBar></navBar>
  <!-- 师资力量详情介绍 -->
  <main class="teacher-detial">
    <h2>师资力量</h2>
    <!-- 人物介绍 -->
    <section class="teacher-info" v-for="(person, index) in teachers" :key="index" :id="person.id">
      <img :src="person.imgUrl" alt="加载失败...">
      <div class="teacher-name">
        <p>{{ person.name }}</p>
        <p>{{ person.job }}</p>
      </div>

      <div class="teacher-school">
        <p v-for="(school, index1) in person.school" :key="index1">{{ school }}</p>
      </div>

      <div class="teacher-achievement">
        <p v-for="(achievement, index2) in person.achievement" :key="index2">{{ achievement }}</p>
      </div>

      <div class="teacher-experience">
        <p v-for="(experience, index3) in person.experience" :key="index3">{{ experience }}</p>
      </div>
    </section>
  </main>
</section>
</template>

<script>
import navBar from '@/components/navBar'

export default {
  data() {
    return {
      teachers: [
      //   {
      //   id: 'chen',
      //   imgUrl: require('@/assets/images/teacher/chen.jpg'),
      //   name: 'Albert Chen',
      //   job: '海外学术总监',
      //   school: ['加州大学洛杉矶(UCLA)',
      //     '博士候选人'
      //   ],
      //   achievement: ['Micro-Electro-Mechanical-System(MEMS)微机电系统专业', 'SCI刊Applied Physics Letters审稿人(美国物理联合会AIP最核心期刊,学术联系广泛)拥有大量国顶尖名校PhD资源'],
      //   experience: [
      //     '南京大学', '凝聚态物理专业学士 '
      //   ]
      // },
      {
        id: 'wu',
        imgUrl: require('@/assets/images/teacher/wu.jpg'),
        name: '吴蔚闳博士',
        job: '学术总监',
        school: ['加州大学、华东理工大学',
          '博士候选人'
        ],
        achievement: ['发表SCI论文16篇，其中第一作者论文6篇', '科研方向：将机器学习、大数分析、计算机仿真模拟运用于计算化学领域'],
        experience: [
          '新东方教育科技集团物理教师', '五年物理学AP教学经验'
        ]
      },
      {
        id: 'li',
        imgUrl: require('@/assets/images/teacher/li.jpg'),
        name: 'Evan Li',
        job: '学术顾问',
        school: ['治慧健康-基因健康大数据公司',
          '- 创始人兼CTO'
        ],
        achievement: ['卡内基梅隆大学(CMU)', '- 工程硕士云计算方向'],
        experience: [
          '清华大学', '- 计算机科学与技术专业学士', '- 完成姚期智计算机实验班所有机器学习程'
        ]
      }
    ],
      name: 'Teacher'
    }
  },
  components: {
    navBar
  }
}
</script>

<style scoped>
/* .teacher {
  padding-bottom: 2.8rem;
} */

.teacher-detial {
  padding: 4.1rem 1.7rem 2rem;
}

h2 {
  font-family: 'SourceHanSansCN-Medium';
  font-size: 1.3rem;
  letter-spacing: 0.012rem;
}

.teacher-info {
  padding-top: 1.7rem;
  font-size: 0.59rem;
  line-height: 0.88rem;
  letter-spacing: 0;
  font-family: 'SourceHanSansCN-Normal';
}

.teacher-info>img {
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 1.6rem;
}

.teacher-name p:first-child {
  font-family: 'PingFang-Bold';
  font-size: 0.96rem;
  line-height: 1.3rem;
}

.teacher-name p:last-child {
  font-size: 0.56rem;
  color: rgba(118, 118, 118, 1);
}

.teacher-info>div {
  padding-top: 0.8rem;
}

/* .return-home {
  margin: 1.6rem auto 0;
  width: 7.2rem;
  height: 2rem;
  border-radius: 4rem;
  background-color: rgba(74, 144, 226, 1);
  text-align: center;
  box-shadow: 0 0.16rem 0.4rem 0 rgba(74, 144, 226, 0.33);
}

.return-home a {
  font-family: 'SourceHanSansCN-Medium';
  font-size: 0.64rem;
  line-height: 2rem;
  color: #fff;
  letter-spacing: 0.006rem;
} */
</style>
