import { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

import config from '../../config';

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
          {images.map((image, i) => (
            <img
              className={style.galleryMultipleImg}
              key={image.path}
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
