import { MutationTree } from 'vuex';
import { AccountCreateInterface, AccountCreateStudentInfo } from './state';

const mutation: MutationTree<AccountCreateInterface> = {
  // someMutation (/* state: ExampleStateInterface */) {
  //   // your code
  // }
  addStudent(state, payload: AccountCreateStudentInfo){
    state.allStudentAccount.push(payload)
  }
};

export default mutation;
