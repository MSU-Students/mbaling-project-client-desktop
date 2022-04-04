<template>
  <div>
    <q-table
      dense
      hide-bottom
      row-key="name"
      :rows="allRecentLog"
      :columns="columns"
      :separator="separator"
    />
  </div>
</template>

<script lang="ts">
import { RecentLogsRowsInfo } from "src/store/RecentLogs/state"
import { Options, Vue } from "vue-class-component";
import { mapState} from "vuex";

@Options({
  computed: {
    ...mapState("RecentLogs", ["allRecentLog"]),
  },
})

export default class LogsPage extends Vue {
  separator = 'cell';
  allRecentLog!: RecentLogsRowsInfo[];

  columns = [
    {
      name: "number",
      required: true,
      label: "",
      align: "left",
      field: (row: RecentLogsRowsInfo) => row.number,
      format: (val:string) => `${val}`,
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



  // rows: irows = [
  //   {
  //     number: "1",
  //     time: "1642314638364",
  //     user: "pirateking_home",
  //     activity: "Monkey D. Luffy has posted a new post. (URL:https://m.mbaling.com/post/uv0unwnbu0wnrboub0ywu)",
  //   },
  //   {
  //       number: "2",
  //       time: "1642314869261",
  //       user: "palawanexpress98",
  //       activity: "Nahed S. Bashier has changed their password.",
  //   }
  // ]
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



