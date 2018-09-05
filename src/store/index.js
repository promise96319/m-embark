import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const hiddenId = [
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

const state = {
  /* 菜单栏是否显示 */
  isShow: false,

  // 存储所有的项目数据
  data: [],
  /* 记录用户在项目列表页每个页面的位置 */
  userScroll: {
    'total': 0,
    'science': 0,
    'guide': 0,
    'startai': 0
  }
}

const mutations = {
  // 保存请求来的数据，并加数据中的分类的ID转化成英文分类（hash值也是这个）
  saveTotalProjects (state, data) {
    data.forEach(function (item,index) {
    switch (item.categoryId) {
      case 'MdMsWSpc88zJKpthd':
        item.categoryId = 'science'
        break
      case 'JMzos6F4576jLXQWW':
        item.categoryId = 'guide'
        break
      case 'YmkjiRnBDiigWKMWX':
        item.categoryId = 'startai'
        break
      default:
        break
      }
    })
    state.data = data
  },
  handleMenuShow (state) {
    state.isShow = !state.isShow
  },
  saveScrollPostion (state, data) {
    state.userScroll[data.currentCate] = data.scrollTop
  }
}

const getters = {
  getProjects (state) {
    return (currentCate) => {
      return (state.data.filter((item1) => {
                return !hiddenId.includes(item1._id)
             })).filter((item2) => {
               if (currentCate === 'total') {
                 return true
               } else {
                 return item2.categoryId === currentCate
               }
             })
      }
    }
  }

export default new Vuex.Store({
  state,
  mutations,
  getters
})
