<template>
  <q-layout view="hHh lpr fFr" container style="height: 40rem">
    <q-drawer class="bg-blue-grey-1" show-if-above v-model="rightDrawerOpen" side="right" behavior="desktop">
      <div class="q-mt-md flex-center text-center text-primary">
        <q-avatar
          class="q-mt-sm q-ma-md"
          size="8rem"
          color="primary"
          text-color="secondary"
        >
          <img :src="student.prfphoto"/>
        </q-avatar>
        <div class="info-username defaultfont">
            <p>{{ student.username }}</p>
            <span class="defaultfont-bold info-fullname text-uppercase">
              {{ student.fullname }}
            </span>
            <p class="info-other defaultfont" style="font-size: x-small">
              {{ student.studentId }} <br />
              {{ student.degree }}, {{ student.yearAdmit }} <br/>
              {{ student.department }} <br/>
              {{ student.college }}
            </p>
            <p class="defaultfont" style="font-size: x-small">
              {{ student.Iemail }} <br/>
              {{ student.contactNo }} <br/>
              {{ student.birthDate }} <br/>
              {{ student.housingAdd1 }}, {{ student.housingAdd2 }} <br/>
              {{ student.housingAdd3 }}, {{ student.housingAdd4 }}
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
        selection="single"
        v-model:selected="selected"
      />
    </div>
  </q-scroll-area>
  </q-layout>
</template>

<script lang="ts">
import { constants } from "buffer";
import { Vue } from "vue-class-component";

interface Istudent {
  username: string;
  prfphoto: string;
  fullname: string;
  studentId: number;
  degree: string;
  yearAdmit: number;
  department: string;
  college: string;
  Iemail: string;
  contactNo: string;
  birthDate: string;
  housingAdd1: string;
  housingAdd2: string;
  housingAdd3: string;
  housingAdd4: string;
}



export default class RecordsStudent extends Vue {
  rightDrawerOpen = false;
  separator = "cell";
  selected = ([]);

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
      name: "studentid",
      align: "left",
      label: "STUDENT ID",
      field: "studentid",
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
      name: "Iemail",
      align: "left",
      label: "EMAIL",
      field: "Iemail",
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
      name: "housingAdd1",
      align: "left",
      label: "HOUSING ADD 1",
      field: "housingAdd1",
    },
    {
      name: "housingAdd2",
      align: "left",
      label: "HOUSING ADD 2",
      field: "housingAdd2",
    },
    {
      name: "housingAdd3",
      align: "left",
      label: "HOUSING ADD 3",
      field: "housingAdd3",
    },
    {
      name: "housingAdd4",
      align: "left",
      label: "HOUSING ADD 4",
      field: "housingAdd4",
    },
  ];

 rows = [
    {
      number: "1",
      id: "AOOAA001",
      studentid: "201812730",
      username: "palawanexpress98",
      firstname: "Nahed",
      lastname: "Bashier",
      middlename: "Solaiman",
      degree: "BS Information Technology",
      department: "Department of Technology",
      college: "College of Information and Computing Sciences",
      Iemail: "bashier.ns30@s.msumain.edu.ph",
      contactNo: "0909-020-6862",
      birthdate: "October 20, 1999",
      housingAdd1: "0059 Disarip Street",
      housingAdd2: "Bubonga Marawi",
      housingAdd3: "Marawi City",
      housingAdd4: "Lanao Del Sur 9700",
    },
    {
      number: "2",
      id: "AOOAA002",
      studentid: "201812485",
      username: "jihoonluvluv24",
      firstname: "Jihoon",
      lastname: "Park",
      middlename: "Clent",
      degree: "BS Information Technology",
      department: "Department of Technology",
      college: "College of Information and Computing Sciences",
      Iemail: "bashier.ns30@s.msumain.edu.ph",
      contactNo: "0909-020-6862",
      birthdate: "October 20, 1999",
      housingAdd1: "0059 Disarip Street",
      housingAdd2: "Bubonga Marawi",
      housingAdd3: "Marawi City",
      housingAdd4: "Lanao Del Sur 9700",
    },
  ];

  student: Istudent = {
        username: "@palawanexpress98",
        prfphoto: "https://cdn.quasar.dev/img/boy-avatar.png",
        fullname: "Nahed S. Bashier",
        studentId: 201812730,
        degree: "BS Information Technology (Database System)",
        yearAdmit: 2018,
        department: "Department of Information Sciences",
        college: "College of Information and Computing Sciences",
        Iemail: "bashier.ns30@s.msumain.edu.ph",
        contactNo: "0909-020-6852",
        birthDate: "October 20, 1999",
        housingAdd1: "0059 Disarip Street",
        housingAdd2: "Bubonga Marawi",
        housingAdd3: "Marawi City",
        housingAdd4: "Lanao Del Sur 9700",
      }

}

// import { ref } from 'vue'

// export default {
//   setup () {
//     const rightDrawerOpen = ref(false)

//     return {

//       rightDrawerOpen,
//       toggleRightDrawer () {
//         rightDrawerOpen.value = !rightDrawerOpen.value
//       },
//       separator: ref('cell'),
//       separatorOptions: [
//         { label: 'Cell', value: 'cell' },
//       ]
//     }
//   }
// }

// import { Vue } from "vue-class-component";

// export default class RecordsStudent extends Vue{

// }
</script>
