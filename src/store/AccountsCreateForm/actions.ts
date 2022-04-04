import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AccountCreateInterface, AccountCreateStudentInfo } from './state';

const actions: ActionTree<AccountCreateInterface, StateInterface> = {
  newStudent (context, newStudent: AccountCreateStudentInfo) {
    context.commit('addStudent', newStudent);
  },
};

export default actions;
