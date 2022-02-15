<template>
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
</template>

<script lang="ts">
import { Vue } from "vue-class-component";


export default class RecentLogs extends Vue{
  separator = 'cell';

  columns = [
    {
      name: "number",
      required: true,
      label: "",
      align: "left",
      field: "number",
    },
    {
      name: "time",
      align: "left",
      label: "TIME",
      field: "time",
    },
    {
      name: "user",
      align: "left",
      label: "USER",
      field: "user",
    },
    {
      name: "activity",
      align: "left",
      label: "ACTIVITY",
      field: "activity",
    },
  ];
  rows = [
    {
      number: "1",
      time: "1642314638364",
      user: "pirateking_home",
      activity: "Monkey D. Luffy has posted a new post. (URL:https://m.mbaling.com/post/uv0unwnbu0wnrboub0ywu)",
    },
    {
      number: "2",
        time: "1642314869261",
        user: "palawanexpress98",
        activity: "Nahed S. Bashier has changed their password.",
    }
  ]
}

// import { ref } from 'vue'

// const columns = [
//   {
//     name: 'name',
//     required: true,
//     align: 'left',
//     field: row => row.name,

//   },
//   { name: 'time', align: 'left', label: 'TIME', field: 'time', },
//   { name: 'user', align: 'left', label: 'USER', field: 'user', },
//   { name: 'activity', align: 'left', label: 'ACTIVITY', field: 'activity' },
//   ]

// const rows = [
//   {
//     name: '1',
//     time: '1642314638364',
//     user: 'pirateking_home',
//     activity: 'Monkey D. Luffy has posted a new post. (URL:https://m.mbaling.com/post/uv0unwnbu0wnrboub0ywu)',
//   },
//   {
//     name: '2',
//     time: '1642314869261',
//     user: 'palawanexpress98',
//     activity: 'Nahed S. Bashier has changed their password.',
//   },
// ]

// export default {
//   setup () {
//     return {
//       separator: ref('cell'),
//       columns,
//       rows
//     }
//   }
// }

// ------------------------------------------------
// import { ref } from "vue";

// export default {
//   setup() {
//     return {
//       separator: ref("cell"),
//       separatorOptions: [{ label: "Cell", value: "cell" }],
//     };
//   },
// };

</script>



