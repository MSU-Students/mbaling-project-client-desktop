import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AccountCreateInterface } from './state';

const getters: GetterTree<AccountCreateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
