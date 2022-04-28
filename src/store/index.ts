import { store } from "quasar/wrappers";
import { InjectionKey } from "vue";
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from "vuex";

// import example from './module-example'
// import { ExampleStateInterface } from './module-example/state';
import RecentLogs from "./RecentLogs";
import { RecentStateInterface } from "./RecentLogs/state";
import account from "./RecordsStudent"
import { AccountStateInterface } from "./RecordsStudent/state";
import RecordsLandlord from "./RecordsLandlord"
import { LandlordStateInterface } from "./RecordsLandlord/state"
import { IAuthState } from "./auth/state";
import auth from "./auth";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  account: AccountStateInterface;
  RecentLogs: RecentStateInterface;
  RecordsLandlord: LandlordStateInterface;
  auth: IAuthState;
}
// provide typings for `this.$store`
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>;
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> =
  Symbol("vuex-key");

export default store(function (/* { ssrContext } */) {
  const Store = createStore<StateInterface>({
    modules: {
      RecentLogs,
      account,
      RecordsLandlord,
      auth
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING,
  });

  return Store;
});

export function useStore() {
  return vuexUseStore(storeKey);
}
