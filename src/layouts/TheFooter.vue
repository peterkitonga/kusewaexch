<template>
  <base-footer>
    <template v-slot:main>
      <h4 class="heading-four footer__content-heading">
        Copyright © 2021 KXCH. All Rights Reserved
      </h4>
    </template>
  </base-footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import BaseFooter from "@/components/BaseFooter.vue";

@Component({
  components: {
    BaseFooter,
  },
})
export default class TheFooter extends Vue {}
</script>
