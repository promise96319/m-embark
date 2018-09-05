<template>
<section class="company">
  <navBar></navBar>
  <main class="company-info">
    <AMap class="map"></AMap>

    <section class="company-contact">
      <p>微信公众号：EmbarkChina</p>
      <p>邮箱：ask@embarkchina.org</p>
      <br>
      <p>地址: 上海市马当路388号SOHO复兴广场D座2楼</p>
    </section>

  </main>

</section>
</template>

<script >
import navBar from '@/components/navBar'
import AMap from '@/components/Map'

export default {
  components: {
    navBar,
    AMap
  }
}
</script>

<style scoped>
.company-info {
  font-family: 'PingFang-Medium';
  padding: 3.7rem 1.2rem 0;
}

.company-contact {
  padding-top: 1.1rem;
  font-size: 0.56rem;
  line-height: 0.8rem;
  color: rgba(160, 160, 160, 1);
}

.company-code {
  margin: 1.6rem auto;
  width: 3.2rem;
  height: 3.2rem;
  padding: 0.33rem;
  background-color: #fff;
}

.company-code>img {
  width: 100%;
  height: 100%;
}
</style>
