<template>
  <q-layout view="hHh Lpr lff" container style="height: 40rem">
    <div class="row">
    <div class="col-10">
    <q-scroll-area style="height: 40rem">
      <div>
        <div class="q-pa-md q-gutter-sm row">
          <q-input
            outlined
            color="green"
            rounded
            dense
            debounce="300"
            v-model="search"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <q-table
          class="cursor-pointer"
          :rows="studentAccount"
          :columns="columns"
          row-key="number"
          :rows-per-page-options="[0]"
          :separator="separator"
          :filter="search"
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
            <q-tr v-show="props.expand" :props="props">
              <q-td colspan="100%">
                <div class="text-left">
                  This is expand slot for row above: {{ props.row.name }}.
                </div>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </q-scroll-area>
    </div>

    <div class="col-2">
      <div>
        <div
        v-if="displayInfo"
        class="q-mt-md flex-center text-center text-primary">
          <q-avatar
            class="q-mt-sm q-ma-md"
            size="8rem"
            color="primary"
            text-color="secondary"
          >
            <!-- <img :src="student.prfphoto"/> -->
            N
          </q-avatar>
          <div class="info-username defaultfont">
            <p>@{{ currentStudent.username }}</p>
            <span class="defaultfont-bold info-fullname text-uppercase">
              {{ currentStudent.fName }} {{ currentStudent.mName }}
              {{ currentStudent.lName }}
            </span>
            <p class="info-other defaultfont" style="font-size: x-small">
              {{ currentStudent.username }} <br />
              {{ currentStudent.degree }}, {{ currentStudent.yearAdmit }} <br />
              {{ currentStudent.department }} <br />
              {{ currentStudent.college }}
            </p>
            <p class="defaultfont" style="font-size: x-small">
              {{ currentStudent.email }} <br />
              {{ currentStudent.contact }} <br />
              {{ currentStudent.birthdate }} <br />
              {{ currentStudent.address1 }}, {{ currentStudent.address2 }}
              <br />
              {{ currentStudent.address3 }}, {{ currentStudent.address4 }} <br />
              {{ currentStudent.housingunit }}
            </p>
          </div>
        </div>
        <div class="row justify-evenly" v-else>Nothing</div>
      </div>
    </div>
    </div>
  </q-layout>
  <div class="bg-greens"></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters, mapState } from "vuex";
import { AccountCreateStudentInfo } from "src/store/AccountsCreateForm/state";
import { UserDto } from "src/services/rest-api";
import { AUser } from "src/store/auth/state";
import { Users } from "src/store/RecordsStudent/state";

@Options({
  methods: {
    ...mapActions("account", ["getAllUser"]),
  },
  computed: {
    ...mapState("account", ["allAccount"]),
    ...mapGetters("account", ["studentAccount"]),
  },
})
export default class RecordsStudent extends Vue {
  getAllUser!: () => Promise<void>;
  studentAccount!: UserDto[];

  displayInfo = false;
  separator = "cell";
  allAccount!: Users[];
  currentUser!: Users;
  filter = "student";
  id = 0;
  search = "";
  

  onTableRowClick(data: Users) {
    this.currentStudent = data;
    this.displayInfo = true;
  }

  defaultStudent: Users = {
    fName: "",
    lName: "",
    type: "student",
    email: "",
    birthdate: "",
    degree: "",
    department: "",
    college: "",
    contact: "",
    gender: "",
    yearAdmit: "",
    address1: "",
    address2: "",
    address3: "",
    address4: "",
    housingunit: "",
    status: "active"
  };

  currentStudent = { ...this.defaultStudent };

  async mounted() {
    await this.getAllUser();
    console.log(this.studentAccount);
  }
  columns = [
   {
      name: 'id',
      required: true,
      label: 'STUDENT ID',
      align: 'left',
      field:  'id',
      sortable: true
    },
    {
      name: "username",
      align: "center",
      label: "USERNAME",
      field: "username",
    },
    {
      name: "fName",
      align: "center",
      label: "FIRSTNAME",
      field: "fName",
    },
    {
      name: "lName",
      align: "center",
      label: "LASTNAME",
      field: "lName",
    },
    {
      name: "mName",
      align: "center",
      label: "MIDDLENAME",
      field: "mName",
    },
    {
      name: "degree",
      align: "center",
      label: "DEGREE",
      field: "degree",
    },
    {
      name: "type",
      align: "center",
      label: "Types",
      field: "type",
    },

    { name: "contact", align: "center", label: "Contact", field: "contact" },
    {
      name: "department",
      align: "center",
      label: "DEPARTMENT",
      field: "department",
    },
    { name: "college", align: "center", label: "COLLEGE", field: "college" },
    { name: "email", align: "center", label: "EMAIL", field: "email" },
    { name: "yearAdmit", align: "center", label: "YEAR", field: "yearAdmit" },
    {
      name: "contact",
      align: "center",
      label: "CONTACT NO.",
      field: "contact",
    },
    {
      name: "birthdate",
      align: "center",
      label: "BIRTHDATE",
      field: "birthdate",
    },
    { name: "address1", align: "center", label: "STREET", field: "address1" },
    { name: "address2", align: "center", label: "BARANGAY", field: "address2" },
    {
      name: "address3",
      align: "center",
      label: "MUNICIPALITY",
      field: "address3",
    },
    { name: "address4", align: "center", label: "PROVINCE", field: "address4" },
  ];
}
</script>
