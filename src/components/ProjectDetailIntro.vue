<template>
<section class="projectDetailIntro">
  <ProjectDetailNavBar class="projectDetailIntroNav" :title="detailData.title"></ProjectDetailNavBar>
  <main v-html="detailData.detail" class="detail"></main>
</section>
</template>

<script>
import ProjectDetailNavBar from '@/components/ProjectDetailNavBar'
import {
  HTMLSIZE, URL
} from '@/globalConfig.js'

import axios from 'axios'
import { Toast } from 'vant'

export default {
  data () {
    return {
      tags: {},
      projectId: '',
      detailData: {}
    }
  },
  methods: {
    reSize () {
      /* px转化rem */
      [].map.call(this.tags, (item) => {
        for (let i = 0; i < item.style.length; i++) {
          if (/([p][x])$/.test(item.style[item.style[i]])) {
            /* 控制px与rem 的比例关系 */
            item.style[item.style[i]] = parseInt(item.style[item.style[i]]) / HTMLSIZE + 'rem'
          }
        }
      })
    }
  },
  mounted () {
    /* 窗口适配 */
    window.addEventListener('resize', this.reSize)
    /* 保存id */
    if (this.$route.params.projectId) {
      localStorage.setItem('projectId', this.$route.params.projectId)
      this.projectId = this.$route.params.projectId
    } else {
      this.projectId = localStorage.getItem('projectId')
    }

    Toast.loading({
      duration: 0,
      mask: true,
      forbidClick: true,
      loadingType: 'spinner',
      message: '加载中...'
    })

    axios.get(URL.oneProject + this.projectId)
         .then((res) => {
           this.detailData = res.data.value
         })
         .then(() => {
           this.tags = document.querySelector('.detail').getElementsByTagName('*');
           this.reSize()
         })
         .then(() => {
           setTimeout(()=> {
             Toast.clear()
           }, 500)
         })
         .catch((err) => {
           console.log(err);
         })
  },
  components: {
    ProjectDetailNavBar
  },
  destroyed () {
    Toast.clear()
  }
}
</script>

<style>
.projectDetailIntro .detail {
  width: 15rem;
  padding: 3.4rem 1.2rem 0;
}

.projectDetailIntro .detail h2 {
  font-size: 1rem;
}

.projectDetailIntro .detail h3 {
  font-size: 0.85rem;
}

.projectDetailIntro .detail p {
  font-size: 0.58rem;
  /* text-align: justify; */
  word-wrap: break-word;
}

.projectDetailIntro .detail img,
.projectDetailIntro .detail svg {
  width: 100%!important;
}
</style>
