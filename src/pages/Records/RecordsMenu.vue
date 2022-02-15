<template>
  <q-page class="row items-center justify-evenly">
    <div class="q-gutter-lg">
    <q-btn
      class="q-mx-xl"
      unelevated rounded
      stack
      padding="lg"
      color="primary"
      :ripple="false"
      to="/RecordsStudent"
    >
    <q-icon size="10rem" name="person" />
    <div
        class="text-bold cursor-pointer"
        style="font-size: small"
    >
    Student
    </div>
    </q-btn>

    <q-btn
      class="q-mx-lg"
      unelevated rounded
      stack
      padding="lg"
      color="primary"
      :ripple="false"
      to="/RecordsLandlord"
    >
    <q-icon size="10rem" name="home" />
    <div
        class="text-bold cursor-pointer"
        style="font-size: small"
    >
    Landlord
    </div>
    </q-btn>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class RecordsMenu extends Vue{}

</script>

