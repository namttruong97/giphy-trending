import { atom } from 'jotai';

import { TPagination } from 'model/gif.model';

export const paginationAtom = atom<TPagination>({} as TPagination);
