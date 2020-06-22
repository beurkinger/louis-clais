import { h, Component } from 'preact';
import config from '../../config';
import { loadJson } from '../../utils/jsonLoader';
import Article from './Article/Article';

interface State {
    articles: Array<{
        body: string;
        gallery: Array<{ path: string }>;
        title: string;
    }>;
    error: string;
    isError: boolean;
    isLoading: boolean;
}

class Articles extends Component<{}, State> {
    state: State = { articles: [], error: '', isError: false, isLoading: true };

    componentDidMount() {
        loadJson(`${config.baseUrl}${config.path.getArticles}`)
            .then((response: any) => {
                const articles = response.entries.map((entry: any) => ({
                    body: entry.body || '',
                    gallery: entry.gallery || [],
                    title: entry.title || '',
                }))
                this.setState({ isLoading: false, articles });
            })
            .catch((error: string) => {
                this.setState({ isLoading: false, isError: true, error });
            })
    }

    render() {
        const { articles, error, isError, isLoading } = this.state;
        return (
            <div className="articles">
                {!isLoading && !isError && articles.map(article => (
                    <Article {...article} />
                ))}
                {isError && error}
            </div>
        );
    }
}

export default Articles;
