import { h, Component } from 'preact';
import config from '../../../../config';
import IconExtend from './IconExtend/IconExtend';
import './gallery.css';

interface Props {
    images: Array<{ path: string }>
}

interface State {
    currentImgIndex: number
}

class Gallery extends Component<Props, State> {
    state: State = { currentImgIndex: 0 };

    handleOnClick = () => {
        const { images } = this.props;
        const { currentImgIndex } = this.state;
        const newImgIndex = currentImgIndex + 1 < images.length
            ? currentImgIndex + 1
            : 0;
        this.setState({ currentImgIndex: newImgIndex });
    }

    render() {
        const { images } = this.props;
        const { currentImgIndex } = this.state;
        const currentImgPath = images[currentImgIndex]?.path ?? '';
        return (
            <div
                className="gallery"
                style={{ cursor: images.length > 1 ? 'pointer' : '' }}
            >   {images.length > 1 && (
                    <div className="gallery-multiple">
                        {images.map((image, i) => (
                            <img
                                className="gallery-multiple-img"
                                onClick={this.handleOnClick}
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
                    {images.length > 0 && (
                        <div className="gallery-counter">
                            {currentImgIndex + 1} / {images.length}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Gallery;
