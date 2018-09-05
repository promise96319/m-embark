<template>
<div class="project-component">
  <!-- <router-link :to="{ name: 'ProjectDetailIntro', params: {projectId: projectId} }"> -->
  <router-link :to="'/project/detail/' + projectId">
    <img v-lazy="imgUrl" class="project-img">
    <div class="project-info">
      <h3 class="project-title"> {{ title }} </h3>
    </div>
  </router-link>
</div>
</template>

<script>
export default {
  props: ['imgUrl', 'title', 'projectId']
}
</script>

<style scoped>
.project-component {
  padding-bottom: 0.5rem;
  margin-top: 0.6rem;
  background-color: #fff;
  box-shadow: 0px 2px 2px 2px #eee;
}

.project-img {
  width: 100%;
  height: 6.4rem;
}

.project-info {
  padding: 0.1rem 0.5rem;
  line-height: 0.84rem;
}

.project-title {
  font-family: 'SourceHanSansCN-Medium';
  color: rgba(78, 78, 78, 1);
  font-size: 0.6rem;
}

.project-num {
  font-family: 'SourceHanSansCN-Normal';
  color: rgba(160, 160, 160, 1);
}
</style>
