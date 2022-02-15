<template>
  <q-layout view="hHh lpr fFr">
    <q-drawer class="bg-blue-grey-1" show-if-above v-model="rightDrawerOpen" side="right">
      <div class="q-mt-md flex flex-center">
        <q-avatar
          class="q-mt-sm q-ma-md"
          size="8rem"
          text-color="secondary"
          color="primary"
        >
          S
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

export default class RecordsStudent extends Vue {
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
    },
    {
      number: "1",
      id: "AOOAA002",
      studentid: "201812485",
      username: "jihoonluvluv24",
      firstname: "Jihoon",
      lastname: "Park",
      middlename: "Clent",
      degree: "BS Information Technology",
      department: "Department of Technology",
    },
  ];

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
