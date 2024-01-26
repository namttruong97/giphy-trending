import { FC, HTMLAttributes } from 'react';

import Head from 'next/head';
import { classMapping } from 'utils/helper';

import { BlockLoading } from 'components/BlockLoading';
import Header from 'components/Header/Header';

export interface ILayoutProps extends HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean;
}

export const Layout: FC<ILayoutProps> = ({ children, className, title, isLoading }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div
        className={classMapping(
          'flex flex-col lg:pt-20  overflow-hidden w-full relative',
          className
        )}
      >
        <BlockLoading isOpen={isLoading} />
        <div className="mb-5">{children}</div>
      </div>
    </>
  );
};
