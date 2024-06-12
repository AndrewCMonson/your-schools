export const convertUnixDate = (unixDate: string | null | undefined) => {
  const date = new Date(Number(unixDate));
  return date.toLocaleDateString("en-US");
};
