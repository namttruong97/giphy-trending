import { SearchOutlined } from '@ant-design/icons';
import { SearchProps } from 'antd/lib/input/Search';

import { FC } from 'react';

import { Button, Input } from 'antd';
import { classMapping } from 'utils/helper';

type ISearchFieldProps = SearchProps;

export const SearchField: FC<ISearchFieldProps> = (props) => {
  return (
    <Input.Search
      className={classMapping('relative w-full rounded-2xl mb-4', props.className)}
      allowClear
      enterButton={<Button className="mb-1 text-xl" type="primary" icon={<SearchOutlined />} />}
      {...props}
    />
  );
};
