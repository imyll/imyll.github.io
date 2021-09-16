import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vant/lib/index.css';
import { NavBar } from 'vant';
import { Icon } from 'vant';
import { Search } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Image as VanImage } from 'vant';
import { Button } from 'vant';

Vue.use(Button);
Vue.use(VanImage);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
