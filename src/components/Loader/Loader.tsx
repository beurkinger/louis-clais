import { h, FunctionComponent } from 'preact';

import style from './Loader.css';

const Loader: FunctionComponent = () => (
  <div className={style.loaderWrapper}>Loading...</div>
);

export default Loader;
