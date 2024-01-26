import { QueryFunction, QueryKey, UseQueryOptions, UseQueryResult, useQuery } from 'react-query';

function createDelayedFunction<TArgs extends any[], TReturn>(
  fn: (...args: TArgs) => Promise<TReturn> | TReturn,
  delay = 400
) {
  return async (...args: TArgs) => {
    const start = Date.now();
    const result = await fn(...args);
    const end = Date.now();

    const elapsedTime = end - start;

    if (elapsedTime < delay) {
      const remainingTime = delay - elapsedTime;
      await new Promise((resolve) => setTimeout(resolve, remainingTime));
    }

    return result;
  };
}
export const useDelayedQuery = <T, Error = unknown>(
  queryKey: QueryKey,
  queryFn: QueryFunction<T, QueryKey>,
  options?: UseQueryOptions<T, Error, T, QueryKey> & { delay?: number }
): UseQueryResult<T, Error> => {
  const delayedFn = createDelayedFunction(queryFn, options?.delay ?? 400);

  return useQuery(queryKey, delayedFn, options);
};
