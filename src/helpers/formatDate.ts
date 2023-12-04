export const formatDate = (crashDate: string) => {
  if (crashDate) {
    const date = new Date(crashDate);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
    }).format(date);
    return formattedDate;
  }
};
