import { h, Component } from 'preact';
import config from '../../config';
import { loadJson } from '../../utils/jsonLoader';
import './Header.css';
import Downloads from './Downloads/Downloads';

interface State {
    intro: '',
    error: string;
    isError: boolean;
    isLoading: boolean;
}

class Header extends Component<{}, State> {
    state: State = { intro: '', error: '', isError: false, isLoading: true };

    componentDidMount() {
        loadJson(`${config.baseUrl}${config.path.getHeader}`)
            .then((response: any) => {
                this.setState({ isLoading: false, intro: response?.intro ?? '' });
            })
            .catch((error: string) => {
                this.setState({ isLoading: false, isError: true, error });
            })
    }
    render() {
        const { intro } = this.state;
        return (
            <header className="header">
                <h2 className="header-title">
                    Louis Clais
                </h2>
                <p className="header-presentation">
                    { intro }
                </p>
                <Downloads/>
            </header>
        );
    }
}

export default Header;