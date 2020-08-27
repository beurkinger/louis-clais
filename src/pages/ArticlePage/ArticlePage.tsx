import { h, FunctionComponent } from 'preact';

import { Article as ArticleType } from '../../types/types';
import config from '../../config';
import useJson from '../../hooks/useJSON';

import Article from '../../components/Article/Article';
import BackToMain from '../../components/BackToMain/BackToMain';

interface Props {
  articleId?: string;
}

const ArticlePage: FunctionComponent<Props> = ({ articleId }: Props) => {
  const article = useJson<{ entries: ArticleType[] }, ArticleType | null>(
    null,
    `${config.baseUrl}${config.path.getArticles}`,
    (response) => {
      const entry = response?.entries[0] ?? null;
      return {
        _id: entry?._id ?? '',
        body: entry?.body?.trim() ?? '',
        details: entry?.details?.trim() ?? '',
        gallery: entry?.gallery ?? [],
        title: entry?.title?.trim() ?? '',
      };
    },
    'POST',
    {
      filter: { _id: articleId },
    }
  );

  return (
    <div>
      <BackToMain />
      {!article.isLoading && !article.isError && article.payload && (
        <Article {...article.payload} />
      )}
      {!article.isLoading && article.isError && article.error}
    </div>
  );
};

export default ArticlePage;
