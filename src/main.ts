import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/scss/main.scss";

import {
  ValidationProvider,
  ValidationObserver,
  configure,
  extend,
} from "vee-validate";
import { email, min, max } from "vee-validate/dist/rules";

configure({
  classes: {
    valid: "form__field-control--valid",
    invalid: "form__field-control--invalid",
  },
});

extend("required", {
  validate(value) {
    return {
      required: true,
      valid: ["", null, undefined].indexOf(value) === -1,
    };
  },
  message: "This field is required",
  computesRequired: true,
});

extend("email", {
  ...email,
  message: "This field should be a valid email",
});

extend("min", {
  ...min,
  message: "This field should be at least {length} characters",
});

extend("max", {
  ...max,
  message: "This field should be at most {length} characters",
});

Vue.config.productionTip = false;
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
