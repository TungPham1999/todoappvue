// https://jsonapi.org/format/#document-meta

export interface JSONApiResponseBody<TData, TMeta = Record<string, never>> {
  meta?: TMeta
  attributes: TData
}

export interface JSONApiResponseErrorBody<
  TCode extends number | string = number | string
> {
  errors: Array<{
    code: TCode
    source?: {
      pointer?: string
    }
    title?: string
    detail?: string
  }>
}

export type JSONApiResponseErrors = JSONApiResponseErrorBody['errors']
