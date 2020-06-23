import { h, FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import config from '../../config';
import { loadJson } from '../../utils/jsonLoader';
import App from '../../components/App/App';
import Article from '../../components/Article/Article';

interface Props {
    articleId?: string;
}

interface State {
    article: {
        _id: string,
        body: string;
        gallery: Array<{ path: string }>;
        title: string;
    } | null;
    error: string;
    isError: boolean;
    isLoading: boolean;
}

const ArticlePage: FunctionComponent<Props> = ({ articleId }: Props) => {
    const [article, setArticle] = useState<State['article']>(null);
    const [error, setError] = useState<State['error']>('');
    const [isError, setIsError] = useState<State['isError']>(false);
    const [isLoading, setIsLoading] = useState<State['isLoading']>(true);

    useEffect(() => {
        loadJson(`${config.baseUrl}${config.path.getArticles}`, 'POST', { filter: { '_id': articleId } })
            .then((response: any) => {
                const article = response?.entries[0] ?? null;
                setArticle(article);
                setIsLoading(false);
            })
            .catch((error: string) => {
                setError(error);
                setIsError(true);
                setIsLoading(false);
            })
    }, []);
    
    return (
        <App>
            <div>
                {!isLoading && !isError && article && (
                    <Article {...article} />
                )}
                {!isLoading && isError && error}
            </div>
        </App>
    );
};

export default ArticlePage;

