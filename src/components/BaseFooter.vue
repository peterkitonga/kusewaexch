<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="container">
        <slot name="main"></slot>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class BaseFooter extends Vue {}
</script>
