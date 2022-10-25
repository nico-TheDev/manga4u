import { AttributeBase } from '@/types/base';
import { ApiBase } from '@/types/data-types/api';

export interface GroupAttributes extends AttributeBase {
  name: string;
  leader: User;
  members: User[];
}

export type Group = ApiBase<'scanlation_group', GroupAttributes>;

export type GroupResponse = ApiResponse<{
  data: Group;
}>;
