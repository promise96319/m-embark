<template>
<section class="project">
  <navBar></navBar>
  <main class="project-info">
    <!-- 主要分类 -->
    <section class="project-main">
      <van-row gutter="20">
        <!-- 确定当前分类 -->
        <van-col v-for="(item, index) in bigCate" :key="index" :class="{fontStyle: index === 0}">
          <router-link :to="item.path">
            <span>{{ item.name }}</span>
          </router-link>
        </van-col>
      </van-row>
    </section>

    <section class="project-contain">
        <projectComponent v-for="(item, index) in  projectData" :key="index" :imgUrl="item.mainnPicture" :title="item.title" :projectId="item._id"></projectComponent>
    </section>
  </main>

</section>
</template>

<script>
import navBar from '@/components/navBar'
import projectComponent from '@/components/projectComponent'
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
import axios from 'axios'
import {
  URL
} from '@/globalConfig.js'

export default {
  data () {
    return {
      bigCate: [
        {
          name: '全部',
          path: '/project'
        },
        {
          name: '科研项目',
          path: '/project/science'
        },
        {
          name: '竞赛指导',
          path: '/project/guide'
        },
        {
          name: 'AI入门',
          path: '/project/startai'
        }
      ],
      projectData: {},
    }
  },
  methods: {
    ...mapMutations([
      'saveTotalProjects'
    ])
  },
  computed: {
    ...mapGetters([
      'getProjects'
    ])
  },
  components: {
    navBar,
    projectComponent
  },
  mounted () {
    // 请求或者从store里得到数据
    if (!this.$store.getters.getProjects('total').length){
      axios.get(URL.allProjects)
      .then((res) => {
        this.saveTotalProjects(res.data.projects)
      }).then(() => {
        this.projectData = this.$store.getters.getProjects('total')
      })
      .catch((err) => {
        console.log('can not get the data...')
      })
    } else {
      this.projectData = this.$store.getters.getProjects('total')
    }
  }
}
</script>

<style scoped>
.project {
  height: 100%;
  position: relative;
}

.project-info {
  padding-top: 2.4rem;
  margin-bottom: auto;
  font-size: 0.48rem;
}

.project-info span {
  color: rgba(160, 160, 160, 1);
}

.fontStyle span {
  color: rgba(78, 78, 78, 1);
}

.project-main {
  position: fixed;
  font-family: 'SourceHanSansCN-Bold';
  width: 15rem;
  height: 1.8rem;
  padding: 0 1.2rem;
  line-height: 1.8rem;
  font-size: 0.6rem;
  background-color: #fff;
  z-index: 99;
  border-bottom: 1px solid #eee;
}

.project-contain {
  margin-top: 2.4rem;
  padding: 0 1.2rem;
}
</style>
