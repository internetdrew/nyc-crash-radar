export const formatAsTitleCase = (str: string) => {
  if (str) {
    const words = str.split(' ');
    return words
      .map(
        word =>
          word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
      )
      .join(' ');
  }
};
