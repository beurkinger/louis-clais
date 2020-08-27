import { h, FunctionComponent } from 'preact';
import ArrowButton from '../ArrowButton/ArrowButton';
import style from './BackToMain.css';

const BackToMain: FunctionComponent = () => (
  <a className={style.backToMain} href="/">
    <ArrowButton />
  </a>
);

export default BackToMain;
