import { h, FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { Data } from '../../types/types';
import config from '../../config';
import { loadJson } from '../../utils/jsonLoader';

import './Header.css';

interface State {
    downloads: Data <Array<{ path: string, title: string }>>,
    intro: Data<''>,
}

const Header: FunctionComponent = () => {
    const [downloads, setDownloads] = useState<State['downloads']>({
        error: '',
        isError: false,
        isLoading: true,
        payload: [],
    });

    const [intro, setIntro] = useState<State['intro']>({
        error: '',
        isError: false,
        isLoading: true,
        payload: '',
    });

    useEffect(() => {
        loadJson(`${config.baseUrl}${config.path.getDownloads}`)
            .then((response: any) => {
                const payload = response?.entries.map((entry: any) => ({
                    path: entry?.path ?? '',
                    title: entry?.title ?? '',
                })) ?? [];
                setDownloads({ ...downloads, isLoading: false, payload });
            })
            .catch((error: string) => {
                setDownloads({ ...downloads, isError: true, isLoading: false, error });
            })

        loadJson(`${config.baseUrl}${config.path.getHeader}`)
            .then((response: any) => {
                const payload = response?.intro ?? '';
                setIntro({ ...downloads, isLoading: false, payload });
            })
            .catch((error: string) => {
                setIntro({ ...intro, isError: true, isLoading: false, error });
            })
    }, []);
    
    return (
        <header className="header">
            <h2 className="header-title">
                Louis Clais
            </h2>
            <p className="header-presentation">
                {!intro.isLoading && !intro.isError && intro.payload}
                {!intro.isLoading && intro.isError && intro.error}
            </p>
            <div className="header-downloads">
                {!downloads.isLoading && !downloads.isError && downloads.payload.map(file => (
                    <a className="header-download-btn" href={`${config.baseUrl}/${file.path}`} target="_blank">{file.title}</a>
                ))}
                {!downloads.isLoading && downloads.isError && downloads.error}
            </div>
        </header>
    );
}

export default Header;
