import { QuoteIcon } from '@radix-ui/react-icons';
import { useEffect, useRef } from 'react';

import { useQuoteQuery } from 'entities/quote';

import { cn } from 'shared/lib/cn';

export const QuotePage = () => {
  const { data, refetch, isFetching } = useQuoteQuery();
  const pageRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!pageRef.current) return;
    const handlePageClick = async () => await refetch();
    pageRef.current.addEventListener('click', handlePageClick);

    return () => {
      if (!pageRef.current) return;
      pageRef.current.removeEventListener('click', handlePageClick);
    };
  }, []);
  return (
    <main ref={pageRef}>
      <div className="container grid min-h-dvh grid-rows-[auto_1fr_auto] py-4">
        <div className="flex items-center justify-between">
          <QuoteIcon className="size-8" />
          Kanye's quotes
        </div>
        <div className="flex w-full max-w-screen-md flex-col items-center justify-center gap-y-4 p-2">
          <p
            className={cn(
              'font-quote text-balance text-center text-3xl transition-colors',
              isFetching && 'text-muted-foreground'
            )}
          >
            {data?.data.quote}
          </p>
        </div>
        <div></div>
      </div>
    </main>
  );
};
