//vue-cli
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// bootstrap components
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
// icons
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
// vue uses
Vue.use(BootstrapVue);
Vue.component('v-icon', Icon);
Vue.config.productionTip = false;
// inject into app
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
