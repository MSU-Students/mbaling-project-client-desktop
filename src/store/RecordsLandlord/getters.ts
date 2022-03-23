import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { LandlordStateInterface } from './state';

const getters: GetterTree<LandlordStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
