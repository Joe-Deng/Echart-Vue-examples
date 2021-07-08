import Vue from 'vue'
import VueRouter from 'vue-router'
import Bar from '../views/Bar.vue'
import axios from 'axios';
//暴力原型链实现axios，除此之外，可以使用VueAxios来实现
Vue.prototype.$http = axios;

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Bar',
    component: Bar
  },
  {
    path: '/line',
    name: 'Line',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import ( /* webpackChunkName: "about" */ '../views/Line.vue')
  },
  {
    path: "/scatter",
    name: 'Scatter',
    component: () =>
      import ("@/views/Scatter.vue")
  },
  {
    path: "/pie",
    name: 'Pie',
    component: () =>
      import ("@/views/Pie.vue")
  },
  {
    path: "/map",
    name: 'Map',
    component: () =>
      import ("@/views/Map.vue")
  },
  {
    path: "/radar",
    name: 'Radar',
    component: () =>
      import ("@/views/Radar.vue")
  },
  {
    path: "/gauge",
    name: 'Gauge',
    component: () =>
      import ("@/views/Gauge.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router