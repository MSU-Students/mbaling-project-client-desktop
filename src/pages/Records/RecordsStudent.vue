<template>
  <q-layout view="hHh Lpr lff" container style="height: 40rem">
    <q-scroll-area style="height: 40rem; max-width: 77rem">
      <div>
        <q-table
          class="cursor-pointer"
          :rows="allAccount"
          :columns="columns"
          row-key="number"
          :rows-per-page-options="[0]"
          :separator="separator"
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

    <div>
      <q-drawer
        v-if="rightDrawerOpen == true"
        class="bg-blue-grey-1"
        v-model="rightDrawerOpen"
        side="right"
        show-if-above
        @click="rightDrawerOpen = false"
      >
        <!-- <div>
          <q-btn
            color="primary"
            rounded
            label="X"
            @click="rightDrawerOpen = false"
          />
        </div> -->
        <div class="q-mt-md flex-center text-center text-primary">
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
            <p>@{{ currentUser.username }}</p>
            <span class="defaultfont-bold info-fullname text-uppercase">
              {{ currentUser.fName }} {{ currentUser.mName }}
              {{ currentUser.lName }}
            </span>
            <p class="info-other defaultfont" style="font-size: x-small">
              {{ currentUser.username }} <br />
              {{ currentUser.degree }}, {{ currentUser.yearAdmit }} <br />
              {{ currentUser.department }} <br />
              {{ currentUser.college }}
            </p>
            <p class="defaultfont" style="font-size: x-small">
              {{ currentUser.email }} <br />
              {{ currentUser.contact }} <br />
              {{ currentUser.birthdate }} <br />
              {{ currentUser.address1 }}, {{ currentUser.address2 }}
              <br />
              {{ currentUser.address3 }}, {{ currentUser.address4 }} <br />
              {{ currentUser.housingunit }}
            </p>
          </div>
        </div>
      </q-drawer>
    </div>

  </q-layout>
  <div class="bg-greens">
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapState } from "vuex";
import { AccountCreateStudentInfo } from "src/store/AccountsCreateForm/state";
import { UserDto } from "src/services/rest-api";
import { AUser } from "src/store/auth/state";
import { Users } from "src/store/RecordsStudent/state";

@Options({
  methods: {
    ...mapActions('account', ['getAllUser']),
  },
  computed: {
    ...mapState('account', ['allAccount']),
  },
})

export default class ManageAccount extends Vue {
  getAllUser! : () => Promise<void>

  rightDrawerOpen = false
  separator = 'cell'
  allAccount!: Users[];
  currentUser!: Users

onTableRowClick(data:Users){
  this.currentUser = data;
  this.rightDrawerOpen = true;
}

  async mounted() {
    await this.getAllUser();
  }
  columns = [

    {
      name: 'fName',
      align: 'center',
      label: 'FirstName',
      field: 'fName',
    },
    {
      name: 'degree',
      align: 'center',
      label: 'Degree',
      field: 'degree',
    },
    {
      name: 'department',
      align: 'center',
      label: 'Department',
      field: 'department',
    },
    {
      name: 'college',
      align: 'center',
      label: 'College',
      field: 'college',
    },
    {
      name: 'yearAdmit',
      align: 'center',
      label: 'Degree',
      field: 'yearAdmit',
    },
    {
      name: 'isStudent',
      align: 'center',
      label: 'Types',
      field: 'isStudent',
    },
    { name: 'contact', align: 'center', label: 'Contact', field: 'contact' },
    { name: 'email', align: 'center', label: 'Email', field: 'email' },
  ];

}
</script>
