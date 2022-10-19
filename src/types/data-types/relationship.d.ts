import { CoverArtAttributes } from '@/types/data-types/cover-art';

export type MangaResource = 'manga';
export type ChapterResource = 'chapter';
export type CoverArtResource = 'cover_art';
export type AuthorResource = 'author';
export type ArtistResource = 'artist';
export type ScanlationGroupResource = 'scanlation_group';
export type TagResource = 'tag';
export type UserResource = 'user';
export type CustomListResource = 'custom_list';

export type RelationshipType =
  | MangaResource
  | ChapterResource
  | CoverArtResource
  | AuthorResource
  | ArtistResource
  | ScanlationGroupResource
  | TagResource
  | UserResource
  | CustomListResource;

export interface Relationship {
  id: string;
  type: RelationshipType;
  attributes?: CoverArtAttributes;
}
