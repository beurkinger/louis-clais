import { h, FunctionComponent } from 'preact';

import { Download as DownloadType, Data } from '../../types/types';
import config from '../../config';

import style from './Header.css';

interface Props {
  intro: Data<string>;
  downloads: Data<DownloadType[]>;
}

const Header: FunctionComponent<Props> = ({ intro, downloads }: Props) => (
  <header>
    <h2 className={style.headerTitle}>Louis Clais</h2>
    <p className={style.headerPresentation}>
      {!intro.isLoading && !intro.isError && intro.payload}
      {!intro.isLoading && intro.isError && intro.error}
    </p>
    <div>
      {!downloads.isLoading &&
        !downloads.isError &&
        downloads.payload.map((file) => (
          <a
            className={style.headerDownloadBtn}
            key={file.path + file.title}
            href={`${config.baseUrl}/${file.path}`}
            rel="noreferrer"
            target="_blank"
          >
            {file.title}
          </a>
        ))}
      {!downloads.isLoading && downloads.isError && downloads.error}
    </div>
  </header>
);

export default Header;
