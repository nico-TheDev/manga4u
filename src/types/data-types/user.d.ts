import { AttributeBaseDateless } from '@/types/base';
import { ApiBase, ApiResponseList } from '@/types/data-types/api';

export interface UserAttributes extends AttributeBaseDateless {
  username: string;
}

export type User = ApiBase<'user', UserAttributes>;

export type UsersResponse = ApiResponseList<{
  data: User;
}>;
