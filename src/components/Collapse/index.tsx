import { FC, HTMLAttributes, useCallback, useEffect, useState } from 'react';

import Image from 'next/image';
import { classMapping } from 'utils/helper';

interface ICollapseProps extends HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  image: string;
}

export const Collapse: FC<ICollapseProps> = ({ isOpen, className, children, image, ...props }) => {
  const [state, setState] = useState(isOpen);

  const handleOnClick = useCallback(() => {
    setState((prev) => !prev);
  }, []);

  useEffect(() => {
    setState(isOpen);
  }, [isOpen]);

  return (
    <div data-testid="collapse" className={classMapping('block w-full', className)} {...props}>
      <div className="flex items-center justify-between cursor-pointer" onClick={handleOnClick}>
        <Image
          src={image}
          alt="gif image"
          priority
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      {state && (
        <div className="p-4 border rounded rounded-t-none shadow border-purple-primary bg-purple-primary">
          {children}
        </div>
      )}
    </div>
  );
};
