<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="bg-white" style="width: 35rem; height: 35rem">
      <q-tabs
        v-model="tab"
        dense
        indicator-color="primary"
        active-color="primary"
        narrow-indicator
        >
        <q-tab name="student" label="student" :ripple="false" />
        <q-tab name="landlord" label="Landlord" :ripple="false"/>
      </q-tabs>

      <q-separator></q-separator>
      <!-- Student -->
      <q-tab-panels v-model="tab">
        <q-tab-panel class="q-pa-none q-pt-md" name="student">
      <q-card-section class="q-py-xs row items-center justify-evenly">
        <q-icon size="5rem" name="person" color="primary"/>
      </q-card-section>
      <q-card-section>
        <div class="q-gutter-y-sm column flex flex-center">
        <q-input dense filled v-model="student.username" placeholder="Username" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="student.email" placeholder="E-mail" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="student.password" placeholder="Password" type="password" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="student.firstname" placeholder="Firstname" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="student.middlename" placeholder="Middlename" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="student.lastname" placeholder="Lastname" style="width: 25rem; font-size: smaller" />
        <q-input dense filled type="date" v-model="student.birthdate" placeholder="Birthdate" style="width: 25rem; font-size: smaller">

        </q-input>
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
            label="create"
          />
        </div>

      </q-card-section>
        </q-tab-panel>
      </q-tab-panels>

      <!-- Landlord -->
      <q-tab-panels v-model="tab">
        <q-tab-panel class="q-pa-none q-pt-md" name="landlord">
      <q-card-section class="q-py-xs row items-center justify-evenly">
        <q-icon size="5rem" name="home" color="primary" />
      </q-card-section>
      <q-card-section>
        <div class="q-gutter-y-sm column flex flex-center">
        <q-input dense filled v-model="landlord.username" placeholder="Username" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="landlord.email" placeholder="E-mail" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="landlord.password" placeholder="Password" type="password" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="landlord.firstname" placeholder="Firstname" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="landlord.middlename" placeholder="Middlename" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="landlord.lastname" placeholder="Lastname" style="width: 25rem; font-size: smaller" />
        <q-input dense filled type="date" v-model="landlord.birthdate" placeholder="Birthdate" style="width: 25rem; font-size: smaller">

        </q-input>
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
            label="create"
          />
        </div>

      </q-card-section>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

interface Cstudent {
  username: string;
  email: string;
  password: string;
  firstname: string;
  middlename: string;
  lastname: string;
  birthdate: string;
}
interface Clanlord {
  username: string;
  email: string;
  password: string;
  firstname: string;
  middlename: string;
  lastname: string;
  birthdate: string;
}

export default class AccountsCreateForm extends Vue{
  tab = "student";
student: Cstudent =
{
  username: "",
  email: "",
  password: "",
  firstname: "",
  middlename: "",
  lastname: "",
  birthdate: "",
}
landlord: Clanlord =
{
  username: "",
  email: "",
  password: "",
  firstname: "",
  middlename: "",
  lastname: "",
  birthdate: "",
}
}


// import { ref } from "vue";

// export default {
//   setup() {
//     return {
//       username: ref(""),
//       email: ref(""),
//       password: ref(""),
//       firstname: ref(""),
//       middlename: ref(""),
//       lastname: ref(""),
//       birthdate: ref(""),
//       tab: ref("student"),
//     };
//   },
// };
</script>
