import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import StartScreen from './components/StartScreen.vue';
import Game from './components/Game.vue';
import NotFound from './components/NotFound.vue';

import './sass/main.scss';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',

  routes: [
    {
      path: "/",
      component: StartScreen
    },
    {
      path: "/game",
      component: Game
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
