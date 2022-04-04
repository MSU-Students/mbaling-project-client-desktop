<template>
  <q-layout view="hHh lpR fFf" class="defaultfont-light bg-primary text-white">
    <q-page class="row items-center justify-evenly">
      <q-card flat class="bg-transparent text-center" style="width: 12rem">
        <!-- LOGO PICTURE -->
        <q-img src="~assets/mbaling-logo-vertical.svg" style="width: 6rem" />

        <!-- USERNAME & PASSWORD INPUT -->
        <div class="q-mt-xl">
          <q-input
            v-model="username"
            dark
            dense
            color="white"
            input-class="text-center"
            type="text"
            placeholder="username"
            @keyup.enter="loginUser()"
          />
          <q-input
            v-model="password"
            dark
            dense
            color="white"
            input-class="text-center"
            type="password"
            placeholder="password"
            @keyup.enter="loginUser()"
          />

          <!-- LOG-IN BUTTON -->
          <q-btn
            :ripple="false"
            unelevated
            rounded
            dense
            no-caps
            label="log-in"
            color="white"
            class="q-mt-md text-red text-bold"
            style="height: 1.5rem; width: 6rem; font-size: smaller"
            @click="loginUser()"
          />
        </div>
      </q-card>
    </q-page>
  </q-layout>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class LoginForm extends Vue {
  username = "";
  password = "";

  async loginUser() {
    if (this.username == "user" && this.password == "password") {
      await this.$router.replace("/logs");
    } else {
      this.$q.notify({
        message: "Incorrect username or password.",
        color: "secondary",
        textColor: "primary",
        position: "top",
        classes: "defaultfont",
      });
    }
  }
}
</script>
