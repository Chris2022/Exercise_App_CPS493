import { createRouter, createWebHistory } from 'vue-router';
import Session from '../services/session';
import Home from '../views/Home.vue';
import activity from '../views/activity.vue';
import Friends from '../views/Friends.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/activity',
    name: 'activity',
    component: activity,
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
    path: '/calories',
    name: 'calories',
    component: () => import(/* webpackChunkName: "about" */ '../views/calories.vue')
  },
  {
    path: '/cardio',
    name: 'cardio',
    component: () => import(/* webpackChunkName: "about" */ '../views/cardio.vue')
  },
  {
    path: '/DailyWorkout',
    name: 'DailyWorkout',
    component: () => import(/* webpackChunkName: "about" */ '../views/DailyWorkout.vue')
  },
  {
    path: '/Leg',
    name: 'Leg',
    component: () => import(/* webpackChunkName: "about" */ '../views/Leg.vue')
  },
  {
    path: '/Progress',
    name: 'Progress',
    component: () => import(/* webpackChunkName: "about" */ '../views/Progress.vue')
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
  }
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
