import { FunctionComponent } from 'preact';
import { useEffect } from 'preact/hooks';

import { debounceWithRequestAnimationFrame } from '../../utils/debounce';

interface Props {
  onScrollBottom: () => void;
  percentage?: number;
}

const DetectScrollBottom: FunctionComponent<Props> = ({
  onScrollBottom,
  percentage = 0.9,
}) => {
  const handleOnScroll = debounceWithRequestAnimationFrame(() => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    const scrollHeight =
      document.body.scrollHeight || document.documentElement.scrollHeight;
    const clientHeight =
      document.body.clientHeight || document.documentElement.clientHeight;

    if (scrollHeight * percentage - clientHeight - scrollTop <= 0) {
      onScrollBottom();
    }
  });

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll);
    return () => {
      window.removeEventListener('scroll', handleOnScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default DetectScrollBottom;
