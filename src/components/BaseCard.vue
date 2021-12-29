<template>
  <div class="card">
    <div class="card__header">
      <slot v-if="$scopedSlots['header']" name="header" />
    </div>
    <div class="card__body">
      <slot name="body"></slot>
    </div>
    <div class="card__footer">
      <slot v-if="$scopedSlots['footer']" name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BaseCard extends Vue {}
</script>
