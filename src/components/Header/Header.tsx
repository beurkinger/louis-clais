import { h, FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import config from '../../config';
import { loadJson } from '../../utils/jsonLoader';
import Downloads from '../Downloads/Downloads';
import './Header.css';

interface State {
    intro: '',
    error: string;
    isError: boolean;
    isLoading: boolean;
}

const Header: FunctionComponent = () => {
    const [intro, setIntro] = useState<State['intro']>('');
    const [error, setError] = useState<State['error']>('');
    const [isError, setIsError] = useState<State['isError']>(false);
    const [isLoading, setIsLoading] = useState<State['isLoading']>(true);

    useEffect(() => {
        loadJson(`${config.baseUrl}${config.path.getHeader}`)
            .then((response: any) => {
                setIntro(response?.intro ?? '');
                setIsLoading(false);
            })
            .catch((error: string) => {
                setError(error);
                setIsError(true);
                setIsLoading(false);
            })
    }, []);
    
    return (
        <header className="header">
            <h2 className="header-title">
                Louis Clais
            </h2>
            <p className="header-presentation">
                {!isLoading && !isError && intro}
                {!isLoading && isError && error}
            </p>
            <Downloads/>
        </header>
    );
}

export default Header;