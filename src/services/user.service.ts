import api, { ApiResponse } from "src/clients/api";
import { JSONApiResponseBody } from "src/clients/types/general/JSONApiResponse";
import {
  UserApiGettData,
  AccountApiGetData,
} from "src/clients/types/UserModel";

export async function getUsers(
  url: string
): Promise<ApiResponse<200, JSONApiResponseBody<UserApiGettData>>> {
  return await api.get(url);
}

export async function getAccountsByUser(
  url: string
): Promise<ApiResponse<200, JSONApiResponseBody<AccountApiGetData[]>>> {
  return await api.get(url);
}

export async function getDetailAccount(
  url: string
): Promise<ApiResponse<200, JSONApiResponseBody<AccountApiGetData>>> {
  return await api.post(url);
}
