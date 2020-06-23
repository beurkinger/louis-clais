import { h, FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import config from '../../config';
import { loadJson } from '../../utils/jsonLoader';
import './Downloads.css';

interface State {
    downloads: Array<{ path: string, title: string }>
    error: string;
    isError: boolean;
    isLoading: boolean;
}

const Downloads: FunctionComponent = () => {
    const [downloads, setDownloads] = useState<State['downloads']>([]);
    const [error, setError] = useState<State['error']>('');
    const [isError, setIsError] = useState<State['isError']>(false);
    const [isLoading, setIsLoading] = useState<State['isLoading']>(true);
    
    useEffect(() => {
        loadJson(`${config.baseUrl}${config.path.getDownloads}`)
            .then((response: any) => {
                const downloads = response.entries.map((entry: any) => ({
                    path: entry?.path ?? '',
                    title: entry?.title ?? '',
                }))
                setDownloads(downloads);
                setIsLoading(false);
            })
            .catch((error: string) => {
                setError(error);
                setIsError(true);
                setIsLoading(false);
            })
    }, []);

    return (
        <div className="site-header-downloads">
            {!isLoading && !isError && downloads.map(file => (
                <a className="site-header-download-btn" href={`${config.baseUrl}/${file.path}`} target="_blank">{file.title}</a>
            ))}
            {!isLoading && isError && error}
        </div>
    );
}

export default Downloads;