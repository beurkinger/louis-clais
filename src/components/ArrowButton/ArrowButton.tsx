import { h, FunctionComponent } from 'preact';
import IconArrowTop from '../IconArrowTop/IconArrowTop';
import style from './ArrowButton.css';

const ArrowButton: FunctionComponent = () => (
  <div className={style.arrowButton}>
    <IconArrowTop />
  </div>
);

export default ArrowButton;
