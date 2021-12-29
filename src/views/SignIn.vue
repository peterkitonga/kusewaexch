<template>
  <main>
    <section class="sgin-content">
      <div class="container">
        <base-card class="sgin-content__card">
          <template v-slot:body>
            <router-link
              :to="{ name: 'app.home' }"
              class="sgin-content__card-logo"
            >
              <img
                src="../assets/images/svg/logo-v1.svg"
                alt="Logo"
                class="sgin-content__card-logo-img"
              />
            </router-link>

            <div class="text-center">
              <img
                src="../assets/images/jpg/pexels-koolshooters-6194124.jpg"
                alt="Profile Image"
                class="sgin-content__card-img"
              />

              <validation-observer slim v-slot="{ handleSubmit }">
                <form
                  @submit.prevent="handleSubmit(onSigninSubmit)"
                  class="form sgin-content__card-form"
                >
                  <div class="sgin-content__card-form-text">
                    <span>{{ forms.signin.fields.name }}</span>
                    <small
                      ><router-link to="#unlink"
                        >unlink this account</router-link
                      ></small
                    >
                  </div>
                  <base-input
                    type="password"
                    name="password"
                    placeholder="Password"
                    :rules="forms.signin.rules.password"
                    v-model="forms.signin.fields.password"
                  ></base-input>
                  <button
                    type="submit"
                    class="btn btn--primary form__submit-btn sgin-content__card-form-btn"
                  >
                    Unlock&nbsp;<i class="bi bi-unlock-fill"></i>
                  </button>
                </form>
              </validation-observer>
            </div>
          </template>
        </base-card>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import BaseCard from "@/components/BaseCard.vue";
import BaseInput from "@/components/BaseInput.vue";

@Component({
  components: {
    BaseCard,
    BaseInput,
  },
})
export default class SignIn extends Vue {
  public forms = {
    signin: {
      fields: {
        name: "Peter Kitonga",
        email: "",
        password: "password",
      },
      rules: {
        group: { required: true, min: 3 },
        email: { required: true, email: true },
        password: { required: true, min: 6, max: 255 },
      },
    },
  };

  public onSigninSubmit(): void {
    this.$router.push({ name: "app.dashboard" });
  }
}
</script>
