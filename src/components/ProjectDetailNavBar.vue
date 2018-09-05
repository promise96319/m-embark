<template>
<header>
  <van-row class="projectNav" type="flex" justify="center">
    <div @click="handleClickLeft" class="arrow-left">
      <van-icon name="arrow-left"></van-icon>
    </div>
    <van-col span="20" class="project-title">
      {{ title }}
    </van-col>
  </van-row>
</header>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    handleClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.projectNav {
  font-family: 'PingFang-Medium';
  top: 0;
  position: fixed;
  height: 2.4rem;
  width: 15rem;
  font-size: 0.96rem;
  line-height: 2.4rem;
  text-align: center;
  color: #fff;
  background-color: rgba(74, 144, 226, .97);
  z-index: 999;
}

.arrow-left {
  padding-left: 0;
  font-size: 0.7rem;
  width: 0;
}

.projectNav>>>.van-icon {
  position: absolute;
  left: 0.2rem;
  top: 0.86rem;
  font-size: 0.65rem;
}

.project-title {
  font-size: 0.8rem;
  width: 12.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
