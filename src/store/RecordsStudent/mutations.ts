import { MutationTree } from 'vuex';
import { StudentStateInterface } from './state';

const mutation: MutationTree<StudentStateInterface> = {
  someMutation (/* state: ExampleStateInterface */) {
    // your code
  }
};

export default mutation;
