import { GiphyFetch } from '@giphy/js-fetch-api';

import { SearchQueryParams } from 'utils/types';

const gf = new GiphyFetch(process.env.GIPHY_API_KEY);

export const fetchTrendingGifs = async (params: SearchQueryParams) => {
  try {
    const result = await gf.trending({ ...params });
    return structuredClone(result);
  } catch (error) {
    return new Error('Service unavailable!');
  }
};

export const searchGifs = async (params: SearchQueryParams, keyword: string) => {
  try {
    const result = await gf.search(keyword, { offset: params.offset });
    return structuredClone(result);
  } catch (error) {
    return new Error('Service unavailable!');
  }
};
