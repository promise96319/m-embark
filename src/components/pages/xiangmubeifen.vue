<template>
<section class="project">
  <navBar></navBar>
  <main class="project-info">
    <!-- 主要分类 -->
    <section class="project-main">
      <van-row gutter="20">
        <van-col v-for="(item, index) in bigCate" :key="index" :class="{fontStyle: item === currentCate || (currentCate === '更多内容' && item === '全部')}"><span @click="getCurrentCate">{{ item }}</span></van-col>
      </van-row>
    </section>

    <section class="project-contain">
        <projectComponent v-for="(item, index) in  projectDataFilter()" :key="index" :imgUrl="item.mainnPicture" :title="item.title" :projectId="item._id"></projectComponent>
    </section>
  </main>
</section>
</template>

<script>
import navBar from '@/components/navBar'
import projectComponent from '@/components/projectComponent'
import { mapMutations } from 'vuex'
import axios from 'axios'
import {
  URL
} from '@/globalConfig.js'

export default {
  data () {
    return {
      bigCate: ['全部', '科研项目', '竞赛指导', 'AI入门'],
      projectData: {},
      hiddenId: [
        'gAJqfPZ773BSWHS66',
        '2JqkZp5u9JY4K7oo2',
        'x74nwXM8KYufgHvMm',
        'XNm7fHrAp9vna7PhL',
        'auXdgg4RfeNYJMKym',
        'hCbp3qpvGvApBgLnS',
        'TGgQPEmn7e83Rbw8N',
        'tEwLFrJRcW7hvzB8y',
        'NEfAvGbK2cnFbrAv5',
        'p78DwGHxQfXZ5esuu',
        'PhoxcXkZpT6X9SRrm',
        'jMTfShKjMvbcroGiz',
        '7cL7sYLZYzDqovcXA',
        'r32DkvoewYzGtgg2K',
        'R8JJGeZgbbn95LMJ3',
        '9AF4rKseFfkaCXoSD',
        'oBRtjEdHwcR4aHyrj',
        'Z3ftqAqnzt6ZSsmqe',
        'cZF3N2cetSdPmioDC',
        '67is6Rts7NvKBAkzj',
        'o2BkLEa6n7RsrrkeD'
      ]
    }
  },
  methods: {
    getCurrentCate (e) {
      this.changeProjectCate(e.target.innerHTML)
    },
    ...mapMutations([
      'changeProjectCate',
      'saveScrollPostion'
    ]),
    /* 去除空白的项目页 */
    hideBlankProject (data) {
      return data.filter((item) => {
                return !this.hiddenId.includes(item._id)
             })
    },
    /* 将获得的数据的分类ID改为中文字体 */
    dataFilter (data) {
        data.forEach(function (item,index) {
        switch (item.categoryId) {
          case 'MdMsWSpc88zJKpthd':
            item.categoryId = '科研项目'
            break
          case 'JMzos6F4576jLXQWW':
            item.categoryId = '竞赛指导'
            break
          case 'YmkjiRnBDiigWKMWX':
            item.categoryId = 'AI入门'
            break
        }
      })
      return data
    },
    /* 过滤项目 */
    projectDataFilter () {
      let newProjectData = [...this.projectData]
      let arr = []
      if (this.currentCate === '更多内容' || this.currentCate === '全部') {
        for (let i = 0; i < newProjectData.length; i++) {
          arr.push(newProjectData[i])
          for (let j = 0; j < arr.length-1; j++) {
            if (newProjectData[i].title === arr[j].title) {
              arr.pop()
            }
          }
        }
      } else {
        arr = newProjectData.filter((item) => {
           return item.categoryId === this.currentCate
        })
      }
      return arr
    },
    /* 记录每个页面的滚动位置 */
    handleEveryPageScrollPosition () {
        let scrollTopDistance = 0
        let flag = true
        if (flag) {
          flag = false
          setTimeout(() => {
            scrollTopDistance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            this.saveScrollPostion(scrollTopDistance)
            flag = true
          }, 16.7)
        }
    }
  },
  computed: {
    currentCate () {
      if (this.$store.state.currentCate) {
        let currentCate = localStorage.getItem('currentCate')
        this.changeProjectCate(currentCate)
      }

      /* 修改当前url地址 */
      /* 并修改当前页面滚动高度 */
      switch (this.$store.state.currentCate) {
        case '科研项目':
            window.history.pushState(null, null, '/project/science')
            document.body.scrollTop = this.$store.state.userScroll.science
            // this.setScrollPostion(this.$store.state.userScroll.science)
            break
        case '竞赛指导':
            window.history.pushState(null, null, '/project/guide')
            document.body.scrollTop = this.$store.state.userScroll.guide
            // this.setScrollPostion(this.$store.state.userScroll.guide)
            break
        case 'AI入门':
            window.history.pushState(null, null, '/project/startai')
            document.body.scrollTop = this.$store.state.userScroll.startai
            // this.setScrollPostion(this.$store.state.userScroll.startai)
            break
        default:
            window.history.pushState(null, null, '/project')
            document.body.scrollTop = this.$store.state.userScroll.total
            // this.setScrollPostion(this.$store.state.userScroll.total)
      }
      return this.$store.state.currentCate
    }
  },
  components: {
    navBar,
    projectComponent
  },
  mounted () {
    window.addEventListener('scroll', this.handleEveryPageScrollPosition, true)

     /* 添加落地页功能 */
     if (this.$route.params.projectCategory) {
       switch (this.$route.params.projectCategory) {
         case 'science':
             this.changeProjectCate('科研项目')
             break
         case 'guide':
             this.changeProjectCate('竞赛指导')
             break
         case 'startai':
             this.changeProjectCate('AI入门')
             break
         default:
             this.changeProjectCate('全部')
       }
     }
      axios.get(URL.allProjects)
      .then((res) => {
        this.projectData = this.dataFilter(this.hideBlankProject(res.data.projects))
      })
      .catch((err) => {
        console.log('can not get the data...')
      })
  },
  destroyed () {
    window.removeEventListener("scroll", this.handleEveryPageScrollPosition, true)
  }
}
</script>

<style scoped>
.fontStyle {
  color: rgba(78, 78, 78, 1);
}

.project {
  height: 100%;
  position: relative;
}

.project-info {
  padding-top: 2.4rem;
  margin-bottom: auto;
  font-size: 0.48rem;
  color: rgba(160, 160, 160, 1);
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
