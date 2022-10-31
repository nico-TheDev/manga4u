import { CoverArtAttributes } from '@/types/data-types/cover-art';
import { MangaData, MangaSummary } from '@/types/data-types/manga';
import { Relationship } from '@/types/data-types/relationship';
import { Tag } from '@/types/data-types/tag';

export const filterMangaData: (data: MangaData[]) => MangaSummary[] = (
  data: MangaData[]
) => {
  const targetData = data.map((manga: MangaData) => {
    const mangaId = manga.id;
    const title = manga.attributes.title.en || 'No title';
    const authorId = manga.relationships.find(
      (item: Relationship<unknown>) => item.type === 'author'
    )?.id;

    const description = manga.attributes.description.en || '';

    const coverName =
      manga.relationships.find(
        (item: Relationship<CoverArtAttributes>) => item.type === 'cover_art'
      )?.attributes?.fileName || 'none';

    const tags = manga.attributes.tags.map((tag: Tag) => ({
      id: tag.id,
      genre: tag.attributes.name.en,
    }));

    return {
      mangaId,
      title,
      authorId,
      tags,
      coverName,
      description,
      lastUpdated: manga.attributes.updatedAt,
      lastChapter: manga.attributes.lastChapter,
    };
  });

  return targetData;
};

export const filterManga: (data: MangaData) => MangaSummary = (
  manga: MangaData
) => {
  const mangaId = manga.id;
  const title = manga.attributes.title.en || 'No title';
  const authorId = manga.relationships.find(
    (item: Relationship<unknown>) => item.type === 'author'
  )?.id;

  const description = manga.attributes.description.en || '';

  const coverName =
    manga.relationships.find(
      (item: Relationship<CoverArtAttributes>) => item.type === 'cover_art'
    )?.attributes?.fileName || 'none';

  const tags = manga.attributes.tags.map((tag: Tag) => ({
    id: tag.id,
    genre: tag.attributes.name.en,
  }));

  return {
    mangaId,
    title,
    authorId,
    tags,
    coverName,
    description,
    lastUpdated: manga.attributes.updatedAt,
  };
};
