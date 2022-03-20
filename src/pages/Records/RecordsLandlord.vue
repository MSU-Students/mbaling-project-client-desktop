<template>
  <q-layout view="hHh Lpr lff" container style="height: 40rem">
    <q-drawer
      class="bg-blue-grey-1"
      show-if-above
      v-model="rightDrawerOpen"
      side="right"
    >
      <div class="q-mt-md flex-center text-center text-primary">
        <q-avatar
          class="q-mt-sm q-ma-md"
          size="8rem"
          text-color="secondary"
          color="primary"
        >
          <img :src="landlord.prfphoto" />
        </q-avatar>
        <div class="info-username defaultfont">
            <p>{{ landlord.username }}</p>
            <span class="defaultfont-bold info-fullname text-uppercase">
              {{ landlord.fullname }}
            </span>
            <p class="info-other defaultfont" style="font-size: x-small">
              {{ landlord.housingName }} <br />
              {{ landlord.housingAdd1 }}, {{ landlord.housingAdd2 }} <br/>
              {{ landlord.housingAdd3 }}, {{ landlord.housingAdd4 }}
            </p>
            <p class="defaultfont" style="font-size: x-small">
              {{ landlord.email }} <br/>
              {{ landlord.contactNo }} <br/>
              {{ landlord.birthDate }} <br/>
              {{ landlord.address1 }}, {{ landlord.address2 }} <br/>
              {{ landlord.address3 }}, {{ landlord.address4 }}
            </p>
        </div>
      </div>
    </q-drawer>

  <q-scroll-area style="height: 40rem; max-width: 77rem;">
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
  </q-scroll-area>
  </q-layout>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

interface Ilandlord {
  username: string;
  prfphoto: string;
  fullname: string;
  housingName: string;
  housingAdd1: string;
  housingAdd2: string;
  housingAdd3: string;
  housingAdd4: string;
  email: string;
  contactNo: string;
  birthDate: string;
  address1: string;
  address2: string;
  address3: string;
  address4: string;
}

export default class RecordsLandlord extends Vue {
  rightDrawerOpen = false;
  separator = "cell";

  landlord: Ilandlord = {
        username: "@pirateking_home",
        prfphoto: "https://cdn.quasar.dev/img/avatar4.jpg",
        fullname: "Monkey D. Luffy",
        housingName: "Pirate King Apartment",
        housingAdd1: "0259 5th Street",
        housingAdd2: "Brgy. Dimalna II",
        housingAdd3: "MSU-Marawi",
        housingAdd4: "Marawi City",
        email: "monkey.luffy@gmail.com",
        contactNo: "0956-932-1946",
        birthDate: "August 31, 1999",
        address1: "1205 5th Street",
        address2: "Dimaluna",
        address3: "Marawi City",
        address4: "Lanao Del Sur 9700",
      }

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
