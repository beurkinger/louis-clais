import { h, FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { debounceWithRequestAnimationFrame } from '../../utils/debounce';

import IconArrowTop from '../IconArrowTop/IconArrowTop';

import style from './BackToTop.css';

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
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    const isScrolled = scrollTop > windowHeight;
    setIsVisible(() => (isScrolled ? true : false));
  });

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll);
    return () => {
      window.removeEventListener('scroll', handleOnScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isVisible) return null;
  return (
    <button className={style.backToTop} onClick={handleOnClick}>
      <div className={style.arrowButton}>
        <IconArrowTop />
      </div>
    </button>
  );
};

export default BackToTop;
