<template>
  <div>
    <router-view name="header"></router-view>
    <router-view name="page-header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class TheWrapper extends Vue {}
</script>
