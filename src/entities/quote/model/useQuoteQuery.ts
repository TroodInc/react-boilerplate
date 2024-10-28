import { useQuery } from '@tanstack/react-query';

import { QUOTE_QUERY_KEY, getQuote } from 'entities/quote';

export function useQuoteQuery() {
  const query = useQuery({
    queryKey: [QUOTE_QUERY_KEY],
    queryFn: getQuote
  });
  return query;
}
