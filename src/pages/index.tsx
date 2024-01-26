import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import backgroundImage from 'assets/bg-1.jpg';
import GifSearch from 'layouts/GifSearch';

import { useAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { GITHUB_URL, GMAIL_URL, LINKEDIN_URL } from 'utils/constants';

import { Layout } from 'components/Layout';

import { listTrendingAtom } from 'store/listTrendingAtom';

export default function Homepage() {
  const [bookGlobalStore] = useAtom(listTrendingAtom);

  return (
    <Layout title="GIPHY Trending" isLoading={!bookGlobalStore?.length}>
      <div className="gap-4 lg:grid lg:grid-cols-3">
        <div className="justify-between mb-8 lg:mb-0">
          <div className="lg:fixed lg:rounded lg:left-5 lg:top-40 mt-[70px] lg:mt-[0]">
            <Image
              className="col-span-1 lg:w-[30vw] flex-1"
              src={backgroundImage}
              alt="Sidebar image"
              priority
              placeholder="blur"
            />
          </div>
          <div className="text-center lg:text-left lg:fixed lg:rounded lg:left-5 lg:bottom-5 ">
            <span className="mb-2 text-base italic text-secondary animate-pulse lg:block">
              Designed by Nam Truong
            </span>
            <span className="flex items-center justify-center mt-2 lg:justify-start">
              <Link
                passHref
                className="mr-4"
                href={GITHUB_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <GithubOutlined className="text-[33px] text-secondary hover:text-purple-primary cursor-pointer" />
              </Link>
              <Link
                passHref
                className="mr-4"
                href={LINKEDIN_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedinOutlined className="text-[35px] text-secondary hover:text-purple-primary cursor-pointer" />
              </Link>
              <Link passHref href={GMAIL_URL} rel="noopener noreferrer" target="_blank">
                <MailOutlined className="text-[36px] text-secondary hover:text-purple-primary cursor-pointer" />
              </Link>
            </span>
          </div>
        </div>
        <GifSearch className="px-2 lg:pr-4 min-w-[350px] md:min-w-[650px] lg:col-span-2 lg:block" />
      </div>
    </Layout>
  );
}
