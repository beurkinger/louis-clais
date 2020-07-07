import { h, FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import config from '../../config';
import { loadJson } from '../../utils/jsonLoader';
import Article from '../../components/Article/Article';
import BackToMain from '../../components/BackToMain/BackToMain';

interface Props {
    articleId?: string;
}

interface State {
    article: {
        _id: string,
        body: string;
        details: string;
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
                const entry = response?.entries[0] ?? null;
                const article = {
                    _id: entry?._id ?? '',
                    body: entry?.body?.trim() ?? '',
                    details: entry?.details?.trim() ?? '',
                    gallery: entry?.gallery ?? [],
                    title: entry?.title?.trim() ?? '',
                };
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
        <div>
            <BackToMain/>
            {!isLoading && !isError && article && (
                <Article {...article} />
            )}
            {!isLoading && isError && error}
        </div>
    );
};

export default ArticlePage;

