export const capitalizeFirstLetterOnly = (str: string) => {
  if (str) {
    return str.charAt(0).toLocaleUpperCase() + str.slice(1).toLocaleLowerCase();
  }
};
