import { MangaData, MangaSummary } from '@/types/data-types/manga';
import { Relationship } from '@/types/data-types/relationship';
import { Tag } from '@/types/data-types/tag';

const filterMangaData: (data: MangaData[]) => MangaSummary[] = (
  data: MangaData[]
) => {
  const targetData = data.map((manga: MangaData) => {
    const mangaId = manga.id;
    const title = manga.attributes.title.en || 'No title';
    const authorId = manga.relationships.find(
      (item: Relationship) => item.type === 'author'
    )?.id;

    const description = manga.attributes.description.en || '';

    const coverName =
      manga.relationships.find(
        (item: Relationship) => item.type === 'cover_art'
      )?.attributes?.fileName || 'none';

    const tags = manga.attributes.tags.map(
      (tag: Tag) => tag.attributes.name.en
    );

    return {
      mangaId,
      title,
      authorId,
      tags,
      coverName,
      description,
    };
  });

  return targetData;
};

export default filterMangaData;
