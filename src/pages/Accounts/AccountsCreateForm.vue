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
        <q-tab
          name="student"
          label="student"
          :ripple="false"

        />
        <q-tab
          name="landlord"
          label="Landlord"
          :ripple="false"

        />
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
                v-model="sInfo.username"
                placeholder="Username"
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
                v-model="sInfo.contactNo"
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
                        v-model="sInfo.college"
                        :options="College"
                        dense
                        filled
                        label="College:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        :v-model="
                          sInfo.college ==
                            'College of Business Administration and Accountancy' ||
                          'College of Information Technology' ||
                          'King Faisal Center for Islamic, Arabic and Asian Studies'
                            ? selectedDepartment()
                            : selectedDepartment
                        "
                        v-model="sInfo.department"
                        :options="Department"
                        dense
                        filled
                        label="Department:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        :v-model="
                          sInfo.college ==
                            'College of Business Administration and Accountancy' ||
                          'College of Information Technology' ||
                          'King Faisal Center for Islamic, Arabic and Asian Studies'
                            ? selectedDegree()
                            : selectedDegree
                        "
                        v-model="sInfo.degree"
                        :options="Degree"
                        dense
                        filled
                        label="Degree:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="sInfo.year"
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
                v-model="sInfo.firstname"
                placeholder="Firstname"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="sInfo.middlename"
                placeholder="Middlename"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="sInfo.lastname"
                placeholder="Lastname"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="sInfo.birthdate"
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
                        v-model="sInfo.province"
                        :options="Province"
                        dense
                        filled
                        label="Province:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="sInfo.municipality"
                        :options="Municipality"
                        dense
                        filled
                        label="Municipality:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="sInfo.barangay"
                        :options="Barangay"
                        dense
                        filled
                        label="Barangay:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="sInfo.street"
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
                v-model="sInfo.housingUnit"
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
                @click="studentAccount()"
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
            <div class="q-gutter-y-sm column flex flex-center">
              <q-input
                dense
                filled
                v-model="lInfo.username"
                placeholder="Username"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="lInfo.password"
                placeholder="Password"
                type="password"
                style="width: 25rem; font-size: smaller"
              />
               <q-input
                dense
                filled
                v-model="lInfo.email"
                placeholder="E-mail"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="lInfo.contactNo"
                mask="####-###-####"
                placeholder="Mobile Number"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="lInfo.firstname"
                placeholder="Firstname"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="lInfo.middlename"
                placeholder="Middlename"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="lInfo.lastname"
                placeholder="Lastname"
                style="width: 25rem; font-size: smaller"
              />
              <q-input
                dense
                filled
                v-model="lInfo.birthdate"
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
                        v-model="lInfo.street"
                        :options="Street"
                        dense
                        filled
                        label="Street:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="lInfo.barangay"
                        :options="Barangay"
                        dense
                        filled
                        label="Barangay:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="lInfo.municipality"
                        :options="Municipality"
                        dense
                        filled
                        label="Municipality:"
                        style="width: 24rem; font-size: smaller"
                      />
                      <q-select
                        class="q-mt-xs"
                        v-model="lInfo.province"
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
                v-model="lInfo.housingUnit"
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
                @click="landlordAccount()"
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
import { StudentRowsInfo, LandlordRowsInfo } from "src/store/RecordsStudent/state";

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
    ...mapActions("RecordsStudent", ["newStudent", "newLandlord"]),
  },
})
export default class AccountsCreateForm extends Vue {
  tab = "student";
  allStudentRecords!: StudentRowsInfo[];
  allLandlordAccount!: LandlordRowsInfo[];
  newStudent!: (payload: StudentRowsInfo) => Promise<void>;
  newLandlord!: (payload: LandlordRowsInfo) => Promise<void>;
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
      this.sInfo.college ==
      "College of Business Administration and Accountancy"
    ) {
      return (this.Department = [
        "Department of Economic",
        "Department of Marketing",
        "Department of Management",
        "Department of Accounting",
      ]);
    } else if (
      this.sInfo.college ==
      "College of Information and Computing Sciences"
    ) {
      return (this.Department = [
        "Department of Information Sciences",
        "Department of Computing Sciences",
      ]);
    } else if (
      this.sInfo.college ==
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
      this.sInfo.college ==
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
      this.sInfo.college ==
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
      this.sInfo.college ==
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

  async resetModel() {
    this.sInfo = {
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
    },
    this.lInfo = {
      number: "",
      id: "",
      landlordid: "",
      username: "",
      firstname: "",
      lastname: "",
      middlename: "",
      email: "",
      contactNo: "",
      birthdate: "",
      street: "",
      barangay: "",
      municipality: "",
      province: "",
      housingUnit: "",
    }
  }
  sInfo = { ...this.defaultStudent };
  lInfo = { ...this.defaultLandlord }

  async studentAccount() {
    await this.newStudent(this.sInfo);
    this.resetModel();
    this.$q.notify({
      type: "positive",
      message: "Student d",
    });
  }
  async landlordAccount() {
    await this.newLandlord(this.lInfo);
    this.resetModel();
    this.$q.notify({
      type: "positive",
      message: "Landlord Created",
    });
  }

}
</script>
