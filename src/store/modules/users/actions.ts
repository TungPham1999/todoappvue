import { ActionTree, ActionContext } from "vuex";
import { UserMutationTypes } from "./mutation-types";
import { RootState } from "src/store";
import {
  getAccountsByUser,
  getDetailAccount,
  getUsers,
} from "src/services/user.service";
import { ParamsQueryUser } from "src/types";
import { State } from "./state";
import { UserActionTypes } from "./action-types";

export interface Actions {
  [UserActionTypes.SET_USERS]: (
    context: ActionContext<State, RootState>,
    data: ParamsQueryUser
  ) => Promise<unknown>;
  [UserActionTypes.SET_ACCOUNTS]: (
    context: ActionContext<State, RootState>,
    data: string
  ) => Promise<unknown>;
  [UserActionTypes.SET_DETAIL_ACCOUNT]: (
    context: ActionContext<State, RootState>,
    data: ParamsQueryUser
  ) => Promise<unknown>;
}

export const actions: ActionTree<State, RootState> & Actions = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  [UserActionTypes.SET_ACCOUNTS]({ commit }, data: string) {
    return new Promise((resolve, reject) => {
      getAccountsByUser(`users/${data}/accounts`)
        .then((response) => {
          if (response.status === 200) {
            commit(UserMutationTypes.SET_ACCOUNTS, response.data);
            resolve(response.data);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  [UserActionTypes.SET_DETAIL_ACCOUNT]({ commit }, data: ParamsQueryUser) {
    return new Promise((resolve, reject) => {
      getDetailAccount(`accounts/${data.id}`)
        .then((response) => {
          if (response.status === 200) {
            if (response.data) {
              commit(
                UserMutationTypes.SET_DETAIL_ACCOUNT,
                response.data
              );
              resolve(response.data);
            } else {
              resolve(response.data);
            }
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  [UserActionTypes.SET_USERS]({ commit }, data: ParamsQueryUser) {
    return new Promise((resolve, reject) => {
      getUsers(`users/${data.id}`)
        .then((response) => {
          if (response.status === 200) {
            resolve(response.data.attributes);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
