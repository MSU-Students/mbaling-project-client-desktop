import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { RecentStateInterface } from './state';

const actions: ActionTree<RecentStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
