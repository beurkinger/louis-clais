import { h, FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { Article as ArticleType, Data } from '../../types/types';
import config from '../../config';
import { loadJson } from '../../utils/jsonLoader';

import Article from '../../components/Article/Article';
import BackToMain from '../../components/BackToMain/BackToMain';

interface Props {
    articleId?: string;
}

interface State {
    article: Data<ArticleType | null>
}

const ArticlePage: FunctionComponent<Props> = ({ articleId }: Props) => {
    const [article, setArticle] = useState<State['article']>({
        error: '',
        isError: false,
        isLoading: true,
        payload: null,
    });

    useEffect(() => {
        loadJson(`${config.baseUrl}${config.path.getArticles}`, 'POST', { filter: { '_id': articleId } })
            .then((response: any) => {
                const entry = response?.entries[0] ?? null;
                const payload = {
                    _id: entry?._id ?? '',
                    body: entry?.body?.trim() ?? '',
                    details: entry?.details?.trim() ?? '',
                    gallery: entry?.gallery ?? [],
                    title: entry?.title?.trim() ?? '',
                };
                setArticle({ ...article, isLoading: false, payload });
            })
            .catch((error: string) => {
                setArticle({ ...article, isError: true, isLoading: false, error });
            })
    }, []);
    
    return (
        <div>
            <BackToMain/>
            {!article.isLoading && !article.isError && article.payload && (
                <Article {...(article.payload)} />
            )}
            {!article.isLoading && article.isError && article.error}
        </div>
    );
};

export default ArticlePage;
