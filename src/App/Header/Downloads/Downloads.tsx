import { h, Component } from 'preact';
import config from '../../../config';
import { loadJson } from '../../../utils/jsonLoader';
import './Downloads.css';

interface State {
    downloads: { path: string, title: string }[]
    error: string;
    isError: boolean;
    isLoading: boolean;
}

class Downloads extends Component<{}, State> {
    state: State = { downloads: [], error: '', isError: false, isLoading: true };

    componentDidMount() {
        loadJson(`${config.baseUrl}${config.path.getDownloads}`)
            .then((response: any) => {
                const downloads = response.entries.map((entry: any) => ({
                    path: entry?.path ?? '',
                    title: entry?.title ?? '',
                }))
                this.setState({ isLoading: false, downloads });
            })
            .catch((error: string) => {
                this.setState({ isLoading: false, isError: true, error });
            })
    }
    render() {
        const { downloads } = this.state;
        return (
            <div className="site-header-downloads">
                {downloads.map(file => (
                    <a className="site-header-download-btn" href={`${config.baseUrl}/${file.path}`} target="_blank">{file.title}</a>
                ))}
            </div>
        );
    }
}

export default Downloads;