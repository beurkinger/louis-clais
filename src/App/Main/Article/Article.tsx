import { h } from 'preact';
import Gallery from './Gallery/Gallery';
import './Article.css';


interface Props {
    body: string;
    gallery: Array<{ path: string }>;
    title: string;
}

const Article = (props: Props) => {
    const { body, gallery, title } = props;
    const hotStuff = { __html: body };
    return (
        <article class="article" >
            {/* <div className="article-separator" /> */}
            {gallery.length > 0 && <Gallery images={gallery} />}
            <div class="article-info" >
                <h4 class="article-info-header">
                    {title}
                </h4>
                <div class="article-info-body" dangerouslySetInnerHTML={hotStuff} />
            </div>
        </article>
    );
}

export default Article;
