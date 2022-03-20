import { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

import config from '../../config';
import IconExtend from '../IconExpend/IconExpend';

import style from './gallery.css';

interface Props {
  images: Array<{ path: string }>;
  noCounterOverflow: boolean;
}

interface State {
  currentImgIndex: number;
}

const Gallery: FunctionComponent<Props> = ({
  images,
  noCounterOverflow,
}: Props) => {
  const [currentImgIndex, setCurrentImgIndex] = useState<
    State['currentImgIndex']
  >(0);

  const handleOnClick = () => {
    if (images.length > 1) {
      const newImgIndex =
        currentImgIndex + 1 < images.length ? currentImgIndex + 1 : 0;
      setCurrentImgIndex(newImgIndex);
    }
  };

  const currentImgPath = images[currentImgIndex]?.path ?? '';
  return (
    <div
      className={`${style.gallery} ${images.length > 1 ? style.clickable : ''}`}
      onClick={handleOnClick}
    >
      {' '}
      {images.length > 1 && (
        <div className={style.galleryMultiple}>
          {images.map((image, i) =>
            i === currentImgIndex ? (
              <img
                className={style.galleryMultipleImg}
                key={image.path}
                src={`${config.baseUrl}${image.path}`}
              />
            ) : i - 1 === currentImgIndex ||
              (currentImgIndex === images.length - 1 && i === 0) ? (
              <img
                className={style.galleryMultipleImg}
                key={image.path}
                src={`${config.baseUrl}${image.path}`}
                style="display: none;"
              />
            ) : null
          )}
        </div>
      )}
      {images.length === 1 && (
        <img
          className={style.gallerySingleImg}
          src={`${config.baseUrl}${currentImgPath}`}
        />
      )}
      {images.length > 1 && (
        <div className={`${style.galleryNav} ${noCounterOverflow ? style.galleryNavNoOverflow : ''
          }`}>
          <a
            className={style.galleryExtend}
            href={`${config.baseUrl}${currentImgPath}`}
            target="_blank"
          >
            <IconExtend />
          </a>
          <div
            className={style.galleryCounter}
          >
            {currentImgIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
