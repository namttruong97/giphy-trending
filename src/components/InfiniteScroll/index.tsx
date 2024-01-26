/* eslint-disable react-hooks/exhaustive-deps */
import { LoadingOutlined } from '@ant-design/icons';

import { FC, HTMLAttributes, useEffect, useRef } from 'react';

import { Spin } from 'antd';

interface IInfiniteScroll extends HTMLAttributes<HTMLDivElement> {
  fetchMore: () => void;
  isFetching: boolean;
  isLast: boolean;
}

const InfiniteScroll: FC<IInfiniteScroll> = ({ children, fetchMore, isFetching, isLast }) => {
  const pageEndRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isFetching) {
        fetchMore();
      }
    });

    if (pageEndRef.current) {
      observer.observe(pageEndRef.current);
    }

    return () => {
      if (pageEndRef.current) {
        observer.unobserve(pageEndRef.current);
      }
    };
  }, [fetchMore]);

  const isHaveData = !!(children as React.ReactElement).props.data?.length;

  return (
    <Spin size="large" spinning={isFetching}>
      <div>{children}</div>
      {!isLast && isHaveData && (
        <div ref={pageEndRef} className="mt-10 text-center">
          <Spin
            indicator={
              <LoadingOutlined style={{ fontSize: 60 }} className="text-purple-primary" spin />
            }
          />
        </div>
      )}
    </Spin>
  );
};

export default InfiniteScroll;
