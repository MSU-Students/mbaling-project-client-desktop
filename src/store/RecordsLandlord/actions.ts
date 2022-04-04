import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { LandlordStateInterface } from './state';

const actions: ActionTree<LandlordStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
