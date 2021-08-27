import { GetterTree } from "vuex";

import type { UserObjectInterface, AccountUserInterface } from "src/types";

import { RootState } from "src/store";

import { State } from "./state";

export interface Getters {
  users: (state: State) => Partial<UserObjectInterface[]>;
  accounts: (state: State) => Partial<AccountUserInterface[]>
  accountDetail:(state: State) =>  Partial<AccountUserInterface>
}

export const getters: GetterTree<State, RootState> & Getters = {
  users: (state) => state.users,
  accounts: (state) => state.accounts,
  accountDetail: (state) => state.accountDetail,
};
