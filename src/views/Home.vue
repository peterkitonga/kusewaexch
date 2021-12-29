<template>
  <main>
    <section class="hme-hero">
      <div class="container">
        <div class="hme-hero__card">
          <h1 class="hme-hero__card-title heading-one">Secret Santa</h1>
          <p class="hme-hero__card-text">
            A free and easy to use gift exchange for any loving family. Organize
            your secret santa in easy steps and draw names set up by the group
            santa.
          </p>
          <router-link to="/#get-started" class="btn btn--primary"
            >Start your secret santa&nbsp;<i
              class="bi bi-chevron-double-right"
            ></i
          ></router-link>
        </div>
        <img
          class="hme-hero__img"
          src="../assets/images/jpg/pexels-karolina-grabowska-5469811.jpg"
          alt="Christmas Tree"
        />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
