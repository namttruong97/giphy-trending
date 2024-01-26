import { DotChartOutlined } from '@ant-design/icons';
import notfoundImage from 'assets/notfound.png';

import { Skeleton } from 'antd';
import { isEmpty } from 'lodash';
import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { Collapse } from 'components/Collapse';

import { TGifs } from 'model/gif.model';

import { GifDetail } from './GifDetail';
import GifTypeLabel, { IGifTypeLabelProps } from './GifTypeLabel';

export interface IGifBoardProps extends IGifTypeLabelProps {
  data: TGifs;
  isLast: boolean;
}

export default function GifBoard({ data, isLast, totalCount, isSearching }: IGifBoardProps) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 900: 3, 1500: 4 }}>
      <GifTypeLabel isSearching={isSearching} totalCount={totalCount} />
      {!isEmpty(data) ? (
        <Masonry gutter="8px">
          {data?.map((item) => (
            <Collapse key={item.id} image={item.images.fixed_height.url}>
              <GifDetail data={item} />
            </Collapse>
          ))}

          {/* Fake placeholder loading image */}
          {!isLast &&
            Array.from(Array(8).keys()).map((item, index) => (
              <Skeleton.Node active key={index} className="w-full">
                <DotChartOutlined style={{ fontSize: 60, color: '#bfbfbf' }} />
              </Skeleton.Node>
            ))}
        </Masonry>
      ) : (
        <Image
          className="w-[160px] lg:w-[250px] m-auto mt-20"
          src={notfoundImage}
          alt="404 image"
        />
      )}
    </ResponsiveMasonry>
  );
}
