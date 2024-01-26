import { useMemo, useRef } from 'react';

import { searchGifs } from 'services/giphy';
import { checkLastPage } from 'utils/helper';
import { SearchQueryParams } from 'utils/types';

import { useDelayedQuery } from './useDebounce';

export const useGifSearching = (paramQueryModel: SearchQueryParams, searchKey: string) => {
  const totalRef = useRef(0);

  const {
    data: listSearchImage,
    isLoading: isLoadingSearch,
    refetch,
  } = useDelayedQuery(
    ['searchImage', searchKey, paramQueryModel.offset],
    () => searchGifs(paramQueryModel, searchKey),
    {
      enabled: !!searchKey,
      refetchOnWindowFocus: false,
      delay: 1000,
    }
  );

  const isLastPage = useMemo(() => {
    if (listSearchImage && !(listSearchImage instanceof Error)) {
      return checkLastPage(listSearchImage.pagination);
    }
    return false;
  }, [listSearchImage]);

  const totalCount = useMemo(() => {
    if (listSearchImage && !(listSearchImage instanceof Error)) {
      totalRef.current = listSearchImage.pagination.total_count;
      return listSearchImage.pagination.total_count;
    }
    return totalRef.current;
  }, [listSearchImage]);

  return { listSearchImage, isLoadingSearch, isLastPage, totalCount, refetch };
};
