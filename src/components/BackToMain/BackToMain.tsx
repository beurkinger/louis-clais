import { h, FunctionComponent } from 'preact';
import IconArrowTop from '../IconArrowTop/IconArrowTop';
import style from './BackToMain.css';

const BackToMain: FunctionComponent = () => (
  <a className={style.backToMain} href="/">
    <IconArrowTop />
    <span>back</span>
  </a>
);

export default BackToMain;
