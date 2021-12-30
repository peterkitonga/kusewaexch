<template>
  <header class="header-top">
    <base-navbar>
      <template v-slot:auth>
        <li
          v-if="authenticationStatus"
          key="signin-link"
          class="navbar__list-item"
        >
          <base-dropdown
            id="account-links"
            label="Account"
            button-color="transparent"
            class="navbar__link"
          >
            <li class="dropdown__menu-item">
              <router-link
                to="#logout"
                class="dropdown__menu-link"
                @click.native="onLogoutUser"
                ><i class="bi bi-lock-fill"></i>&nbsp;Logout</router-link
              >
            </li>
          </base-dropdown>
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
import BaseDropdown from "@/components/BaseDropdown.vue";

const Auth = namespace("auth");

@Component({
  components: {
    BaseNavbar,
    BaseDropdown,
  },
})
export default class TheHeader extends Vue {
  @Auth.Getter
  public authenticationStatus!: boolean;

  @Auth.Action
  public initLogoutUser!: () => void;

  public onLogoutUser(): void {
    this.initLogoutUser();
  }
}
</script>
