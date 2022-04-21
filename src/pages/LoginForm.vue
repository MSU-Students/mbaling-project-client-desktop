<template>
  <q-page class="row items-center justify-evenly">
    <q-card flat class="bg-transparent text-center" style="width: 12rem">
      <!-- LOGO PICTURE -->
      <div>
        <q-img src="~assets/mbaling-logo-vertical.svg" style="width: 6rem" />
      </div>
      <!-- USERNAME & PASSWORD INPUT -->
      <div class="q-mt-xl">
        <q-input
          dark
          dense
          input-class="text-center"
          color="white"
          v-model="username"
          type="username"
          placeholder="username"
          @keyup.enter="loginUser()"
        />
        <q-input
          dark
          dense
          color="white"
          input-class="text-center"
          v-model="password"
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
          class="text-red text-bold q-mt-md"
          style="height: 1.5rem; width: 6rem; font-size: smaller"
          color="white"
          label="log-in"
          @click="loginUser()"
        />
      </div>
    </q-card>
  </q-page>
</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component";
import { mapActions, mapState } from "vuex";
import { AUser } from "src/store/auth/state";

@Options({
  methods: {
    ...mapActions('auth', ['login', 'authUser']),
  },
  computed: {
    ...mapState('auth', ['currentUser']),
  },
})
export default class Login extends Vue {
  login!: (auth: { userName: string; password: string }) => Promise<AUser>;
  currentUser!: AUser;

  username = '';
  password = '';
  isPwd = true;

  async loginUser() {
    try {
      await this.login({
        userName: this.username,
        password: this.password,
      });
      if (this.currentUser.type == 'student') {
        await this.$router.replace('/RecentLogs');
        this.$q.notify({
          position: 'center',
          type: 'positive',
          message: 'You are logged in' + this.currentUser.fName,
        });
      }
    } catch (error) {
      this.$q.notify({
        type: 'negative',
        message: 'Wrong Username or Password!',
      });
    }
  }
}
</script>
