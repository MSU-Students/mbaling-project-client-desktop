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
<<<<<<< HEAD
=======
import AccountsCreateForm from "./AccountsCreateForm"
import { AccountCreateInterface } from "./AccountsCreateForm/state"
import auth from './auth';
import { IAuthState } from './auth/state';
/*
>>>>>>> 77f744cace865b00c031809d6f4d2390c93b04f0

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
  RecentLogs: RecentStateInterface;
  account: AccountStateInterface;
  RecordsLandlord: LandlordStateInterface;
<<<<<<< HEAD
=======
  AccountsCreateForm: AccountCreateInterface;
  auth: IAuthState;
>>>>>>> 77f744cace865b00c031809d6f4d2390c93b04f0
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
<<<<<<< HEAD
=======
      AccountsCreateForm,
      auth
>>>>>>> 77f744cace865b00c031809d6f4d2390c93b04f0
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
