<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="q-my-lg bg-white" style="width: 35rem; height: 45rem">
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
        <q-icon class="mbi-account" size="4rem" color="primary"/>
      </q-card-section>
      <q-card-section>
        <div
        v-for="student in allStudentAccount" :key="student.username"
        class="q-gutter-y-sm column flex flex-center">
        <q-input dense filled v-model="student.username" placeholder="Username" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="student.password" placeholder="Password" type="password" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="student.email" placeholder="E-mail" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="student.MobileNo" mask="(+63) ###-###-####" placeholder="Mobile Number" style="width: 25rem; font-size: smaller" />
          <!-- <q-input dense filled v-model="student.course" placeholder="Course:" style="width: 25rem; font-size: smaller" /> -->

          <div style="max-width: 25rem">
          <q-expansion-item header-class="bg-grey-3 text-grey-7" dense label="Course:" style="width: 25rem; font-size: smaller">
             <q-card>
               <q-card-section class="q-py-xs">
                  <q-select class="q-mt-xs" v-model="student.College" :options="college" dense filled label="College:" style="width: 24rem; font-size: smaller" />
                  <q-select class="q-mt-xs" v-model="student.Department" :options="Department" dense filled label="Department:" style="width: 24rem; font-size: smaller" />
                  <q-select class="q-mt-xs" v-model="student.Degree" :options="Degree" dense filled label="Degree:" style="width: 24rem; font-size: smaller" />
                  <q-select class="q-mt-xs" v-model="student.Year" :options="Year" dense filled label="Year:" style="width: 24rem; font-size: smaller" />
               </q-card-section>
             </q-card>
          </q-expansion-item>
          </div>

        <q-input dense filled v-model="student.firstname" placeholder="Firstname" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="student.middlename" placeholder="Middlename" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="student.lastname" placeholder="Lastname" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="student.birthdate" mask="##/##/####" placeholder="Birthdate" style="width: 25rem; font-size: smaller" >
          <!-- <q-btn class="q-pt-sm q-pr-sm" unelevated :ripple="false" size="xs" icon="warning" ></q-btn> -->
        </q-input>
            <!-- <q-date
                       v-model="student.birthdate"
                       minimal
                       /> -->
          <div style="max-width: 25rem">
          <q-expansion-item header-class="bg-grey-3 text-grey-7" dense label="Address:" style="width: 25rem; font-size: smaller">
             <q-card>
               <q-card-section class="q-py-xs">
                  <q-select class="q-mt-xs" v-model="student.Address1" :options="Street" dense filled label="Street:" style="width: 24rem; font-size: smaller" />
                  <q-select class="q-mt-xs" v-model="student.Address2" :options="Barangay" dense filled label="Barangay:" style="width: 24rem; font-size: smaller" />
                  <q-select class="q-mt-xs" v-model="student.Address3" :options="Municipality" dense filled label="Municipality:" style="width: 24rem; font-size: smaller" />
                  <q-select class="q-mt-xs" v-model="student.Address4" :options="Province" dense filled label="Province:" style="width: 24rem; font-size: smaller" />
               </q-card-section>
             </q-card>
          </q-expansion-item>
          </div>

        <q-input dense filled v-model="student.HousingUnit" placeholder="Housing Unit" style="width: 25rem; font-size: smaller" />

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
        <q-icon class="mbi-home" size="4rem" color="primary" />
      </q-card-section>
      <q-card-section>
        <div
        v-for="landlord in allLandlordAccount" :key="landlord.username"
        class="q-gutter-y-sm column flex flex-center">
        <q-input dense filled v-model="landlord.username" placeholder="Username" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="landlord.password" placeholder="Password" type="password" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="landlord.MobileNo" mask="####-###-####" placeholder="Mobile Number" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="landlord.firstname" placeholder="Firstname" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="landlord.middlename" placeholder="Middlename" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="landlord.lastname" placeholder="Lastname" style="width: 25rem; font-size: smaller" />
        <q-input dense filled v-model="landlord.birthdate" placeholder="Birthdate" mask="##/##/####" style="width: 25rem; font-size: smaller" />

        <div style="max-width: 25rem">
          <q-expansion-item header-class="bg-grey-3 text-grey-7" dense label="Address:" style="width: 25rem; font-size: smaller">
             <q-card>
               <q-card-section class="q-py-xs">
                  <q-select class="q-mt-xs" v-model="landlord.Address1" :options="Street" dense filled label="Street:" style="width: 24rem; font-size: smaller" />
                  <q-select class="q-mt-xs" v-model="landlord.Address2" :options="Barangay" dense filled label="Barangay:" style="width: 24rem; font-size: smaller" />
                  <q-select class="q-mt-xs" v-model="landlord.Address3" :options="Municipality" dense filled label="Municipality:" style="width: 24rem; font-size: smaller" />
                  <q-select class="q-mt-xs" v-model="landlord.Address4" :options="Province" dense filled label="Province:" style="width: 24rem; font-size: smaller" />
               </q-card-section>
             </q-card>
          </q-expansion-item>
          </div>

        <q-input dense filled v-model="landlord.HousingUnit" placeholder="Housing Unit" style="width: 25rem; font-size: smaller" />

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
import { Options, Vue } from "vue-class-component";
import { AccountCreateStudentInfo, AccountCreateLandlordInfo } from "src/store/AccountsCreateForm/state";
import { mapState} from "vuex";

@Options({
  computed: {
    ...mapState ("AccountsCreateForm", ["allLandlordAccount", "allStudentAccount"]),
  }
})

// interface fStudent {
//   username: string;
//   password: string;
//   email: string;
//   MobileNo: string;
//   College: string;
//   Department: string;
//   Degree: string;
//   Year: string;
//   firstname: string;
//   middlename: string;
//   lastname: string;
//   birthdate: string;
//   Address1: string;
//   Address2: string;
//   Address3: string;
//   Address4: string;
//   HousingUnit: string;

// }
// interface fLanlord {
//   username: string;
//   password: string;
//   MobileNo: string;
//   firstname: string;
//   middlename: string;
//   lastname: string;
//   birthdate: string;
//   Address1: string;
//   Address2: string;
//   Address3: string;
//   Address4: string;
//   HousingUnit: string;

// }

export default class AccountsCreateForm extends Vue{
  tab = "student";
  allStudentAccount!: AccountCreateStudentInfo[];
  allLandlordAccount!: AccountCreateLandlordInfo[];

// student: fStudent =
// {
//   username: "",
//   password: "",
//   email: "",
//   MobileNo: "",
//   College: "",
//   Department: "",
//   Degree: "",
//   Year: "",
//   firstname: "",
//   middlename: "",
//   lastname: "",
//   birthdate: "",
//   Address1: "",
//   Address2: "",
//   Address3: "",
//   Address4: "",
//   HousingUnit: "",

// }
// landlord: fLanlord =
// {
//   username: "",
//   password: "",
//   MobileNo: "",
//   firstname: "",
//   middlename: "",
//   lastname: "",
//   birthdate: "",
//   Address1: "",
//   Address2: "",
//   Address3: "",
//   Address4: "",
//   HousingUnit: "",
// }

  // Course Choices Info

college = [
  "College of Agriculture",
  "College of Business Administration and Accountancy",
  "College of Education",
  "College of Engineering",
  "College of Fisheries",
  "College of Forestry and Environmental Studies",
  "College of Health Sciences",
  "College of Hotel and Restaurant Management",
  "College of Information Technology",
  "King Faisal Center for Islamic, Arabic and Asian Studies",
  "College of Natural Sciences and Mathematics",
  "College of Public Affairs",
  "College of Social Sciences and Humanities",
  "College of Sports, Physical Education and Recreation",
  "College of Law",
  "College of Medicine",
  "Graduate School"
]

Department = [
  "...",
]

Degree = [
  "..."
]

Year = [
  "1st Year College",
  "2nd Year College",
  "3rd Year College",
  "4th Year College",
]

  //Address Choices Info

Street = [
  "Sacayo Street",
]

Barangay = [
  "Bangon",
]

Municipality = [
  "Marawi City",
]

Province = [
  "Lanao Del Sur 9700",
]

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
