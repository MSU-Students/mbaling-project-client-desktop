<template>
  <q-layout view="lHr Lpr lFr" class="defaultfont">
    <q-header elevated class="q-px-md bg-primary">
      <q-toolbar>
        <q-toolbar-title>
          <q-img
            src="~assets/mbaling-logo-horizontal.svg"
            style="max-width: 10rem"
          />
        </q-toolbar-title>
        <q-btn
          icon="bi-list"
          :ripple="false"
          dense
          flat
          size="md"
          class="q-mt-none"
          @click="toggleRightDrawer"
        />
      </q-toolbar>

      <q-btn-group flat spread style="height: 2rem; width: 25rem">
        <q-btn
          icon="bi-stopwatch"
          label="Recent Logs"
          :ripple="false"
          size="sm"
          to="/logs"
        />
        <q-btn
          icon="bi-book"
          label="Records"
          :ripple="false"
          size="sm"
          to="/records"
        />
        <q-btn
          icon="bi-person"
          label="Accounts"
          :ripple="false"
          size="sm"
          to="/accounts"
        />
      </q-btn-group>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" overlay elevated side="right">
      <q-list>
        <q-btn
          icon="bi-arrow-right-short"
          :ripple="false"
          dense
          flat
          size="lg"
          color="primary"
          class="q-ma-sm absolute-top-right"
          @click="toggleRightDrawer"
        />

        <div class="q-mt-xl flex-center text-center text-primary">
          <q-avatar class="q-mt-xl q-ma-md" size="8rem">
            <q-img :src="`http://localhost:3000/media/${currentUser.prfphoto}`" />
          </q-avatar>

          <div>
            <p style="font-size: small">@{{ currentUser.username }}</p>
            <span
              class="defaultfont-bold text-uppercase"
              style="font-size: medium"
            >
              {{ currentUser.fName }} {{ currentUser.mName.charAt(0) }}.
              {{ currentUser.lName }}
            </span>
            <div>
              <p style="font-size: smaller; line-height: 0.85rem">
                {{ currentUser.position }} <br />
                {{ currentUser.office }}
              </p>
            </div>
          </div>
        </div>
<!-- Edit Profile -->
        <div class="q-mt-md flex flex-center">
          <q-btn
            label="edit"
            :ripple="false"
            unelevated
            rounded
            dense
            no-caps
            color="primary"
            text-color="white"
            style="height: 1.5rem; width: 5rem; font-size: smaller"
            @click="onShowDialog()"
          />
        </div>

    <q-dialog v-model="Dialog" persistent>
      <q-card style="width: 40rem;">
        <q-card-section>
          <div class="flex flex-center">
            <q-avatar class="q-my-md" size="8rem">
           <q-img :src="`http://localhost:3000/media/${currentUser.prfphoto}`" />
          </q-avatar>

          </div>
        </q-card-section>

          <div class="q-gutter-y-sm column flex flex-center">
          <q-input
                dense
                filled
                v-model="currentUser.fName"
                stack-label
                label="FirstName:"
                placeholder="Firstname"
                style="width: 25rem; font-size: smaller"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Please Input your FirstName']"
                hide-bottom-space
              />
          <q-input
                dense
                filled
                v-model="currentUser.lName"
                stack-label
                label="LastName:"
                placeholder="LastName"
                style="width: 25rem; font-size: smaller"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Please Input your FirstName']"
                hide-bottom-space
              />
          <q-input
                dense
                filled
                v-model="currentUser.mName"
                stack-label
                label="MiddleName:"
                placeholder="MiddleName"
                style="width: 25rem; font-size: smaller"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Please Input your FirstName']"
                hide-bottom-space
              />
          <q-input
                dense
                filled
                v-model="currentUser.username"
                stack-label
                label="UserName:"
                placeholder="UserName"
                style="width: 25rem; font-size: smaller"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Please Input your FirstName']"
                hide-bottom-space
              />
          <q-input
                dense
                filled
                v-model="currentUser.password"
                placeholder="Password"
                style="width: 25rem; font-size: smaller"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Please Input your Password']"
                hide-bottom-space
                :type="isPwd ? 'password' : 'text'"
              >
              <template v-slot:append>
                   <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility '"
                        class="cursor-pointer"
                       @click="isPwd = !isPwd"
                   />
                </template>
              </q-input>
          <q-select
                class="q-mt-xs"
                v-model="currentUser.position"
                :options="Position"
                dense
                filled
                label="Position:"
                style="width: 25rem; font-size: smaller"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Please Choose Your College']"
                hide-bottom-space
              />
          <q-select
                class="q-mt-xs"
                v-model="currentUser.office"
                :options="Office"
                dense
                filled
                label="Office:"
                style="width: 25rem; font-size: smaller"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Please Choose Your College']"
                hide-bottom-space
              />
      </div>

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
          label="save"
          @click="onSave()"
          v-close-popup
          />
        </div>
      </q-card>
    </q-dialog>

<!-- Logout Button -->
        <q-btn
          icon="bi-box-arrow-right"
          label="Logout"
          :ripple="false"
          dense
          flat
          size="sm"
          color="primary"
          class="q-ma-lg absolute-bottom-right"
          @click="() => $router.replace('/')"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { AUser } from "src/store/auth/state";
import { Options, Vue } from "vue-class-component";
import { mapActions, mapState } from "vuex";

@Options({
  methods: {
    ...mapActions("auth", ["authUser"]),
  },
  computed: {
    ...mapState("auth", ["currentUser"]),
  },
})

export default class MainLayout extends Vue {
  rightDrawerOpen = false;
  isPwd = true;

  authUser!: () => Promise<void>;
  currentUser!: AUser;


  async mounted() {
    await this.authUser();
  }

  async toggleRightDrawer() {
    this.rightDrawerOpen = !this.rightDrawerOpen;
  }

// Edit Profile
Dialog = false;
async onShowDialog(){
  this.Dialog = true;
}
async onSave(){
}
  Position = [
    "Assistant Director",
    "Secretary",
    "Officer",
  ];
  Office = [
    "Housing Management Division",
  ]

}
</script>

