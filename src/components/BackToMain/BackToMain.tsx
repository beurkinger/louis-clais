import { h, FunctionComponent } from 'preact';
import ArrowButton from '../ArrowButton/ArrowButton';
import './BackToMain.css';

const BackToMain: FunctionComponent = () => (
  <a className="back-to-main" href="/">
    <ArrowButton />
  </a>
);

export default BackToMain;
