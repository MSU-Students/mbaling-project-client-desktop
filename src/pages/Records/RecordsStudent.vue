<template>
  <q-layout view="hHh Lpr lff" container style="height: 40rem">
    <q-scroll-area style="height: 40rem; max-width: 77rem">
      <div>
        <q-table
          class="cursor-pointer"
          :rows="allStudentRecords"
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
        <div>
          Your selection: {{currentStudent}}
        </div>
      </div>
    </q-scroll-area>

    <div>
      <q-drawer

        class="bg-blue-grey-1"
        v-model="rightDrawerOpen"
        side="right"
        show-if-above
      >
        <!-- <div>
          <q-btn
            color="primary"
            rounded
            label="X"
            @click="rightDrawerOpen = false"
          />
        </div> -->
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
              {{ currentStudent.firstname }} {{ currentStudent.middlename }}
              {{ currentStudent.lastname }}
            </span>
            <p class="info-other defaultfont" style="font-size: x-small">
              {{ currentStudent.studentId }} <br />
              {{ currentStudent.degree }}, {{ currentStudent.year }} <br />
              {{ currentStudent.department }} <br />
              {{ currentStudent.college }}
            </p>
            <p class="defaultfont" style="font-size: x-small">
              {{ currentStudent.email }} <br />
              {{ currentStudent.contactNo }} <br />
              {{ currentStudent.birthdate }} <br />
              {{ currentStudent.street }}, {{ currentStudent.barangay }}
              <br />
              {{ currentStudent.municipality }}, {{ currentStudent.province }} <br />
              {{ currentStudent.housingUnit }}
            </p>
          </div>
        </div>
      </q-drawer>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { StudentRowsInfo } from "src/store/RecordsStudent/state";
import { mapState } from "vuex";


@Options({
  computed: {
    ...mapState("RecordsStudent", ["allStudentRecords"]),
  },
})

export default class RecordsStudent extends Vue {
  rightDrawerOpen = true;
  separator = "cell";
  allStudentRecords!: StudentRowsInfo[];
  studentInfo!: StudentRowsInfo;
  displayInfo = false;

  onTableRowClick(data: StudentRowsInfo) {
    this.currentStudent = data;
    this.displayInfo = true;
  }

    defaultStudent: StudentRowsInfo = {
    number: "",
    isStudent: true,
    id: "",
    studentId: "",
    username: "",
    password: "",
    email: "",
    contactNo: "",
    college: "",
    department: "",
    degree: "",
    year: "",
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

  currentStudent = { ...this.defaultStudent };

  columns = [
    {
      name: "number",
      required: true,
      label: "#",
      align: "left",
      field: (row: StudentRowsInfo) => row.number,
      format: (val: string) => `${val}`,
    },
    {
      name: "studentId",
      align: "left",
      label: "STUDENT ID",
      field: "studentId",
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
      name: "degree",
      align: "left",
      label: "DEGREE",
      field: "degree",
    },
    {
      name: "department",
      align: "left",
      label: "DEPARTMENT",
      field: "department",
    },
    {
      name: "college",
      align: "left",
      label: "COLLEGE",
      field: "college",
    },
    {
      name: "email",
      align: "left",
      label: "EMAIL",
      field: "email",
    },
    {
      name: "year",
      align: "left",
      label: "YEAR",
      field: "year",
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
      name: "housingUnit",
      align: "left",
      label: "HOUSING UNIT",
      field: "housingUnit",
    },
  ];
}
</script>
