import { h, FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { Article as ArticleType, Data } from '../../types/types';
import config from '../../config';
import { loadJson } from '../../utils/jsonLoader';

import Article from '../../components/Article/Article';

interface State {
    articles: Data<ArticleType[]>
}

const ArticlesPage: FunctionComponent = () => {
    const [articles, setArticles] = useState<State['articles']>({
        error: '',
        isError: false,
        isLoading: true,
        payload: [],
    });

    useEffect(() => {
        loadJson(`${config.baseUrl}${config.path.getArticles}`)
            .then((response: any) => {
                const payload  = response?.entries.map((entry: any) => ({
                    _id: entry?._id ?? '',
                    body: entry?.body?.trim() ?? '',
                    details: entry?.details?.trim() ?? '',
                    gallery: entry?.gallery ?? [],
                    title: entry?.title?.trim() ?? '',
                })) ?? [];
                setArticles({ ...articles, isLoading: false, payload });

            })
            .catch((error: string) => {
                setArticles({ ...articles, isError: true, isLoading: false, error });
            })
    }, []);
    
    return (
        <div>
            {!articles.isLoading && !articles.isError && articles.payload.map(article => (
                <Article {...article} />
            ))}
            {!articles.isLoading && articles.isError && articles.error}
        </div>
    );
};

export default ArticlesPage;
