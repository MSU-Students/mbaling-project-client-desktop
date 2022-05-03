<template>
  <q-page class="row items-center justify-evenly">

    <q-card class="bg-white accountcreate-card" style="width: 35rem; height: 25rem">
      <div class="absolute-center">
    <q-card-section class="q-py-xs row items-center justify-evenly">
        <q-icon size="5rem" name="delete" color="primary" />
      </q-card-section>

      <q-card-section>
        <div class="q-gutter-y-sm column flex flex-center">
        <q-input dense filled v-model="currentStudent.username" placeholder="Username" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="currentStudent.email" placeholder="E-mail" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="currentStudent.password" placeholder="Password" type="password" style="width: 25rem; font-size: smaller" />
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
            @click="deleteAccount"
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
import { AccountStateInterface } from "src/store/Records/state";

@Options({
  computed: {
    ...mapState("Records", ["allStudentRecords", "activeStudentRecords"])
  },
  methods: {
    ...mapActions("Records", ["deleteStudent"]),
  },
})

export default class AccountsDeleteForm extends Vue{
  allStudentRecords!: AccountStateInterface[];
  deleteStudent!:(student:AccountStateInterface) => Promise<void>;

  //Functions for deletingStudentAccount

  defaultStudent: AccountStateInterface = {
    allAccount: []
  };

  currentStudent = {...this.defaultStudent}

  async deleteAccount(){
    await this.deleteStudent(this.currentStudent)
    this.$q.notify({
      type: "positive",
      message: "Success",
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
