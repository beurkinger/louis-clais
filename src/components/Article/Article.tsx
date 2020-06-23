import { h, FunctionComponent } from 'preact';
import { Link } from 'preact-router/match';
import Gallery from '../Gallery/Gallery';
import './Article.css';


interface Props {
    _id: string;
    body: string;
    gallery: Array<{ path: string }>;
    title: string;
}

const Article: FunctionComponent<Props> = ({ _id, body, gallery, title }: Props) => {
    const hotStuff = { __html: body };
    return (
        <article class="article" >
            {gallery.length > 0 && <Gallery images={gallery} />}
            <div class="article-content" >
                <h4 class="article-content-header">
                    <Link href={`/post/${_id}`}>
                        {title}
                    </Link>
                </h4>
                <div class="article-content-body" dangerouslySetInnerHTML={hotStuff} />
            </div>
        </article>
    );
}

export default Article;
