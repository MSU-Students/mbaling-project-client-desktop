<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="bg-white" style="width: 35rem; height: 35rem">
      <div class="absolute-center">
        <q-card-section class="q-py-xs row items-center justify-evenly">
          <q-icon size="5rem" name="delete" color="primary" />
        </q-card-section>

        <q-card-section>
          <div class="q-gutter-y-sm column flex flex-center">
            <q-input
              dense
              filled
              v-model="delAccount.username"
              placeholder="Username"
              style="width: 25rem; font-size: smaller"
            />
            <q-input
              dense
              filled
              v-model="sInfo.email"
              placeholder="E-mail"
              style="width: 25rem; font-size: smaller"
            />
            <q-input
              dense
              filled
              v-model="sInfo.password"
              placeholder="Password"
              type="password"
              style="width: 25rem; font-size: smaller"
            />
          </div>

          <div class="flex flex-center">
            <q-btn
              :ripple="false"
              unelevated
              rounded
              dense
              no-caps
              class="text-white q-mt-md"
              style="height: 1.5rem; width: 6rem; font-size: smaller"
              color="primary"
              label="delete"
              @click="DeleteAccount"
            />
          </div>
        </q-card-section>
      </div>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapState, mapActions } from "vuex";
import {
  StudentRowsInfo,
  LandlordRowsInfo,
} from "src/store/RecordsStudent/state";

@Options({
  computed: {
    ...mapState("RecordsStudent", [
      "allStudentRecords",
      "activeStudentRecords",
      "allLandlordRecords",
      "activeLandlordRecords",
    ]),
  },
  methods: {
    ...mapActions("RecordsStudent", ["deleteStudent", "deleteLandlord"]),
  },
})
export default class AccountsDeleteForm extends Vue {
  allStudentRecords!: StudentRowsInfo[];
  allLandlordRecords!: StudentRowsInfo[];
  deleteStudent!: (student: StudentRowsInfo) => Promise<void>;
  deleteLandlord!: (landlord: LandlordRowsInfo) => Promise<void>;

  //Functions for deletingStudentAccount

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

  sInfo = { ...this.defaultStudent };
  lInfo = { ...this.defaultLandlord };

  delAccount = this.sInfo || this.lInfo;
  AccountDelete = this.deleteStudent || this.deleteLandlord!;

  async DeleteAccount() {
    await this.AccountDelete(this.delAccount);
    this.$q.notify({
      type: "positive",
      message: "Deleted Successfully",
    });
  }

}

// import { ref } from "vue";

// export default {
//   setup() {
//     return {
//       username: ref(""),
//       email: ref(""),
//       password: ref(""),
//     };
//   },
// };
</script>
