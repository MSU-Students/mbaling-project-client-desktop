<template>
  <q-layout view="lHr Lpr lFr">
    <q-header elevated class="bg-primary q-px-md q-py-sm" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-img src="~assets/mbaling-logo-horizontal.svg" style="max-width: 14rem" />
        </q-toolbar-title>
        <q-btn
          class="q-mt-none"
          flat
          @click="toggleRightDrawer"
          size="1.5rem"
          dense
          icon="menu"
        />
      </q-toolbar>

      <!-- <q-tabs align="left">
        <q-route-tab to="" :ripple="false" label="Recent Logs" />
        <q-route-tab to="" :ripple="false" size="sm"  label="Records" />
        <q-route-tab to="" :ripple="false" size="sm"  label="Accounts" />
      </q-tabs> -->

      <q-btn-group flat>
        <q-btn
          to="/RecentLogs"
          :ripple="false"
          size="sm"
          icon="description"
          label="Recent Logs"
        />
        <q-btn to="/Records" :ripple="false" size="sm" icon="person" label="Records" />
        <q-btn to="/Accounts" :ripple="false" size="sm" icon="person" label="Accounts" />
      </q-btn-group>
    </q-header>

    <q-drawer side="right" v-model="rightDrawerOpen" overlay elevated>
      <q-list>
        <q-btn
          class="q-ma-sm absolute-top-right"
          dense
          flat
          size="xl"
          :ripple="false"
          color="primary"
          icon="arrow_forward"
          @click="toggleRightDrawer"
        />

        <div class="q-mt-xl flex flex-center">
          <q-avatar
            class="q-mt-xl q-ma-md"
            size="8rem"
            text-color="secondary"
            color="primary"
          >
            N
            <!-- <img src="~assets/mbaling-logo-vertical.svg"> -->
          </q-avatar>
        </div>
        <div class="flex flex-center">@admin_hmd</div>

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
            label="edit"
          />
        </div>

        <q-btn
          class="q-ma-lg absolute-bottom-right"
          dense
          flat
          size="md"
          :ripple="false"
          color="primary"
          icon="logout"
          label="Logout"
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

export default class MainLayout extends Vue {
  rightDrawerOpen = false;

  async toggleRightDrawer() {
    this.rightDrawerOpen = !this.rightDrawerOpen;
  }
}
// import { defineComponent, ref } from "vue";

// export default defineComponent({
//   name: "MainLayout",

//   setup() {
//     const rightDrawerOpen = ref(false);
//     return {
//       rightDrawerOpen,
//       toggleRightDrawer() {
//         rightDrawerOpen.value = !rightDrawerOpen.value;
//       },
//     };
//   },
// });
</script>
