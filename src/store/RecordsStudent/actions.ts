import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { StudentRowsInfo, LandlordRowsInfo, StudentStateInterface } from './state';

const actions: ActionTree<StudentStateInterface, StateInterface> = {
  newStudent (context, payload: StudentRowsInfo) {
    context.commit('addStudent', payload);
  },
  newLandlord (context, payload: LandlordRowsInfo) {
    context.commit('addLandlord', payload);
  },
  deleteStudent(context, targetStudent: StudentRowsInfo) {
    context.commit('removeStudent', targetStudent);
  },
  deleteLandlord(context, targetLandlord: LandlordRowsInfo) {
    context.commit('removeLandlord', targetLandlord);
  }
};

export default actions;
