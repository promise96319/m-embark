<template>
<section class="achievement">
  <navBar></navBar>
  <main class="achievement-info">
    <h2>学员成就</h2>
    <section class="achievement-example" v-for="(item, index) in achievements" :key="index">
      <img :src="item.imgUrl" class="achievement-img" alt="加载失败...">
      <div class="achievement-contain">
        <div class="achievement-title">{{ item.title }}</div>
        <p v-for="(paragraph, index2) in item.contains" :key="index2">{{ paragraph }}</p>
      </div>
    </section>
  </main>
</section>
</template>

<script>
import navBar from '@/components/navBar'
export default {
  data () {
    return {
      achievements: [{
        imgUrl: require('@/assets/images/achievement/美国本科顶尖名校录取@2x.jpg'),
        title: '美国本科顶尖名校录取',
        contains: [
            '2018年，在美本的录取率屡破新低的严峻申请形势下，有方首届学员获得了高达85%的美本前35名录取率，而同期美本前35名大学录取率不到20%。',
            '其中，有方优秀学员M同学更是同时拿到了哥伦比亚大学和宾夕法尼亚大学两所常春藤院校的录取通知。有方首届学员的科研课题覆盖计算机、经济、金融、生命科学、电子工程、机械工程、航天工程等多个专业，均在英文学术期刊上以第一作者发表论文。'
          ]
      },
      {
        imgUrl: require('@/assets/images/achievement/国际竞赛奖项@2x.jpg'),
        title: '国际竞赛奖项',
        contains: [
          '2018年第20届HiMCM美国高中数学建模竞赛中，经过有方冠军营训练的队伍击败了其他来自球256所学校的九百多支队伍，获得了全球杰出奖。',
          '2017年，有方学子L同学通过有方科研项目，获得了被称为「青少年诺比尔奖」的丘成桐奖球铜奖。',
          '2017年，有方学子Z同学从零基础开始学习AI，通过参加有方探究项目，在Kaggle科研项目进入全球4%。'
        ]
      },
      {
        imgUrl: require('@/assets/images/achievement/学术期刊论文发表@2x.jpg'),
        title: '学术期刊论文发表',
        contains: [
          '2018年，在美本的录取率屡破新低的严峻申请形势下，有方首届学员获得了高达85%的美前35名录取率，而同期美本前35名大学录取率不到20%。',
          '其中，有方优秀学员M同学更是同时拿到了哥伦比亚大学和宾夕法尼亚大学两所常春藤院校录取通知。有方首届学员的科研课题覆盖计算机、经济、金融、生命科学、电子工程、机械程、航天工程等多个专业，均在英文学术期刊上以第一作者发表论文。'
        ]
      },
      {
        imgUrl: require('@/assets/images/achievement/美国顶尖暑期项目录取@2x.jpg'),
        title: '美国顶尖暑期项目录取',
        contains: [
          '有方两位优秀学员分别录取顶尖暑期项目 MIT Prime 和 MIT LaunchX。', 'MIT Primes是一项为精英美高学生打造的顶尖研究型数学课程：项目为期一年，参与到这个项目中的学可大大提高自己申请MIT的竞争力，并相当于拿到了Ivy League的入场券。',
          'MIT Launch X 是一项面向世界各地高中生的创业教育课程：课程为期四周，依托MIT 独优势，为学生提供顶尖创业资源，90%的MIT Launch参与者在高中时就已经尝试了资助创业在这其中有50%公司在 Launch 项目结束后一年仍运转良好。', '目前共有两位学员分别在方导师的指导下，利用人工智能和机器学习，采用跨学科的交叉科研方法，完成了材料科学环境科学的科研课题。'
        ]
      }]
    }
  },
  components: {
    navBar
  }
}
</script>

<style scoped>
/* 学生成就 */

.achievement-info {
  padding: 4.7rem 0 2.3rem;
}

h2 {
  font-family: 'SourceHanSansCN-Medium';
  letter-spacing: 0.012rem;
  padding-left: 1.2rem;
  font-size: 1.3rem;
}

.achievement-example {
  padding-top: 1.9rem;
}

.achievement-img {
  width: 100%;
  height: 19.2rem;
}

.achievement-contain {
  padding: 0.4rem 1.2rem;
  position: relative;
}

.achievement-title {
  position: absolute;
  top: -5rem;
  width: 12.6rem;
  text-align: center;
  font-family: 'SourceHanSansCN-Bold';
  font-size: 1.44rem;
  color: #fff;
  /* margin: -5rem 0 2rem; */
  letter-spacing: 0.013rem;
}

.achievement-contain>p {
  font-family: 'SourceHanSansCN-Regular';
  font-size: 0.56rem;
  letter-spacing: 0.005rem;
  line-height: 0.9rem;
  margin-top: 0.6rem;
  text-indent: 1rem;
  text-align: justify;
}
</style>
