/* eslint-disable react-hooks/exhaustive-deps */
import { useGifSearching } from 'hooks/useGifSearching';
import { useGifTrending } from 'hooks/useGifTrending';

import { FC, HTMLAttributes, useEffect, useState } from 'react';

import { useAtom } from 'jotai';
import { isEmpty, uniqBy } from 'lodash';
import { DEFAULT_QUERY_PARAMS } from 'utils/constants';
import { classMapping } from 'utils/helper';
import { SearchQueryParams } from 'utils/types';

import InfiniteScroll from 'components/InfiniteScroll';
import { SearchField } from 'components/SearchField';

import { listTrendingAtom } from 'store/listTrendingAtom';

import { TGifs } from 'model/gif.model';

import GifBoard from './components/GifBoard';

type IGifSearchProps = HTMLAttributes<HTMLDivElement>;

const GifSearch: FC<IGifSearchProps> = ({ className }) => {
  const [listImage, setListImage] = useState<TGifs>([]);
  const [searchKey, setSearchKey] = useState<string>('');

  const [paramQueryModel, setParamQueryModel] = useState<SearchQueryParams>(DEFAULT_QUERY_PARAMS);
  const [, setDataStore] = useAtom(listTrendingAtom);

  const { listTrending, isLoadingTrending } = useGifTrending(paramQueryModel, !searchKey);
  const { listSearchImage, isLoadingSearch, isLastPage, totalCount, refetch } = useGifSearching(
    paramQueryModel,
    searchKey
  );

  useEffect(() => {
    if (!isEmpty(listTrending) && !(listTrending instanceof Error) && !searchKey) {
      setListImage([...listImage, ...listTrending.data]);
      setDataStore([...listImage, ...listTrending.data]);
      return;
    }

    if (!isEmpty(listSearchImage) && !(listSearchImage instanceof Error)) {
      setListImage([...listImage, ...listSearchImage.data]);
    }
  }, [listTrending, listSearchImage]);

  const onFetchMoreTrending = () => {
    if (Array.isArray(listImage) && listImage.length) {
      setParamQueryModel({
        ...paramQueryModel,
        offset: paramQueryModel.offset + paramQueryModel.limit,
      });
    }
  };

  const handleSearch = (value: string) => {
    // Prevent force enter key when starting
    if (!value && !searchKey) {
      return;
    }

    if (value === searchKey) {
      refetch();
    }

    setParamQueryModel({ ...structuredClone(paramQueryModel), offset: 0 });
    setSearchKey(value);
    setListImage([]);
  };

  return (
    <div className={classMapping('com__GifSearch', className)}>
      <SearchField
        disabled={isLoadingSearch}
        size="large"
        placeholder="Search all the GIFs"
        onSearch={handleSearch}
      />

      <InfiniteScroll
        isLast={isLastPage}
        isFetching={isLoadingTrending || isLoadingSearch}
        fetchMore={onFetchMoreTrending}
      >
        <GifBoard
          isLast={isLastPage}
          totalCount={totalCount}
          isSearching={!!searchKey}
          data={uniqBy(listImage, 'id')}
        />
      </InfiniteScroll>
    </div>
  );
};

export default GifSearch;
