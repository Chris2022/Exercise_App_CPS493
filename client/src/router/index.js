import { createRouter, createWebHistory } from 'vue-router';
import Session from '../services/session';
import Home from '../views/Home.vue';
import feed from '../views/activity.vue';
import Friends from '../views/Friends.vue';
import Progress from '../views/Progress.vue';
import calories from '../views/calories.vue';
import DailyWorkout from '../views/DailyWorkout.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Progress',
    name: 'Progress',
    component: Progress,
    meta: { requiresLogin: true }
  },
  {
    path: '/DailyWorkout',
    name: 'DailyWorkout',
    component: DailyWorkout,
    meta: { requiresLogin: true }
  },
  {
    path: '/calories',
    name: 'calories',
    component: calories,
    meta: { requiresLogin: true }
  },
  {
    path:'/feed',
    name: 'feed',
    component: feed,
    meta: { requiresLogin: true }
  },
  {
    path:'/Friends',
    name: 'Friends',
    component: Friends,
    meta: { requiresLogin: true }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/contact.vue')
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "about" */ '../views/FAQ.vue')
  },
  {
    path: '/cardio',
    name: 'cardio',
    component: () => import(/* webpackChunkName: "about" */ '../views/cardio.vue')
  },
  {
    path: '/Leg',
    name: 'Leg',
    component: () => import(/* webpackChunkName: "about" */ '../views/Leg.vue')
  },
  {
    path: '/Protein',
    name: 'Protein',
    component: () => import(/* webpackChunkName: "about" */ '../views/Protein.vue')
  },
  {
    path: '/Pull',
    name: 'Pull',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pull.vue')
  },
  {
    path: '/Push',
    name: 'Push',
    component: () => import(/* webpackChunkName: "about" */ '../views/Push.vue')
  },
  {
    path: '/weightloss',
    name: 'weightloss',
    component: () => import(/* webpackChunkName: "about" */ '../views/weightloss.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Users.vue')
  },
  {
    path: '/share',
    name: 'share',
    component: () => import(/* webpackChunkName: "admin" */ '../views/share.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresLogin && !Session.user){
      next('/login');
  }else{
      next();
  }
} )
export default router
