import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { StudentRowsInfo, StudentStateInterface } from './state';

const actions: ActionTree<StudentStateInterface, StateInterface> = {
  newStudent (context, payload: StudentRowsInfo) {
    context.commit('addStudent', payload);
  },
  deleteStudent(context, targetStudent: StudentRowsInfo) {
    context.commit('removeStudent', targetStudent);
  }
};

export default actions;
