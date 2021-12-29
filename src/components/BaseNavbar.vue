<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="navbar__brand">
        <img
          class="navbar__brand-logo"
          src="../assets/images/svg/logo-v1.svg"
          alt="Logo"
        />
      </router-link>

      <router-link
        ref="nav-toggle"
        to="#nav-toggle"
        class="navbar__toggle"
        @click.native="onNavbarToggle"
      >
        <i class="bi bi-list"></i>
      </router-link>

      <ul ref="right-menu" class="navbar__list navbar__list--right">
        <slot name="auth"></slot>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class BaseNavbar extends Vue {
  public onNavbarToggle(): void {
    const rightMenuEl = this.$refs["right-menu"] as HTMLUListElement;
    rightMenuEl.classList.toggle("navbar__list--toggled");
  }
}
</script>
