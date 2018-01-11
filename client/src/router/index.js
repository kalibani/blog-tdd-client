import Vue from 'vue'
import Router from 'vue-router'
import swal from 'sweetalert'
import Blog from '@/components/Blog'
import Blogdetail from '@/components/Blogdetail'
import login from '@/components/login'
import admin from '@/components/admin'
import add from '@/components/add'
import edit from '@/components/edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token')
        if (token) {
          next()
        } else {
          swal({
            title: 'Ooops',
            text: `You don't Have Access! `,
            icon: 'error',
            button: 'OK'
          })
          next('/')
        }
      }
    },
    {
      path: '/:id',
      name: 'Blogdetail',
      component: Blogdetail,
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token')
        if (token) {
          next('/admin')
        } else {
          next()
        }
      }
    },
    {
      path: '/article/add',
      name: 'add',
      component: add
    },
    {
      path: '/article/edit',
      name: 'edit',
      component: edit
    }
  ],
  mode: 'history'
})
