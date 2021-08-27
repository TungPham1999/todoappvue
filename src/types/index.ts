export interface ParamsQueryUser {
  id: number;
}

export type UsersInterface = {
  id: number;
  name: string;
  account_ids: string[];
};

export type AccountUserInterface = {
  id: number;
  user_id: number;
  name: string;
  balance: number;
};


export type AccountUserObjectInterface = {
  attributes: AccountUserInterface
}

export type UserObjectInterface = {
  attributes: UsersInterface
}