import { h, FunctionComponent } from 'preact';

import { Download as DownloadType } from '../../types/types';
import config from '../../config';
import useJson from '../../hooks/useJSON';

import './Header.css';

const Header: FunctionComponent = () => {
  const downloads = useJson<{ entries: DownloadType[] }, DownloadType[]>(
    [],
    `${config.baseUrl}${config.path.getDownloads}`,
    (response) =>
      response?.entries.map((entry) => ({
        path: entry?.path ?? '',
        title: entry?.title ?? '',
      })) ?? []
  );

  const intro = useJson<{ intro: string }, string>(
    '',
    `${config.baseUrl}${config.path.getHeader}`,
    (response) => response?.intro ?? ''
  );

  return (
    <header className="header">
      <h2 className="header-title">Louis Clais</h2>
      <p className="header-presentation">
        {!intro.isLoading && !intro.isError && intro.payload}
        {!intro.isLoading && intro.isError && intro.error}
      </p>
      <div className="header-downloads">
        {!downloads.isLoading &&
          !downloads.isError &&
          downloads.payload.map((file) => (
            <a
              className="header-download-btn"
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
};

export default Header;
