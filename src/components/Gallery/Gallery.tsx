import { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

import config from '../../config';

import IconExtend from '../IconExtend/IconExtend';

import style from './gallery.css';

interface Props {
  images: Array<{ path: string }>;
}

interface State {
  currentImgIndex: number;
}

const Gallery: FunctionComponent<Props> = ({ images }: Props) => {
  const [currentImgIndex, setCurrentImgIndex] = useState<
    State['currentImgIndex']
  >(0);

  const handleOnClick = () => {
    const newImgIndex =
      currentImgIndex + 1 < images.length ? currentImgIndex + 1 : 0;
    setCurrentImgIndex(newImgIndex);
  };

  const currentImgPath = images[currentImgIndex]?.path ?? '';
  return (
    <div
      className={`${style.gallery} ${images.length > 1 ? style.clickable : ''}`}
    >
      {' '}
      {images.length > 1 && (
        <div className={style.galleryMultiple}>
          {images.map((image, i) => (
            <img
              className={style.galleryMultipleImg}
              key={image.path}
              onClick={handleOnClick}
              src={`${config.baseUrl}${image.path}`}
              style={{ display: i === currentImgIndex ? 'block' : 'none' }}
            />
          ))}
        </div>
      )}
      {images.length === 1 && (
        <img
          className={style.gallerySingleImg}
          src={`${config.baseUrl}${currentImgPath}`}
        />
      )}
      <div className={style.galleryIcons}>
        <a
          className={style.galleryExtend}
          href={`${config.baseUrl}${currentImgPath}`}
          rel="noreferrer"
          target="_blank"
        >
          <IconExtend />
        </a>
        {images.length > 1 && (
          <div className={style.galleryCounter}>
            {currentImgIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
