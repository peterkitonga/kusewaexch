import Vue from "vue";
import Vuex from "vuex";

// Modules
import AuthModule from "@/store/modules/auth";
import UserModule from "@/store/modules/user";

// Plugins
import * as cookies from "js-cookie";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: AuthModule,
    user: UserModule,
  },
  plugins: [
    createPersistedState({
      key: "kxch-" + process.env.NODE_ENV,
      paths: ["auth.isAuthenticated"],
      storage: {
        getItem: (key) => {
          // Retrieve the cookie
          return cookies.get(key);
        },
        setItem: (key, value) => {
          // Remove the cookie before setting it
          cookies.remove(key);

          // Set the cookie with new values
          return cookies.set(key, value, { expires: 30 });
        },
        removeItem: (key) => {
          // Remove the cookie
          return cookies.remove(key);
        },
      },
    }),
  ],
});
