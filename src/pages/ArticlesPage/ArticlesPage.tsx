import { h, FunctionComponent } from 'preact';

import { Article as ArticleType, Data } from '../../types/types';
import config from '../../config';

import Article from '../../components/Article/Article';
import DetectScrollBottom from '../../components/DetectScrollBottom/DetectScrollBottom';
import { useEffect, useState } from 'preact/hooks';
import { loadJson } from '../../utils/jsonLoader';
import Loader from '../../components/Loader/Loader';

interface ServerRes {
  entries: ArticleType[];
  total: number;
}

const FETCH_URL = `${config.baseUrl}${config.path.getArticles}`;
const NB_ITEMS_PER_PAGE = 5;

const parser = (response: ServerRes | null | undefined): ArticleType[] =>
  response?.entries.map((entry) => ({
    _id: entry?._id ?? '',
    body: entry?.body?.trim() ?? '',
    details: entry?.details?.trim() ?? '',
    gallery: entry?.gallery ?? [],
    title: entry?.title?.trim() ?? '',
  })) ?? [];

const ArticlesPage: FunctionComponent = () => {
  const [articles, setArticles] = useState<Data<ArticleType[]>>({
    error: '',
    isError: false,
    isLoading: true,
    payload: [],
  });

  const [isDone, setIsDone] = useState(false);
  const [pageNb, setPageNb] = useState(0);

  useEffect(() => {
    setArticles(() => ({ ...articles, isLoading: true }));
    loadJson<ServerRes>(FETCH_URL, 'POST', {
      filter: { published: true },
      limit: NB_ITEMS_PER_PAGE,
      skip: pageNb * NB_ITEMS_PER_PAGE,
      sort: { _o: 1 },
    })
      .then((response) => {
        const parsedResponse = parser(response as ServerRes);
        const payload = [...articles.payload, ...parsedResponse];
        setIsDone((response?.total ?? 0) < pageNb * NB_ITEMS_PER_PAGE);
        setArticles(() => ({
          error: '',
          isLoading: false,
          isError: false,
          payload,
        }));
      })
      .catch((error) => {
        setArticles(() => ({
          error,
          isLoading: false,
          isError: true,
          payload: articles.payload,
        }));
      });
  }, [pageNb]);

  const nextPage = () => {
    setPageNb(() => pageNb + 1);
  };

  return (
    <div>
      {!articles.isError &&
        articles.payload.map((article) => (
          <Article key={article._id} {...article} />
        ))}
      {articles.isError && articles.error}
      {articles.isLoading && <Loader />}
      {!articles.isLoading && !isDone && (
        <DetectScrollBottom onScrollBottom={nextPage} />
      )}
    </div>
  );
};

export default ArticlesPage;
