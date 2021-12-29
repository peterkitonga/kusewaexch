<template>
  <header class="header-top">
    <base-navbar>
      <template v-slot:auth>
        <li class="navbar__list-item">
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
import BaseNavbar from "@/components/BaseNavbar.vue";

@Component({
  components: {
    BaseNavbar,
  },
})
export default class TheHeader extends Vue {}
</script>
