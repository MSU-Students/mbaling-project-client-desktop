<template>
  <q-layout view="hHh Lpr lff">
    <q-drawer
      class="bg-blue-grey-1"
      show-if-above
      v-model="rightDrawerOpen"
      side="right"
    >
      <div class="q-mt-md flex flex-center">
        <q-avatar
          class="q-mt-sm q-ma-md"
          size="8rem"
          text-color="secondary"
          color="primary"
        >
          L
        </q-avatar>
      </div>
    </q-drawer>

    <div>
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="name"
        :separator="separator"
        dense
        hide-bottom
      />
    </div>
  </q-layout>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class RecordsLandlord extends Vue {
  rightDrawerOpen = false;
  separator = "cell";

  columns = [
    {
      name: "number",
      required: true,
      label: "",
      align: "left",
      field: "number",
    },
    {
      name: "id",
      align: "left",
      label: "ID",
      field: "id",
    },
    {
      name: "landlordid",
      align: "left",
      label: "LANDLORD ID",
      field: "landlordid",
    },
    {
      name: "username",
      align: "left",
      label: "USERNAME",
      field: "username",
    },
    {
      name: "firstname",
      align: "left",
      label: "FIRSTNAME",
      field: "firstname",
    },
    {
      name: "lastname",
      align: "left",
      label: "LASTNAME",
      field: "lastname",
    },
    {
      name: "middlename",
      align: "left",
      label: "MIDDLENAME",
      field: "middlename",
    },
    {
      name: "adressline1",
      align: "left",
      label: "ADDRESS LINE 1",
      field: "addressline1",
    },
    {
      name: "addressline2",
      align: "left",
      label: "ADDRESS LINE 2",
      field: "addressline2",
    },
    {
      name: "addressline3",
      align: "left",
      label: "ADDRESS LINE 3",
      field: "addressline3",
    },
  ];
  rows = [
    {
      number: "1",
      id: "AOOAA003",
      landlordid: "20220001",
      username: "pirateking_home",
      firstname: "Monkey",
      lastname: "Luffy",
      middlename: "Damulag",
      addressline1: "0059 5th Street",
      addressline2: "Brgy. Dimaluna I",
      addressline3: "MSU-Marawi",
    },
  ];
}
</script>
