<template>
<div id="container" class="mymap">
</div>
</template>

<script>
export default {
  mounted () {
    this.loadmap()
  },
  methods: {
    loadmap () {
      const map = new AMap.Map('container', {
        zoom: 16,
        center: [121.474443, 31.215094],
      })
      AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
        const marker = new SimpleMarker({
          iconLabel: 'A',
          iconStyle: 'red',
          map: map,
          window: {
            position: 'center',
            content: '地址: 上海市马当路388号SOHO复兴广场D座2楼'
          }
        })
      })
    }
  }
}
</script>

<style scoped>
.mymap {
  /* border: 3px solid rgba(74, 144, 226, .1) */
  box-shadow: 2px 0px 2px rgba(0, 0, 0, .1), -2px 0px 2px rgba(0, 0, 0, .1), 0px 2px 2px rgba(0, 0, 0, .1), 0px -2px 2px rgba(0, 0, 0, .1);
  font-size: 20px;
  border-radius: 5px;
  color: #fff;
  width: 100%;
  height: 13rem;
}
</style>
