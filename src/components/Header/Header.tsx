import { h, FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { Data, Download as DownloadType } from '../../types/types';
import config from '../../config';
import { loadJson } from '../../utils/jsonLoader';

import './Header.css';

interface State {
  downloads: Data<DownloadType[]>;
  intro: Data<string>;
}

const Header: FunctionComponent = () => {
  const [downloads, setDownloads] = useState<State['downloads']>({
    error: '',
    isError: false,
    isLoading: true,
    payload: [],
  });

  const [intro, setIntro] = useState<State['intro']>({
    error: '',
    isError: false,
    isLoading: true,
    payload: '',
  });

  useEffect(() => {
    loadJson<{ entries: DownloadType[] }>(
      `${config.baseUrl}${config.path.getDownloads}`
    )
      .then((response) => {
        const payload =
          response?.entries.map((entry) => ({
            path: entry?.path ?? '',
            title: entry?.title ?? '',
          })) ?? [];
        setDownloads((downloads) => ({
          ...downloads,
          isLoading: false,
          payload,
        }));
      })
      .catch((error: string) => {
        setDownloads((downloads) => ({
          ...downloads,
          isError: true,
          isLoading: false,
          error,
        }));
      });

    loadJson<{ intro: string }>(`${config.baseUrl}${config.path.getHeader}`)
      .then((response) => {
        const payload = response?.intro ?? '';
        setIntro((intro) => ({ ...intro, isLoading: false, payload }));
      })
      .catch((error: string) => {
        setIntro((intro) => ({
          ...intro,
          isError: true,
          isLoading: false,
          error,
        }));
      });
  }, []);

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
