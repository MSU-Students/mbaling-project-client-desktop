import { MutationTree } from 'vuex';
import { StudentRowsInfo, LandlordRowsInfo, StudentStateInterface } from './state';

const mutation: MutationTree<StudentStateInterface> = {
  addStudent(state, payload: StudentRowsInfo){
    state.allStudentRecords.push(payload)
  },
  addLandlord(state, payload: LandlordRowsInfo){
    state.allLandlordRecords.push(payload)
  },
  removeStudent (state, targetStudent:StudentRowsInfo) {
    const index = state.allStudentRecords.findIndex((s) => {
      return s.username == targetStudent.username;
    })
    if (index >= 0) {
      state.allStudentRecords.splice(index, 1);
    }
  },
  removeLandlord (state, targetLandlord:LandlordRowsInfo) {
    const index = state.allLandlordRecords.findIndex((s) => {
      return s.username == targetLandlord.username;
    })
    if (index >= 0) {
      state.allLandlordRecords.splice(index, 1);
    }
  },
};

export default mutation;
