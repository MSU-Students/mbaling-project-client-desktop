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
        <q-tab name="landlord" label="Landlord" :ripple="false" />
      </q-tabs>

      <q-separator></q-separator>
      <!-- Student -->
      <q-tab-panels v-model="tab">
        <q-tab-panel class="q-pa-none q-pt-md" name="student">
          <q-card-section class="q-py-xs row items-center justify-evenly">
            <q-icon class="mbi-account" size="4rem" color="primary" />
          </q-card-section>
          <q-card-section>
            <div class="q-gutter-y-sm column flex flex-center">
              <q-input
                dense
                filled
                v-model="currentStudent.username"
                placeholder="Username"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="currentStudent.password"
                placeholder="Password"
                type="password"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="currentStudent.email"
                placeholder="E-mail"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="currentStudent.contactNo"
                mask="(+63) ###-###-####"
                placeholder="Mobile Number"
                style="width: 25rem; font-size: smaller"
              />
              <!-- <q-input dense filled v-model="student.course" placeholder="Course:" style="width: 25rem; font-size: smaller" /> -->

              <div style="max-width: 25rem">
                <q-expansion-item
                  header-class="bg-grey-3 text-grey-7"
                  dense
                  label="Course:"
                  style="width: 25rem; font-size: smaller"
                >
                  <q-card>
                    <q-card-section class="q-py-xs">
                      <q-select
                        class="q-mt-xs"
                        v-model="currentStudent.college"
                        :options="College"
                        dense
                        filled
                        label="College:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        :v-model="
                          currentStudent.college ==
                            'College of Business Administration and Accountancy' ||
                          'College of Information Technology' ||
                          'King Faisal Center for Islamic, Arabic and Asian Studies'
                            ? selectedDepartment()
                            : selectedDepartment
                        "
                        v-model="currentStudent.department"
                        :options="Department"
                        dense
                        filled
                        label="Department:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        :v-model="
                          currentStudent.college ==
                            'College of Business Administration and Accountancy' ||
                          'College of Information Technology' ||
                          'King Faisal Center for Islamic, Arabic and Asian Studies'
                            ? selectedDegree()
                            : selectedDegree
                        "
                        v-model="currentStudent.degree"
                        :options="Degree"
                        dense
                        filled
                        label="Degree:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="currentStudent.year"
                        :options="Year"
                        dense
                        filled
                        label="Year:"
                        style="width: 24rem; font-size: smaller"
                      />
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </div>

              <q-input
                dense
                filled
                v-model="currentStudent.firstname"
                placeholder="Firstname"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="currentStudent.middlename"
                placeholder="Middlename"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="currentStudent.lastname"
                placeholder="Lastname"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="currentStudent.birthdate"
                mask="##/##/####"
                placeholder="Birthdate"
                style="width: 25rem; font-size: smaller"
              >
                <!-- <q-btn class="q-pt-sm q-pr-sm" unelevated :ripple="false" size="xs" icon="warning" ></q-btn> -->
              </q-input>
              <!-- <q-date
                       v-model="student.birthdate"
                       minimal
                       /> -->
              <div style="max-width: 25rem">
                <q-expansion-item
                  header-class="bg-grey-3 text-grey-7"
                  dense
                  label="Address:"
                  style="width: 25rem; font-size: smaller"
                >
                  <q-card>
                    <q-card-section class="q-py-xs">
                      <q-select
                        class="q-mt-xs"
                        v-model="currentStudent.province"
                        :options="Province"
                        dense
                        filled
                        label="Province:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="currentStudent.municipality"
                        :options="Municipality"
                        dense
                        filled
                        label="Municipality:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="currentStudent.barangay"
                        :options="Barangay"
                        dense
                        filled
                        label="Barangay:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="currentStudent.street"
                        :options="Street"
                        dense
                        filled
                        label="Street:"
                        style="width: 24rem; font-size: smaller"
                      />
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </div>

              <q-input
                dense
                filled
                v-model="currentStudent.housingUnit"
                placeholder="Housing Unit"
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
                label="create"
                @click="createStudent()"

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
              v-for="landlord in allLandlordAccount"
              :key="landlord.username"
              class="q-gutter-y-sm column flex flex-center"
            >
              <q-input
                dense
                filled
                v-model="landlord.username"
                placeholder="Username"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="landlord.password"
                placeholder="Password"
                type="password"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="landlord.MobileNo"
                mask="####-###-####"
                placeholder="Mobile Number"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="landlord.firstname"
                placeholder="Firstname"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="landlord.middlename"
                placeholder="Middlename"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="landlord.lastname"
                placeholder="Lastname"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="landlord.birthdate"
                placeholder="Birthdate"
                mask="##/##/####"
                style="width: 25rem; font-size: smaller"
              />

              <div style="max-width: 25rem">
                <q-expansion-item
                  header-class="bg-grey-3 text-grey-7"
                  dense
                  label="Address:"
                  style="width: 25rem; font-size: smaller"
                >
                  <q-card>
                    <q-card-section class="q-py-xs">
                      <q-select
                        class="q-mt-xs"
                        v-model="landlord.Address1"
                        :options="Street"
                        dense
                        filled
                        label="Street:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="landlord.Address2"
                        :options="Barangay"
                        dense
                        filled
                        label="Barangay:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="landlord.Address3"
                        :options="Municipality"
                        dense
                        filled
                        label="Municipality:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="landlord.Address4"
                        :options="Province"
                        dense
                        filled
                        label="Province:"
                        style="width: 24rem; font-size: smaller"
                      />
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </div>

              <q-input
                dense
                filled
                v-model="landlord.HousingUnit"
                placeholder="Housing Unit"
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
import {
  AccountCreateStudentInfo,
  AccountCreateLandlordInfo,
} from "src/store/AccountsCreateForm/state";
import { mapState, mapActions } from "vuex";
import { StudentRowsInfo } from "src/store/RecordsStudent/state";

@Options({
  computed: {
    ...mapState("RecordsStudent", [
      "allStudentRecords",
      "activeStudentRecords",
    ]),
  },
  methods: {
    ...mapActions("RecordsStudent", ["newStudent"]),
  },
})
export default class AccountsCreateForm extends Vue {
  tab = "student";
  allStudentRecords!: StudentRowsInfo[];
  allLandlordAccount!: AccountCreateLandlordInfo[];
  newStudent!: (payload: StudentRowsInfo) => Promise<void>;
  Department: any[] = [];
  Degree: any[] = [];

  //Courses Choices
  College = [
    "College of Business Administration and Accountancy",
    "College of Information and Computing Sciences",
    "King Faisal Center for Islamic, Arabic and Asian Studies",
  ];

  selectedDepartment() {
    if (
      this.currentStudent.college ==
      "College of Business Administration and Accountancy"
    ) {
      return (this.Department = [
        "Department of Economic",
        "Department of Marketing",
        "Department of Management",
        "Department of Accounting",
      ]);
    } else if (
      this.currentStudent.college ==
      "College of Information and Computing Sciences"
    ) {
      return (this.Department = [
        "Department of Information Sciences",
        "Department of Computing Sciences",
      ]);
    } else if (
      this.currentStudent.college ==
      "King Faisal Center for Islamic, Arabic and Asian Studies"
    ) {
      return (this.Department = [
        "Department of International Relations",
        "Department of Islamic Studies",
        "Department of Teaching Arabic",
      ]);
    }
  }

  selectedDegree() {
    if (
      this.currentStudent.college ==
      "College of Business Administration and Accountancy"
    ) {
      return (this.Degree = [
        "Accountancy",
        "Business Economics",
        "BSBA Entrepreneurial Marketing",
        "BSBA Management",
        "BSBA Human Resource Management",
        "BSBA Marketing Management",
        "BSBA Entrepreneurship",
      ]);
    } else if (
      this.currentStudent.college ==
      "College of Information and Computing Sciences"
    ) {
      return (this.Degree = [
        "Bachelor of Science in Computer Science",
        "Bachelor of Science in Entertaiment and Multimedia Computing",
        "Bachelor of Science in Information System",
        "Bachelor of Science in information Technology (Database)",
        "Bachelor of Science in information Technology (Networking)",
      ]);
    } else if (
      this.currentStudent.college ==
      "King Faisal Center for Islamic, Arabic and Asian Studies"
    ) {
      return (this.Degree = [
        "Bachelor of Arts in Islamic Studies (Shari'ah)",
        "Bachelor of Science in Teaching Arabic",
        "Bachelor of Science in International Relations",
      ]);
    }
  }

  Year = [
    "1st Year College",
    "2nd Year College",
    "3rd Year College",
    "4th Year College",
  ];

  //Address Choices Info

  Province = ["Lanao Del Sur"];

  Municipality = ["Marawi City"];

  Barangay = ["MSU - Marawi"];

  Street = ["5th Street", "4th Street"];

  //Functions for adding newStudentsAccount

  defaultStudent: StudentRowsInfo = {
    number: "",
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

  async resetModel() {
    this.currentStudent = {
      number: "",
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
  }
  currentStudent = { ...this.defaultStudent };

  async createStudent() {
    await this.newStudent(this.currentStudent);
    this.resetModel();
    this.$q.notify({
      type: "positive",
      message: "Success",
    });
  }
}
</script>
