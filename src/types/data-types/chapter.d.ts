import { AttributeBase } from '@/types/base';
import { ApiBase } from '@/types/data-types/api';
import { GroupResponse } from '@/types/data-types/group';
import { MangaResponse } from '@/types/data-types/manga';
import { UsersResponse } from '@/types/data-types/user';

export interface OptionalChapterAttributes {
  scanlation_group?: GroupResponse[];
  manga?: MangaResponse;
  uploader?: UsersResponse;
}

export interface ChapterAttributes extends AttributeBase {
  title: string;
  volume: string;
  chapter: string;
  translatedLanguage: string;
  hash: string;
  data: string[];
  dataSaver: string[];
  publishAt: string;
  readableAt: string;
}

export type ChapterAttributesExtended = ChapterAttributes &
  OptionalChapterAttributes;

export type Chapter = ApiBase<'chapter', ChapterAttributes>;
