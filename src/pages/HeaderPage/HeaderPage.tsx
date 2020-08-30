import { h, FunctionComponent } from 'preact';

import { Download as DownloadType } from '../../types/types';
import config from '../../config';
import useJson from '../../hooks/useJSON';

import Header from '../../components/Header/Header';

const HeaderPage: FunctionComponent = () => {
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
    `${config.baseUrl}${config.path.getIntro}`,
    (response) => response?.intro ?? ''
  );

  return <Header downloads={downloads} intro={intro} />;
};

export default HeaderPage;
