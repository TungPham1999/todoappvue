export type UserModel = {
  id: number;
  name: string;
  account_ids: string[];
};

export type AccountModel = {
  id: number;
  user_id: number;
  name: string;
  balance: number;
};
