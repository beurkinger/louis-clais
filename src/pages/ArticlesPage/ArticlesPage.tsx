import { h, FunctionComponent } from 'preact';

import { Article as ArticleType } from '../../types/types';
import config from '../../config';
import useJson from '../../hooks/useJSON';

import Article from '../../components/Article/Article';

const ArticlesPage: FunctionComponent = () => {
  const articles = useJson<{ entries: ArticleType[] }, ArticleType[]>(
    [],
    `${config.baseUrl}${config.path.getArticles}`,
    (response) =>
      response?.entries.map((entry) => ({
        _id: entry?._id ?? '',
        body: entry?.body?.trim() ?? '',
        details: entry?.details?.trim() ?? '',
        gallery: entry?.gallery ?? [],
        title: entry?.title?.trim() ?? '',
      })) ?? []
  );

  if (articles.isLoading) return null;

  return (
    <div>
      {!articles.isError &&
        articles.payload.map((article) => (
          <Article key={article._id} {...article} />
        ))}
      {articles.isError && articles.error}
    </div>
  );
};

export default ArticlesPage;
