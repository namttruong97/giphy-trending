import { fetchTrendingGifs } from 'services/giphy';
import { SearchQueryParams } from 'utils/types';

import { useDelayedQuery } from './useDebounce';

export const useGifTrending = (params: SearchQueryParams, enabled: boolean) => {
  const { data: listTrending, isLoading: isLoadingTrending } = useDelayedQuery(
    ['listTrending', params.offset],
    () => fetchTrendingGifs(params),
    {
      enabled,
      refetchOnWindowFocus: false,
      delay: 1000,
    }
  );

  return { listTrending, isLoadingTrending };
};
