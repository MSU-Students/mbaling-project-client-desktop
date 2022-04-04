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
            <img :src="admin.prfphoto" />
          </q-avatar>

          <div>
            <p style="font-size: small">@{{ admin.username }}</p>
            <span
              class="defaultfont-bold text-uppercase"
              style="font-size: medium"
            >
              {{ admin.firstname }} {{ admin.middlename.charAt(0) }}.
              {{ admin.lastname }}
            </span>
            <div>
              <p style="font-size: smaller; line-height: 0.85rem">
                {{ admin.position }} <br />
                {{ admin.office }}
              </p>
            </div>
          </div>
        </div>

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
          />
        </div>

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
import { Vue } from "vue-class-component";

interface Iadmin {
  username: string;
  prfphoto: string;
  firstname: string;
  middlename: string;
  lastname: string;
  position: string;
  office: string;
}

export default class MainLayout extends Vue {
  rightDrawerOpen = false;

  async toggleRightDrawer() {
    this.rightDrawerOpen = !this.rightDrawerOpen;
  }

  admin: Iadmin = {
    username: "admin_hmd",
    prfphoto: "https://cdn.quasar.dev/img/avatar3.jpg",
    firstname: "Strygwyr",
    middlename: "Sand",
    lastname: "Martell",
    position: "Secretary",
    office: "Housing Management Division",
  };
}
</script>
