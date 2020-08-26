import { h, FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import config from '../../config';
import { loadJson } from '../../utils/jsonLoader';

import './Header.css';

interface State {
    downloads: Array<{ path: string, title: string }>
    errorDownloads: string;
    isErrorDownloads: boolean;
    isLoadingDownloads: boolean;
    intro: '',
    errorIntro: string;
    isErrorIntro: boolean;
    isLoadingIntro: boolean;
}

const Header: FunctionComponent = () => {
    const [downloads, setDownloads] = useState<State['downloads']>([]);
    const [errorDownloads, setErrorDownloads] = useState<State['errorDownloads']>('');
    const [isErrorDownloads, setIsErrorDownloads] = useState<State['isErrorDownloads']>(false);
    const [isLoadingDownloads, setIsLoadingDownloads] = useState<State['isLoadingDownloads']>(true);

    const [intro, setIntro] = useState<State['intro']>('');
    const [errorIntro, setErrorIntro] = useState<State['errorIntro']>('');
    const [isErrorIntro, setIsErrorIntro] = useState<State['isErrorIntro']>(false);
    const [isLoadingIntro, setIsLoadingIntro] = useState<State['isLoadingIntro']>(true);

    useEffect(() => {
        loadJson(`${config.baseUrl}${config.path.getDownloads}`)
            .then((response: any) => {
                const downloads = response?.entries.map((entry: any) => ({
                    path: entry?.path ?? '',
                    title: entry?.title ?? '',
                })) ?? [];
                setDownloads(downloads);
                setIsLoadingDownloads(false);
            })
            .catch((error: string) => {
                setErrorDownloads(error);
                setIsErrorDownloads(true);
                setIsLoadingDownloads(false);
            })

        loadJson(`${config.baseUrl}${config.path.getHeader}`)
            .then((response: any) => {
                setIntro(response?.intro ?? '');
                setIsLoadingIntro(false);
            })
            .catch((errorIntro: string) => {
                setErrorIntro(errorIntro);
                setIsErrorIntro(true);
                setIsLoadingIntro(false);
            })
    }, []);
    
    return (
        <header className="header">
            <h2 className="header-title">
                Louis Clais
            </h2>
            <p className="header-presentation">
                {!isLoadingIntro && !isErrorIntro && intro}
                {!isLoadingIntro && isErrorIntro && errorIntro}
            </p>
            <div className="header-downloads">
                {!isLoadingDownloads && !isErrorDownloads && downloads.map(file => (
                    <a className="header-download-btn" href={`${config.baseUrl}/${file.path}`} target="_blank">{file.title}</a>
                ))}
                {!isLoadingDownloads && isErrorDownloads && errorDownloads}
            </div>
        </header>
    );
}

export default Header;