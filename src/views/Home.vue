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
    <section class="hme-features">
      <div class="row">
        <div class="col-6 col-sm-12 d-order--sm-1">
          <figure class="hme-features__figure">
            <img
              src="../assets/images/svg/scarf.svg"
              alt="Scarf"
              class="hme-features__figure-img"
            />
          </figure>
        </div>
        <div class="col-6 col-sm-12 d-flex d-order--sm-2">
          <div class="hme-features__content">
            <h2 class="heading-two hme-features__content-heading">Organize</h2>
            <p class="hme-features__content-text">
              Sign up as the group santa and enter all participants. This can be
              done by importing a CSV of any number of participants. Once all
              participants are added, set a budget for the gifts.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 col-sm-12 d-flex d-order--sm-2">
          <div class="hme-features__content">
            <h2 class="heading-two hme-features__content-heading">
              Exclusions
            </h2>
            <p class="hme-features__content-text">
              Set exclusions to prevent certain participants from drawing each
              other. Sometimes the randomization can assign participants to each
              other such as spouses. It might not be desired and this is where
              to set such exclusions.
            </p>
          </div>
        </div>
        <div class="col-6 col-sm-12 d-order--sm-1">
          <figure class="hme-features__figure">
            <img
              src="../assets/images/svg/north-pole.svg"
              alt="North Pole"
              class="hme-features__figure-img"
            />
          </figure>
        </div>
      </div>
      <div class="row">
        <div class="col-6 col-sm-12 d-order--sm-1">
          <figure class="hme-features__figure">
            <img
              src="../assets/images/svg/bell.svg"
              alt="Bell"
              class="hme-features__figure-img"
            />
          </figure>
        </div>
        <div class="col-6 col-sm-12 d-flex d-order--sm-2">
          <div class="hme-features__content">
            <h2 class="heading-two hme-features__content-heading">Invite</h2>
            <p class="hme-features__content-text">
              When everything is set, send invites to all the participants. They
              will receive an email with the invite which will direct them to
              the gift exchange group. Here a participant can set a wish list if
              desired.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
