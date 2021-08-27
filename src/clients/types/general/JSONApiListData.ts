import { JSONApiResponseBody } from './JSONApiResponse'

export type JSONApiListData<T> = JSONApiResponseBody<T[]> & {
  count?: number
}
