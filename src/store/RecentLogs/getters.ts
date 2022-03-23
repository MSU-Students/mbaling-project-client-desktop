import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { RecentStateInterface } from './state';

const getters: GetterTree<RecentStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
