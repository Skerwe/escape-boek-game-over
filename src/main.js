import { createApp } from 'vue';
import { createPinia } from 'pinia';

import i18n from './utils/i18n';
import App from './LoaderSuspenser.vue';
import router from './router';

import 'normalize.css';
import 'bulma/css/bulma.css';
import './assets/css/main.css';

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized.

  const pinia = createPinia();
  const app = createApp(App);

  app.use(pinia);
  app.use(router);
  i18n(app);

  app.mount('#app');
}
