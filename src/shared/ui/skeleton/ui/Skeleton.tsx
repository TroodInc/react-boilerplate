import type { FC, HTMLAttributes } from 'react';

import { cn } from 'shared/lib/cn';

const Skeleton: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-primary-foreground/10', className)}
      {...props}
    />
  );
};

export { Skeleton };
