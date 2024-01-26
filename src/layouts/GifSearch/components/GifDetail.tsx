import { StarOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';

import { FC } from 'react';

import { capitalize } from 'lodash';

import { TGifs } from 'model/gif.model';

interface ICollapseProps {
  data: TGifs[number];
}

export const GifDetail: FC<ICollapseProps> = ({ data }) => {
  return (
    <ul className="text-white">
      <li className="font-medium">
        <span>{data.title}</span>
      </li>
      <li className="mt-3">
        <UserOutlined className="mr-2 text-base" />
        <span>{data?.username || 'Unknown'}</span>
      </li>
      <li className="flex justify-between mt-3 datas-center">
        <div>
          <UploadOutlined className="mr-2 text-base text-orange-400" />
          <span>{data.import_datetime.slice(0, 10)}</span>
        </div>
        <div className="flex datas-center">
          <StarOutlined className="mr-1 text-base text-orange-400" />
          <span>{capitalize(data.rating)}</span>
        </div>
      </li>
    </ul>
  );
};
