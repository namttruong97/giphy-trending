import notfoundImage from 'assets/notfound.png';

import Image from 'next/image';

const Page404 = () => {
  return (
    <div
      data-testid="page-404"
      className="h-[100vh] m-auto bg-purple-primary flex items-center justify-center"
    >
      <div className="flex flex-col items-center  w-1/3 max-w-[600px] min-w-[350px] p-8 text-center bg-white rounded-xl">
        <Image className="w-[200px] lg:w-[300px]" src={notfoundImage} alt="404 image" />
        <div className="text-[36px] font-medium color-purple-primary">Page not found</div>
      </div>
    </div>
  );
};

export default Page404;
