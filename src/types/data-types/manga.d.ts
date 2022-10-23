import { AttributeBase } from '@/types/base';
import { Language, TranslatedField } from '@/types/data-types/languages';
import { Relationship } from '@/types/data-types/relationship';
import { Tag } from '@/types/data-types/tag';

type PublicationDemographic = 'shounen' | 'shoujo' | 'jousei' | 'seinen';
type MangaStatus = 'completed' | 'ongoing' | 'hiatus' | 'cancelled';
type MangaContentRating = 'safe' | 'suggestive' | 'erotica' | 'pornographic';

export type MangaData = {
  id: string;
  type: string;
  attributes: MangaAttributes;
  relationships: Relationship[];
};

export interface MangaAttributes extends AttributeBase {
  title: TranslatedField;
  altTitles: TranslatedField[];
  description: translatedField;
  isLocked?: boolean;
  links?: string;
  originalLanguage: Language;
  lastVolume?: string;
  lastChapter?: string;
  publicationDemographic: PublicationDemographic;
  status?: MangaStatus;
  /*
    Year of Release
  */
  year?: number;
  contentRating?: MangaContentRating;
  tags: Tag[];
  latestUploadedChapter?: string;
}

export type Genre = {
  id: string;
  genre: string;
};

export interface MangaSummary {
  mangaId: string;
  title: string;
  authorId: string | undefined;
  tags: Genre[];
  coverName: string;
  description: string;
  lastUpdated: string;
}
