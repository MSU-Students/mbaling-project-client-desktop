<template>
  <q-layout view="hHh Lpr lff" container style="height: 40rem">
    <q-scroll-area style="height: 40rem; max-width: 77rem">
      <div>
        <q-table
          class="cursor-pointer"
          :rows="allLandlordRecords"
          :columns="columns"
          row-key="number"
          :rows-per-page-options="[0]"
          :separator="separator"
          dense
          hide-bottom
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
                @click="onTableRowClick(props.row)"
              >
                {{ col.value }}
              </q-td>
            </q-tr>
            <!-- <q-tr v-show="props.expand" :props="props">
              <q-td colspan="100%">
                <div class="text-left">
                  This is expand slot for row above: {{ props.row.name }}.
                </div>
              </q-td>
            </q-tr> -->
          </template>
        </q-table>
      </div>
    </q-scroll-area>

    <q-drawer
      class="bg-blue-grey-1"
      show-if-above
      v-model="rightDrawerOpen"
      side="right"
    >
      <div
         v-if="displayInfo"
        class="q-mt-md flex-center text-center text-primary"
      >
        <q-avatar
          class="q-mt-sm q-ma-md"
          size="8rem"
          text-color="secondary"
          color="primary"
        >
          <!-- <img :src="landlord.prfphoto" /> -->
          L
        </q-avatar>
        <div class="info-username defaultfont">
          <p>@{{ currentLandlord.username }}</p>
          <span class="defaultfont-bold info-fullname text-uppercase">
            {{ currentLandlord.firstname }} {{ currentLandlord.middlename }}
            {{ currentLandlord.lastname }}
          </span>
          <p class="info-other defaultfont" style="font-size: x-small">
            <!-- {{ currentLandlord.housingName }} <br /> -->
            {{ currentLandlord.street }}, {{ currentLandlord.barangay }} <br />
            {{ currentLandlord.municipality }}
          </p>
          <p class="defaultfont" style="font-size: x-small">
            {{ currentLandlord.email }} <br/>
              {{ currentLandlord.contactNo }} <br/>
              {{ currentLandlord.birthdate }} <br/>
            {{ currentLandlord.street }}, {{ currentLandlord.barangay }} <br />
            {{ currentLandlord.municipality }}
          </p>
        </div>
      </div>
    </q-drawer>
  </q-layout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { LandlordRowsInfo } from "src/store/RecordsStudent/state";
import { mapState } from "vuex";

@Options({
  computed: {
    ...mapState("RecordsStudent", ["allLandlordRecords"]),
  },
})

export default class RecordsLandlord extends Vue {
  rightDrawerOpen = true;
  separator = "cell";
  allLandlordRecords!: LandlordRowsInfo[];
  landlordInfo!: LandlordRowsInfo;
  displayInfo = false;

  onTableRowClick(data: LandlordRowsInfo) {
    this.currentLandlord = data;
    this.displayInfo = true;
  }

  defaultLandlord: LandlordRowsInfo = {
    number: "",
    id: "",
    landlordid: "",
    username: "",
    password: "",
    email: "",
    contactNo: "",
    firstname: "",
    middlename: "",
    lastname: "",
    birthdate: "",
    street: "",
    barangay: "",
    municipality: "",
    province: "",
    housingUnit: "",
  };

  currentLandlord = { ...this.defaultLandlord };

  columns = [
    {
      name: "number",
      required: true,
      label: "#",
      align: "left",
      field: (row: LandlordRowsInfo) => row.number,
      format: (val: string) => `${val}`,
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
      name: "email",
      align: "left",
      label: "EMAIL",
      field: "email",
    },
    {
      name: "contactNo",
      align: "left",
      label: "CONTACT NO.",
      field: "contactNo",
    },
    {
      name: "birthdate",
      align: "left",
      label: "BIRTHDATE",
      field: "birthdate",
    },
    {
      name: "street",
      align: "left",
      label: "STREET",
      field: "street",
    },
    {
      name: "barangay",
      align: "left",
      label: "BARANGAY",
      field: "barangay",
    },
    {
      name: "municipality",
      align: "left",
      label: "MUNICIPALITY",
      field: "municipality",
    },
    {
      name: "province",
      align: "left",
      label: "PROVINCE",
      field: "province",
    },
    {
      name: "housingunit",
      align: "left",
      label: "HOUSING UNIT",
      field: "housingUnit",
    },
  ];

}
</script>
