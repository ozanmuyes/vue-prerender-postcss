import Vue from 'vue';
import Router from 'vue-router';

import routes from './routes';

Vue.use(Router);

export default new Router({
  // WARN Do NOT change this as its is directly affects
  //      prerendering process (PhantomJS related).
  //      See https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  mode: 'history',
  routes,
});
