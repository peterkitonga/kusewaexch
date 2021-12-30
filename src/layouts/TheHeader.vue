<template>
  <header class="header-top">
    <base-navbar>
      <template v-slot:auth>
        <li
          v-if="authenticationStatus"
          key="signin-link"
          class="navbar__list-item"
        >
          <router-link :to="{ name: 'app.signin' }" class="navbar__link"
            ><i class="bi bi-person-circle"></i>&nbsp;Account</router-link
          >
        </li>
        <li v-else key="signin-link" class="navbar__list-item">
          <router-link :to="{ name: 'app.signin' }" class="navbar__link"
            >Sign In</router-link
          >
        </li>
      </template>
    </base-navbar>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";

import BaseNavbar from "@/components/BaseNavbar.vue";

const Auth = namespace("auth");

@Component({
  components: {
    BaseNavbar,
  },
})
export default class TheHeader extends Vue {
  @Auth.Getter
  public authenticationStatus!: boolean;
}
</script>
