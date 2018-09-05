import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/HomePage'
import Teacher from '@/components/Pages/Teacher'
import Achievement from '@/components/Pages/Achievement'
import Company from '@/components/Pages/Company'
import Project from '@/components/Pages/Project'
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
    path: '/project/:projectCategory',
    name: 'Project',
    component: Project
  },
  {
    path: '/project/detail/:projectId',
    name: 'ProjectDetailIntro',
    component: ProjectDetailIntro
  }
  ],
  mode: 'history',
  scrollBehavior (to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
