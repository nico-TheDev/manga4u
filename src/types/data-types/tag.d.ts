import { AttributeBase, AttributeBaseDateless } from '@/types/base';
import { ApiBase } from '@/types/data-types/api';
import { TranslatedField } from '@/types/data-types/languages';
import { ApiResponse } from '@/types/response';

export interface TagAttributes extends AttributeBaseDateless {
  name: TranslatedField;
  description: TranslatedField[];
  group: string;
}

export type Tag = ApiBase<'tag', TagAttributes>;

export type TagResponse = ApiResponse<{
  data: Tag & AttributeBase;
}>;
