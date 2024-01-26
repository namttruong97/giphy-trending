import { atom } from 'jotai';

import { TGifs } from 'model/gif.model';

export const listTrendingAtom = atom<TGifs>([]);
export const expandedImageAtom = atom<TGifs[number]>({} as TGifs[number]);
