<template>
  <q-layout view="hHh Lpr lff" container style="height: 40rem">
    <div class="row">
    <div class="col-10">
    <q-scroll-area style="height: 40rem; max-width: 77rem">
      <div>
        <div class="q-pa-md q-gutter-sm row">
          <q-input
            outlined
            color="green"
            rounded
            dense
            debounce="300"
            v-model="search"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <q-table
          class="cursor-pointer"
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
         class="q-mt-md flex-center text-center text-primary">
          <q-avatar
            class="q-mt-sm q-ma-md"
            size="8rem"
            color="primary"
            text-color="secondary"
          >
            <!-- <img :src="student.prfphoto"/> -->
            N
          </q-avatar>
          <div class="info-username defaultfont">
            <p>@{{ currentLandlord.username }}</p>
            <span class="defaultfont-bold info-fullname text-uppercase">
              {{ currentLandlord.fName }} {{ currentLandlord.mName }}
              {{ currentLandlord.lName }}
            </span>
            <p class="info-other defaultfont" style="font-size: x-small">
              {{ currentLandlord.username }} <br />
              {{ currentLandlord.degree }}, {{ currentLandlord.yearAdmit }} <br />
              {{ currentLandlord.department }} <br />
              {{ currentLandlord.college }}
            </p>
            <p class="defaultfont" style="font-size: x-small">
              {{ currentLandlord.email }} <br />
              {{ currentLandlord.contact }} <br />
              {{ currentLandlord.birthdate }} <br />
              {{ currentLandlord.address1 }}, {{ currentLandlord.address2 }}
              <br />
              {{ currentLandlord.address3 }}, {{ currentLandlord.address4 }} <br />
              {{ currentLandlord.housingunit }}
            </p>
          </div>
        </div>
         <q-page v-else class="row items-center justify-evenly">
        <q-img
          src="~assets/mbaling-logo-red.svg"
          style="max-width: 10rem"
        />
      </q-page>
      </div>
    </div>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters, mapState } from "vuex";
import { UserDto } from "src/services/rest-api";
import { AUser } from "src/store/auth/state";
import { Users } from "src/store/Records/state";

@Options({
  methods: {
    ...mapActions('account', ['getAllUser']),
    ...mapActions('auth', ['authUser']),
  },
  computed: {
    ...mapState('account', ['allAccount']),
    ...mapGetters("account", ["landlordAccount"]),
    ...mapState('auth', ['currentUser']),
  },
})

export default class RecordsLandlord extends Vue {
  getAllUser! : () => Promise<void>
  authUser! : () => Promise<void>

  landlordAccount!: UserDto[]
  displayInfo = false
  separator = 'cell'
  allAccount!: AUser[];
  currentUser!: AUser
  search=''



onTableRowClick(data:AUser){
  console.log(this.currentUser.id)
  this.currentLandlord = data;
  this.displayInfo = true;
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
    status: "active"
  };

  currentLandlord = { ...this.defaultLandlord };

  async mounted() {
    await this.authUser();
    console.log(this.currentUser.id)
    await this.getAllUser();
     this.currentUser.id
  }

  columns = [

    {
      name: 'username',
      align: 'center',
      label: 'USERNAME',
      field: 'username',
    },
    {
      name: 'fName',
      align: 'center',
      label: 'FIRSTNAME',
      field: 'fName',
    },
    {
      name: 'lName',
      align: 'center',
      label: 'LASTNAME',
      field: 'lName',
    },
    {
      name: 'mName',
      align: 'center',
      label: 'MIDDLENAME',
      field: 'mName',
    },
    {
      name: 'type',
      align: 'center',
      label: 'Types',
      field: 'type',
    },

    { name: 'contact',
      align: 'center',
      label: 'Contact',
      field: 'contact'
    },
    { name: 'email',
      align: 'center',
      label: 'EMAIL',
      field: 'email'
    },
    { name: 'contact',
      align: 'center',
      label: 'CONTACT NO.',
      field: 'contact'
    },
    { name: 'birthdate',
      align: 'center',
      label: 'BIRTHDATE',
      field: 'birthdate'
    },
    { name: 'address1',
      align: 'center',
      label: 'STREET',
      field: 'address1'
    },
    { name: 'address2',
      align: 'center',
      label: 'BARANGAY',
      field: 'address2'
    },
    { name: 'address3',
      align: 'center',
      label: 'MUNICIPALITY',
      field: 'address3'
    },
    { name: 'address4',
      align: 'center',
      label: 'PROVINCE',
      field: 'address4'
    },

  ];

}
</script>
