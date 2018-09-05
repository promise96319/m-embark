import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js'

import HomePage from '@/components/pages/HomePage'
import Teacher from '@/components/Pages/Teacher'
import Achievement from '@/components/Pages/Achievement'
import Company from '@/components/Pages/Company'
import Project from '@/components/Pages/Project'
import Science from '@/components/Pages/Science'
import Guide from '@/components/Pages/Guide'
import Startai from '@/components/Pages/Startai'
import ProjectDetailIntro from '@/components/ProjectDetailIntro'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: Teacher
  },
  {
    path: '/achievement',
    name: 'Achievement',
    component: Achievement
  },
  {
    path: '/company',
    name: 'Company',
    component: Company
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/project/science',
    name: 'Science',
    component: Science
  },
  {
    path: '/project/guide',
    name: 'Guide',
    component: Guide
  },
  {
    path: '/project/startai',
    name: 'Startai',
    component: Startai
  },
  {
    path: '/project/detail/:projectId',
    name: 'ProjectDetailIntro',
    component: ProjectDetailIntro
  }
  ],
  mode: 'history',
  scrollBehavior (to, from, savePosition) {
    switch (to.path) {
      case '/project':
          return {
            x: 0,
            y: store.state.userScroll.total
          }
      case '/project/science':
      return {
        x: 0,
        y: store.state.userScroll.science
      }
      case '/project/guide':
      return {
        x: 0,
        y: store.state.userScroll.guide
      }
      case '/project/startai':
      return {
        x: 0,
        y: store.state.userScroll.startai
      }
      default:
      if (savePosition) {
        return savePosition
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    }
  }
})
