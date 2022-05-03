<template>
  <div class="row">
    <div class="col-3">
      <div style="height: 40rem">
        <div class="q-mt-lg flex flex-center">
          <!-- SEARCH INPUT FIELD -->
          <q-form @submit="searchAction()">
            <q-input
              v-model="search"
              filled
              outlined
              dense
              clearable
              placeholder="Search for users"
              class="searchinput"
              style="width: 20rem"
              @clear="clearSearch()"
              @keyup.enter="searchAction()"
            >
              <template v-slot:prepend>
                <q-btn flat round size="sm">
                  <q-icon name="bi-search" type="submit" size="xs" />
                </q-btn>
              </template>
            </q-input>
          </q-form>
          <q-separator class="q-mt-sm" color="grey" style="width: 20rem" />
        </div>

        <!-- DISPLAY SEARCH -->

        <q-list v-for="(result, index) in searchResultUser" :key="index">
          <q-item clickable class="row items-center" @click="onShowClick">
            <q-item-section avatar>
              <q-avatar size="xl">
                <img :src="result.prfphoto" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label
                lines="1"
                class="defaultfont-semibold"
                style="font-size: medium"
              >
                {{ result.fName }}
              </q-item-label>
              <q-item-label lines="1" style="font-size: small">
                {{ result.address1 }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <!-- -------------------------------------- -->
    </div>
    <q-separator vertical color="grey" />
    <div class="col-8" style="background-color: #f0f0f0cc; width: 71rem">

      <!-- STUDENT SHOW INFO -->

      <div v-if="displayInfo">
        <div class="q-ma-xl row items-start">
          <div class="col">
            <div class="flex flex-center">
              <q-avatar size="12rem" color="primary" text-color="secondary">
                S
              </q-avatar>
            </div>
            <div class="defaultfont">
              <q-input
                v-model="currentStudent.email"
                readonly
                disable
                dense
                label="E-mail"
                style="width: 20rem"
              />
              <q-input
                v-model="currentStudent.contact"
                readonly
                disable
                dense
                label="Mobile Number"
                style="width: 20rem"
              />
              <q-input
                v-model="currentStudent.gender"
                readonly
                disable
                dense
                label="Gender"
                style="width: 20rem"
              />
              <q-input
                v-model="currentStudent.birthdate"
                readonly
                disable
                dense
                label="Date of Birth"
                style="width: 20rem"
              />
            </div>
          </div>
          <div class="col">
            <span>@{{ currentStudent.username }} </span>
            <q-input
              v-model="currentStudent.fName"
              readonly
              disable
              label="First Name"
              style="width: 20rem"
            />
            <q-input
              v-model="currentStudent.mName"
              readonly
              disable
              label="Middle Name"
              style="width: 20rem"
            />
            <q-input
              v-model="currentStudent.lName"
              readonly
              disable
              label="Last Name"
              style="width: 20rem"
            />
            <q-input
              v-model="currentStudent.address1"
              readonly
              disable
              dense
              label="Province"
              style="width: 20rem"
            />
            <q-input
              v-model="currentStudent.address2"
              readonly
              disable
              dense
              label="Municipality"
              style="width: 20rem"
            />
            <q-input
              v-model="currentStudent.address3"
              readonly
              disable
              dense
              label="Barangay"
              style="width: 20rem"
            />
            <q-input
              v-model="currentStudent.address4"
              readonly
              disable
              dense
              label="Street"
              style="width: 20rem"
            />
          </div>
          <div class="col"></div>
        </div>
        <div class="row q-ma-xl">
          <div class="col q-mr-lg">
          Student Course
          <q-btn
          class="float-right"
            label="edit"
            :ripple="false"
            unelevated
            rounded
            dense
            no-caps
            color="primary"
            text-color="white"
            style="height: 1.5rem; width: 5rem; font-size: smaller"
          />

          <q-input
            v-model="currentStudent.degree"
            readonly
            disable
            dense
            label="Degree"
            style="width: 41rem"
          />
          <q-input
            v-model="currentStudent.department"
            readonly
            disable
            dense
            label="Department"
            style="width: 41rem"
          />
          <q-input
            v-model="currentStudent.college"
            readonly
            disable
            dense
            label="College"
            style="width: 41rem"
          />
          </div>
          <div class="col-4"></div>
        </div>
      </div>

      <!-- LANDLORD SHOW INFO -->

      <!-- <div v-if="displayInfo">
        <div class="q-ma-xl row items-start">
          <div class="col">
            <div class="flex flex-center">
              <q-avatar size="12rem" color="primary" text-color="secondary">
                L
              </q-avatar>
            </div>
            <div class="defaultfont">
              <q-input
                v-model="currentStudent.email"
                readonly
                disable
                dense
                label="E-mail"
                style="width: 20rem"
              />
              <q-input
                v-model="currentStudent.contact"
                readonly
                disable
                dense
                label="Mobile Number"
                style="width: 20rem"
              />
              <q-input
                v-model="currentStudent.gender"
                readonly
                disable
                dense
                label="Gender"
                style="width: 20rem"
              />
              <q-input
                v-model="currentStudent.birthdate"
                readonly
                disable
                dense
                label="Date of Birth"
                style="width: 20rem"
              />
            </div>
          </div>
          <div class="col">
           <span> @{{ currentStudent.username }} </span>
            <q-input
              v-model="currentStudent.fName"
              readonly
              disable
              label="First Name"
              style="width: 20rem"
            />
            <q-input
              v-model="currentStudent.mName"
              readonly
              disable
              label="Middle Name"
              style="width: 20rem"
            />
            <q-input
              v-model="currentStudent.lName"
              readonly
              disable
              label="Last Name"
              style="width: 20rem"
            />
            <q-input
              v-model="currentStudent.address1"
              readonly
              disable
              dense
              label="Province"
              style="width: 20rem"
            />
            <q-input
              v-model="currentStudent.address2"
              readonly
              disable
              dense
              label="Municipality"
              style="width: 20rem"
            />
            <q-input
              v-model="currentStudent.address3"
              readonly
              disable
              dense
              label="Barangay"
              style="width: 20rem"
            />
            <q-input
              v-model="currentStudent.address4"
              readonly
              disable
              dense
              label="Street"
              style="width: 20rem"
            />
          </div>
          <div class="col">
            <span class="defaultfont-bold" style="font-size: medium;">PIRATE KING APARTMENT</span><br>
            <span class="defaultfont" style="font-size: medium;">List of boarders</span> <br>


              <q-list v-for="(result, index) in searchResultUser" :key="index">
          <q-list class="row items-center" bordered separator style="background-color: white; width: 20rem;">
            <q-item-section class="q-ma-xs" avatar>
              <q-avatar size="xl">
                <img :src="result.prfphoto" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label
                lines="1"
                class="defaultfont-semibold"
                style="font-size: medium"
              >
                {{ result.fName }}
              </q-item-label>
              <q-item-label lines="1" style="font-size: small">
                {{ result.address1 }}
              </q-item-label>
            </q-item-section>
          </q-list>
          <q-list class="row items-center" bordered separator style="background-color: white; width: 20rem;">
            <q-item-section class="q-ma-xs" avatar>
              <q-avatar size="xl">
                <img :src="result.prfphoto" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label
                lines="1"
                class="defaultfont-semibold"
                style="font-size: medium"
              >
                {{ result.fName }}
              </q-item-label>
              <q-item-label lines="1" style="font-size: small">
                {{ result.address1 }}
              </q-item-label>
            </q-item-section>

          </q-list>
        </q-list>


          </div>
        </div>
      </div> -->

      <!-- RED LOGO -->

      <div v-else class="q-mt-xl q-pt-xl flex flex-center">
        <q-img
          class="q-mt-xl"
          src="~assets/mbaling-logo-red.svg"
          style="max-width: 15rem"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Users } from "src/store/Records/state";
import { Options, Vue } from "vue-class-component";
import { mapActions, mapState } from "vuex";

@Options({
  methods: {
    ...mapActions("account", ["getAllUser"]),
  },
  computed: {
    ...mapState("account", ["allAccount"]),
  },
})
export default class LogsPage extends Vue {
  search = "";
  displayInfo = false;
  users!: Users[];

  onShowClick(data: Users) {
    this.currentStudent = data;
    this.displayInfo = true;
  }

  defaultStudent: Users = {
    fName: "",
    lName: "",
    type: "student",
    email: "",
    birthdate: "",
    degree: "",
    department: "",
    college: "",
    contact: "",
    gender: "",
    yearAdmit: "",
    address1: "",
    address2: "",
    address3: "",
    address4: "",
    housingunit: "",
    status: "active",
  };

  currentStudent = { ...this.defaultStudent };

  searchResultUser: Users[] = [
    {
      id: 111,
      username: "luffy12",
      password: "password",
      fName: "luffy",
      mName: "D",
      lName: "Monkey",
      type: "student",
      email: "123@gmail.com",
      birthdate: "October 19, 1998",
      degree: "BS-IT",
      department: "Computer Department",
      college: "College of Technology",
      contact: "09126337532",
      gender: "male",
      yearAdmit: "2018",
      address1: "Bangon",
      address2: "Sacayo Street",
      address3: "Marawi City",
      address4: "Lanao Del Sur",
      housingunit: "PIRATEs",
      status: "active",
    },
    // {
    //   id: 111,
    //   username: "zoro09",
    //   password: "password",
    //   fName: "zoro",
    //   mName: "M",
    //   lName: "Eye",
    //   type: "landlord",
    //   email: "123@gmail.com",
    //   birthdate: "October 19, 1998",
    //   degree: "BS-IT",
    //   department: "Computer Department",
    //   college: "College of Technology",
    //   contact: "09126337532",
    //   gender: "male",
    //   yearAdmit: "2018",
    //   address1: "Bangon",
    //   address2: "Sacayo Street",
    //   address3: "Marawi City",
    //   address4: "Lanao Del Sur",
    //   housingunit: "PIRATEs",
    //   status: "active",
    // },
  ];

  searchAction() {
    const resultUsers = this.users.filter(
      (user) =>
        user.fName.toLowerCase().includes(this.search.toLowerCase()) ||
        user.lName.toLowerCase().includes(this.search.toLowerCase())
    );
    this.searchResultUser = resultUsers;
  }

  clearSearch() {
    this.search = "";
  }
}
</script>




