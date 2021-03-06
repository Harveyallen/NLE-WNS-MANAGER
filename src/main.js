import ElementUI from 'element-ui';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App';
import router from './router';
import './lib/elementUi/index.css';
import store from './store/index';
import './filter';
import Messages from './lib/l18n/index';

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages: Messages, // set locale messages
});
store.commit('token/getToken');

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value),
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
});
