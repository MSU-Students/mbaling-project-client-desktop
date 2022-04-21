import userService from 'src/services/user.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
<<<<<<< HEAD
import { StudentRowsInfo, LandlordRowsInfo, StudentStateInterface } from './state';
=======
import { AccountStateInterface } from './state';
>>>>>>> 77f744cace865b00c031809d6f4d2390c93b04f0

const actions: ActionTree<AccountStateInterface, StateInterface> = {
  async addAccount(context, payload: any): Promise<any> {
    const result = await userService.create(payload);
    context.commit('setNewAccount', result);
    await context.dispatch('getAllUser');
  },

  async editAccount(context, payload: any): Promise<any> {
    const result = await userService.update(payload.id, payload);
    context.commit('updateAccount', result);
    await context.dispatch('getAllUser');
  },

  async deleteAccount(context, user_id: number): Promise<any> {
    const result = await userService.delete(user_id);
    context.commit('deleteAccount', result);
  },

  async getAllUser(context): Promise<any> {
    const res = await userService.getAll();
    context.commit('getAllUser', res);
  },

  async getOneUser(context, user_id: number): Promise<any> {
    const res = await userService.getOne(user_id);
    context.commit('getOneUser', res);
  },

  async getProfile(context): Promise<any> {
    const res = await userService.getUserProfile();
    context.commit('getProfile', res);
    return res;
  },
<<<<<<< HEAD
  newLandlord (context, payload: LandlordRowsInfo) {
    context.commit('addLandlord', payload);
  },
  deleteStudent(context, targetStudent: StudentRowsInfo) {
    context.commit('removeStudent', targetStudent);
  },
  deleteLandlord(context, targetLandlord: LandlordRowsInfo) {
    context.commit('removeLandlord', targetLandlord);
  }
=======
>>>>>>> 77f744cace865b00c031809d6f4d2390c93b04f0
};

export default actions;
