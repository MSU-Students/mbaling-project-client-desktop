import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AccountCreateInterface } from './state';

const actions: ActionTree<AccountCreateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
