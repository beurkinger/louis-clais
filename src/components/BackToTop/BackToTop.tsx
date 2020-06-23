import { h, Component } from 'preact';
import { debounceWithRequestAnimationFrame } from '../../utils/debounce';
import './IconArrowTop/IconArrowTop';
import './BackToTop.css';
import IconArrowTop from './IconArrowTop/IconArrowTop';

const handleOnClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

interface State {
    isVisible: boolean;
}

class BackToTop extends Component<{}, State> {
    state: State = {isVisible: false };
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll);
    }

    handleOnScroll = debounceWithRequestAnimationFrame(() => {
        const { innerHeight: windowHeight } = window;
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        const isScrolled = scrollTop > windowHeight;
        this.setState(({ isVisible }: State) => {
            if (isScrolled && !isVisible) return { isVisible: true };
            if (!isScrolled && isVisible) return { isVisible: false};
            return null;
        })
    });

    render() {
        if (!this.state.isVisible) return null;
        return (
            <button class="back-to-top" onClick={handleOnClick} >
                <IconArrowTop/>
            </button>
        );
    }
}

export default BackToTop;
