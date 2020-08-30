import { useEffect, useState } from 'preact/hooks';

import { Data } from '../types/types';
import { loadJson } from '../utils/jsonLoader';

const useJson = <R, P>(
  defaultPayload: P,
  url: string,
  parser?: (response: R) => P,
  method: 'GET' | 'POST' = 'GET',
  body: Record<string, unknown> = {}
): Data<P> => {
  const [data, setData] = useState<Data<P>>({
    error: '',
    isError: false,
    isLoading: true,
    payload: defaultPayload,
  });
  useEffect(() => {
    loadJson(url, method, body)
      .then((response) => {
        setData(() => ({
          error: '',
          isLoading: false,
          isError: false,
          payload: parser ? parser(response as R) : (response as P),
        }));
      })
      .catch((error) => {
        setData(() => ({
          error,
          isLoading: false,
          isError: true,
          payload: defaultPayload,
        }));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return data;
};

export default useJson;
