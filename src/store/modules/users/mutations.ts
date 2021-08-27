import { MutationTree } from "vuex";
import type {
  UsersInterface,
  AccountUserInterface,
  AccountUserObjectInterface,
  UserObjectInterface,
} from "src/types";
import { State } from "./state";
import { UserMutationTypes as MutationTypes } from "./mutation-types";

export interface Mutations<S = State> {
  [MutationTypes.SET_ACCOUNTS]: (
    state: S,
    payload: AccountUserObjectInterface[]
  ) => void;
  [MutationTypes.SET_DETAIL_ACCOUNT]: (
    state: S,
    payload: AccountUserInterface
  ) => void;
  [MutationTypes.SET_USERS]: (
    state: S,
    payload: UserObjectInterface[]
  ) => void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_ACCOUNTS](
    state: State,
    payload: AccountUserObjectInterface[]
  ) {
    state.accounts = payload.map((r) => r.attributes);
  },
  [MutationTypes.SET_USERS](
    state: State,
    payload: UserObjectInterface[]
  ) {
    state.users = payload;
  },
  [MutationTypes.SET_DETAIL_ACCOUNT](
    state: State,
    payload: AccountUserInterface
  ) {
    state.accountDetail = payload;
  },
};
