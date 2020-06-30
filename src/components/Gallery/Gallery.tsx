import { h, FunctionComponent } from 'preact';
import { useState }  from 'preact/hooks';
import config from '../../config';
import IconExtend from '../IconExtend/IconExtend';
import './gallery.css';

interface Props {
    images: Array<{ path: string }>
}

interface State {
    currentImgIndex: number
}

const Gallery: FunctionComponent<Props> = ({ images }: Props) => {
    const [currentImgIndex, setCurrentImgIndex] = useState<State['currentImgIndex']>(0);

    const handleOnClick = () => {
        const newImgIndex = currentImgIndex + 1 < images.length
            ? currentImgIndex + 1
            : 0;
        setCurrentImgIndex(newImgIndex);
    };

    const currentImgPath = images[currentImgIndex]?.path ?? '';
    return (
        <div
            className={`gallery ${images.length > 1 ? 'clickable' : '' }`}
        >   {images.length > 1 && (
                <div className="gallery-multiple">
                    {images.map((image, i) => (
                        <img
                            className="gallery-multiple-img"
                            onClick={handleOnClick}
                            src={`${config.baseUrl}${image.path}`}
                            style={{ display: i === currentImgIndex ? "block" : "none" }}
                        />
                    ))}
                </div>
            )}
            {images.length === 1 && (
                <img
                    className="gallery-single-img"
                    src={`${config.baseUrl}${currentImgPath}`}
                />
            )}
            <div className="gallery-icons">
                <a 
                    className="gallery-extend" 
                    href={`${config.baseUrl}${currentImgPath}`} 
                    target="_blank"
                >
                    <IconExtend/>
                </a>
                {images.length > 1 && (
                    <div className="gallery-counter">
                        {currentImgIndex + 1} / {images.length}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
