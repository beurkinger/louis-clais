import { h, FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { debounceWithRequestAnimationFrame } from '../../utils/debounce';
import ArrowButton from '../ArrowButton/ArrowButton';
import './BackToTop.css';

const handleOnClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

interface State {
    isVisible: boolean;
}

const BackToTop: FunctionComponent = () => {
    const [isVisible, setIsVisible] = useState<State['isVisible']>(false);

    const handleOnScroll = debounceWithRequestAnimationFrame(() => {
        const { innerHeight: windowHeight } = window;
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        const isScrolled = scrollTop > windowHeight;
        setIsVisible(() => isScrolled ? true : false);
    });

    useEffect(() => {
        window.addEventListener('scroll', handleOnScroll);
        return () => {
            window.removeEventListener('scroll', handleOnScroll);
        };
    }, [])
    
    if (!isVisible) return null;
    return (
        <button class="back-to-top" onClick={handleOnClick} >
            <ArrowButton/>
        </button>
    );
};

export default BackToTop;
