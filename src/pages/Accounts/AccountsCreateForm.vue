<template>
  <q-page class="row justify-evenly">
    <q-card class="q-my-lg accountcreate-card" style="width: 35rem">
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
                v-model="inputStudent.fName"
                placeholder="Firstname"
                style="width: 25rem; font-size: smaller"
              />

              <q-input
                dense
                filled
                v-model="inputStudent.lName"
                placeholder="Lastname"
                style="width: 25rem; font-size: smaller"
              />

              <q-input
                dense
                filled
                v-model="inputStudent.username"
                placeholder="Username"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="inputStudent.password"
                placeholder="Password"
                type="password"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="inputStudent.email"
                placeholder="E-mail"
                style="width: 25rem; font-size: smaller"
              />

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
                        v-model="inputStudent.college"
                        :options="College"
                        dense
                        filled
                        label="College:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        :v-model="
                          inputStudent.college ==
                            'College of Business Administration and Accountancy' ||
                          'College of Information Technology' ||
                          'King Faisal Center for Islamic, Arabic and Asian Studies'
                            ? selectedDepartment()
                            : selectedDepartment
                        "
                        v-model="inputStudent.department"
                        :options="Department"
                        dense
                        filled
                        label="Department:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        :v-model="
                          inputStudent.college ==
                            'College of Business Administration and Accountancy' ||
                          'College of Information Technology' ||
                          'King Faisal Center for Islamic, Arabic and Asian Studies'
                            ? selectedDegree()
                            : selectedDegree
                        "
                        v-model="inputStudent.degree"
                        :options="Degree"
                        dense
                        filled
                        label="Degree:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="inputStudent.yearAdmit"
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
                        v-model="inputStudent.address4"
                        :options="Province"
                        dense
                        filled
                        label="Province:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="inputStudent.address3"
                        :options="Municipality"
                        dense
                        filled
                        label="Municipality:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="inputStudent.address2"
                        :options="Barangay"
                        dense
                        filled
                        label="Barangay:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="inputStudent.address1"
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
              class="q-gutter-y-sm column flex flex-center"
            >

            <q-input
                dense
                filled
                v-model="inputLandlord.fName"
                placeholder="Firstname"
                style="width: 25rem; font-size: smaller"
              />

              <q-input
                dense
                filled
                v-model="inputLandlord.lName"
                placeholder="Lastname"
                style="width: 25rem; font-size: smaller"
              />

              <q-input
                dense
                filled
                v-model="inputLandlord.username"
                placeholder="Username"
                style="width: 25rem; font-size: smaller"
              />

              <q-input
                dense
                filled
                v-model="inputLandlord.password"
                placeholder="Password"
                type="password"
                style="width: 25rem; font-size: smaller"
              />

              <q-input
                dense
                filled
                v-model="inputLandlord.email"
                placeholder="E-mail"
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
                        v-model="inputLandlord.address4"
                        :options="Province"
                        dense
                        filled
                        label="Province:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="inputLandlord.address3"
                        :options="Municipality"
                        dense
                        filled
                        label="Municipality:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="inputLandlord.address2"
                        :options="Barangay"
                        dense
                        filled
                        label="Barangay:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="inputLandlord.address1"
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
                @click="createLandlord()"
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

import { mapState, mapActions } from "vuex";
import { UserDto } from "src/services/rest-api";

@Options({
  computed: {
    ...mapState('account', ['allAccount']),
  },
  methods: {
    ...mapActions('account', [
      'addAccount',
      'editAccount',
      'deleteAccount',
      'getAllUser',
    ]),
  },
})

export default class AccountsCreateForm extends Vue {

  addAccount!: (payload: UserDto) => Promise<void>;
  editAccount!: (payload: UserDto) => Promise<void>;
  deleteAccount!: (payload: UserDto) => Promise<void>;
  getAllUser!: () => Promise<void>;
  allAccount!: UserDto[];

  tab = "student";
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
      this.inputStudent.college ==
      "College of Business Administration and Accountancy"
    ) {
      return (this.Department = [
        "Department of Economic",
        "Department of Marketing",
        "Department of Management",
        "Department of Accounting",
      ]);
    } else if (
      this.inputStudent.college ==
      "College of Information and Computing Sciences"
    ) {
      return (this.Department = [
        "Department of Information Sciences",
        "Department of Computing Sciences",
      ]);
    } else if (
      this.inputStudent.college ==
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
      this.inputStudent.college ==
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
      this.inputStudent.college ==
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
      this.inputStudent.college ==
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

  addNewAccount = false;
  //Functions for adding newStudentsAccount

  inputStudent: any = {
    fName: "",
    lName: "",
    type: "student",
    status: "",
    username: "",
    password: "",
    birthdate: "",
    degree: "",
    department: "",
    college: "",
    contact: "",
    gender: "",
    year: "",
    address1: "",
    address2: "",
    address3: "",
    address4: "",
    housingunit: "",
    chatLink: "",
    prfphoto: 0,
    mapLink: "",
    housingID: 0
  };

  inputLandlord: any = {
    fName: "",
    lName: "",
    type: "landlord",
    status: "",
    username: "",
    password: "",
    birthdate: "",
    degree: "",
    department: "",
    college: "",
    contact: "",
    gender: "",
    year: "",
    address1: "",
    address2: "",
    address3: "",
    address4: "",
    housingunit: "",
    chatLink: "",
    prfphoto: 0,
    mapLink: "",
    housingID: 0
  };

  async resetModel() {
    this.inputStudent = {
      fName: "",
    lName: "",
    type: "",
    status: "",
    username: "",
    password: "",
    birthdate: "",
    degree: "",
    department: "",
    college: "",
    contact: "",
    gender: "",
    year: "",
    address1: "",
    address2: "",
    address3: "",
    address4: "",
    housingunit: "",
    profile: ""

    };
  }

  async createStudent() {
   await this.addAccount(this.inputStudent);
    this.addNewAccount = false;
    this.resetModel();
     this.$q.notify({
          position: 'bottom',
          color: "secondary",
          textColor: "primary",
          type: 'positive',
          classes: "defaultfont",
          message: 'Account Created',
        });
  }

  async createLandlord() {
   await this.addAccount(this.inputLandlord);
    this.addNewAccount = false;
    this.resetModel();
    this.$q.notify({
          position: 'bottom',
          color: "secondary",
          textColor: "primary",
          type: 'positive',
          classes: "defaultfont",
          message: 'Account Created',
        });
  }
}
</script>
<style>
.accountcreate-card {
  border-radius: 0px 0px 0px 0px !important;
}
</style>
