export interface ResponseError {
  id: string;
  status: number;
  title: string;
  detail: string;
  context?: Record<string, string>;
}

export type ApiResponse<
  Type extends Record<'data' | string, string | unknown>
> = {
  result: 'error' | 'ok';
  errors: ResponseError[];
  relationships?: Relationship[];
} & Type;

export interface ApiResponseList<
  Type extends Record<'data' | 'string', 'string' | unknown>
> {
  results: ApiResponse<Type>[];
  limit: number;
  offset: number;
  total: number;
}
