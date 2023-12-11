import { createApp } from "vue";
import { createPinia } from "pinia";

import i18n from "./utils/i18n";
import App from "./App.vue";
import router from "./router";

import "normalize.css";
import "bulma/css/bulma.css";
import "./assets/css/main.css";

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized.

  const app = createApp(App);

  app.use(createPinia());
  app.use(router);
  i18n(app);

  app.mount("#app");

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });
}
