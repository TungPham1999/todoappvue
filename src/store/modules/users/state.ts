import type { UserObjectInterface, AccountUserInterface } from "src/types";

export interface State {
  users: Partial<UserObjectInterface[]>;
  accounts: Partial<AccountUserInterface[]>
  accountDetail: Partial<AccountUserInterface>
}

export const state: State = {
  users: [],
  accounts: [],
  accountDetail: {}
};
