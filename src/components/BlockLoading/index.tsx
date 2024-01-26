import { LoadingOutlined } from '@ant-design/icons';

import { FC } from 'react';

import { Spin } from 'antd';

export interface IBlockLoadingProps {
  isOpen?: boolean;
}

export const BlockLoading: FC<IBlockLoadingProps> = ({ isOpen }) => {
  return (
    <div>
      {isOpen && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen m-auto bg-purple-primary">
          <div className="text-center mg-auto">
            <Spin indicator={<LoadingOutlined style={{ fontSize: 60, color: 'white' }} spin />} />
            <h2 className="mt-10 text-xl font-semibold text-white uppercase">
              GIPHY Trending by Nam Truong
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};
