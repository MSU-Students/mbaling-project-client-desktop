import { MutationTree } from 'vuex';
<<<<<<< HEAD
import { StudentRowsInfo, LandlordRowsInfo, StudentStateInterface } from './state';
=======
import { AccountStateInterface } from './state';
>>>>>>> 77f744cace865b00c031809d6f4d2390c93b04f0

const mutation: MutationTree<AccountStateInterface> = {
  setAccount(state, payload) {
    state.newUser = payload;
  },
  updateAccount(state, payload) {
    state.newUser = payload;
  },
  deleteAccount(state, payload) {
    state.allAccount.push(payload);
  },
<<<<<<< HEAD
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
=======
>>>>>>> 77f744cace865b00c031809d6f4d2390c93b04f0

  getAllUser(state, payload) {
    state.allAccount = [];
    state.allAccount.push(...payload);
  },

  getOneUser(state, payload) {
    state.allAccount = payload;
  },

  getProfile(state, payload) {
    state.allAccount = payload;
  },
};
export default mutation;
