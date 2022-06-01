<template>
  <q-layout view="hHh Lpr lff" container style="height: 40rem">
    <div class="row">
      <div class="col-10">
        <q-scroll-area style="height: 40rem;">
          <div>
            <div class="q-my-sm">
            <div class="row">
              <q-page-sticky expand position="top">

                <div
                  class="col"
                >
                  <p class="q-mt-md q-ml-md defaultfont" style="font-size: x-large;">Landlord's Records</p>
                </div>

      <!-- Search Function -->
                <div class="col">
                  <!-- <div class="q-mb-xs row float-right" >
                    <q-input
                      color="primary"
                      dense
                      style="max-width: 20rem;"
                      debounce="300"
                      v-model="search"
                      placeholder="Search"
                    >
                      <template v-slot:append>
                        <q-icon name="search" />
                      </template>
                    </q-input>
                  </div> -->
                </div>
                <div class="col" style="max-width: 16rem"></div>
              </q-page-sticky>
            </div>
            </div>
            <q-separator class="q-mt-xl"/>

            <q-table
              class="cursor-pointer q-data-table"
              :rows="landlordAccount"
              :columns="columns"
              row-key="number"
              :rows-per-page-options="[0]"
              :separator="separator"
              :filter="search"
              dense
              hide-bottom
            >
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td
                    v-for="col in props.cols"
                    :key="col.name"
                    :props="props"
                    @click="onTableRowClick(props.row)"
                  >
                    {{ col.value }}
                  </q-td>
                </q-tr>
                <q-tr v-show="props.expand" :props="props">
                  <q-td colspan="100%">
                    <div class="text-left">
                      This is expand slot for row above: {{ props.row.name }}.
                    </div>
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
        </q-scroll-area>
      </div>

      <div class="col-2">
        <div>
          <div
            v-if="displayInfo"
            class="q-mt-md flex-center text-center text-primary"
          >
          <div class="column">
            <div class="col">
            <q-avatar
              class="q-mt-sm q-ma-md"
              size="8rem"
              color="primary"
              text-color="secondary"
            >
              <q-img
                v-if="currentLandlord.prfphoto"
                class="avatar q-pt-none q-mt-none"
                :src="`http://localhost:3000/media/${currentLandlord.prfphoto}`"
              />
              <img
                v-if="!currentLandlord.prfphoto"
                class="avatar q-pt-none q-mt-none"
                src="https://i.postimg.cc/FzcjmLj3/LOGO.jpg"
              />
            </q-avatar>
            <div class="info-username defaultfont">
              <p>@{{ currentLandlord.username }}</p>
              <span class="defaultfont-bold info-fullname text-uppercase">
                {{ currentLandlord.fName }} {{ currentLandlord.mName }}
                {{ currentLandlord.lName }}
              </span>
              <p class="info-other defaultfont" style="font-size: x-small">
                {{ currentLandlord.username }} <br />
                {{ currentLandlord.degree }}, {{ currentLandlord.yearAdmit }}
                <br />
                {{ currentLandlord.department }} <br />
                {{ currentLandlord.college }}
              </p>
              <p class="defaultfont" style="font-size: x-small">
                {{ currentLandlord.email }} <br />
                {{ currentLandlord.contact }} <br />
                {{ currentLandlord.birthdate }} <br />
                {{ currentLandlord.address1 }}, {{ currentLandlord.address2 }}
                <br />
                {{ currentLandlord.address3 }}, {{ currentLandlord.address4 }}
                <br />
                {{ currentLandlord.housingunit }}
              </p>
            </div>
            </div>
            <div class="col">
              <q-icon
              class="q-mt-xl q-mx-lg bi-snow"
              size="2rem"
              @click="onShowBoarders"/>

              <q-icon
              class="q-mt-xl q-mx-lg bi-trash"
              size="2rem"
              @click="onDeleteStudent()"/>
             <!-- <q-btn
            rounded
            dense
            style="font-size: small"
            class="q-ma-lg absolute-bottom-right defaultfont"
            label="Delete Account"
            @click="onDeleteStudent() "
            /> -->
          </div>
          </div>
          </div>
          <q-page v-else class="row items-center justify-evenly">
            <q-img
              src="~assets/mbaling-logo-red.svg"
              style="max-width: 10rem"
            />
          </q-page>

<!-- Show Boarders -->

          <q-dialog v-model="showBoarders" persistent>
              <q-card  style="width: 35rem; height: 35rem">
                 <div class="column">
                   <div class="col">
                 <span class="defaultfont-bold flex flex-center q-mt-lg" style="font-size: medium">
                  {{ currentLandlord.housingunit }}
                 </span>
                  </div>
                  <div class="col">
                 <span class="defaultfont flex flex-center q-mb-md" style="font-size: medium">
                   List of boarders
                 </span>
                  </div>
                  <div class="col">
                 <span class="defaultfont q-ml-sm q-mb-md" style="font-size: medium">
                   Account
                 </span>
                  </div>
                  <div class="col">
                    <q-scroll-area style="height: 25rem; width: 35rem">
                    <q-table
                flat
                dense
                hide-bottom
                :columns="columnStudent"
                :rows="data"
                row-key="status"
              >
              </q-table>

              <div class="col">
                 <span class="defaultfont q-ml-sm q-mb-md" style="font-size: medium">
                   Non-Account
                 </span>
                  </div>
                    </q-scroll-area>
                  </div>
                  <div class="col flex flex-center">
                    <q-btn
                      class="text-white q-mt-lg"
                      align="center"
                      :ripple="false"
                      unelevated
                      rounded
                      dense
                      no-caps
                      style="height: 1.5rem; width: 6rem; font-size: smaller"
                      color="primary"
                      label="close"
                      v-close-popup
                    />
                  </div>
                 </div>
              </q-card>
          </q-dialog>

<!-- Confirm Delete -->

          <q-dialog v-model="deleteStudentDialog" persistent>
          <q-card class="flex flex-center" style="width: 30rem">
            <div class="row">
              <div @submit="delAccount(currentLandlord.id)">
            <q-card-section>
              <div class="column flex flex-center text-primary defaultfont">
                <div class="col">
              <q-icon size="3rem" class="q-my-md bi-trash" />
                </div>
                <div class="col">
              <p style="font-size: small;">Please type "Confirm" to delete Account</p>
                </div>
              </div>
              <q-input
              hint="Note: Accounts that is deleted will never retrieve"
              dense
              filled
              v-model="confirmDeleteAccount"
              style="width: 25rem; font-size: smaller" />
              </q-card-section>
              <div class="flex flex-center defaultfont">
              <q-btn
                :ripple="false"
                unelevated
                rounded
                dense
                no-caps
                outline
                class="text-#BE282D q-ma-md"
                style="height: 1.5rem; width: 6rem; font-size: smaller"
                color="primary"
                label="cancel"
                v-close-popup
              />
              <q-btn
                class="text-white q-my-md"
                align="center"
                :ripple="false"
                unelevated
                rounded
                dense
                no-caps
                style="height: 1.5rem; width: 6rem; font-size: smaller"
                color="primary"
                label="delete"
                type="submit"
                @click="delAccount(currentLandlord.id)"
                v-close-popup
              />
            </div>
            </div>
            </div>
          </q-card>
      <!--  -->
        </q-dialog>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters, mapState } from "vuex";
import { ApplicationDto, UserDto } from "src/services/rest-api";
import { AUser } from "src/store/auth/state";
import { Users } from "src/store/Records/state";

@Options({
  methods: {
    ...mapActions("account", ["getAllUser","deleteAccount"]),
    ...mapActions("auth", ["authUser"]),
    ...mapActions("application", ["getAllApplication", "updateApplication"]),
  },
  computed: {
    ...mapState("account", ["allAccount"]),
    ...mapGetters("account", ["landlordAccount"]),
    ...mapGetters("application", ["getAcceptedAccount"]),
    ...mapState("auth", ["currentUser"]),
  },
})
export default class RecordsLandlord extends Vue {
  getAllApplication!: () => Promise<void>;
  deleteAccount!: (id: UserDto) => Promise<void>;
  getAllUser!: () => Promise<void>;
  authUser!: () => Promise<void>;

  applications!: ApplicationDto[];
  getAcceptedAccount!: ApplicationDto[];
  landlordAccount!: UserDto[];
  data: any = [];
  displayInfo = false;
  separator = "cell";
  allAccount!: AUser[];
  currentUser!: AUser;
  search = "";
  confirmDeleteAccount=""


  onTableRowClick(data: AUser) {
    this.currentLandlord = data;
    this.displayInfo = true;
  }

  async resetConfirm () {
      this.confirmDeleteAccount = "";
  }

  async delAccount(val: any){
    if((this.confirmDeleteAccount == "confirm") || (this.confirmDeleteAccount == "Confirm")){
      await this.deleteAccount(val);
        this.$q.notify({
          type: 'positive',
          caption: 'Successfully Deleted ',
          message: 'Successfully',
          position: 'bottom',
          color: "secondary",
          textColor: "primary",
          classes: "defaultfont",
        });
      this.resetConfirm()
      console.log("delete Here")
    } else{
       this.$q.notify({
          type: 'warning',
          caption: 'Please type "Confirm" to delete',
          message: 'Delete Failed',
          position: 'bottom',
          color: "primary",
          textColor: "secondary",
          classes: "defaultfont",
        });
      console.log("delete failed!")
    }
  }

  deleteStudentDialog = false;

  async onDeleteStudent(){
    this.deleteStudentDialog = true;
  }

  showBoarders = false;

  async onShowBoarders(){
    this.showBoarders = true;
    console.log(this.currentLandlord.id)
    this.data = this.getAcceptedAccount.filter((i) => this.currentLandlord.id == i.landlord?.id)
  }

  defaultLandlord: any = {
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

  currentLandlord = { ...this.defaultLandlord };

  async mounted() {
    await this.authUser();
    await this.getAllUser();
    await this.getAllApplication()
  }
  columnStudent = [
     {
      name: "name",
      label: "Name:",
      align: "left",
      field: (row: ApplicationDto) =>
        row.student?.fName + " " + row.student?.lName,
    },
     {
      name: "degree",
      label: "Degree:",
      align: "left",
      field: (row: ApplicationDto) =>
        row.student?.college
    },

  ];

  columns = [
    {
      name: "id",
      required: true,
      label: "LANDLORD ID",
      align: "center",
      field: "id",
      sortable: true,
    },
    {
      name: "username",
      align: "center",
      label: "USERNAME",
      field: "username",
    },
    {
      name: "fName",
      align: "center",
      label: "FIRSTNAME",
      field: "fName",
    },
    {
      name: "lName",
      align: "center",
      label: "LASTNAME",
      field: "lName",
    },
    {
      name: "mName",
      align: "center",
      label: "MIDDLENAME",
      field: "mName",
    },
    {
      name: "gender",
      align: "center",
      label: "GENDER",
      field: "gender",
    },
    {
      name: "address1",
      align: "center",
      label: "STREET",
      field: "address1"
    },
    {
      name: "address2",
      align: "center",
      label: "BARANGAY",
      field: "address2"
    },
    {
      name: "address3",
      align: "center",
      label: "MUNICIPALITY",
      field: "address3",
    },
    {
      name: "address4",
      align: "center",
      label: "PROVINCE",
      field: "address4"
    },
    {
      name: "housingunit",
      align: "center",
      label: "HOUSING UNIT",
      field: "housingunit",
    },
    {
      name: "email",
      align: "center",
      label: "EMAIL",
      field: "email"
    },
    {
      name: "contact",
      align: "center",
      label: "CONTACT NO.",
      field: "contact",
    },
    {
      name: "birthdate",
      align: "center",
      label: "BIRTHDATE",
      field: "birthdate",
    },
  ];
}
</script>
<style>
.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50% !important;
  border: 2px solid rgb(190, 40, 45) !important;
}
.q-data-table td {
    text-align:left;
}

</style>
