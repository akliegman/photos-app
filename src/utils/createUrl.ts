type Url = string;

export const createUrl = (url: Url): string => {
  const baseUrl: string = process.env.REACT_APP_API_HOSTNAME!;
  return `${baseUrl}${url}`;
};
