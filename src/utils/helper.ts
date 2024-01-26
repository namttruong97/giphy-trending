import { TPagination } from 'model/gif.model';

export const classMapping = (...arrays: Array<string | boolean | undefined>) =>
  arrays
    .filter((item) => item)
    .join(' ')
    .trim()
    .replace(/\s{2,}/g, ' ');

export const capitalized = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const checkLastPage = (pagination: TPagination) => {
  const { count, offset, total_count } = pagination;
  return offset + 2 * count > total_count;
};
