import { h, FunctionComponent } from 'preact';

import Gallery from '../Gallery/Gallery';

import style from './Article.css';

interface Props {
  _id: string;
  body: string;
  details: string;
  gallery: Array<{ path: string }>;
  title: string;
}

const Article: FunctionComponent<Props> = ({
  _id,
  body,
  details,
  gallery,
  title,
}: Props) => {
  const hotDetails = { __html: details.replace('\n', '<br/>') };
  const hotBody = { __html: body };
  return (
    <article className={style.article}>
      {gallery.length > 0 && <Gallery images={gallery} />}
      {(title || details || body) && (
        <div className={style.articleContent}>
          {title && (
            <h4 className={style.articleContentHeader}>
              <a href={`/post/${_id}`}>{title}</a>
            </h4>
          )}
          {details && (
            <p
              className={style.articleContentDetails}
              dangerouslySetInnerHTML={hotDetails}
            />
          )}
          {body && (
            <div
              className={style.articleContentBody}
              dangerouslySetInnerHTML={hotBody}
            />
          )}
        </div>
      )}
    </article>
  );
};

export default Article;
