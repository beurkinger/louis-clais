import { h, FunctionComponent } from 'preact';

import Gallery from '../Gallery/Gallery';

import './Article.css';


interface Props {
    _id: string;
    body: string;
    details: string;
    gallery: Array<{ path: string }>;
    title: string;
}

const Article: FunctionComponent<Props> = ({ _id, body, details, gallery, title }: Props) => {
    const hotDetails = { __html: details.replace('\n', '<br/>')};
    const hotBody = { __html: body };
    return (
        <article class="article" >
            {gallery.length > 0 && <Gallery images={gallery} />}
                {(title || details || body) && (
                     <div class="article-content" >
                        {title && (
                            <h4 class="article-content-header">
                                <a href={`/post/${_id}`}>
                                    {title}
                                </a>
                            </h4>
                        )}
                        {details && (
                            <p class="article-content-details" dangerouslySetInnerHTML={hotDetails} />
                        )}
                        {body && (
                            <div class="article-content-body" dangerouslySetInnerHTML={hotBody} />
                        )}
                     </div>
                )}
        </article>
    );
}

export default Article;
