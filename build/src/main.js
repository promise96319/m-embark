import Vue from 'vue'
import App from './App'
import router from './router'
import { Row, Col, Icon, Swipe, SwipeItem, Lazyload, Panel, Popup, Search, List, Field, Button } from 'vant'
import loadingImg from '@/assets/images/loading.svg'
import '@/assets/css/reset.css'
import store from '@/store/index.js'

Vue.use(router).use(Row).use(Col).use(Icon).use(Swipe).use(SwipeItem).use(Lazyload, {loading: loadingImg}).use(Panel).use(Popup).use(Search).use(List).use(Field).use(Button)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
