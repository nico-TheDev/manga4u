const trimString: (data: string) => string = (words) => {
  if (words.length > 220) return words.substring(0, 220) + '...';
  return words;
};

export default trimString;
