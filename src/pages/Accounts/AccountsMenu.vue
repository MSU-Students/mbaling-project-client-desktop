<template>
  <q-page class="row items-center justify-evenly">
    <div class="q-gutter-lg">
    <q-btn
      class="q-mx-xl"
      unelevated rounded
      stack
      padding="4rem"
      color="primary"
      :ripple="false"
      to="/AccountsCreateForm"
    >
    <q-icon size="5rem" name="edit_note" />
    <div
        class="text-bold cursor-pointer"
        style="font-size: x-small"
    >
    Create
    </div>
    </q-btn>

    <q-btn
      class="q-mx-lg"
      unelevated rounded
      stack
      padding="4rem"
      color="primary"
      :ripple="false"
      to="/AccountsDeleteForm"
    >
    <q-icon size="5rem" name="delete_outline" />
    <div
        class="text-bold cursor-pointer"
        style="font-size: x-small"
    >
    Delete
    </div>
    </q-btn>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class AccountsMenu extends Vue{}

</script>
