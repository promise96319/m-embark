import Vue from 'vue'
import Vuex from 'vuex'

// import projectCate from '@/store/modules/projectCate.js'
// import projectDetail from '@/store/modules/projectDetail.js'

Vue.use(Vuex)

const state = {
  /* 当前分类项目 */
  currentCate: '全部',
  /* 菜单栏是否显示 */
  isShow: false,
  /* 记录用户在项目列表页每个页面的位置 */
  userScroll: {
    'total': 0,
    'science': 0,
    'guide': 0,
    'startai': 0
  }
}

const mutations = {
  changeProjectCate (state, projectCate) {
    state.currentCate = projectCate
    localStorage.setItem('currentCate', state.currentCate)
  },
  handleMenuShow (state) {
    state.isShow = !state.isShow
  },
  saveScrollPostion (state, scrollTop) {
    switch (state.currentCate) {
      case '全部' || '更多内容':
        state.userScroll.total = scrollTop
        break
      case '科研项目' :
        state.userScroll.science = scrollTop
        break
      case '竞赛指导' :
        state.userScroll.guide = scrollTop
        break
      case 'AI入门' :
        state.userScroll.startai = scrollTop
        break
    }
  }
}

export default new Vuex.Store({
  state,
  mutations
})
