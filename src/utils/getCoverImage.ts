const getCoverImage: (
  mangaId: string,
  coverName: string | undefined
) => string = (mangaId, coverName) => {
  return `https://uploads.mangadex.org/covers/${mangaId}/${coverName}.512.jpg`;
};

export default getCoverImage;
