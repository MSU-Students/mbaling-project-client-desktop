import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { StudentStateInterface } from './state';

const actions: ActionTree<StudentStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
