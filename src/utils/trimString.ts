const trimString: (data: string, limit?: number) => string = (
  words,
  limit = 200
) => {
  if (words.length > limit) {
    const trimmedStr = words.substring(0, limit);
    return (
      trimmedStr.substring(
        0,
        Math.min(trimmedStr.length, trimmedStr.lastIndexOf(' '))
      ) + '...'
    );
  }
  return words;
};

export default trimString;
