<template>
  <article class="page-header">
    <div class="container">
      <base-card class="page-header__card">
        <template v-slot:body>
          <h2 class="heading-two page-header__title">Kitonga's Secret Santa</h2>
          <span class="page-header__text">Budget: $ 30</span>
        </template>
      </base-card>
    </div>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import BaseCard from "@/components/BaseCard.vue";

@Component({
  components: {
    BaseCard,
  },
})
export default class ThePageHeader extends Vue {}
</script>
