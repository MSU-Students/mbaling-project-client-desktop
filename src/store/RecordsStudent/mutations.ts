import { MutationTree } from 'vuex';
import { StudentRowsInfo, StudentStateInterface } from './state';

const mutation: MutationTree<StudentStateInterface> = {
  addStudent(state, payload: StudentRowsInfo){
    state.allStudentRecords.push(payload)
  },
  removeStudent (state, targetStudent:StudentRowsInfo) {
    const index = state.allStudentRecords.findIndex((s) => {
      return s.username == targetStudent.username;
    })
    if (index >= 0) {
      state.allStudentRecords.splice(index, 1);
    }
  }
};

export default mutation;
