import { h, FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import config from '../../config';
import { loadJson } from '../../utils/jsonLoader';
import Article from '../../components/Article/Article';

interface State {
    articles: Array<{
        _id: string;
        body: string;
        gallery: Array<{ path: string }>;
        title: string;
    }>;
    error: string;
    isError: boolean;
    isLoading: boolean;
}

const ArticlesPage: FunctionComponent = () => {
    const [articles, setArticles] = useState<State['articles']>([]);
    const [error, setError] = useState<State['error']>('');
    const [isError, setIsError] = useState<State['isError']>(false);
    const [isLoading, setIsLoading] = useState<State['isLoading']>(true);

    useEffect(() => {
        loadJson(`${config.baseUrl}${config.path.getArticles}`)
            .then((response: any) => {
                const articles = response?.entries.map((entry: any) => ({
                    _id: entry._id || '',
                    body: entry.body || '',
                    gallery: entry.gallery || [],
                    title: entry.title || '',
                })) ?? [];
                setArticles(articles);
                setIsLoading(false);
            })
            .catch((error: string) => {
                setError(error);
                setIsError(true);
                setIsLoading(false);
            })
    }, []);
    
    return (
        <div>
            {!isLoading && !isError && articles.map(article => (
                <Article {...article} />
            ))}
            {!isLoading && isError && error}
        </div>
    );
};

export default ArticlesPage;

