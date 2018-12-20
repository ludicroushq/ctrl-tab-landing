import Vue from 'vue';
import VueAnalytics from 'vue-analytics';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

library.add(faChevronLeft, faChevronRight, fab);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: 'UA-125953849-1',
  router,
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
