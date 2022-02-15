<template>
  <q-page class="row items-center justify-evenly">

    <q-card class="bg-white" style="width: 35rem; height: 35rem">
      <div class="absolute-center">
    <q-card-section class="q-py-xs row items-center justify-evenly">
        <q-icon size="5rem" name="delete" color="primary" />
      </q-card-section>

      <q-card-section>
        <div class="q-gutter-y-sm column flex flex-center">
        <q-input dense filled v-model="username" placeholder="Username" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="email" placeholder="E-mail" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="password" placeholder="Password" type="password" style="width: 25rem; font-size: smaller" />
        </div>
        <div class="flex flex-center">
          <q-btn
            :ripple="false"
            unelevated
            rounded
            dense
            no-caps
            class="text-white q-mt-md"
            style="height: 1.5rem; width: 6rem; font-size: smaller"
            color="primary"
            label="delete"
          />
        </div>

      </q-card-section>
      </div>
        </q-card>
  </q-page>
</template>
<script>

import { Vue } from "vue-class-component";

export default class AccountsDeleteForm extends Vue{
  username = "";
  email = "";
  password = "";
}

// import { ref } from "vue";

// export default {
//   setup() {
//     return {
//       username: ref(""),
//       email: ref(""),
//       password: ref(""),
//     };
//   },
// };
</script>
